import React from "react";
import "./css/InsiderFitness.css";
import { Slider } from "../index";

const ImageContainer = ({ des, src }) => {
	return (
		<div className='imagefitnessContainer'>
			<img className='imagefitness' alt={des} src={src} />
		</div>
	);
};

const InsideFitness = () => {
	return (
		<div className='container'>
			<div>
				<p className='section-title right-sm'>INSIDE</p>
				<p className='section-title right-lg'>
					MAD OVER FITNESS
					<br />
					KALIMPONG
				</p>
			</div>
			<div>
				<Slider style={{ marginTop: "3%" }}>
					<ImageContainer src='./image/sec1.png' des='Kalimpong Fitness' />
					<ImageContainer src='./image/sec1.png' des='Kalimpong Fitness' />
					<ImageContainer src='./image/sec1.png' des='Kalimpong Fitness' />
					<ImageContainer src='./image/sec1.png' des='Kalimpong Fitness' />
					<ImageContainer src='./image/sec1.png' des='Kalimpong Fitness' />
					<ImageContainer src='./image/sec1.png' des='Kalimpong Fitness' />
					<ImageContainer src='./image/sec1.png' des='Kalimpong Fitness' />
					<ImageContainer src='./image/sec1.png' des='Kalimpong Fitness' />
				</Slider>
			</div>
		</div>
	);
};

export default InsideFitness;
