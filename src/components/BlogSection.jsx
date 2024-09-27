import React from "react";
import blockchain1 from "../assets/blockchain1.jpg";
import blockchain2 from "../assets/blockchain2.jpg";
import blockchain3 from "../assets/blockchain3.jpg";
import BlogCard from "./BlogCard";

export const BlogSection = () => {
  const blogs = [
    {
      title: "How to buy Lisk",
      description:
        "To buy Lisk on Liveswap, connect your wallet and choose the asset you wish to swap. Enter the amount, review the transaction details, and confirm your swap to complete the purchase.",
      imgUrl: blockchain1,
    },
    {
      title: "How to buy Etherium",
      description:
        "To buy Etherium on Liveswap, connect your wallet and choose the asset you wish to swap. Enter the amount, review the transaction details, and confirm your swap to complete the purchase.",
      imgUrl: blockchain2,
    },
    {
      title: "How to buy Bitcoin",
      description:
        "To buy Bitcoin on Liveswap, connect your wallet and choose the asset you wish to swap. Enter the amount, review the transaction details, and confirm your swap to complete the purchase.",
      imgUrl: blockchain3,
    },
  ];
  return (
    <div className="blog-section-container">
      <div className="blog-section-header">
        <h1>
          Learn More about <span className="higlighted">Liveswap</span>
        </h1>
        <button className="secondary">View More</button>
      </div>
      <div className="blogs-container">
        {blogs.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              description={blog.description}
              imgUrl={blog.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};
