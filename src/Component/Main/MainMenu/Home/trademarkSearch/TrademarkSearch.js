import React from 'react'
import "./TrademarkSearch.css";

import {useParams} from "react-router-dom";
import {useState} from 'react';
import {useEffect} from 'react';
import {COMMON_PROJECTS} from "../fakeData/COMMON-PROJECTS";
import {DOLCE_GABBANA} from "../fakeData/DOLCE-GABBANA";
import {NEW_BALANCE} from "../fakeData/NEW-BALANCE";
import {NIKE} from "../fakeData/NIKE";
import {THOM_BROWNE} from "../fakeData/THOM-BROWNE";
import {TOGA_PULLA} from "../fakeData/TOGA-PULLA";
import {VALENTINO} from "../fakeData/VALENTINO";
import ProductSearch from './ProductSearch';
import ProductSearchDetail from './ProductSearchDetail';
export default function TrademarkSearch() {
    useEffect(() => {
        window.scrollTo({
            top: "100",
            behavior: "smooth"
        })
    });
    var {id} = useParams();
    var [state, setState] = useState({star: 2, price: 0, color: "", sortType: 0, isActive: false, isChange: false});
    var {star, price, color, sortType, isActive, isChange} = state;
    var star1 = [];
		for (let i = 0; i < 5; i++) {
		star1.push(
			<img
			src={`${process.env.PUBLIC_URL}/image/star.png`}
			alt=""
			className="star"
			/>
		    );
        }
        var star2 = [];
		for (let i = 0; i < 5; i++) {

		
            if(i == 4) {
                star2.push(
                    <img
                    src={`${process.env.PUBLIC_URL}/image/star.png`}
                    alt=""
                    className="star"
                    style = {{opacity: "0.2"}}
                    /> 
                );
            }else {
                star2.push(
                    <img
                    src={`${process.env.PUBLIC_URL}/image/star.png`}
                    alt=""
                    className="star"
                    />
                    );
            }
        }
        var star3 = [];
		for (let i = 0; i < 5; i++) {
            if(i >= 3) {
                star3.push(
                    <img
                    src={`${process.env.PUBLIC_URL}/image/star.png`}
                    alt=""
                    className="star"
                    style = {{opacity: "0.2"}}
                    /> 
                );
            }else {
                star3.push(
                    <img
                    src={`${process.env.PUBLIC_URL}/image/star.png`}
                    alt=""
                    className="star"
                    />
                    );
            }
        }
        var ProductShoe = [COMMON_PROJECTS, DOLCE_GABBANA, NEW_BALANCE, NIKE, THOM_BROWNE, TOGA_PULLA, VALENTINO];
        var index;
        for(let i = 0; i < ProductShoe.length; i++) {
            let s = ProductShoe[i][0].trademark;
			s = s.split(" ");
            s = s.join("-");
            if(id === s) {
                index = i;
                break;
            }
        }
    var {star, price, color} = state;
    var Element = ProductShoe[index].map((product, index) => {
        // return <ProductSearch product = {product} index = {index}/> 
        let checkColor = product.color.indexOf(color);
        let checkColor1 = product.color.indexOf(color);
        if(price === 0 ||
            (price === 1 && product.price < 100) ||
            (price === 2 && (product.price >= 100 && product.price < 300)) ||
            (price === 3 && (product.price >= 300 && product.price < 600)) ||
            (price === 4 && (product.price >= 600 && product.price < 1000)) ||
            (price === 5 && product.price >= 1000)
            ) {
                if((star === 2 && product.star >= 2) ||
                    (star === 3 && product.star >=3) ||
                    (star === 4 && product.star >= 4) ||
                    (star === 5 && product.star >= 5) 
                ) {
                    if(checkColor >= 0 || checkColor1 >= 0
                    
                    
                    ) {
                        if(!isChange){
                            return <ProductSearch product = {product} index = {index}/> 
                        } else {
                            return <ProductSearchDetail product = {product} index = {index}/> 
                        }
                        
                    }
                    
                }
           
        } else if(!isChange) {
            return <ProductSearch product = {product} index = {-1}/>;  
        } else {
            return <ProductSearchDetail product = {product} index = {-1}/>;  
        }
       
    })
    if(sortType == 0) {
        Element.sort(function(a, b){
            return b.props.product.discout - a.props.product.discout;
        })
    }else if(sortType == 1) {
        Element.sort(function(a, b){
            return a.props.product.price - b.props.product.price;
        })
    } else {
        Element.sort(function(a, b){
            return b.props.product.price - a.props.product.price;
        })
    }
    

    var nameSort = state.sortType === 0 ? "Discout" : (state.sortType === 1 ? "Price: Low to High" : "Price: High to Low");
    console.log(state.sortType);
    //onclick for star
    function onClick_1() {
        if(state.star == 5) {
            setState({...state, star: 2}); 
        }
        else setState({...state, star: 5});
    }

    function onClick_2() {
        if(state.star == 4) {
            setState({...state, star: 2}); 
        }
        else setState({...state, star: 4});
    }

    function onClick_3() {
        if(state.star == 3) {
            setState({...state, star: 2}); 
        }
        else setState({...state, star: 3});
    }
    //onClick for set Color
    function onClick_Color1() {
        if(state.color === "Grey") {
            setState({...state, color: ""});
        }else setState({...state, color: "Grey"});
    }

    function onClick_Color2() {
        if(state.color === "White") {
            setState({...state, color: ""});
        }else setState({...state, color: "White"});
    }

    function onClick_Color3() {
        if(state.color === "Black") {
            setState({...state, color: ""});
        }else setState({...state, color: "Black"});
    }
    // onClick for set Price
    function onClick_Price1() {
        if(state.price === 1) {
            setState({...state, price: 0});
        } else setState({...state, price: 1});
    }

    function onClick_Price2() {
        if(state.price === 2) {
            setState({...state, price: 0});
        } else setState({...state, price: 2});
    }
    function onClick_Price3() {
        if(state.price === 3) {
            setState({...state, price: 0});
        } else setState({...state, price: 3});
    }
    function onClick_Price4() {
        if(state.price === 4) {
            setState({...state, price: 0});
        } else setState({...state, price: 4});
    }
    function onClick_Price5() {
        if(state.price === 5) {
            setState({...state, price: 0});
        } else setState({...state, price: 5});
    }

    // onClick drop
    function onClick_Drop() {
        setState({...state,isActive: !state.isActive});
    }

    function onClick_itemDrop0() {
        if(state.isActive) {
            setState({...state,isActive: !state.isActive, sortType: 0});
        }
    }

    function onClick_itemDrop1() {
        if(state.isActive) {
            setState({...state,isActive: !state.isActive, sortType: 1});
        }
    }

    function onClick_itemDrop2() {
        if(state.isActive) {
            setState({...state,isActive: !state.isActive, sortType: 2});
        }
        
    }

    // Change Form
    function onClick_changeForm1() {
        setState({...state, isChange: false});
    }

    function onClick_changeForm2() {
        setState({...state, isChange: true});
    }
    return (
        <div className = "fluid-container" style = {{marginTop: "70px"}}>
            <div className="row">
                <div className="col-xl-1 col-lg-1"></div>
                <div className="clo-xl-10 col-lg-10">
                    <div className="row">
                        <div className="col-xl-2 col-lg-2">
                            <div className="box-title ">
                                Shoes
                            </div>
                            <div className="box-filter ">
                                Filter by
                            </div>
                            <div className="small-title">Rate</div>
                            <div className={state.star === 5 ? "star-rate-active": "star-rate"} onClick = {onClick_1}>
                               {star1}
                               <div style={{cursor: "pointer",color: "#636363", marginLeft: "5px", fontSize: "17px"}}> & up</div>
                            </div>
                            <div className={state.star === 4 ? "star-rate-active": "star-rate"} onClick = {onClick_2}>
                               {star2}
                               <div style={{cursor: "pointer",color: "#636363", marginLeft: "5px", fontSize: "17px"}}> & up</div>
                            </div>
                            <div className={state.star === 3? "star-rate-active": "star-rate"} onClick = {onClick_3}>
                               {star3}
                               <div style={{cursor: "pointer",color: "#636363", marginLeft: "5px", fontSize: "17px"}}> & up</div>
                            </div>
                            <hr/>
                            <div className="small-title">Color</div>
                            <div className="item" onClick = {onClick_Color1}>
                                <div className="color" style= {{backgroundColor: "Grey"}}></div>
                                <div className = {state.color === "Grey" ? "color-active" : "color-item"}> Grey</div>
                            </div>
                            <div className="item" onClick = {onClick_Color2}>
                                <div className="color" style= {{backgroundColor: "white"}}></div>
                                <div className = {state.color === "White" ? "color-active" : "color-item"}> White</div>
                            </div>
                            <div className="item" onClick = {onClick_Color3}>
                                <div className="color"style= {{backgroundColor: "Black"}}></div>
                                <div className = {state.color === "Black" ? "color-active" : "color-item"}> Black</div>
                            </div>
                            <hr/>
                            <div className="small-title">Price</div>
                            <div className="checkbox-item item" onClick = {onClick_Price1}>
                                <img src={`${process.env.PUBLIC_URL}/image/${state.price === 1 ? "radio.png" : "radioNA.png"}`} alt=""/>
                                <span style = {{fontSize: "17px", marginLeft: "5px"}}>Under $100</span>
                            </div>
                            <div className="checkbox-item item" onClick = {onClick_Price2}>
                                <img src={`${process.env.PUBLIC_URL}/image/${state.price === 2 ? "radio.png" : "radioNA.png"}`} alt=""/>
                                <span style = {{fontSize: "17px", marginLeft: "5px"}}>100$ to 300$ </span>
                            </div>
                            <div className="checkbox-item item" onClick = {onClick_Price3}>
                                <img src={`${process.env.PUBLIC_URL}/image/${state.price === 3 ? "radio.png" : "radioNA.png"}`} alt=""/>
                                <span style = {{fontSize: "17px", marginLeft: "5px"}}>300$ to 600$</span>
                            </div>
                            <div className="checkbox-item item" onClick = {onClick_Price4}>
                                <img src={`${process.env.PUBLIC_URL}/image/${state.price === 4 ? "radio.png" : "radioNA.png"}`} alt=""/>
                                <span style = {{fontSize: "17px", marginLeft: "5px"}}>600$ to 1000$</span>
                            </div>
                            <div className="checkbox-item item" onClick = {onClick_Price5}>
                                <img src={`${process.env.PUBLIC_URL}/image/${state.price === 5 ? "radio.png" : "radioNA.png"}`} alt=""/>
                                <span style = {{fontSize: "17px", marginLeft: "5px"}}>Above 1000$</span>
                            </div>
                        </div>

                        <div className="col-xl-10 col-lg-10">
                            <h2 className="search-title">Search Result</h2>
                            <div className="sort">
                                <div className="number">6 products for search "{id}"</div>
                                <div className="sort-product">
                                    <h4>Sort by: </h4>
                                    <div className="drop-button" >
                                        <div className="current-type-sort" onClick = {onClick_Drop}>
                                            <p>{nameSort}</p>
                                            <img className = {state.isActive ? "tick-active tick" : "tick"} src="https://bshoes.herokuapp.com/static/media/dec.f7f3da49.svg" alt=""/>  
                                        </div>
                                        <div className={state.isActive ? "list-drop-item-active list-drop-item" : "list-drop-item"}>
                                            <div className={state.sortType === 1 ? "drop-item-active":"drop-item"} onClick = {onClick_itemDrop1}>Price: Low to High</div>
                                            <div className={state.sortType === 2 ? "drop-item-active":"drop-item"} onClick = {onClick_itemDrop2}>Price: High to Low</div>
                                            <div className={state.sortType === 0 ? "drop-item-active":"drop-item"} onClick = {onClick_itemDrop0}>Discout</div>
                                        </div>
                                       
                                    </div>
                                    <div className="title-type">
                                        <img className = {!isChange? "active-type": "non-active"} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACZSURBVHgB7djLCcQwDEVRaUghU4rdyUxlSSkqJZ04MWSbD0GBR7hn443A3JWxvNbaLFFr7R8R09FMKeXn7qMl+thLEKKGEDWEqCFEDSFqCFFDiBpC1BCiZuh/bMsVV2YeuBcAgNu8L5Qt17rDjvloYL3z2w9LNGRvxbcXezoZK2zjdxCihhA1hKghRA0haghRQ4gaQtQQomYByh8d98kWJtcAAAAASUVORK5CYII=" onClick = {onClick_changeForm1}/>
                                        <img className =  {isChange? "active-type": "non-active"} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAzCAYAAADLqmunAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADUSURBVHgB7drBDcIwDIVhB3WAjlA2aTZiA2ATRskIbEBHyAbBPSBVtFJ9qZQ6/3dBiuzDu5mnhhhjkR2llJjU8m0cxyGE8JET0RzPizSGwN4R2DsCe9dc4G4+Kgxz7423bNytySQAAAA4SNBu6mGYe2mlNS0fdK/Xn5ucS+q0iLvvTenNnGR9h/aW3ZpoDv4eukdg7wjsXZOdVjLM5a1H425NJgEAAMBB5k5r2Bv677N+LLuVyYEP05wjsHcE9o7A3jVZ4l0Nc6sSb76+9Piw7NYkfwFAb0umepCzOAAAAABJRU5ErkJggg==" onClick = {onClick_changeForm2}/>

                                    </div>
                                </div>
                            </div>

                            <hr/>
                            
                            <div className="row">
                                {Element}
                              
                                
                                
                            </div>


                        </div>
                    </div>
                </div>
                <div className="col-xl-1 col-lg-1"></div>
            </div>
        </div>
    )
}
