import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Video from "../Components/Video/Video";
import Story from "../Components/Story/Story";
import Nurses from "../Components/Nurses/Nurses";
import Discounted from "../Components/Navbar/Discounted/Discounted";
import Testimonial from "../Components/Testimonial/Testimonial";
import Blog from "../Components/Blog/Blog";

const Home = () => {
  return (
      
        <div style={{width:"100%", overflow:"hidden"}}>
      <Navbar />
      <Video />
      <Story />
      <Nurses />
      <Discounted />
      <Testimonial />
      <Blog/>
      {/* <Blog /> */}
    </div>
     

  );
};

export default Home;
