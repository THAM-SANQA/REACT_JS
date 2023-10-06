import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import User from "./User";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserForm from "./UserForm";

class App extends Component {
  constructor() {
    super();
    console.log(firebase);
  }

  render() {
    return (
      <div>
        {/* paths */}
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/edit/:id" component={UserForm} />
              <Route path="/add" component={UserForm} />
              <Route exact path="/" component={User} />
              <Route path="/*" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
//rendered for unfamiliar paths
class NotFound extends Component {
  render() {
    return <div>Not Found</div>;
  }
}

////chapter 8
// import React, { Component } from "react";
// import GitHub from "./GitHub";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Nav, Navbar } from "react-bootstrap";
// import GitHubUser from "./GitHubUser";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//       </div>
//     );
//   }
// }

// export default App;
// class Header extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <Navbar bg="light" expand="lg">
//             <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="mr-auto">
//                 <Nav.Link href="/">Home</Nav.Link>
//                 <Nav.Link href="/github">GitHub</Nav.Link>
//                 <Nav.Link href="/">About</Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Navbar>
//           <Switch>
//             <Route path="/github/user/:login/:id" component={GitHubUser} />
//             <Route path="/github" component={GitHub} />
//             <Route path="/about" component={About} />
//             <Route exact path="/" component={Home} />
//             <Route path="/*" component={NotFound} />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }
// class Home extends Component {
//   render() {
//     return <div>Home</div>;
//   }
// }

// class About extends Component {
//   render() {
//     return <div>About</div>;
//   }
// }
// class NotFound extends Component {
//   render() {
//     return <div>Not Found</div>;
//   }
// }

// //chapter6-7
// import React, { Component } from "react";
// import UserForm from "./UserForm";
// import GitHub from './GitHub';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <GitHub />
//         <UserForm />
//       </div>
//     );
//   }
// }
// export default App;

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
