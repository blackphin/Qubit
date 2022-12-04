import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardComp=({coin})=> {
  return (
    <div className='col-3 p-2'>
        <Card  style={{ height:"50px", width:"100%", padding:"10px"}} >
      <Card.Body>
        <Card.Title>{coin.value}</Card.Title>
        <Card.Text>
          {coin.address}
        </Card.Text>
        <Card.Text>
          {coin.type}
          {coin.status}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};

export default CardComp;