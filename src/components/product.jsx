import React from 'react'
import {Button, Card} from 'react-bootstrap';

export default function product({image, title, text}) {

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image}/>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
  {text}
      </Card.Text>
      <Button variant="primary">Buy</Button>
    </Card.Body>
  </Card>
  )
}
