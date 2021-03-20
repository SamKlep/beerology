import BeerItem from './BeerItem'

const BeersGrid = ({ beers, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className='cards'>
      {beers.beers.map((beer, _id) => (
        <BeerItem key={_id} beer={beer} />
      ))}
    </section>
  )
}

export default BeersGrid
