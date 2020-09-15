import React from 'react'
import backimage from '../boutsyBack.jpg'
import "../Home.css"
import uuid from 'uuid'
//import LavOil from './products/images/Lavender.jpg'
import Product from './Products'

function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src={backimage} alt="Boutsy-back" />

            {/* Product, id, title, price, rating, image*/ }
            <div className="home__row"> 
            <Product id="SKU:12512" 
                title="Cornmint"
                price={12.00}
                rating={5}
                image="https://boutsy.com/var/images/product/262.280/uc_7_2.jpeg"
                />
                <Product id="SKU:12512" 
                title="Cornmint"
                price={12.00}
                rating={5}
                image="https://boutsy.com/var/images/product/262.280/uc_7_2.jpeg"
                />
                
                <Product id="SKU:12154" 
                title="Clove Bud"
                price={9.00}
                rating={4}
                image='https://boutsy.com/var/images/product/262.280/Organic_Clove_Bud_Essential_Oil_-_Main_Image__52548.1569346821.jpg' />
                <Product id="SKU:12154" 
                title="Clove Bud"
                price={9.00}
                rating={4}
                image='https://boutsy.com/var/images/product/262.280/Organic_Clove_Bud_Essential_Oil_-_Main_Image__52548.1569346821.jpg'
                />
            </div>
            <div className="home__row"> 
                <Product id="SKU:23565" 
                    title="Cypress"
                    price={10.00}
                    rating={3}
                    image="https://boutsy.com/var/images/product/262.280/Organic_Cypress_Essential_Oil_-_Main_Image__39968.1569348293.jpg" 
                    />
                <Product id="SKU:32515" 
                    title="Eucalyptus Globulus"
                    price={7.00}
                    rating={3}
                    image="https://boutsy.com/var/images/product/262.280/Organic_Eucalyptus_Globulus_Essential_Oil_-_Main_Image__22411.1569325888.jpg"
                    />
                <Product id={uuid} 
                    title="Eucalyptus Lemon"
                    price={8.00}
                    rating={4}
                    image="https://boutsy.com/var/images/product/262.280/uc_7_3.jpeg" 
                />    
            </div>
                {/* Product */}
            </div>
    )
}

export default Home
