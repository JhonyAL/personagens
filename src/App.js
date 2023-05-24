import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Card } from './components/Card';
import axios from 'axios';

const baseURL = "http://localhost:3001"

function App() {
  const [characters, setCharacters] = useState(null)


  useEffect(() => {
    axios.get(baseURL)
      .then((response) => setCharacters(response.data))
  }, [])

  console.log(characters)

  const cards = () => {
    characters.map((value) => {
      return (
        <div key={value.id}>
          <Card
            name = {value.name}
            image = {value.image}
            editorial = {value.editorial}
            creation_date = {value.creation_date}
            creator = {value.creator}
            description = {value.description}
          />
        </div>
        )
      }
    )
  }

  return (
    <div className="App">
      <div class="container">
        <h1>South Park</h1>
        <h2>Personagens</h2>
    

        <div class="cards">
          { 
            
          !characters ? "Sem personagens" : cards()
          }
        </div>
      </div>
    </div>
  );
}

export default App;
