import React from "react";

const Product = ({img, title, description, precios}) => {

    return (
        <div>
            <img src={img} className="img-card"></img>
            <h2> {title}</h2> 
            <p>{description}</p>
            <p>$ {precios}</p>
        </div>

    )

}

export default Product