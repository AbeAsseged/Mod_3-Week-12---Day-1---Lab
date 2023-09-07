const React = require("react")


class Index extends React.Component {
  render() {
    const { vegetables } = this.props
    return(
      <div>
        <h1> Vegetables Index Page! </h1>
        <nav>
          <a href="/vegetables/new">Create a New Vegetables</a>
        </nav>
        <ul>
          {
            vegetables.map((vegetables, i) => {
              return (
                <li key={i}>
                  The{' '}
                    <a href={`/vegetables/${i}`}>
                      {fruit.name}
                    </a>
                    {' '}
                    is {vegetables.color} <br></br>
                    {
                      vegetables.readyToEat ? 
                        `It is ready to eat`
                      : 
                        `It is not ready to eat`
                    }
                                      <br />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = Index