import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import CarriersLogos from "../../assets/data/carrierLogos.js";
import Insurance from "../../assets/images/other/insurance.png";
import "./style.css";

export default function Carriers() {
    return(
        <div className="carriers">
            <Header custClass="carrierHead" vidClass="hide" imgClass="headerImage" imgSrc={Insurance}>
                <h2>Insurance Carriers</h2>
            </Header>
            <Navbar />
            <div className="carriersContainer">
                {CarriersLogos.map(function(card) {
                    let csN = "tel:"+card.csN;
                    let billN = "tel:"+card.billN;
                    let claimsN = "tel:"+card.claimsN;
                    return(
                        <Card 
                        cardClass="carriersCard" 
                        src={ card.src } 
                        alt={ card.alt }
                        h2={ card.h2 }
                        >
                            <p>Customer Service:<br /><a href={csN}>{card.csN}</a></p>
                            <p>Billing:<br /><a href={billN}>{card.billN}</a></p>
                            <p>Claims:<br /><a href={claimsN} alt="Claims Number">{card.claimsN}</a></p>    
                        </Card>                        
                    )
                })}
            </div>
                
        </div>
    )
}