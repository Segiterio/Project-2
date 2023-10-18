import "./App.css";
// images
import S1 from "./Assets/S1.png";
import Check from "./Assets/check.png";
import Asset_2_1 from "./Assets/Asset_2_1.png";
import Asset_4_2 from "./Assets/Asset_4_2.png";
import Asset_5_2 from "./Assets/Asset_5_2.png";
import Asset_6_2 from "./Assets/Asset_6_2.png";
import Dribble from "./Assets/dribble.png";
import ExplainModal from "./Assets/ExplainModal.svg";
import Google from "./Assets/Google.png";
import Hero from "./Assets/Hero.svg";
import Image_58 from "./Assets/image_58.png";
import InfinityIcon from "./Assets/infinity.png";
import Layer from "./Assets/layer.png";
import Lego from "./Assets/lego.png";
import Link from "./Assets/link.png";
import Microsoft from "./Assets/microsoft.png";
import Path_49 from "./Assets/Path_49.svg";
import Paypal from "./Assets/paypal.png";
import Printer from "./Assets/printer.png";
import Uber from "./Assets/Uber.png";
import Vertical_bars from "./Assets/vertical_bars.png";
import Image1 from "./Assets/blogImage/image1.png";
import Image2 from "./Assets/blogImage/image2.png";
import Image3 from "./Assets/blogImage/image3.png";
import Image4 from "./Assets/blogImage/image4.png";
import Group from "./Assets/decoration/Group.svg";
import Vector from "./Assets/decoration/Vector.svg";
import Group_1 from "./Assets/decoration/Group_1.svg";
import Group_2 from "./Assets/decoration/Group_2.svg";
import Group_73 from "./Assets/decoration/Group_73.svg";

function App() {
  return (
    <div className="App">
      <header className="content_area vertically_center">
        <div className="vertically_center">
          <div className="vertically_center logo_container">
            <img src={S1} alt="s1image" />
            <p>StartupLanding</p>
          </div>
          <nav>
            <ul>
              <li>Home</li>
              <li>Advertise</li>
              <li>Supports</li>
              <li>About</li>
            </ul>
          </nav>
        </div>
        <div className="vertically_center">
          <p className="login_btn">Login</p>
          <div className="Get_started_btn">
            <button>Get Started</button>
            <img src={Path_49} alt="underline" />
          </div>
        </div>
      </header>
      {/* <!-- hero section --> */}
      <section className="content_area hero">
        <h1 className="">
          Creativity starts with viewing the whole world differently
        </h1>
        <p>A service agency with customer satisfaction</p>

        <div className="heroImage_container">
          <img src={Hero} width="100%" alt="heroImage" className="heroImage" />
          <button type="button">Get Started</button>
        </div>
      </section>
      {/* <!-- section 2 --> */}
      <div className="services_customer_container">
        {/* <!-- services --> */}
        <div className="content_area">
          <div>
            <h2>Grow your startup with our Service</h2>
            <p>
              Build an incredible workplace and grow your business with Gusto's
              all-in-one platform with amazing contents.
            </p>
          </div>
          <div className="cards_container">
            <div className="card">
              <img src={Image_58} alt="meter" />
              <div className="card_details">
                <div className="services_title">Marketing & advertising</div>
                <p>
                  Get your info tests delivered at home collect a sample from
                  the your pogress tests.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={InfinityIcon} alt="infinity" />
              <div>
                <div className="services_title">Ultimate development</div>
                <p>
                  Get your info tests delivered at home collect a sample from
                  the your pogress tests.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={Printer} alt="printer" />
              <div>
                <div className="services_title">Business Enterprise</div>
                <p>
                  Get your info tests delivered at home collect a sample from
                  the your pogress tests.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- quote container --> */}
        <div className="content_area quote_container">
          <div>
            <blockquote>
              “Whatever we create in Qwilr looks absolutely brilliant. It helps
              show our work in the best light, and is downright impressive when
              clients see a Qwilr Page we have made for them.”
            </blockquote>
            <p className="writer">By Denny Albuz, Adviser of Paypal</p>
          </div>
        </div>

        {/* <!-- logos container --> */}
        <div className="content_area partner_container">
          <img className="partner_logos" src={Uber} alt="" />
          <img className="partner_logos" src={Google} alt="" />
          <img className="partner_logos" src={Paypal} alt="" />
          <img className="partner_logos" src={Microsoft} alt="" />
          <img className="partner_logos" src={Dribble} alt="" />
        </div>
      </div>
      {/* <!-- Team section --> */}
      <section className="content_area">
        <div>
          <h2>Meet our superheros</h2>
          <p>
            Build an incredible workplace and grow your business with Gusto's
            all-in-one platform with amazing contents.
          </p>
          <div className="team_container">
            <div className="people_card">
              <div>
                <img src={Asset_6_2} alt="" className="bgc_lightOrange" />
              </div>
              {/* <!-- name --> */}
              <div className="name">Emmalee Mclain</div>
              {/* <!-- designation --> */}
              <p className="designation">Product Designer</p>
              {/* <!-- social account --> */}
              <div></div>
            </div>
            <div className="people_card">
              <div>
                <img src={Asset_2_1} alt="" className="bgc_skyGreen" />
              </div>
              {/* <!-- name --> */}
              <div className="name">Daisy Morgan</div>
              {/* <!-- designation --> */}
              <p className="designation">Lead developer</p>
              {/* <!-- social account --> */}
              <div></div>
            </div>
            <div className="people_card">
              <div className="">
                <img src={Asset_4_2} alt="" className="bgc_skinBrown" />
              </div>
              <div className="name">Yamilet Hooker</div>

              <p className="designation">Experience Designer</p>
              <div></div>
            </div>
            <div className="people_card">
              <div className="">
                <img src={Asset_5_2} alt="" className="bgc_skinBrown" />
              </div>

              <div className="name">Ariyanna Hicks</div>

              <p className="designation">User interface designer</p>

              <div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="other_services_container">
        <div className="content_area">
          <div>
            <h2>Other sevices you must appreciate</h2>
            <p className="feature_para">
              Focus only on the meaning, we take care of the design. As soon as
              the meeting end you can export in one click into your preferred.
            </p>
          </div>

          <div className="features_container">
            <div className="feature_card">
              <img src={Layer} alt="" />
              <div className="feature_content">
                <div className="feature_title">3D modeling & art</div>
                <p className="feature_para">
                  Get your info tests delivered at home collect a sample from
                  the your pogress tests.
                </p>
                <button>Learn more</button>
              </div>
            </div>
            <div className="feature_card">
              <img src={Link} alt="" />
              <div className="feature_content">
                <div className="feature_title">Digital promotion</div>
                <p className="feature_para">
                  Get your info tests delivered at home collect a sample from
                  the your pogress tests.
                </p>
                <button>Learn more</button>
              </div>
            </div>
            <div className="feature_card">
              <img src={Lego} alt="" />
              <div className="feature_content">
                <div className="feature_title">Business Enterprise</div>
                <p className="feature_para">
                  Get your info tests delivered at home collect a sample from
                  the your pogress tests.
                </p>
                <button>Learn more</button>
              </div>
            </div>
            <div className="feature_card">
              <img src={Image_58} alt="" />
              <div className="feature_content">
                <div className="feature_title">Marketing & advertising</div>
                <p className="feature_para">
                  Get your info tests delivered at home collect a sample from
                  the your pogress tests.
                </p>
                <button>Learn more</button>
              </div>
            </div>
            <div className="feature_card">
              <img src={InfinityIcon} alt="" />
              <div className="feature_content">
                <div className="feature_title">Ultimate development</div>
                <p className="feature_para">
                  Get your info tests delivered at home collect a sample from
                  the your pogress tests.
                </p>
                <button>Learn more</button>
              </div>
            </div>
            <div className="feature_card">
              <img src={Vertical_bars} alt="" />
              <div className="feature_content">
                <div className="feature_title">Online support</div>
                <p className="feature_para">
                  Get your info tests delivered at home collect a sample from
                  the your pogress tests.
                </p>
                <button>Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="content_area">
        <div className="explain_titles">
          <div className="active_explain_titles">Why you choose our service?</div>
          <div className="hover_explain_titles">What's our business promise?</div>
          <div className="hover_explain_titles">What's our role model plan?</div>
        </div>
        <div className="explain_container">
          <div className="explain_content">
            <h3 className="explain_heading">
              We will turn your idea in the successful business model framework
            </h3>
            <p>
              Get your tests delivered at let home collect sample from the
              victory of the managments that supplies best design system
              guidelines ever.
            </p>

            <div className="points">
              <div>
                <img src={Check} alt="" />
                <p>Medical and vision</p>
              </div>
              <div>
                <img src={Check} alt="" />
                <p>HSAs and FSAs</p>
              </div>
              <div>
                <img src={Check} alt="" />
                <p>Life insurance</p>
              </div>
              <div>
                <img src={Check} alt="" />
                <p>Commuter benefits</p>
              </div>
            </div>

            <button>Explore more</button>
          </div>
          <div className="explain_image">
            <img src={ExplainModal} width="100%" alt="" />
          </div>
        </div>
      </div>

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

      <div className="decoration">
        <div className="content_area news_letter_section">
          <div>
            <h3 className="heading">Like our service? Subscribe us</h3>
            <div className="para">
              We have more than thousand of creative entrepreneurs and stat
              joining our business
            </div>
          </div>
          <div>
            <form action="">
              <div className="field_container">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email Address"
                />

                <button className="subscribe_btn">Subscribe</button>
              </div>
              <div className="vertically_center">
                <input
                  type="checkbox"
                  name="additional_messages"
                  id="additional_messages"
                />
                <label for="additional_messages">
                  Don't provide any promotional message.
                </label>
              </div>
            </form>
          </div>
        </div>

        <img src={Group_73} alt="" className="books" />
        <img src={Group_1} alt="" className="strips1" />
        <img src={Group_2} alt="" className="cactus" />
        <img src={Group} alt="" className="ballon" />
        <img src={Vector} alt="" className="strips2" />
      </div>

      <footer className="content_area">
        <div className="footer_logo_contaniner">
          <div className="vertically_center logo_container">
            <img src={S1} alt="" />
            <p>StartupLanding</p>
          </div>
          <div className="privacy_text">Terms of use | Privacy</div>
          <div className="copyright_text">Copyright by 2019 YourName, Inc</div>
        </div>
        <div>
          <div className="footer_titles">About Us</div>
          <div className="footer_links">
            <div>Support Center</div>
            <div>Customer Support</div>
            <div>About Us</div>
            <div>Copyright</div>
          </div>
        </div>
        <div>
          <div className="footer_titles">Our Information</div>
          <div className="footer_links">
            <div>Return Poacy</div>
            <div>Privacy Poacy</div>
            <div>Terms & conditions</div>
            <div>Site Map</div>
          </div>
        </div>
        <div>
          <div className="footer_titles">My Account</div>
          <div className="footer_links">
            <div>Press inquiries</div>
            <div>Social media</div>
            <div>directories</div>
            <div>Images & B-roll</div>
          </div>
        </div>
        <div>
          <div className="footer_titles">Connect</div>
          <div className="footer_links">
            <div className="social_links">
              <img src="" alt="" />
              <p>Facebook</p>
            </div>
            <div className="social_links">
              <img src="" alt="" />
              <p>Twitter</p>
            </div>
            <div className="social_links">
              <img src="" alt="" />
              <p>Github</p>
            </div>
            <div className="social_links">
              <img src="" alt="" />
              <p>Dribbble</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
