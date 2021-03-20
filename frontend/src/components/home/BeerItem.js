import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BeerItem = ({ beer }) => {
  console.log(beer)
  return (
    <Card>
      <Card.Img src={beer.image} />
      <Card.Body>
        <Card.Title>{beer.name}</Card.Title>
        <Card.Text>{beer.description}</Card.Text>
        <Link to={`/beers/${beer._id}`}>
          <Card.Link>Learn more</Card.Link>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default BeerItem
