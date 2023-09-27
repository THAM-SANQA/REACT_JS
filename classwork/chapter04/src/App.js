import React, { Component } from 'react';
import Products from './Products';

function App() {
  return (
    <div className="App">
      <h1>My First React App!</h1>
      <Products />
    </div>
  );
}

export default App;






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
