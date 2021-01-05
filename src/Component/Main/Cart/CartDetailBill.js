import React, { Component } from "react";
import "./Cart.css";
export default class CartDetailBill extends Component {
    render() {
        return (
            <div
                className="col-lg-4 col-xl-4"
                style={{ height: "auto", paddingLeft: "30px" }}
            >
                <h5 style={{ fontWeight: 400, fontSize: "18px", color: "#505050" }}>
                Total:
                </h5>
                <h1>${this.props.total}</h1>
               
                <h4 style={{ color: "#0a9c5f", fontSize: "18px" }}>Free ship!</h4>
                <button className="checkout">
                <a href="/">Precced to Checkout</a>
                </button>
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
        );
    }
}
