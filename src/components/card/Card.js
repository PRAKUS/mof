import React from "react";
import "./css/card.css";
const Card = (props) => {
	return (
		<div className={`card  ${props.className}`} style={props.style}>
			<img
				style={{ height: "100%", width: "100%" }}
				src={props.img}
				alt={props.alt}
			/>
			<div className={props.bglayer}>{props.children}</div>
		</div>
	);
};

export default Card;
