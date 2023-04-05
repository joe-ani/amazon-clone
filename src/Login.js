import React ,{ useState} from "react";
import "./Login.css";
// import firebase dependencies
import { auth } from "./firebase";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";


function Login() {
 


    // created a state to hold the user text value/data.
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate() //->> navigate from page to page  
    
    const register = (e) => {
        e.preventDefault()
        // firebase :)
        auth
        .createUserWithEmailAndPassword(email, password) //creates a new user with email and password
        .then((auth) => { //->> if it was created successfully will come back with an auth object
          console.log(auth) 
          if (auth) {
            navigate('/')
            console.log('navigate')
          }
        })
        .cahtch(error => alert(error.message))//->> catches any errors that occours

    }


    const signIn = (e) => {
        e.preventDefault()
        // firebase:)
        auth
        .signInWithEmailAndPassword(email, password) 
        .then(auth => {
            navigate('/')
        })
        .cahtch(error => alert(error.message))
    }


  return (
    <div className="Login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png"
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input  type="email" required onChange={e => setemail(e.target.value)} value={email}/> {/*maps the state data ->>(setemail) to the email value*/}

          <h5>Password</h5>
          <input  type="password"  onChange={e => setpassword(e.target.value)} value={password}/>{/*maps the state data ->>(setpassword) to the passowrd value*/}

          <button className="signin_btn" type="submit" onClick={signIn} >Sign In</button>
        </form>
        <p>
          By siging-in you agree to  <b>(my FAKE! Amazon-React-clo)</b> Conditions of use & sale. Please
          see our Priviacy Notice, Our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>

        <button onClick={register} className="create_account_btn">Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
