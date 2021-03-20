import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BeerScreen = ({ match }) => {
  const [beer, setBeer] = useState({})

  useEffect(() => {
    const fetchBeer = async () => {
      const { data } = await axios.get(`/api/beers/${match.params.id}`)

      console.log(data)
      setBeer(data)
    }
    fetchBeer()
    // eslint-disable-next-line
  }, [match])

  return (
    <div>
      <Link to='/'>
        <Button>Go back</Button>
      </Link>
      <>
        <Image variant='top' src={beer.image} />
        <div className=''>
          <h1>{beer.name}</h1>
          <p>{beer.description}</p>
        </div>
      </>
    </div>
  )
}

export default BeerScreen
