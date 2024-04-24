import React from "react"


import { BsCart3 } from "react-icons/bs";;

const CartWidget = () => {
    return (
        
            <button className = "me-auto">
                <BsCart3 /><strong>0</strong>
                
            </button>
        
    )
}

export default CartWidget