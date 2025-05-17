import React from "react";
//css
import '../assetss/css/login.css'

class Login extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
          </div>
          <form>
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
            <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
            <input type="submit" className="fadeIn fourth" value="Log In"/>
          </form>
          <div id="formFooter">
            <a className="underlineHover">Forgot Password?</a>
          </div>
        </div>
      </div>
      </React.Fragment>
    )
    
  }
}

export default Login;
