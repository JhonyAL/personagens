// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Card } from './components/Card';

function App() {
  const [characters, setCharacters] = useState(null)


  useEffect(() => {

    fetch('http://localhost:3001')
      .then(response => response.json())
      .then(response => setCharacters(response))

  }, [])

  const cardActive = ({ target }) => {
    console.log(target)
    target.classList.add('card-active')
  }

  const cards = () => {
    return characters.map((value) => {
              return (
                  <div className="card" key={value.id} onClick={cardActive}>
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
    <div className='App'>

      <div className='bg-image'></div>

      <div className="container">
        <div className='content'>

          <div className='top'>
            <h1>South Park</h1>
            <h2>Personagens</h2>
          </div>
          
          <div className="cards">
            {  
              !characters ? "Sem personagens" : cards()
            }
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
