//Part 2
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Fruit = require('./models/fruit');
const Vegetable = require('./models/vegetable');
const mongoose = require('mongoose');


//// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});
//////////////////////////

const jsxViewEngine = require('jsx-view-engine');
const Vegetable = require('./models/vegetable');

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

// Middleware;
app.use((req, res, next) => {
  console.log('Middleware: I run for all routes, 1');
  next();
});
// By implementing the line below, we now have access to the req.body. Which is the parsed formData from the form request.
app.use(express.urlencoded({ extended: false }));

// Index Route
app.get('/fruits', async (req, res) => {
  try {
    const foundFruits = await Fruit.find({});
    console.log(foundFruits);
    res.status(200).render('fruits/Index', {
      fruits: foundFruits,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get('/vegetables', async (req, res) => {
  try {
    const foundVegetables = await Vegetable.find({});
    console.log(foundVegetables);
    res.status(200).render('vegetables/Index', {
      vegetables: foundVegetables,
    });
  } catch (err) {
    res.status(400).send(err);
  }
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
app.post('/fruits', async (req, res) => {
  try {
    // if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
    //   req.body.readyToEat = true; //do some data correction
    // } else { //if not checked, req.body.readyToEat is undefined
    //   req.body.readyToEat = false; //do some data correction
    // }
    req.body.readyToEat = req.body.readyToEat === 'on';

    const createdFruit = await Fruit.create(req.body);
    res.status(201).redirect('/fruits');
    // res.status(201).send(createdFruit); used it to check
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post('/vegetables', async (req, res) => {
  try {
    // if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
    //   req.body.readyToEat = true; //do some data correction
    // } else { //if not checked, req.body.readyToEat is undefined
    //   req.body.readyToEat = false; //do some data correction
    // }
    req.body.readyToEat = req.body.readyToEat === 'on';

    const createdVegetable = await Vegetable.create(req.body);
    res.status(201).redirect('/vegetables');
    // res.status(201).send(createdFruit); used it to check
  } catch (err) {
    res.status(400).send(err);
  }
});




//Show Route
app.get('/fruits/:id', async (req, res) => {
  try {
    const foundFruit = await Fruit.findById(req.params.id)
//second param of the render method must be an object
res.render('fruits/Show', {
  //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  fruit: foundFruit,
  fruit: fruits[req.params.id],
});

  } catch (err) {
    res.status(400).send(err);
  }});
  




  app.get('/vegetables/:id', async (req, res) => {
    try {
      const foundVegetable = await Vegetable.findById(req.params.id)
  //second param of the render method must be an object
  res.render('vegetables/Show', {
    //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    vegetable: foundVegetable,
    vegetable: vegetables[req.params.id],
  });
  
    } catch (err) {
      res.status(400).send(err);
    }});
    



app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});


























//Part 1
// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;
// const fruits = require('./models/fruits');
// const vegetables = require('./models/vegetables');

// const jsxViewEngine = require('jsx-view-engine');

// app.set('view engine', 'jsx');

// app.engine('jsx', jsxViewEngine());

// // Index Route
// app.get('/fruits', (req, res) => {
//   res.render("fruits/Index", { fruits });
// });

// app.get('/vegetables', (req, res) => {
//   res.render("vegetables/Index", { vegetables });
// });


// // New
// app.get('/fruits/new', (req, res) => {
//   console.log('New controller');
//   res.render('fruits/New');
// });
  
// app.get('/vegetables/new', (req, res) => {
//   console.log('New controller2');
//   res.render('vegetables/New');
// });



// // Create
// app.post('/fruits', (req, res) => {
// req.body.readyToEat = req.body.readyToEat === "on";  

// fruits.push(req.body);
// console.log(fruits);
//   // res.send('data received');
//   res.redirect('/fruits') // send the user back to /fruits
// });

// app.post('/vegetables', (req, res) => {
//   req.body.readyToEat = req.body.readyToEat === "on";  
  
//   vegetables.push(req.body);
//   console.log(vegetables);
//     // res.send('data received');
//     res.redirect('/vegetables') // send the user back to /vegetables
//   });




// //Show Route
// app.get('/fruits/:id', (req, res) => {
//   //second param of the render method must be an object
//   res.render('Show', {
//     //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
//     fruit: fruits[req.params.id],
//   });
// });

// app.get('/vegetables/:id', (req, res) => {
//   res.render('Show', {
//     vegetables: vegetables[req.params.id],
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Listening on port: ${PORT}`);
// });
