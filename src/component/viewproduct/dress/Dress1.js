import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dress from "../../../img/Dress1.webp";
import Bottommenu2 from "../../home/bottommenu2";
import "../../viewproduct/viewproduct.scss";
import Dressswiper from "./dressswiper";


const Dresses1 = () => {
  return (
    <div className="dresses">
      <Card>
        <Card.Img variant="top" src={Dress} height="500px" width="200px" />
        <Card.Body>
          <Card.Title>AASK</Card.Title>
          <Card.Text>Ethnic party wear</Card.Text>
          <div className="price">
            <h5>Price</h5>
            <h3>$560</h3>
          </div>
          <Dressswiper/>
          <Card.Text>
            <h2>Information</h2>
          </Card.Text>
          <p>
            Double your fashion flair as you wear this Beautiful Kurti From
            Madhuram Textiles. Look classy and stylish in this piece and revel
            in the comfort of its 100% Cotton fabric. This Kurti <Link to="/" className="link">Read More</Link>
          </p>
        </Card.Body>
        <Bottommenu2 className="bottommenu2"/>  
      </Card>
    </div>
  );
};

export default Dresses1;
