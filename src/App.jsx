import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Aside from './Aside';
import Footer from './Footer';
import Data from "./Data";
// import Hello from "./Hello";
import BusinessCard from "./BusinessCard";
import './style.css';



function App() {
  const data = Data();
  // function Hello(props) {
  //   return <h1>Hello {props.name}</h1>
  // }
  // const ans = <Hello name="React" />;

  return (
    <div>
      <Header />
      <Nav />
      <div className="main-content">
        <div className="columns-container">
          <Main appName={new BusinessCard()} />
          {/* <Aside /> */}
          {/* <Hello name="Class" /> */}
          {/* <p>Important Notices ==></p><ul>
            <li>Business related</li>
            <li>Job related</li>
            <li>Employee training</li>
            <li>Vacation</li>
            <li>Recent</li>
          </ul> */}


        </div>
      </div>

      <Footer />
    </div >

  );

}

export default App;
