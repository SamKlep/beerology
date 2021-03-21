import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card, ListGroup, Row, Container, Col, Button } from 'react-bootstrap'

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
    <>
      <Container>
        <Row>
          <Col>
            <Link to='/'>
              <Button>Go back</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className='mx-auto' style={{ width: '18rem' }}>
              <Card.Img variant='top' src={beer.image} />
              <Card.Body>
                <Card.Title>{beer.name}</Card.Title>
                <ListGroup variant='flush'>
                  <ListGroup.Item>{beer.brand}</ListGroup.Item>
                  <ListGroup.Item>{beer.category}</ListGroup.Item>
                  <ListGroup.Item>{beer.abv} %</ListGroup.Item>
                </ListGroup>
                <Card.Text>{beer.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BeerScreen
