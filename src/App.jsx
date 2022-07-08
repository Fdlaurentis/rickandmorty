import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Resident from './componentes/Resident'

function App() {
  const [location, setLocation] = useState({})
  const [changeValue, setChangeValue] = useState("")
  const [load, setLoad] = useState(true)
  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res => setLocation(res.data))
      .finally(() => setLoad(false))
  }, [])

  const searchLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${changeValue}`)
      .then(res => setLocation(res.data))
  }

  return (
    <div className="App">
        <div className="banner">
          <div className="img"></div>
        </div>
      <div className="container">
        <div className="contSearch">
          <h1>Rick and Morty</h1>
          <div className="search">
            <input type="text" placeholder='Search location' value={changeValue} onChange={(e) => setChangeValue(e.target.value)} />
            <i className="fa-solid fa-magnifying-glass" onClick={searchLocation}></i>
          </div>
        </div>
        {load
          ? (
            <div>
              <div className="circle">
                <h2>Loading...</h2>
              </div>
            </div>
          ) : (
            <div className='info'>
              <h2>{location.name}</h2>
              <div className='infoLocation'>
                <h2>Type: {location.type}</h2>
                <h2>Dimension: {location.dimension}</h2>
                <h2>Residents: {location.residents.length}</h2>
              </div>
              <div className='resident'>
                {location.residents?.map(resident => (
                  <Resident
                    resident={resident}
                    key={resident}
                  />
                ))}
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App
