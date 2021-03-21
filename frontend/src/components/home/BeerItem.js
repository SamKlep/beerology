import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BeerItem = ({ beer }) => {
  console.log(beer)
  return (
    <Card>
      <Link to={`/beers/${beer._id}`}>
        <Card.Img className='card-main' src={beer.image} />
      </Link>
      <Card.Body>
        <Card.Title>{beer.name}</Card.Title>
        <Card.Text>{beer.category}</Card.Text>
        <Link to={`/beers/${beer._id}`}>
          <Card.Link>Learn more</Card.Link>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default BeerItem
