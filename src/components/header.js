import { Link } from "react-router-dom";
import Signup from "../signup";

function Header(){
  function handelelogout(){
    window.localStorage.removeItem("email");
    window.location.pathname="/login";
  }
  return(<>
  
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
  <Link className="navbar-brand" to="/home">Home</Link>
  <a className="navbar-brand" to="/">About</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
     
       { !window.localStorage.getItem("email")?<>
        <li className="nav-item">  
        <Link className="register-nav me-2 navbar-brand " aria-current="page" to={'/register'} >Register</Link>
        </li>
        <li className="nav-item">
        <Link className="register-nav navbar-brand" aria-current="page" to={'/login'} >Log In</Link>
        </li> </> : 
        <li className="nav-item">
        <Link className="register-nav navbar-brand" aria-current="page" onClick={handelelogout} to={'/logout'} >Log out</Link>
        </li>  } 
      </ul>

      
    </div>
  </div>
</nav>
        
  </>);
}
export default Header;