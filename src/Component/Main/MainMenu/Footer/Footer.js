import React from 'react';
import './Footer.css';


export default function Footer() {
    return (
        <div className="footer">
            <div className="address">
                <div className="address-title">
                    My Address
          </div>
                <div className="address-text">
                    Lane 126 at house 14, Kim Hoa, Phuong Lien Ward, Dong Da District, Hanoi City
          </div>
                <div className="address-comment">
                    We receive online order and delivery, do not support buying and receiving goods directly at the office or order processing center
          </div>
                <div className="gmail-address">
                    <img src={`${process.env.PUBLIC_URL}/image/email.png`} 
                    alt="" className="icon" />
                    <p>Kienlop9altt2014@gmail.com</p>
                </div>
            </div>
            <div className="contact">
                <div className="address-title">
                    Contact Me
          </div>
                <div className="contact-methods">
                    <a href="/">
                        <img src={`${process.env.PUBLIC_URL}/image/iconfinder_BW_Facebook_glyph_svg_5305154.png`} alt="" />
                    </a>
                    <a href="/">
                        <img src={`${process.env.PUBLIC_URL}/image/iconfinder_Circled_Instagram_svg_5279112.png`} alt="" />
                    </a>
                    <a href="/">
                        <img src={`${process.env.PUBLIC_URL}/image/iconfinder_YouTube_Play_social_media_logo_1964418.png`} alt="" />
                    </a>
                    <a href="/">
                        <img src={`${process.env.PUBLIC_URL}/image/iconfinder_github_317712.png`} alt="" />
                    </a>
                    <a href="/">
                        <img src={`${process.env.PUBLIC_URL}/image/iconfinder_BW_Twitter_2_glyph_svg_5305173.png`} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}
