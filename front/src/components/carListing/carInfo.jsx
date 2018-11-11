import React from 'react';
import './carListing.css';

const carInfo = () => {
    return (
        <div className="info">
            <h1 className="info__name">Audi A3</h1>
            <br/>
            <div className="row info__details">
                <div className="col-xl-6 text-muted">Kaina</div>
                <div className="col-xl-6">€ 49.99</div>
                <div className="col-xl-6 text-muted">Įvertinimas</div>
                <div className="col-xl-6">5</div>
                <div className="col-xl-6 text-muted">Vieta</div>
                <div className="col-xl-6">Vilnius</div>
                <div className="col-xl-12">
                <br/>
                <h3>Komentarai</h3>
                <div className="info__comments">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque
                    delectus et nihil repellat
                    voluptate? A ad adipisci debitis expedita fuga illo modi, odio omnis quis reiciendis similique sunt
                    velit?
                </div>
            </div>
            </div>
            <div>
                <button className="btn btn-primary">Rezervuoti</button>
            </div>
        </div>
    )
};

export default carInfo;