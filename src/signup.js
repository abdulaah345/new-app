import axios from "axios";
import { useState } from "react";

function Signup (){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [repeatpassword,setRepeatpassword] = useState("");
    const [accept,setAccept] = useState(false);
    const [emailerror,setEmailerror] = useState(false);

    // const [flag,setFlag] = useState(false);
    
  async  function submit(e){
        let flag = true;
        e.preventDefault();
        setAccept(true);
        
        if(name===""||password.length < 8 ||password!==repeatpassword){
           flag=false;
        }else flag=true;
        try{
        if(flag){
       let res= await  axios.post("http://127.0.0.1:8000/api/register",{
            name: name,
            email: email,
            password: password,
            password_confirmation:repeatpassword,

         });
        if(res.status === 200){
          window.localStorage.setItem("email",email);
          window.location.pathname='/home';
        }
        }
    }catch(err){
        setEmailerror(err.response.status);
    }
    }
    return(
      <>
       <div className="father"> 
        <form onSubmit={submit}>
        <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="Name"  value={name} onChange={(e) => setName(e.target.value)}/>
    {name===''&&accept&&<p className="error">Username is Required</p>}
     </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="text" className="form-control" id="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
    {accept && emailerror===422 &&<p className="error">Email Is already been taken</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
    {password.length < 8 && accept && <p className="error">password must more 8 chart</p>}
  </div>
  
  <div className="mb-3">
    <label htmlFor="repeatpassword" className="form-label">Repeat Password</label>
    <input type="password" className="form-control" id="RepeatPassword" value={repeatpassword} onChange={(e)=>setRepeatpassword(e.target.value)}/>
    {password!==repeatpassword && accept && <p className="error">password does not match</p>}
  </div>
  <button type="submit" className="btn btn-primary">Register</button>
</form>
</div>
      </>  
       
    );
}
export default Signup;