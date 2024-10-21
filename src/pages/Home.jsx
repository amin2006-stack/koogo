import React from 'react';
import Banner from "../components/Banner/Banner.jsx";
import Advantages from "../components/Advantages/Advantages.jsx";
import Products from "../components/Products/Products.jsx";
import Assortiment from "../components/Assortiment/Assortiment.jsx";
import Promotion from "../components/Promotion/Promotion.jsx";
import Category from "../components/Category/Category.jsx";
import Information from "../components/Information/Information.jsx";
import Reviews from "../components/Reviews/Reviews.jsx";
import AboutVideo from "../components/AboutVideo/AboutVideo.jsx";
import VideoReview from "../components/VideoReview/VideoReview.jsx";
import Blogs from "../components/Blogs/Blogs.jsx";
import Questions from "../components/Questions/Questions.jsx";
import HitProducts from "../components/HitProducts/HitProducts.jsx";
import About from "../components/About/About.jsx";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Advantages/>
            <Products/>
            <Assortiment/>
            <Promotion/>
            <Category/>
                <About/>
            <Information/>
            <AboutVideo/>
            <Reviews/>
            <VideoReview/>
            <Blogs/>
            <Questions/>
            <HitProducts/>
        </div>
    );
};

export default Home;

