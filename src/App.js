import { Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import './App.css';
import { Component } from 'react';
// import Cart from './Component/Main/MainMenu/Cart/Cart'
import Header from './Component/Main/MainMenu/Navbar/Header';
import Home from './Component/Main/MainMenu/Home/Home';
import Footer from './Component/Main/MainMenu/Footer/Footer';
import Cart from './Component/Main/Cart/Cart';
import HomeFlashSale from './Component/Main/MainMenu/Home/FlashSale/HomeFlashSale';
import ProductDetail from './Component/Main/MainMenu/ProductDetail/ProductDetail';
import Trademark from './Component/Main/MainMenu/Home/trademarks/Trademark';
import TrademarkSearch from './Component/Main/MainMenu/Home/trademarkSearch/TrademarkSearch';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			total: 0,
			cart: []
		}
	}
	setCart = (data) => {
		console.log(data);
		var cart = JSON.parse(localStorage.getItem('cart'));
		var check = 0;
		if(cart == null){
			cart = [];
			
		} else {
			for(let i = 0; i < cart.length; i++) {
				if(cart[i].id === data.id) {
					check = 1;
					
				}
			}
		}
		data.count = 1;
		if(check === 0){
			cart.push(data);
		} 
		this.setState({cart});
		localStorage.setItem('cart', JSON.stringify(cart));
	}

	setCartFromDetail = (data) => {
		var cart = JSON.parse(localStorage.getItem('cart'));
		var check = 0;
		if(cart == null){
			cart = [];
			
		} else {
			for(let i = 0; i < cart.length; i++) {
				if(cart[i].id === data.id) {
					check = 1;
					if(cart[i].size !== data.size) {
						cart[i].size = data.size;
					}
				}
			}
		}
		if(!data.count) {
			data.count = 1;
		}
		if(check === 0){
			cart.push(data);
		} 
		this.setState({cart});
		localStorage.setItem('cart', JSON.stringify(cart));
	}


	setMyCart = (carts) => {
		this.setState({cart: carts});
	}

	setTotalMyCart = (total) => {
		this.setState({total});
	}
	render() {
		console.log(this.state.cart);
		return (
			<Router>
				<Header/>
				<Switch>
					<Route path="/product/product-detail/:id" >
						<ProductDetail setMyCart = {this.setCartFromDetail}/>
					</Route>
					<Route path="/trademark/search/:id">
						<TrademarkSearch/>
					</Route>
					<Route path = "/product/flash-sale">
						<HomeFlashSale setCart = {this.setCart}/>
					</Route>
					<Route path = "/product/trademark">
						<Trademark/>
					</Route>
					<Route path = "/cart">
						<Cart setMyCart = {this.setMyCart} setTotalMyCart = {this.setTotalMyCart}/>
					</Route>
					<Route exact path = "/">
						<Home setCart = {this.setCart}/>
					</Route>
					{/* <Route exact path = "/login" component = {Login}/> */}
					
					{/* <Route path="/details" component = {Details}/> */}
				</Switch>
				<Footer/>
			</Router>

		);
	}
}

export default App;
