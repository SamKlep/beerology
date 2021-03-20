import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'

async function loginUser(credentials) {
  return fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json())
}

const LoginScreen = ({ setToken }) => {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = await loginUser({
      username,
      password,
    })
    setToken(token)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter username'
            onChange={(e) => setUserName(e.target.value)}
          />
          <Form.Text className='text-muted'>
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

LoginScreen.propTypes = {
  setToken: PropTypes.func.isRequired,
}

export default LoginScreen
