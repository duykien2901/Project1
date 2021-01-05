import React, { Component } from "react";
import './MainHome.css';
import ListProduct from "../Product/ListProduct";
import {Link} from "react-router-dom";
import Slider from "./Slider";
export default class MainHome extends Component {
	render() {
		return (
			<>
			<div className="fluid-container" style={{ marginTop: 30 }}>
				<div className="row">
					<div className="col-lg-1 col-xl-1" />
					<div className="title col-lg-3 col-xl-3">
						<img
							src={this.props.name !== "Flash Sale"? "https://bshoes.herokuapp.com/static/media/popular.dfd168c4.svg" :`${process.env.PUBLIC_URL}/image/flash-sale.png`}
							alt=""
							style={{ backgroundColor: "#fff" }}
						/>
						<h2>{this.props.name}</h2>
					</div>
					<div className="col-xl-5 col-lg-5" />
					<div className="title col-lg-2 col-xl-2">
						<Link to="/product/flash-sale" className="see-more">
							<button>See more</button>
						</Link>
					</div>
					<div className="title col-lg-1 col-xl-1" />
				</div>
				
			</div>

			<ListProduct setCart = {this.props.setCart} count = {30} divPage = {true}/>
			</>
		);
	}
}
