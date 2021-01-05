import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default class MyCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
        cart: [],
        };
    }
    componentDidMount() {
        window.scrollTo({
            top: "0",
            behavior: "smooth"
        });
    }
    render() {
        var cart = JSON.parse(localStorage.getItem("cart"));
        var total = 0;
        var Elements;
        if (cart == null) {
            Elements = "";
        } else {
        Elements = cart.map((cart, index) => { 
            total += cart.price * cart.count;
            var s = cart.name;
            s = s.toLowerCase();
            s = s.split(" ");
            s = s.join("-");
            return (
            <Link to ={`/product/product-detail/${s}`} >
                <div className="show-product-item">
                <div className="image">
                    <img
                    src={`${process.env.PUBLIC_URL}/image/${cart.img}`}
                    alt=""
                    />
                </div>
                <div className="text">
                    <div className="name">{cart.name}</div>
                    <div className="trademark">{cart.trademark}</div>
                    <div className="cost">{cart.price}</div>
                </div>
                <div className="number-product">({cart.count})</div>
                </div>
            </Link>
            );
        });
        }
        return (
        <div className="buttons-cart">
            <div className="button-cart dropdown">
            <div className="static-btn">
                <img
                src="https://www.pngitem.com/pimgs/m/521-5216062_shopping-cart-transparent-background-shopping-cart-icon-png.png"
                alt=""
                className="icon"
                />
                <span>My cart</span>
                <span
                className="badge  mb-4"
                style={{ backgroundColor: "#f37990",borderRadius: "50%",width: "20px",height: "20px" }}
                >
                <span>{Elements.length}</span>
                </span>
            </div>
            <div className="drop-list-item">
                {total !== 0 ? Elements :
                        <div className="empty-alert">
                            <h3>Your cart is empty</h3>
                            <Link to="/">
                                <h5>Go to shopping</h5>
                            </Link>
                        </div> }
                {/* <a href="/" className>
                <div className="show-product-item">
                    <div className="image">
                    <img
                        src=" https://firebasestorage.googleapis.com/v0/b/bshoes-2.appspot.com/o/resize-image-1604773286968.jpg?alt=media&token=small-size-white-vulcanized-calfskin-sneakers-ozyx1f94g-image--i-1"
                        alt=""
                    />
                    </div>
                    <div className="text">
                    <div className="name">White Vulcanized Calfskin Sneakers</div>
                    <div className="trademark">THOM BROWNE</div>
                    <div className="cost">520</div>
                    </div>
                    <div className="number-product">(2)</div>
                </div>
                </a> */}
                {/* {Elements} */}

                <div
                className="line-divide"
                style={{
                    width: "100%",
                    height: "0.5px",
                    background: "rgb(225, 225, 225)",
                }}
                />
                <h3 className="total">
                {" "}
                <b>Total: ${total}</b>
                </h3>
                <Link to="/cart">
                <button>Go to cart</button>
                </Link>
            </div>
            </div>
        </div>
        );
    }
}
