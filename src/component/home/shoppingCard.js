import React from "react";
import Dress from "../../img/Dress.webp";
import MenShirt from "../../img/menShirt.webp";
import MenTshirt from "../../img/menTshirt.webp";
import Suit from "../../img/Suit.webp";
import SuitCombo from "../../img/suitcombo.webp";
import Couple from "../../img/Couple.webp";
import { Link } from "react-router-dom";
const ShoppingCard = () => {
  return (
    <div className="shoppingCard">
      <div class="row row-cols-2 row-cols-md-3 g-4">
        <div class="col">
          <Link to="/Dress" className="link">

          <div class="card" className="cardsize">
            <img src={Dress} class="card-img-top" alt="Dresspic"  height={180}/>
            <div class="card-body">
              <h5 class="card-title">AASK </h5>
              <p>Ethnic party wear</p>
              <p>$560</p>
            </div>
          </div>
          </Link>
        </div>
        <div class="col">
        <Link to="/viewproduct" className="link">
          <div class="card"  className="cardsize">
            <img src={Suit} class="card-img-top" alt="Suit"height={180}/>
            <div class="card-body">
              <h5 class="card-title">VredeVogel</h5>
              <p>$899</p>
            </div>
          </div>
          </Link>
        </div>
        <div class="col">
        <Link to="/viewproduct" className="link">
          <div class="card"  className="cardsize">
            <img src={SuitCombo} class="card-img-top" alt="Suit" height={180} />
            <div class="card-body">
              <h5 class="card-title">Samah</h5>
              <p>$539</p>
            </div>
          </div>
          </Link>
        </div>
        <div class="col">
        <Link to="/viewproduct" className="link">
          <div class="card"  className="cardsize">
            <img src={MenShirt} class="card-img-top" alt="Menshirt" height={180} />
            <div class="card-body">
              <h5 class="card-title">FINIVO FASHION</h5>
              <p>$474</p>
            </div>
          </div>
          </Link>
        </div>
        <div class="col">
        <Link to="/viewproduct" className="link">
          <div class="card"  className="cardsize">
            <img src={MenTshirt} class="card-img-top" alt="MenTshirt"  height={180}/>
            <div class="card-body">
              <h5 class="card-title">FastColors</h5>
              <p>$249</p>
            </div>
          </div>
          </Link>
        </div>
        <div class="col">
        <Link to="/viewproduct" className="link">
          <div class="card"  className="cardsize">
            <img src={Couple} class="card-img-top" alt="Couple" height={180} />
            <div class="card-body">
              <h5 class="card-title">THE DRY STATE</h5>
              <p>$749</p>
            </div>
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
