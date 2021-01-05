import React, { Component } from "react";
import "./Cart.css"
import {Link} from "react-router-dom";
export default class CartDetailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true
        }
    }
    onChange = (e) => {
        var {cart} = this.props;
        cart.count = e.target.value;
        this.props.setCount(cart);
        
    }

    onClick = () => {
        var carts = JSON.parse(localStorage.getItem('cart'));
        var {cart} = this.props;
        for(let i = 0; i < carts.length; i++) {
            if(carts[i].id === cart.id) {
                carts.splice(i, 1);
            }
        }
        localStorage.setItem('cart', JSON.stringify(carts));
        this.setState({status: !this.state.status});
        this.props.setTotal(carts);
        this.props.setMyCart(carts);
    }
    render() {
        var {cart} = this.props;
        var check = 1;
        if(cart === [] || this.state.status === 0) {
            check = 0;
        }
        var s = cart.name;
			s = s.toLowerCase();
			s = s.split(" ");
			s = s.join("-")
        return (
            <>
            {check === 0? "" :
            <div className="row product-cart" style={{ height: "160px" }}>
                <div className="col-lg-3 col-xl-3">
                    <div className="image">
                        <img
                            src={`${process.env.PUBLIC_URL}/image/${cart.img}`}
                            alt=""
                        />
                    </div>
                </div>
                <div className="col-lg-5 col-xl-5">
                        <Link to={`/product/product-detail/${s}`}>
                            <div className="product-infor">
                                <p className="name">{cart.name}</p>
                                <p className="trademark">{cart.trademark}</p>
                                <p className="size-option">
                                Size: <strong>{cart.size ? cart.size : "X" }</strong>
                                </p>
                                <p>
                                Color: <strong>{cart.color}</strong>{" "}
                                </p>
                            </div>
                        </Link>
                </div>
                <div className="col-lg-2 col-xl-2" style={{ padding: 0 }}>
                        <input
                        type="number"
                        className="form-control"
                        name
                        id
                        min = {1}
                        aria-describedby="helpId"
                        placeholder
                        value={cart.count}
                        style={{ marginTop: "10px", width: "70%" }}
                        onChange={this.onChange}
                        />
                    <div className="remove" style={{ marginTop: "50px" }} onClick = {this.onClick}>
                    {" "}
                    Remove <img src="./image/recycle.png" alt="" />
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2">
                    <div style={{ marginTop: "10px" }}>
                        <img
                            src="https://bshoes.herokuapp.com/static/media/price-tag.10bac61c.svg"
                            alt=""
                            style={{ width: "18px" }}
                        />
                        <span style={{ fontWeight: 700, color: "red" }}>${cart.price}</span>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            -{cart.discout}%
                        </div>
                    </div>
                </div>
            </div>
            }
            </>
        );
    }
}
