import React from "react";
import "./css/Blogs.css";

const BlogCard = () => {
	return (
		<a href='#dad' className='blogCard'>
			<img src='./image/sec2.png' alt='kalimpong' />
			<div className='dark-layer3' style={{ padding: "5%" }}>
				<p className='blog-time'>23 jun 2022</p>
				<div className='blogtitlebottom'>
					<p className='blogSm-title'>Title</p>
					<p className='blogSm-des'>
						Can you believe that the past two years have shaken up the way we
						work? The beginnings were tough, but now, with the end of 2021 right{" "}
					</p>
				</div>
			</div>
		</a>
	);
};

const Blog = () => {
	return (
		<div className='container' style={{ marginTop: "5%" }}>
			<div>
				<p className='section-title left-sm'>BLOG</p>
				<p className='section-title left-lg'>
					A WORD FROM OUR
					<br />
					EXPERTISE
				</p>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					margin: "-1%",
					padding: "3% 0%",
				}}>
				<BlogCard />
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</div>
		</div>
	);
};

export default Blog;
