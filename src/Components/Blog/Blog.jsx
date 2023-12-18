import React from "react";
import "./Blog.css";
import Line1 from "../../Assests/pexels-anna-shvets-3845761 1.png";
import Line from "../../Assests/Vector.png";
import Line2 from "../../Assests/pexels-anna-shvets-3845761 2 (1).png";

const Blog = () => {
  return (
    <div className="whole-Container">
      <div className="blog-container">
        <h2 className="blog">Blog</h2>
        <div className="blog-image-container">
          <img src={Line} alt="Image" />
        </div>
      </div>
      <div className="blog-container1">
        <div className="left-sidee">
          <div className="left-content">
            <img src={Line1} alt="Image" />
            <h3>Knowing where to go makes it a bit easier</h3>
            <p>
              At Nomad Nurse, we redefine the experience of dental nurse
              recruitment offering a platform that goes beyond the conventional.
              By choosing to work with us, dental nurses gain access to a
              seamless and user-friendly platform that effortlessly connects
              them with diverse opportunities
            </p>
            <button>Read blog</button>
          </div>
        </div>
        <div className="right-sidee">
          <div className="right-content">
            <div className="right-sub-content1">
              <div className="right-sub-left">
                <img src={Line2} alt="Image" />
              </div>
              <div className="right-sub-right">
                <div className="overlayy">
                  <h3>Title 1</h3>
                  <p>Paragraph text goes here.</p>
                  <button>Read More</button>
                </div>
              </div>
            </div>
            <div className="right-sub-content">
              <div className="right-sub-left">
                <img src={Line} alt="Image" />
              </div>
              <div className="right-sub-right">
                <div className="overlayy">
                  <h3>Title 2</h3>
                  <p>Paragraph text goes here.</p>
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
