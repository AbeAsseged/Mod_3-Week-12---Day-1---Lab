const React = require("react")

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Vegetables Page</h1>

        <form action="/vegetables" method="POST">
          Name: <input type="text"  name="name" /> <br />
          Color: <input type="text" name="color" /> <br />
          Is Ready To Eat: <input type="checkbox" name="readyToEat" /> <br />
          Image URL: <input type="text" name="img" /> <br />
          <input type="submit" value="Create Vegetables" />
        </form>
        <nav>
           <a href="/vegetables">Back</a>
        </nav>
      </div>
    )
  }
}

module.exports = New