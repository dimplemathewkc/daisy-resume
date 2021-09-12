import React, { Component } from "react";
import { Icon } from "@iconify/react";
import chalkboardTeacher from '@iconify/icons-la/chalkboard-teacher';
import typewriterIcon from '@iconify/icons-si-glyph/typewriter';
import bxBookReader from '@iconify/icons-bx/bx-book-reader';

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "https://media-exp1.licdn.com/dms/image/C5603AQEOa9L06lm3rg/profile-displayphoto-shrink_800_800/0/1631078247397?e=1637193600&v=beta&t=7Q9x7n9pIZaLg9roVfZTXXuBSVXXxTIJM25zZ8aNDyw"
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }
    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-3 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={chalkboardTeacher}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                    border="1"
                  />
                  <Icon
                    icon={typewriterIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={bxBookReader}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    
                    <span className="wave">{hello} </span>
                    <br />
                    <br />
                    <p className="wave_p">{about}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
