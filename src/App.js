import Footer from './components/Footer';
import Container from './components/Container';
import Rizwan from './components/Rizwan';
import TopNav from './components/TopNav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
     <div>
     
       <TopNav/>
       <Main/>
       <Rizwan/>
       <Container/>
       <Footer/>
       </div>

    </div>
  );
}

export default App;
