import React from 'react'
import { useStateValue } from "../components/store/StateProvider"


function Subtotal() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <h5>Total Cost</h5>
            
        </div>
    )
}

export default Subtotal
