import React from 'react';
import { Card } from 'react-bootstrap';
import data from './cradData.js';
const Cards = () => {
  return (
    <>
      {data.map((card) => (
        <Card className="card" key={[card.Title]}>
          <Card.Body>
            <Card.Img variant="top" src={card.Image} />
            <Card.Subtitle className="mb-2 text-muted">
              {card.Title}
            </Card.Subtitle>
            <Card.Text>{card.Data}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Cards;
