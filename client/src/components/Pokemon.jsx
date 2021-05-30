import React from 'react'

class Pokemon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }
  render() {
    return (
      <div>
        <h3>{this.props.individual.name}</h3>
        <span>{this.props.individual.type}</span>
        <img
          src={this.props.individual.img} />
      </div>
    )
  }
}

export default Pokemon

//name
//type
//img