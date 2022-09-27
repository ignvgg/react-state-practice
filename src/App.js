import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entities: [
        {
          name: 'The Dude',
          likes: ['wine', 'comfy clothes']
        }, {
          name: 'Homer',
          likes: ['donuts', 'beer']
        }, {
          name: 'Fry',
          likes: ['cyclops', 'dogs']
        }, {
          name: 'Nacho',
          likes: ['javascript', 'typescript']
        }
      ]
    };
    
    setTimeout(() => {
      const randEnt = Math.floor(
        Math.random() *
        this.state.entities.length
      );
      
      const hobbyIndex = Math.floor(
        Math.random() *
        this.state.entities[randEnt].length
      );
      
      const entities = this.state.entities.map((ent, i) => {
        if (i === randEnt) {
          const likes = [...ent.likes];
          likes.splice(hobbyIndex, 1);
          return {
            ...ent,
            likes
          };
        }
        
        return ent;
      });
      this.setState({entities});
    }, 3000);
  }
  
  render() {
    const entities = this.state.entities.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Likes: {instructor.likes.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {entities}
        </ul>
      </div>
    );
  }
}

export default App;