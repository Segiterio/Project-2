import React from "react";
import Image1 from "../../Assets/blogImage/image1.png";
import Image2 from "../../Assets/blogImage/image2.png";
import Image3 from "../../Assets/blogImage/image3.png";
import Image4 from "../../Assets/blogImage/image4.png";
import {
  BlogLayout,
  BlogSection,
  Group,
  Blog1,
  Blog2,
  Blog3,
  Blog4,
  Blog5,
} from "./Blogs-style";

const Blogs = () => {
  return (
    <BlogSection className="content_area">
      <div>
        <h2>Popular blog post we update everyday</h2>
        <p>
          Focus only on the meaning, we take care of the design. As soon as the
          meeting end you can export in one click.
        </p>
      </div>

      <BlogLayout>
        <Group>
          <Blog1>
            <img src={Image1} alt="" />
            <div>
              <h4>
                How to work with prototype design with adobe xd featuring tools
              </h4>
              <p>
                The 2019 Innovation by Design Awards honor the designers and
                businesses solving the problems of today and tomorrow. It is one
                of the most sought-after design
              </p>
            </div>
          </Blog1>
        </Group>
        <Group>
          <Blog2>
            <p>
              Antibias receives honorable gift mention at Fast Company's most
              Innovation by Design Awards
            </p>
          </Blog2>
          <Blog3>
            <img src={Image2} alt="" />
            <h4>Multiple arbard prototype with Figma</h4>
            <p>
              Beyond launched antibias, a Chrome extension that replaces
              LinkedIn profile photos
            </p>
          </Blog3>
        </Group>
        <Group>
          <Blog4>
            <img src={Image3} alt="" />
            <p>Multiple task wireframing with team management perform better</p>
          </Blog4>
          <Blog5>
            <img src={Image4} alt="" />
            <p>
              Team presentation with latest user interface & experience reach
              more
            </p>
          </Blog5>
        </Group>
      </BlogLayout>
    </BlogSection>
  );
};

export default Blogs;
