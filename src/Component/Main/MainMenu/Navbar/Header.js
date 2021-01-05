import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductShoe} from "../Product/DataProduct";
import './Navbar.css';

import MyCart from './MyCart';
import Nav from './Nav';
import Product from '../Product/Product';
var Element = [];
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: false,
            value: ""
        }
    }

    onMove = () => {
        this.setState({isActive: false});
    }

    onChange = (e) => {
        var count = 0;
        Element = [];
        var {value} = e.target;
        for(let i = 0; i < ProductShoe.length; i ++) {
            if(ProductShoe[i].name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                let s = ProductShoe[i].name;
                s = s.toLowerCase();
                s = s.split(" ");
                s = s.join('-');
                Element.push(
                    <Link to = {`/product/product-detail/${s}`} onClick = {this.onMove}>
                        <div className="suggest-item">
                            <p className = "name-search">{ProductShoe[i].name}</p>
                            <p className="trademark-search"  >{ProductShoe[i].trademark}</p>
                        </div>
                    </Link>
                )
                count++; 
            }
            if(count >= 6) break;
        }
        if(value === "") Element = [];
        this.setState({isActive:true, value: e.target.value}); 
    }
    render() {
        var {isActive} = this.state;
        return (
            <>
                <div className="white-navbar-container " onDoubleClick = {this.onMove}>
                    <Link to="/" className="tohome">
                        <div className="logo-container">
                            <img src={`${process.env.PUBLIC_URL}/image/Logo.jpg`} style={{ width: '50px', height: 'auto' }} alt="" />
                            <h2>BShoe</h2>
                        </div>
                    </Link>
                    <div className="search-container">
                        <img src="https://assets.stickpng.com/thumbs/585e4ad1cb11b227491c3391.png" alt="" style={{ width: '20px', height: 'auto' }} />
                        <input type="text" placeholder="Search product" onChange = {this.onChange} onClick = {this.onChange} value = {this.state.value}/>
                        <div className={isActive ? "search-item-active search-item" :"search-item"} style = {Element === [] ? {border: "none"} : {}}>
                        {Element}
                        </div>
                    </div>
                    <MyCart data = {this.props.data}/>
                    {/* <div style = {{width: "100%", height: "100%"}}></div> */}
                </div>
                <Nav/>
                
            </>
        );
    }
}

export default Header;