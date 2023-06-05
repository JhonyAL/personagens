// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Card } from './components/Card';

function App() {
  const [characters, setCharacters] = useState(null)


  useEffect(() => {

    fetch('http://localhost:3001')
      .then(response => response.json())
      .then(response => setCharacters([response]))

  }, [])

  // console.log(characters)

  const cards = () => {
    return characters.map((value) => {
              return (
                  <div className="Card" key={value.id}>
                    {/* <h1>{value.name}</h1> */}
                    {console.log(value.name)}
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
    <div className="container">
      
        <h1>South Park</h1>
        <h2>Personagens</h2>
    

        <div className="cards">
          {  
            !characters ? "Sem personagens" : cards()
          }
        </div>
    </div>
  );
}

export default App;
