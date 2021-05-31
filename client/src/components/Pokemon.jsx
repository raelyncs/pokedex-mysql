import React from 'react'
import axios from 'axios'

class Pokemon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
      newName: "",
    }
    this.nameClick = this.nameClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  nameClick() {
    this.setState({clicked: !this.state.clicked})
  }

  submitName(){
    console.log(this.state.newName)
    axios.put(`/api/pokedex/${this.props.individual.id}`, {name: this.state.newName})
      .then((response) => {
        this.setState({clicked: !this.setState,
        newName: ""})
        // if this.props.currentRender = "Sort by Type", else submitType
        if (this.props.currentRender === "Sort by Type"){
          this.props.getPokemon()
        } else {
          this.props.submitType()
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleChange(event){
    this.setState({newName: event.target.value})
  }

  onDelete(){
    axios.delete(`/api/pokedex/${this.props.individual.id}`)
      .then((response) => {
        //re-render page
        if (this.props.currentRender === "Sort by Type"){
          this.props.getPokemon()
        } else {
          this.props.submitType()
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    var input;
    if (this.state.clicked) {
      input = (
        <span>
          <input name="newName" value={this.state.newName} onChange={this.handleChange}></input>
          <button onClick={this.submitName}>Submit</button>
        </span>
      )
    }
    return (
      <div>
        <h3 onClick={this.nameClick}>{this.props.individual.name}</h3>
        {input}
        <span>{this.props.individual.type}</span>
        <br></br>
        <img
          src={this.props.individual.img} />
        <br></br>
        <button onClick={this.onDelete}>Delete</button>
      </div>
    )
  }
}

export default Pokemon

//name
//type
//img