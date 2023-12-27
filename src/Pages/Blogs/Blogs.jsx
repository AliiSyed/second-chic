import React from "react";
import "./Blogs.css";
import BlogsBanner from "../../Components/BlogsBanner/BlogsBanner.jsx";
import BlogCard from "../../Components/BlogCard/BlogCard.jsx";
import { FiSearch } from "react-icons/fi";

const Blogs = () => {
  return (
    <div className="blogs">
      <BlogsBanner />
      <div className="my-container">
        <div className="blog-sections">
          <div className="blog-left-section">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div className="blog-right-section">
            <div className="blog-right-section1">
              <input type="text" placeholder="Search your keyword.." />
              <FiSearch />
            </div>
            <div className="blog-right-section2">
              <h4>Categories</h4>
              <p>Fashion</p>
              <p>Fashion</p>
              <p>Fashion</p>
              <p>Fashion</p>
              <p>Fashion</p>
              <p>Fashion</p>
            </div>
            <div className="blog-right-section3">
              <h4>Popular Post</h4>
              <div>
                <img src="/images/popularPost.png" alt="popularPost.png" />
                <h4>26-10-2023</h4>
                <h3>Best Sunscreens for Oily & Acne Prone Skin in...</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
