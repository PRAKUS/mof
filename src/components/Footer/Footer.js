import React from "react";
import "./css/Footer.css";
import { IoLocationSharp } from "react-icons/io5";
import {
	BsTelephoneFill,
	BsFacebook,
	BsInstagram,
	BsTwitter,
} from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
const Footer = () => {
	return (
		<footer className='footer-border'>
			<div className='container footer-container'>
				<div className='footerSection'>
					<ul className='sec'>
						<li>
							<a href='#home' className='icon'>
								<img src='logowhite.png' className='footersmIcon' alt='' />
								<span className='iconText'>MOF Kalimpong</span>
							</a>
						</li>
						<li>
							<a href='#home' className='icon'>
								<IoLocationSharp size={"1.4em"} />
								<span className='iconText'>
									Shahid Dal Bahadur Giri Road,
									<br /> Strawberry, opposite to Kanchan
									<br />
									Cinema Hall Kalimpong,
									<br /> West Bengal 734301 India
								</span>
							</a>
						</li>
						<li>
							<a href='#home' className='icon'>
								<BsTelephoneFill size={"1.4em"} />
								<span className='iconText'>+99999-00000,+91900090000</span>
							</a>
						</li>
						<li>
							<a href='#home' className='icon'>
								<HiOutlineMailOpen size={"1.4em"} />
								<span className='iconText'>mofkpg@gmail.com</span>
							</a>
						</li>
					</ul>
				</div>
				<div className='footerSection'>
					<p className='footertitle'>Social</p>
					<ul className='sec2 '>
						<li>
							<a href='#' className='icon'>
								<BsFacebook size={"1.4em"} className='m-1' />
								<p className='iconText'>facebook</p>
							</a>
						</li>
						<li>
							<a href='#' className='icon'>
								<BsInstagram size={"1.4em"} className='m-1' />
								<p className='iconText'>Instagram</p>
							</a>
						</li>
						<li>
							<a href='#' className='icon'>
								<BsTwitter size={"1.4em"} className='m-1' />
								<p className='iconText'>Twitter</p>
							</a>
						</li>
					</ul>
				</div>
				<div className='footerSection'>
					<p className='footertitle'>Link</p>
					<ul className='sec2 '>
						<li>
							<a href='#' className='icon'>
								Home
							</a>
						</li>
						<li>
							<a href='#' className='icon'>
								About us
							</a>
						</li>
						<li>
							<a href='#' className='icon'>
								Pricing
							</a>
						</li>
						<li>
							<a href='#' className='icon'>
								Timing
							</a>
						</li>
						<li>
							<a href='#' className='icon'>
								Contact us
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
