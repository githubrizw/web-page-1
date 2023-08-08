import th from './image/th1.jpg'
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React from 'react'

const Container = () => {
  return (
    <div>
         <Row>
        <Col>
        <Card style={{ width: '18rem' }}className='card'>
      <Card.Img variant="top" src={th} />
      <Card.Body>
        <Card.Title>Html</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={th} />
      <Card.Body>
        <Card.Title>CSS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={th} />
      <Card.Body>
        <Card.Title>Javascript</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
        </Col>
      </Row>
      {/* <h1>this is con</h1> */}
    </div>
  )
}

export default Container;
