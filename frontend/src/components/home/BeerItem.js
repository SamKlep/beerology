import { Card, Button } from 'react-bootstrap'

const BeerItem = ({ beer }) => {
  console.log(beer)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={beer.image} />
      <Card.Body>
        <Card.Title>{beer.name}</Card.Title>
        <Card.Text>{beer.description}</Card.Text>
        <Button variant='primary'>See more</Button>
      </Card.Body>
    </Card>
  )
}

export default BeerItem
