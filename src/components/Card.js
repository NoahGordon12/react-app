import React from "react"



// måsvingarna gör så den fattar att det är "props"
function Card({productName, price}) {
    return(

        // ändra css?
        <div className="box">
            <div> {productName} </div>
            <div> {price} </div>
        </div>
        
    )
}

export default Card