import React from "react";
import "./Trademark.css";
import {Link} from "react-router-dom";
export default function TrademarkProduct(props) {
    var {product} = props;
    var s = props.name;
    s = s.split(" ");
    s = s.join("-");
    return (
        
        <div className="col-xl-4 col-lg-4" style={{ padding: "30px" }}>
            <div className="row img-container">
            
                <div
                className="col-xl-8 col-lg-8"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                >
                <Link to= {`/trademark/search/${s}`}>
                <img
                    src={`${process.env.PUBLIC_URL}/image/${product[0].img}`}
                    alt="THOM BROWNE"
                    style={{ objectFit: "cover", width: "70%" }}
                />
                </Link>
                </div>
                <div
                className="col-xl-4 col-lg-4"
                style={{ display: "flex", flexFlow: "column", alignSelf: "center" }}
                >
                 <Link to= {`/trademark/search/${s}`}>
                <img
                    src={`${process.env.PUBLIC_URL}/image/${product[1].img}`}
                    alt=""
                    style={{ objectFit: "cover", width: "100%", margin: "10px 0" }}
                />
                <img
                    src={`${process.env.PUBLIC_URL}/image/${product[2].img}`}
                    alt=""
                    style={{ objectFit: "cover", width: "100%", margin: "10px 0" }}
                />
                </Link>
                </div>
               
            </div>
            <h3 style={{ margin: "10px 0 0 0", fontSize: "18px" }}>{props.name}</h3>
            <p>{product.length} products</p>
        </div>
    );
}
