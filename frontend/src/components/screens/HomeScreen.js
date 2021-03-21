import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BeersGrid from '../home/BeersGrid'
import Main from '../home/Main'

const HomeScreen = () => {
  const [beers, setBeers] = useState([])
  const [isLoading, setIsLoading] = useState([true])

  useEffect(() => {
    const fetchBeers = async () => {
      const result = await axios.get(`/api/beers`)

      console.log(result.data)
      setBeers(result.data)
      setIsLoading(false)
    }

    fetchBeers()
  }, [])
  return (
    <div>
      <Main />
      <BeersGrid isLoading={isLoading} beers={beers} />
    </div>
  )
}

export default HomeScreen
