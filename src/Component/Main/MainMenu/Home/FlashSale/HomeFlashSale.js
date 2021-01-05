import React from 'react'
import ListProduct from '../../Product/ListProduct';
import {useEffect} from 'react';
import "./FS.css";
export default function HomeFlashSale(props) {
    useEffect(() => {
        window.scrollTo({
            top: "100",
            behavior: "smooth"
        })
    });
    return (
        <div className="product-flash-sale">
            <div className="main-title">
                <img src={`${process.env.PUBLIC_URL}/image/flash-sale.png`} alt=""/>
                <h3 style={{fontWeight: "bold"}}>Flash sale</h3>
            </div>
            <div className="line"></div>
            <ListProduct count = {30} 
                setCart = {props.setCart} 
                divPage = {false}/>
        </div>
    )
}
