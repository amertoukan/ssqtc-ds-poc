import React from 'react'
import Navbar from '../components/navbar';
import Product from '../components/product'
export default function Store() {
  return (
    <div>
        <Navbar signedIn={false}/>
        <Product 
        image = {"test1"}
        title = {"Shoes"}
        text = {"$40 CAD"}
        />
        <Product 
        image = {"test2"}
        title = {"Shirt"}
        text = {"$35 CAD"}
        />
        <Product 
        image = {"test3"}
        title = {"Pants"}
        text ={"$10 CAD"}
        /></div>
  )
}
