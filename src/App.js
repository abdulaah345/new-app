import Header from './components/header';
import Home from './home';
import Login from './login';
import Signup from './signup';
import{ BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
     

      <Routes>



<Route path="/home" element={<Home/>} />

<Route path="/register" element={<Signup/>} />

<Route path="/login" element={<Login/>} />
{/* <Route path="/logout" element={<Login/>} /> */}


      
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
