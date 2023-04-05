import React, { useState , useEffect} from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

// header styling directory 👇
import "./Header.css";
// import material UI
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {

   const [signedState, setSignedState] = useState('')
   const [emailSignedState, setEmailSignedState] = useState('')
   const [{basket, user}, dispatch] = useStateValue()

   useEffect(() => { // <<- checks if user is signed in or not screen load.
      if (user){
        setSignedState('Sign Out')
        setEmailSignedState(`${user.email}`)
      } else{ 
        setSignedState('Sign In')
        setEmailSignedState('Hello, guest')
      }
   }, [])

   const handleAuth = () => { //signs user out 
    if (user){
      auth.signOut()
      setEmailSignedState('Hello, guest')
      setSignedState('Sign In')
      window.location.reload()
    } else{ 
      setSignedState('Sign Out')
      setEmailSignedState(`${user.email}`)
    }
   }


  return (
    <div className="header">
      {/* Header Logo */}
      
      <Link to="/">
        <img
          className="header_logo"
          src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-Transparent-1024x310.png"
        />
      </Link>

      {/* Header Search bar  */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        {/* Logo; using 'mterial UI' */}
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* Navigations */}
      <div className="header_nav">
        <Link className="link" to={!user && '/login'}> {/* <<- if they is no user(!user) go to (&&) ./login page  if there is a user it won't run🙅🏾🚫*/}
        <div onClick={handleAuth} className="header_option">
          <span className="header_optionLineOne">{emailSignedState}</span>
          <span className="header_optionLineTwo">{signedState}</span>
        </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

    

        
<Link className="link" to='/checkout' > 
<div className="header_optionBasket">
          <ShoppingBasketIcon />
          {/* dynamic innerhtml value👇 */}
          <span className="header_optionLineTwo header_optionCount">{basket?.length}</span>
        </div>
</Link>
      </div>
    </div>
  );
}

export default Header;
