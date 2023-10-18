import React from 'react'
import Image1 from "../../Assets/blogImage/image1.png";
import Image2 from "../../Assets/blogImage/image2.png";
import Image3 from "../../Assets/blogImage/image3.png";
import Image4 from "../../Assets/blogImage/image4.png";

const Blogs = () => {
  return (
    <div className="content_area blog_section">
    <div>
      <h2>Popular blog post we update everyday</h2>
      <p>
        Focus only on the meaning, we take care of the design. As soon as
        the meeting end you can export in one click.
      </p>
    </div>

    <div className="blog_layout">
      <div className="group_1">
        <div className="blog_1">
          <img src={Image1} alt="" />
          <div>
            <h4>
              How to work with prototype design with adobe xd featuring
              tools
            </h4>
            <p>
              The 2019 Innovation by Design Awards honor the designers and
              businesses solving the problems of today and tomorrow. It is
              one of the most sought-after design
            </p>
          </div>
        </div>
      </div>
      <div className="group_2">
        <div className="blog_2">
          <p>
            Antibias receives honorable gift mention at Fast Company’s most
            Innovation by Design Awards
          </p>
        </div>
        <div className="blog_3">
          <img src={Image2} alt="" />
          <h4>Multiple arbard prototype with Figma</h4>
          <p>
            Beyond launched antibias, a Chrome extension that replaces
            LinkedIn profile photos
          </p>
        </div>
      </div>
      <div className="group_3">
        <div className="blog_4">
          <img src={Image3} alt="" />
          <p>
            Multiple task wireframing with team management perform better
          </p>
        </div>
        <div className="blog_5">
          <img src={Image4} alt="" />
          <p>
            Team presentation with latest user interface & experience reach
            more
          </p>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Blogs