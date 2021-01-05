import React, { Component } from "react";
import "./ProductDetail.css";
import {useEffect, useState} from 'react';
import { ProductShoe } from "./DataProduct";
import { useParams } from "react-router-dom";
export default function ProductDetail(props) {
    useEffect(() => {
        console.log("s");
        window.scrollTo({
            top: "0",
            behavior: "smooth"
        })
    });

    const [size, setSize] = useState("L");
    const [alert, setAlert] = useState(false);
    let { id } = useParams();
    var productDetail ;
    console.log(id);
    for (let i = 0; i < ProductShoe.length; i++) {
        let s = ProductShoe[i].name;
        s = s.toLowerCase();
        s = s.split(" ");
        s = s.join("-")
       
        if (id === s) {
            productDetail = ProductShoe[i];
        }
    }
    var star = [];
    for (let i = 0; i < 5; i++) {
        star.push(
        <img
            src={`${process.env.PUBLIC_URL}/image/star.png`}
            alt=""
            className="star"
            style={{ width: "20px", height: "20px" }}
        />
        );
    }

    function onSizeL() {
        setSize("L");
        productDetail.size = "L";
    }

    function onSizeX() {
        productDetail.size = "X";
        setSize("X");
       
    }

    function onSizeXL() {
        setSize("XL");
        productDetail.size = "XL";
    }

    function onSizeXXL() {
        setSize("XXL");
        productDetail.size = "XXL";
    }

    function onChange(e) {
        productDetail.count = e.target.value;
    } 
    
    function onClick() {
        setAlert(true);
        props.setMyCart(productDetail);
        setTimeout(() => {
            onClose();
        }, 1000)
    }

    function onClose() {
        setAlert(false); 
    }
    return (
        <div className="fluid-container mt-5">
            <div className={alert ?"alert alert-success alert-cart-active alert-cart":  "alert alert-success alert-cart"}>
                <i className="far fa-check-circle" style = {{marginRight: "5px"}}></i>
                Thành công
                <i class="fas fa-times close" onClick = {onClose}></i>
            </div>
            <div className="row">
                <div className="col-xl-1 col-lg-1 col-md-1"></div>
                <div className="col-xl-4 col-lg-4 col-md-4 img-shoe">
                <img
                    src={`${process.env.PUBLIC_URL}/image/${productDetail.img}`}
                    alt=""
                    style={{ height: "160px" }}
                />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                <h2 className="name">{productDetail.name}</h2>
                <div className="star d-flex mb-4">{star}</div>
                <h3 className="item">
                    <strong>Trademark:</strong>{productDetail.trademark}
                </h3>
                <h3 className="item">
                    <strong>Condition:</strong>NEW PRODUCT
                </h3>
                <h5>
                    {productDetail.description}
                </h5>
                <hr />
                <div className="size">
                    <h3 className="item">
                    <strong>Size:</strong>
                    </h3>
                    <div className="list-size">
                    <div className={size === "L" ? "size-select active" : "size-select" } onClick = {onSizeL}>L</div>
                    <div className={size === "X" ? "size-select active" : "size-select" } onClick = {onSizeX}>X</div>
                    <div className={size === "XL" ? "size-select active" : "size-select" } onClick = {onSizeXL}>XL</div>
                    <div className={size === "XXL" ? "size-select active" : "size-select" } onClick = {onSizeXXL}>XXL</div>
                    </div>
                </div>
                <h3 className="item">
                    <strong>Color:</strong> {productDetail.color}
                </h3>
                <div className="cost">
                    <img
                    src="https://bshoes.herokuapp.com/static/media/price-tag.10bac61c.svg"
                    alt=""
                    />
                    <p className="current-cost">${productDetail.price}</p>
                </div>
                <div className="discout">Save {productDetail.discout}%</div>
                <div
                    className="buttons-container mt-4"
                    style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
                >
                    <input
                    type="number"
                    className="form-control"
                    name
                    id
                    min={1}
                    defaultValue = {1}
                    aria-describedby="helpId"
                    placeholder
                    style={{ width: "13%", 
                    margin: "0" }}
                    onChange = {onChange}
                    />
                    <div className="add-cart-btn" onClick = {onClick}>
                    <svg
                        style={{ fill: "#fff", width: "18px", height: "auto" }}
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        className="icon"
                    >
                        <g>
                        <g>
                            <path d="M507.519,116.384C503.721,111.712,498.021,109,492,109H129.736l-1.484-13.632l-0.053-0.438C121.099,40.812,74.583,0,20,0 C8.954,0,0,8.954,0,20s8.954,20,20,20c34.506,0,63.923,25.749,68.512,59.928l23.773,218.401C91.495,327.765,77,348.722,77,373 c0,0.167,0.002,0.334,0.006,0.5C77.002,373.666,77,373.833,77,374c0,33.084,26.916,60,60,60h8.138 c-2.034,5.964-3.138,12.355-3.138,19c0,32.532,26.467,59,59,59s59-26.468,59-59c0-6.645-1.104-13.036-3.138-19h86.277 c-2.034,5.964-3.138,12.355-3.138,19c0,32.532,26.467,59,59,59c32.533,0,59-26.468,59-59c0-32.532-26.467-59-59-59H137 c-11.028,0-20-8.972-20-20c0-0.167-0.002-0.334-0.006-0.5c0.004-0.166,0.006-0.333,0.006-0.5c0-11.028,8.972-20,20-20h255.331 c35.503,0,68.084-21.966,83.006-55.962c4.439-10.114-0.161-21.912-10.275-26.352c-10.114-4.439-21.912,0.161-26.352,10.275 C430.299,300.125,411.661,313,392.331,313h-240.39L134.09,149h333.308l-9.786,46.916c-2.255,10.813,4.682,21.407,15.495,23.662 c1.377,0.288,2.75,0.426,4.104,0.426c9.272,0,17.59-6.484,19.558-15.92l14.809-71C512.808,127.19,511.317,121.056,507.519,116.384 z M399,434c10.477,0,19,8.523,19,19s-8.523,19-19,19s-19-8.523-19-19S388.523,434,399,434z M201,434c10.477,0,19,8.524,19,19 c0,10.477-8.523,19-19,19s-19-8.523-19-19S190.523,434,201,434z"></path>
                        </g>
                        </g>
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                    </svg>
                    <h3 className="add">Add to cart</h3>
                    </div>
                </div>

                <div className="commitments">
                    <div className="item">
                    <img
                        src="https://bshoes.herokuapp.com/static/media/secure.19328210.svg"
                        alt=""
                    />
                    <h6>Security policy (edit with Customer reassurance module)</h6>
                    </div>
                    <div className="item">
                    <img
                        src="https://bshoes.herokuapp.com/static/media/delivery-truck.228dd431.svg"
                        alt=""
                    />
                    <h6>Delivery policy (edit with Customer reassurance module)</h6>
                    </div>
                    <div className="item">
                    <img
                        src="https://bshoes.herokuapp.com/static/media/returning.25b161d2.svg"
                        alt=""
                    />
                    <h6>Return policy (edit with Customer reassurance module)</h6>
                    </div>
                </div>
                </div>
                <div className="col-xl-1 col-lg-1"></div>
            </div>
        </div>
    );
}
