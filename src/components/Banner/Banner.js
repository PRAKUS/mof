import React from "react";
import "./css/banner.css";
const Banner = () => {
	return (
		<div className='banner-container '>
			<div>
				<picture>
					<img src='./image/banner1.png' width='100%' alt='' />
				</picture>
			</div>
			<div className='dark-layer'>
				<div className=' container'>
					<div className=' banner'>
						<p className='banner-head'>
							BE STRONGER
							<br /> THAN YOUR EXCUSES
						</p>
						<p className='banner-text'>
							Lorem ipsum dolor sit amet, officia excepteur ex fugiat
							reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
							ex esse exercitation amet. Nisi animcupidatat excepteur officia.
							Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
							voluptate voluptate dolor minim nulla est proident. Nostrud
							officia pariatur ut officia. voluptate dolor minim nulla est
							proident. Nostrud officia pariatur ut officia.
							<br />
							<button className='button join-button'>Join Us</button>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
