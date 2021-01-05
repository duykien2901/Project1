import React, { Component } from 'react'
import "./Cart.css";
import CartDetailBill from './CartDetailBill';
import CartDetailProduct from './CartDetailProduct';
export default class CartDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            total: 0  ,
            cart: []
        }
    }
    componentDidMount() {
        var total = 0;
        var carts = JSON.parse(localStorage.getItem('cart'));
        for(let i = 0; i < carts.length; i++) {
           total += carts[i].price * carts[i].count;
        }
        localStorage.setItem('total', total);
        this.setState({total});
        
    }

    setCount = (cart) => {
        var total = 0;
        var carts = JSON.parse(localStorage.getItem('cart'));
        for(let i = 0; i < carts.length; i++) {
            if(carts[i].id === cart.id) {
                carts[i].count = cart.count;
            }
            total += carts[i].price * carts[i].count;
        }
        console.log(total);
        localStorage.setItem('total', total);
        
        this.props.setTotalMyCart(total);

        this.setState({cart: carts, total: total});
        localStorage.setItem('cart', JSON.stringify(carts));
        
    }

    setTotal = (carts) => {
        var total = 0;
        for(let i = 0; i < carts.length; i++) {
            total += carts[i].price * carts[i].count;
        }
        this.setState({total});
        localStorage.setItem('total', total);
    }
    render() {
        var cart = JSON.parse(localStorage.getItem('cart'));
        console.log(this.state.total);
        var Elements;
        if(cart == null) {
            cart = [];
            Elements = "";
        } else {
            Elements = cart.map((cart, index) => {
                return <CartDetailProduct cart = {cart} 
                key = {index} 
                setCount = {this.setCount} 
                setMyCart = {this.props.setMyCart}
                setTotal = {this.setTotal}

                />
            })
        }
        
        return (
            <div className="row field">
                <div className="col-lg-8 col-xl-8">
                    {Elements}
                </div>
                <CartDetailBill total = {this.state.total}/>
            </div>
        )
    }
}
