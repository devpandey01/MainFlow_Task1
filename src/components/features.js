import React from "react";

const Feature = () => {
    return(
        <div className="features">
            <h2>Our Features</h2>
            <div className="container">
            <div className="feature-item">
                <h3>On time Delivery</h3>
                <p>It allows you to sit back and relax at home without any worries</p>
            </div>
            <div className="feature-item">
                <h3>Free Delivery</h3>
                <p>Items delivered at your doorstep at no extra cost</p>
            </div>
            <div className="feature-item">
                <h3>Payment Methods</h3>
                <p>Multiple payment options for hazzle-free checkout</p>
            </div>
            <div className="feature-item">
                <h3>Top Service</h3>
                <p>We have one of the best Service all over Mumbai connecting places</p>
            </div>
            </div>
        </div>
    );
};

export default Feature;