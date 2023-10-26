import React from "react";
import Asset_2_1 from "../../Assets/Asset_2_1.png";
import Asset_4_2 from "../../Assets/Asset_4_2.png";
import Asset_5_2 from "../../Assets/Asset_5_2.png";
import Asset_6_2 from "../../Assets/Asset_6_2.png";
import {
  TeamMember,
  Name,
  IconsContainer,
  AboutDev,
  TeamStyle,
} from "./team-style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillDribbbleCircle,
  AiFillGithub,
} from "react-icons/ai";

const Team = () => {
  return (
    <TeamStyle>
      <section className="content_area">
        <div>
          <h2>Meet our superheros</h2>
          <p>
            Build an incredible workplace and grow your business with Gusto's
            all-in-one platform with amazing contents.
          </p>
          <Swiper
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              641: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            style={{ marginTop: "2rem", padding: "0 2.5rem" }}
          >
            <SwiperSlide>
              <TeamMember>
                <div>
                  <div>
                    <img src={Asset_6_2} alt="" className="bgc_lightOrange" />
                  </div>
                  {/* <!-- name --> */}
                  <div>
                    <Name>Emmalee Mclain</Name>
                    {/* <!-- designation --> */}
                    <p className="designation">Product Designer</p>
                    {/* <!-- social account --> */}
                    <IconsContainer>
                      <AiFillDribbbleCircle color="#ea4c89" />
                      <AiFillGithub color="#2b3137" />
                      <AiFillTwitterCircle color="#26a7de" />
                      <AiFillFacebook color="#0000FF" />
                    </IconsContainer>
                  </div>
                </div>
                <AboutDev>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                  excepturi possimus optio inventore quia dolor perferendis
                  magnam beatae? Doloribus tenetur ullam reiciendis suscipit
                  eius! Facilis.
                </AboutDev>
              </TeamMember>
            </SwiperSlide>

            <SwiperSlide>
              <TeamMember>
                <div>
                  <div>
                    <img src={Asset_2_1} alt="" className="bgc_skyGreen" />
                  </div>
                  {/* <!-- name --> */}
                  <div>
                    <Name>Daisy Morgan</Name>
                    {/* <!-- designation --> */}
                    <p className="designation">Lead developer</p>
                    {/* <!-- social account --> */}
                    <IconsContainer>
                      {" "}
                      <AiFillDribbbleCircle color="#ea4c89" />
                      <AiFillGithub color="#2b3137" />
                      <AiFillTwitterCircle color="#26a7de" />
                    </IconsContainer>
                  </div>
                </div>

                <AboutDev>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                  impedit adipisci expedita aspernatur earum quisquam ab
                  reprehenderit, tempore non cumq
                </AboutDev>
              </TeamMember>
            </SwiperSlide>

            <SwiperSlide>
              <TeamMember>
                <div>
                  <div>
                    <img src={Asset_4_2} alt="" className="bgc_skinBrown" />
                  </div>
                  <div>
                    <Name>Yamilet Hooker</Name>

                    <p className="designation">Experience Designer</p>
                    <IconsContainer>
                      {" "}
                      <AiFillDribbbleCircle color="#ea4c89" />
                      <AiFillGithub color="#2b3137" />
                      <AiFillTwitterCircle color="#26a7de" />
                    </IconsContainer>
                  </div>
                </div>
                <AboutDev>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dignissimos similique deserunt expedita cupiditate error
                  ratione quos quae impedit numquam, amet nostrum voluptates
                  molestiae dolorum reprehenderit ut perferendis vel!
                </AboutDev>
              </TeamMember>
            </SwiperSlide>

            <SwiperSlide>
              <TeamMember>
                <div>
                  <div className="">
                    <img src={Asset_5_2} alt="" className="bgc_skinBrown" />
                  </div>
                  <div>
                    <Name>Ariyanna Hicks</Name>

                    <p className="designation">User interface designer</p>

                    <IconsContainer>
                      <AiFillDribbbleCircle color="#ea4c89" />
                      <AiFillGithub color="#2b3137" />
                      <AiFillTwitterCircle color="#26a7de" />
                    </IconsContainer>
                  </div>
                </div>

                <AboutDev>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid dignissimos ducimus veritatis rerum eius laboriosam
                  magnam in voluptas distinctio repudiandae soluta pariatur
                  ullam molestias mollitia ab, consectetur exercitatione
                </AboutDev>
              </TeamMember>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </TeamStyle>
  );
};

export default Team;
