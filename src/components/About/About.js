import React from "react";
import { Card } from "../";
import "./css/about.css";

const About = () => {
	return (
		<div className='container' style={{ margin: "8% auto" }}>
			<div className='rightText-container' style={{ top: "-3%" }}>
				<p className='section-title right-sm'>Our Traning Program</p>
				<p className='section-title right-lg'>
					WE AIM TO TRANSFROM
					<br />
					YOUR ABILITIES
				</p>
			</div>

			<div className='img-array'>
				<Card
					bglayer='dark-layer2'
					className='img-card ml-0'
					style={{ marginBottom: "13%" }}
					img='/image/sec3.png'>
					<p className='text-middle'>Yoga</p>
				</Card>
				<Card
					bglayer='dark-layer2'
					className='img-card '
					style={{ marginTop: "3%", marginBottom: "9%" }}
					img='/image/sec2.png'>
					<p className='text-middle'>Weight Lifiting</p>
				</Card>
				<Card
					bglayer='dark-layer2'
					className='img-card '
					style={{ marginTop: "6%", marginBottom: "6%" }}
					img='/image/sec1.png'>
					<p className='text-middle'>Zumba</p>
				</Card>
				<Card
					bglayer='dark-layer2'
					className='img-card mr-0'
					style={{ marginTop: "9%", marginBottom: "3%" }}
					img='/image/sec1.png'>
					<p className='text-middle'>Zumba</p>
				</Card>
			</div>
		</div>
	);
};

export default About;
