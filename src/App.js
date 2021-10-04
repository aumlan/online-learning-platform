
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import MyCarousel from './components/Carousel/MyCarousel';
import Contact from './components/Contact/Contact';
import Course from './components/Course/Course';
import DownloadApp from './components/DownloadApp/DownloadApp';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import SingleCourse from './components/SingleCourse/SingleCourse';

function App() {
  return (
    <div className="App">
    <div className="container">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <MyCarousel></MyCarousel>
            <br/>
            <hr />
           <Course route='home'></Course>
           <br />
           <hr />
           <DownloadApp></DownloadApp>
           <br />
           <br />
          </Route>
          <Route path="/home">
          <MyCarousel></MyCarousel>
            <br/>
            <hr />
           <Course route='home'></Course>
           <br />
           <hr />
           <DownloadApp></DownloadApp>
           <br />
           <br />
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/courses">
            <Course ></Course>
          </Route>
          <Route path="/course/:courseID">
            <SingleCourse></SingleCourse>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </div>
    </div>
  );
}

export default App;
