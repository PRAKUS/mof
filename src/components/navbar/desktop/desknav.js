import React, { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import "./css/Nav.css";
const DesktopNav = () => {
	const [mobnav, setMobNav] = useState(0);
	const [menu, showMenu] = useState(false);
	useEffect(() => {
		if (window.screen.width < 480) {
			setMobNav(1);
		} else {
			setMobNav(0);
		}
	}, []);

	window.addEventListener("resize", () => {
		if (window.screen.width < 480) {
			setMobNav(1);
		} else {
			setMobNav(0);
		}
	});

	const LgNav = () => {
		return (
			<div>
				<ul className='nav'>
					<li className='navItem'>
						<a href='/' className='navLink'>
							Home
						</a>
					</li>
					<li className='navItem'>
						<a href='/' className='navLink'>
							About
						</a>
					</li>
					<li className='navItem'>
						<a href='/' className='navLink'>
							Pricing
						</a>
					</li>
					<li className='navItem'>
						<a href='/' className='navLink'>
							Timing
						</a>
					</li>
					<li className='navItem'>
						<a href='/' className='navLink'>
							Contact Us
						</a>
					</li>
				</ul>
			</div>
		);
	};
	const Smnav = () => {
		return (
			<div className='sm-nav-container'>
				<MdOutlineMenu
					color='#fff'
					size='2em'
					onClick={() => {
						showMenu(!menu);
					}}
				/>
				<ul
					className='sm-nav'
					style={
						menu
							? { height: "200px", transition: "all 0.5s" }
							: { height: "0px", transition: "all 0.5s" }
					}>
					<li className='navItem'>
						<a href='/' className='navLink'>
							Home
						</a>
					</li>
					<li className='navItem'>
						<a href='/' className='navLink'>
							About
						</a>
					</li>
					<li className='navItem'>
						<a href='/' className='navLink'>
							Pricing
						</a>
					</li>
					<li className='navItem'>
						<a href='/' className='navLink'>
							Timing
						</a>
					</li>
					<li className='navItem'>
						<a href='/' className='navLink'>
							Contact Us
						</a>
					</li>
				</ul>
			</div>
		);
	};

	return (
		<div className='dark-nav '>
			<div className='container  navbar'>
				<div>
					<img className='navBrand' src='logowhite.png' alt='moflogo' />
				</div>
				{mobnav === 0 ? LgNav() : Smnav()}
			</div>
		</div>
	);
};

export default DesktopNav;
