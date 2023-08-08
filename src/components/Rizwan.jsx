import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React from 'react'

const Rizwan = () => {
  return (
    <div>
      <Container fluid>
      {/* <h1>this is rizwan</h1> */}
      <Row>
        <Card className='text-center bg-secondary text-white my-5px py-4'>
      <Card.Body>
      <Row>
        <Col><p>Lorem ipsum dolor sit am adipisicing elit. Ad, dicta.</p></Col>
        <Col><div className="form-group mt-3">
              {/* <label>Email address</label> */}
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div></Col>
      </Row>
      </Card.Body>
         </Card>
      </Row>
      </Container>
    </div>
  )
}

export default Rizwan
