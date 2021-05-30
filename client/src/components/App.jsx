import React from 'react';
import axios from 'axios';
import PokemonList from './PokemonList.jsx'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemon: [],
      page: 'all',
      selectedValue: "Sort by Type"
    }
    this.getPokemon = this.getPokemon.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.submitType = this.submitType.bind(this);
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    axios.get('/api/pokedex')
      .then((response) => {
        console.log(response.data)
        this.setState({ pokemon: response.data })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleChange(event) {
    this.setState({ selectedValue: event.target.value })
  }

  //show all button click - runs getPokemon

  //update type
  //option1 w/ submit button
  // submitType(){
  //   axios.get(){

  //   }

  // }

  //option2: if selectedValue is not equal to sort by Type
    // run the get request

  render() {
    return (
      <div>
        <h1>Fullstack Pokedex!</h1>
        <button>Show All</button>
        <form onSubmit={this.handleSubmit}>
          <select id="types" value={this.state.value} onChange={this.handleChange}>
            <option value="sort by type">Sort by Type</option>
            <option value="Grass">Grass</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Bug">Bug</option>
            <option value="Normal">Normal</option>
            <option value="Poison">Poison</option>
            <option value="Electric">Electric</option>
            <option value="Ground">Ground</option>
            <option value="Fighting">Fighting</option>
            <option value="Psychic">Psychic</option>
            <option value="Rock">Rock</option>
            <option value="Ghost">Ghost</option>
            <option value="Ice">Ice</option>
            <option value="Dragon">Dragon</option>
          </select>
          <input type='submit' value='submit'/>
        </form>
        <PokemonList pokemons={this.state.pokemon} />
      </div>
    )
  }
}

export default App;

// const App = () => (
//   <div>
//     <h1>Fullstack Pokedex!</h1>
//     <button>Show All</button>
//     <select id="types">
//       <option>Sort by Type</option>
//       <option>Grass</option>
//       <option>Fire</option>
//       <option>Water</option>
//     </select>
//     <div>
//       <h3>Bulbasaur</h3>
//       <img src="http://vignette4.wikia.nocookie.net/nintendo/images/4/43/Bulbasaur.png/revision/latest?cb=20141002083518&path-prefix=en" />
//     </div>
//     <div>
//       <h3>Ivysaur</h3>
//       <img src="http://vignette3.wikia.nocookie.net/nintendo/images/8/86/Ivysaur.png/revision/latest?cb=20141002083450&path-prefix=en" />
//     </div>
//     <div>
//       <h3>Venusaur</h3>
//       <img src="http://vignette2.wikia.nocookie.net/nintendo/images/b/be/Venusaur.png/revision/latest?cb=20141002083423&path-prefix=en" />
//     </div>
//   </div>
// )