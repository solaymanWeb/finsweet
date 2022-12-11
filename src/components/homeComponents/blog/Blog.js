import React from 'react';
import "./Blog.css"
import blogImg1 from "../../../assest/images/blog-img-1.png"
import blogImg2 from "../../../assest/images/blog-img-2.png"
import blogImg3 from "../../../assest/images/blog-img-3.png"



const Blog = () => {
    return (
        <div>
             <section className="blog-fluid">
        <div className="container">
            <div className="blog-header">
                <h2>Our blog</h2>
            </div>
            <div className="blog-main-area">
                <div className="blog-card">
                    <div className="blog-card-img">
                        <img src={blogImg1} alt="blog img"/>
                    </div>
                    <div className="blog-card-text">
                        <a href="#">19 Jan 2022</a>
                        <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                        </p>
                        <div className="read-more">
                            <a href="#">View More <i className="fa-solid fa-arrow-right-long"></i> </a>
                        </div>
                    </div>
                </div>
                <div className="blog-card">
                    <div className="blog-card-img">
                        <img src={blogImg2} alt="blog img"/>
                    </div>
                    <div className="blog-card-text">
                        <a href="#">19 Jan 2022</a>
                        <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                        </p>
                        <div className="read-more">
                            <a href="#">View More <i className="fa-solid fa-arrow-right-long"></i> </a>
                        </div>
                    </div>
                </div>
                <div className="blog-card">
                    <div className="blog-card-img">
                        <img src={blogImg3} alt="blog img"/>
                    </div>
                    <div className="blog-card-text">
                        <a href="#">19 Jan 2022</a>
                        <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
                        <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                        </p>
                        <div className="read-more">
                            <a href="#">View More <i className="fa-solid fa-arrow-right-long"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Blog;