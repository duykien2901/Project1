import React, { Component } from 'react'
import Slider from './Slider';
import MainHome from './MainHome';
import ListProduct from '../Product/ListProduct';
import MainHomeImpo from './MainHomeImpo';
export default class Home extends Component {
    componentDidMount(){
        window.scrollTo({
            top: "350",
            behavior: "smooth"
        });
    } 
    render() {
        return (
            <>
                <Slider />
                <MainHome setCart = {this.props.setCart} name = {"Flash Sale"}/>
                <MainHomeImpo setCart = {this.props.setCart} name = {"Most Important"}/>
            </>
        )
    }
}
