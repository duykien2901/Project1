import React from "react";
import "./TrademarkSearch.css";
import {Link} from "react-router-dom"
import "../../ProductDetail/ProductDetail.css";
export default function ProductSearchDetail(props) {
  var { product } = props;
  var star = [];
  for (let i = 0; i < product.star; i++) {
    star.push(
      <img
        src={`${process.env.PUBLIC_URL}/image/star.png`}
        alt=""
        className="star"
        style={{ width: "20px", height: "20px" }}
      />
    );
  }
  var s = product.name;
        s = s.toLowerCase();
        s = s.split(" ");
		s = s.join("-");
  if(props.index === -1) return "";
  return (
    <div className="col-xl-12 col-lg-12">
      <div className="row change_content">
      
        <div className="col-xl-3 col-lg-3" style = {{display: "flex", alignItems: "center"}}>
        <Link to={`/product/product-detail/${s}`}>
          <img
            className="card-img-top"
            style={{ objectFit: "cover" }}
            src={`${process.env.PUBLIC_URL}/image/${product.img}`}
            alt=""
          />
           </Link>
        </div>
       
        <div className="col-xl-9 col-lg-9">
        <Link to={`/product/product-detail/${s}`}>
          <h2 className="name" style = {{fontSize: "20px", marginTop:"20px"}}>{product.name}</h2>
          <div className="star d-flex mb-4">{star}</div>
          <h3 className="item" style={{marginLeft: "0px", fontSize: "14px"}}>{product.trademark}</h3>
          <div className="cost">
            <p style = {{fontSize: "19px", fontWeight: "700"}}>${product.price}</p>
            <p className="current-cost" style = {{fontSize: "15px"}}> -{product.discout}%</p>
          </div>
          <h5 style = {{marginTop: "5px", fontSize: "14px"}}>{product.description}</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}
