import React from 'react'
import {Link} from "react-router-dom";
import './ProductSearch.css';
export default function ProductSearch(props) {
	var {product} = props;
	var {index} = props;
    var star = [];
    for (let i = 0; i < product.star; i++) {
    star.push(
        <img
        src={`${process.env.PUBLIC_URL}/image/star.png`}
        alt=""
        className="star"
        />
    );
    }

    var s = product.name;
        s = s.toLowerCase();
        s = s.split(" ");
		s = s.join("-");
	if(index === -1) return "";
    return (
		 
        <div
				className="col-xl-3 col-lg-3 col-md-3 col-sm-3"
				style={{ margin: "0 0px 0 0px", padding: "0" }}
			>
				<div className="card">
				<Link to={`/product/product-detail/${s}`}>
					<div className="img">
					<img
						className="card-img-top"
						src={`${process.env.PUBLIC_URL}/image/${
						product.img
						}`}
						alt="Card image cap"
						style={{ objectFit: "cover" }}
					/>
					</div>

					<div className="card-body">
					{star}
					<div className="card-title">
						{product.name}
					</div>
					</div>
					<div style={{ fontWeight: 700 }}>
					${product.price}
                    <span className = "ml-5 text-danger" >{product.discout === 0 ? "" : `-${product.discout}%`}</span>
					</div>
				</Link>
				{/* {ProductShoe[this.props.index].discout === 0 ? (
					""
				) : (
					<div className="sale-sign">
					<img
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABlCAYAAAC7vkbxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAS6SURBVHhe7Z1LaB1VHMZncsG1LipUBZUKohafBbW0+MBaFyooahVcCEITtd40ZmF1IaZVcKEuUo3GN4jgwoVKN4oK1aqlG/HRUkREVCjWV1V8N/f4fWc6MprG3lzn8U37/eDjnPOHtMn95T9nHoFJkwK94e5iDGPIxchRyBBiyqeH7EJeRR4Ymp7cziKJQmZGup00JOswnUA6rJnamEHWQ8p6LmIHQMadGO5BLKN++JlP4Oh0NxcpJqdh3IYcxoJpjJmQJGeyQ9YiltE8HewfoxRyYbY2AqykkKOzuRFgIYV4I9dhKJ5lGR0sRAwLEcNCxLAQMSxEDAsRw0LEsBAxLEQMCxHDQsSwEDEsRAwLEcNCxLAQMSxEDAsRw0LEsBAxLEQMCxHDQsSwEDEsRAwLEcNCxLAQMSxEDAsRw0LEsBAxLEQMCxHDQsSwEDEsRAwLEcNCxLAQMSxEDAsRw0LEsBAxLEQMCxHDQsSwEDEsRAwLEcNCxLAQMSxEDAsRw0LEsBAxKCRkUyNAoJAfs7kRYA+FbMnmRoB3KeSxbG4EeDy+g6o33H0Hw7mcm8Z4Pe3sXZGfZV2BUIpphreQVenUVNzUk6Hpya+wwV+A6W3IN6yZWvgSGQ8hXAIH37Lwj/cYkpnh7uEo8o1tI4hf9lINvyAbkI0Q8XOs7GOWkBzsK8swPIqcEgumDHjNtxm5CSJ2xsq/yPeQWeALtqCVzsKUJn+PRfN/+A4Zxme6Yi4ZZM4OKYJuYZfw9HhpLJj5wDd5voiMQcQXsfIfzNkhRfAPbUezLcd0FNkTi6YfuGmvQq7pRwbpq0OKoFuOxfAQcmksmP2xF3kKWQcR38dKn8xbSA7EXIvhQWRhLJicD5G1EPFGtpwffR2y9gf+w+cxnIo8jfiOcZL8gWzAB7F0UBlk4A4pgm65CMMjyAmxcOixFRmBiPez5eAM3CFF8I28loTAt07fj/D4eajAE5wxdMXyMmSQUjqkCLrlDAw8jFHQwcwmiBjrTE9+sm9dCqV0SBH8pryHi58lmI4jv8XiwcXXyPVpr3d52TJI6R1SBN2yCANvv3CPaTs95DlkHL90lFIJlQohkMIuvAG5D1nAWgv5FLkZIl7JltVRuZAciDkSAy8or46FdvAn8jByF2T8FCsVU5uQHIjhFT5PkY+JBV141rQaIrZly3oofVM/EPgBN4WQLMZ0I8LjshrshDtwqXt23TJI7R1SBN1yDgbe8zkpFpqHV9h8VvFxtqyf2jukCH7wrWkSePtlAuHxuil4A/DGJPRWNimDNNohRdAtJ2Jgt9T5zIWHTD6rWAMRu2KlYWSEkN7qborvaA2m7JgjYrE6+HziVoh4KVtqICUkB93CM7Ap5LJYKBfea3sSuR0yfogVISSF5EDMVRh4HcBrmDLYgXDTfjNb6tHopn4g8MG9gIF7yzMIn00Pyq/IvUkSlijLINIdUgTdch4G3kU+Phb6522Etz0+yJbaSHdIEXygm5MQTsaUz1z6OUXmBd4tyPltkUFa0yFF0C280n8WOT0WZvMyMgoRn2XL9tCaDimCD/qjJP37mUvxTzF3I9eFEK5sowzSyg4pgm45DsMTyOcIT2Ure1ZRPUnyF1usFsmrbE3NAAAAAElFTkSuQmCC"
						alt=""
					/>
					<h5>{ProductShoe[this.props.index].discout}%</h5>
					</div>
				)} */}

				{/* <div className="buttons" style={{ zIndex: 100 }}>
					<div className="add-to-favorite btn">
					<svg
						id="Capa_1"
						x="0px"
						y="0px"
						width="511.626px"
						height="511.626px"
						viewBox="0 0 511.626 511.626"
						xmlSpace="preserve"
					>
						<g>
						<path d="M475.366,71.949c-24.175-23.606-57.575-35.404-100.215-35.404c-11.8,0-23.843,2.046-36.117,6.136 c-12.279,4.093-23.702,9.615-34.256,16.562c-10.568,6.945-19.65,13.467-27.269,19.556c-7.61,6.091-14.845,12.564-21.696,19.414 c-6.854-6.85-14.087-13.323-21.698-19.414c-7.616-6.089-16.702-12.607-27.268-19.556c-10.564-6.95-21.985-12.468-34.261-16.562 c-12.275-4.089-24.316-6.136-36.116-6.136c-42.637,0-76.039,11.801-100.211,35.404C12.087,95.55,0,128.286,0,170.16 c0,12.753,2.24,25.891,6.711,39.398c4.471,13.514,9.566,25.031,15.275,34.546c5.708,9.514,12.181,18.792,19.414,27.834 c7.233,9.041,12.519,15.272,15.846,18.698c3.33,3.426,5.948,5.903,7.851,7.427L243.25,469.938 c3.427,3.426,7.614,5.144,12.562,5.144s9.138-1.718,12.563-5.144l177.87-171.31c43.588-43.58,65.38-86.406,65.38-128.472 C511.626,128.279,499.54,95.546,475.366,71.949z M421.405,271.795L255.813,431.391L89.938,271.507 C54.344,235.922,36.55,202.133,36.55,170.156c0-15.415,2.046-29.026,6.136-40.824c4.093-11.8,9.327-21.177,15.703-28.124 c6.377-6.949,14.132-12.607,23.268-16.988c9.141-4.377,18.086-7.328,26.84-8.85c8.754-1.52,18.079-2.281,27.978-2.281 c9.896,0,20.557,2.424,31.977,7.279c11.418,4.853,21.934,10.944,31.545,18.271c9.613,7.332,17.845,14.183,24.7,20.557 c6.851,6.38,12.559,12.229,17.128,17.559c3.424,4.189,8.091,6.283,13.989,6.283c5.9,0,10.562-2.094,13.99-6.283 c4.568-5.33,10.28-11.182,17.131-17.559c6.852-6.374,15.085-13.222,24.694-20.557c9.613-7.327,20.129-13.418,31.553-18.271 c11.416-4.854,22.08-7.279,31.977-7.279s19.219,0.761,27.977,2.281c8.757,1.521,17.702,4.473,26.84,8.85 c9.137,4.38,16.892,10.042,23.267,16.988c6.376,6.947,11.612,16.324,15.705,28.124c4.086,11.798,6.132,25.409,6.132,40.824 C475.078,202.133,457.19,236.016,421.405,271.795z"></path>
						</g>
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
					</svg>
					</div>
					<div className="add-to-cart btn" onClick={this.Click}>
					<svg
						id="Capa_1"
						x="0px"
						y="0px"
						viewBox="0 0 512 512"
						xmlSpace="preserve"
					>
						<g>
						<g>
							<path d="M507.519,116.384C503.721,111.712,498.021,109,492,109H129.736l-1.484-13.632l-0.053-0.438C121.099,40.812,74.583,0,20,0 C8.954,0,0,8.954,0,20s8.954,20,20,20c34.506,0,63.923,25.749,68.512,59.928l23.773,218.401C91.495,327.765,77,348.722,77,373 c0,0.167,0.002,0.334,0.006,0.5C77.002,373.666,77,373.833,77,374c0,33.084,26.916,60,60,60h8.138 c-2.034,5.964-3.138,12.355-3.138,19c0,32.532,26.467,59,59,59s59-26.468,59-59c0-6.645-1.104-13.036-3.138-19h86.277 c-2.034,5.964-3.138,12.355-3.138,19c0,32.532,26.467,59,59,59c32.533,0,59-26.468,59-59c0-32.532-26.467-59-59-59H137 c-11.028,0-20-8.972-20-20c0-0.167-0.002-0.334-0.006-0.5c0.004-0.166,0.006-0.333,0.006-0.5c0-11.028,8.972-20,20-20h255.331 c35.503,0,68.084-21.966,83.006-55.962c4.439-10.114-0.161-21.912-10.275-26.352c-10.114-4.439-21.912,0.161-26.352,10.275 C430.299,300.125,411.661,313,392.331,313h-240.39L134.09,149h333.308l-9.786,46.916c-2.255,10.813,4.682,21.407,15.495,23.662 c1.377,0.288,2.75,0.426,4.104,0.426c9.272,0,17.59-6.484,19.558-15.92l14.809-71C512.808,127.19,511.317,121.056,507.519,116.384 z M399,434c10.477,0,19,8.523,19,19s-8.523,19-19,19s-19-8.523-19-19S388.523,434,399,434z M201,434c10.477,0,19,8.524,19,19 c0,10.477-8.523,19-19,19s-19-8.523-19-19S190.523,434,201,434z"></path>
						</g>
						</g>
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
						<g />
					</svg>
					</div>
				</div> */}

				{/* </Link> */}
				</div>
			</div>
		
    )
}
