import React from 'react'
import Asset_2_1 from "../../Assets/Asset_2_1.png";
import Asset_4_2 from "../../Assets/Asset_4_2.png";
import Asset_5_2 from "../../Assets/Asset_5_2.png";
import Asset_6_2 from "../../Assets/Asset_6_2.png";
import { TeamContainer,TeamMember,Name } from './team-style';

const Team = () => {
  return (
    <section className="content_area">
        <div>
          <h2>Meet our superheros</h2>
          <p>
            Build an incredible workplace and grow your business with Gusto's
            all-in-one platform with amazing contents.
          </p>
          <TeamContainer className="team_container">
            <TeamMember >
              <div>
                <img src={Asset_6_2} alt="" className="bgc_lightOrange" />
              </div>
              {/* <!-- name --> */}
              <Name className="name">Emmalee Mclain</Name>
              {/* <!-- designation --> */}
              <p className="designation">Product Designer</p>
              {/* <!-- social account --> */}
              <div></div>
            </TeamMember>
            <TeamMember >
              <div>
                <img src={Asset_2_1} alt="" className="bgc_skyGreen" />
              </div>
              {/* <!-- name --> */}
              <Name className="name">Daisy Morgan</Name>
              {/* <!-- designation --> */}
              <p className="designation">Lead developer</p>
              {/* <!-- social account --> */}
              <div></div>
            </TeamMember>
            <TeamMember >
              <div className="">
                <img src={Asset_4_2} alt="" className="bgc_skinBrown" />
              </div>
              <Name className="name">Yamilet Hooker</Name>

              <p className="designation">Experience Designer</p>
              <div></div>
            </TeamMember>
            <TeamMember >
              <div className="">
                <img src={Asset_5_2} alt="" className="bgc_skinBrown" />
              </div>

              <Name className="name">Ariyanna Hicks</Name>

              <p className="designation">User interface designer</p>

              <div></div>
            </TeamMember>
          </TeamContainer>
        </div>
      </section>
  )
}

export default Team