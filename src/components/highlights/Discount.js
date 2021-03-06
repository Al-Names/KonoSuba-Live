import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utility/MyButton";
export default class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };
  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 100);
  }
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade delay={500} onReveal={() => this.percentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>Off</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase Tickets Before 25th of December</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
                accusamus ab. Velit, aperiam nemo. Ipsam repudiandae voluptate
                culpa sapiente, consequatur delectus aut optio aspernatur vero
                tenetur. Laboriosam nostrum odio nulla.
              </p>
              <div>
                <MyButton
                  text="Buy Now"
                  bck="#ffa800"
                  color="white"
                  link="http://google.com"
                />
              </div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
