import React, { Component } from "react";
import { Button } from "react-bootstrap";
class JumboTronComponent extends Component {
   ////code commented out as it is a useless constructor 
  // constructor(props){
    //     super(props);
    // }
  render() {
    return (
      //Jumobotron excluded from bootstrap 5
      <div>
        <h1>Hello, world!</h1>
        <p>
          {this.props.children}
        </p>
        <p>
          <Button variant="danger">Learn more</Button>
        </p>
      </div>
    );
  }
}
export default JumboTronComponent;
