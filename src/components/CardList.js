import React from 'react';
import Card from "./Card";

const products = [
    {productName:"Nike Mercurial" , price:"1200:-"} ,
    {productName:"Adidas Copa Sense.2" , price:"1399:-"} ,
    {productName:"Puma Future 6.1" , price:"2499:-"}
]

function CardList() {
    return(
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            
            {products.map((product)=> { 
                return(
                    <Card productName={product.productName} price={product.price} />
            ) }       ) }

        </div>
    )
}

export default CardList
