import React from "react";
import Product from "./Product";
import "../Home/Slider.css";
import {useState} from 'react';
import Slider from "../Home/Slider";
export default function ListProduct(props) {
    var [page, setPage] = useState(1);
    var Element = [];
    if(!props.divPage) {
        for (let i = 0; i < props.count; i++) {
            Element.push(
            <Product key={i} name={props.name} setCart={props.setCart} index={i} />
            );
        }
    }
    else if(page === 1) {
        for (let i = 0; i < props.count/3; i++) {
            Element.push(
            <Product key={i} setCart={props.setCart} index={i} />
            );
        }
    }  else if(page === 2) {
        for (let i = 10; i < props.count/3*2; i++) {
            Element.push(
            <Product key={i}  setCart={props.setCart} index={i} />
            );
        }
    } else {
        for (let i = 20; i < props.count; i++) {
            Element.push(
            <Product key={i} setCart={props.setCart} index={i} />
            );
        }
    }
   

    function onClick_1 (){
        setPage(1);
        window.scrollTo({
            top: "600",
            behavior: "smooth"
        })
    }

    function onClick_2 (){
        setPage(2);
        window.scrollTo({
            top: "600",
            behavior: "smooth"
        })
    }
    function onClick_3 (){
        setPage(3);
        window.scrollTo({
            top: "600",
            behavior: "smooth"
        })
    }
    return (
        <>
        <div className="fluid-container">
            <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1"></div>
            <div className="col-xl-10 col-lg-10 col-md-10">
                <div className="row">{Element}</div>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1"></div>
            </div>
        </div>

        {!props.divPage ? " " :
        <nav aria-label="Page navigation example" style = {{margin: "20px 132px 10px 0"}}>
            <ul className="pagination d-flex justify-content-end mr-5">
            <li className={page == 1 ? "page-item active m-2" : "page-item m-2"} style={{width: "20"}} >
                <button className="page-link " onClick = {onClick_1}>
                1
                </button>
            </li>
            <li className={page == 2 ? "page-item active m-2" : "page-item m-2"} onClick = {onClick_2}>
                <button className="page-link ">
                    2
                </button>
            </li>
            <li className={page == 3 ? "page-item active m-2" : "page-item m-2"} onClick = {onClick_3}>
            <button className="page-link ">
                3
                </button>
            </li>
            </ul>
        </nav>
        }
        </>
    );
}

