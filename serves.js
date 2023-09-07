const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fruits = require('./models/fruits');
const vegetables = require('./models/vegetables');

const jsxViewEngine = require('jsx-view-engine');

app.set('view engine', 'jsx');

app.engine('jsx', jsxViewEngine());

// Index Route
app.get('/fruits', (req, res) => {
  res.render("fruits/Index", { fruits });
});

app.get('/vegetables', (req, res) => {
  res.render("vegetables/Index", { vegetables });
});


// New
app.get('/fruits/new', (req, res) => {
  console.log('New controller');
  res.render('fruits/New');
});
  
app.get('/vegetables/new', (req, res) => {
  console.log('New controller2');
  res.render('vegetables/New');
});



// Create
app.post('/fruits', (req, res) => {
req.body.readyToEat = req.body.readyToEat === "on";  

fruits.push(req.body);
console.log(fruits);
  // res.send('data received');
  res.redirect('/fruits') // send the user back to /fruits
});

app.post('/vegetables', (req, res) => {
  req.body.readyToEat = req.body.readyToEat === "on";  
  
  vegetables.push(req.body);
  console.log(vegetables);
    // res.send('data received');
    res.redirect('/vegetables') // send the user back to /vegetables
  });




//Show Route
app.get('/fruits/:id', (req, res) => {
  //second param of the render method must be an object
  res.render('Show', {
    //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    fruit: fruits[req.params.id],
  });
});

app.get('/vegetables/:id', (req, res) => {
  res.render('Show', {
    vegetables: vegetables[req.params.id],
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
