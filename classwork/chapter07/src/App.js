
//chapter6
import React, { Component } from "react";
import UserForm from "./UserForm";
import GitHub from './GitHub';

class App extends Component {
  render() {
    return (
      <div>
        <GitHub />
        <UserForm />
      </div>
    );
  }
}
export default App;


////chapter 5
// import React, { Component } from "react";
// import JumboTronComponent from "./JumboTronComponent";
// import Products from "./Products";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <JumboTronComponent>
//           This is a long sentence, and I want to insert content into the
//           jumbotron component from the outside.
//         </JumboTronComponent>
//         <Products />
//       </div>
//     );
//   }
// }

// export default App;


////chapter 4
// import React, { Component } from 'react';
// import Products from './Products';

// function App() {
//   return (
//     <div className="App">
//       <h1>My First React App!</h1>
//       <Products />
//     </div>
//   );
// }

// export default App;






// //chaphter 1-3
// import React, { Component } from 'react';
// import Products from './Products';
// import { Button } from 'react-bootstrap';
// import Rating from './Rating';

// class App extends Component {
//   render() {
//     const isValid = true;

//     return (
//       <div>
//         <h1>
//           My 1st React App!
//         </h1>
//         <Products />
//         <Button variant="danger" disabled={!isValid}>Default</Button>
//         <Rating rating="1" />
//         <Rating rating="2" />
//         <Rating rating="3" />
//         <Rating rating="4" />
//         <Rating rating="5" />
//       </div>
//     );
//   }
// }
// export default App;
