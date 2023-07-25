import React from "react";
import './SignIn.css';
import config from "../../config";

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    // This method is called when a key is pressed in the input fields
    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.onSubmitSignIn(); // Call the sign-in method when the Enter key is pressed
        }
    }

    // onEmailChange and onPasswordChange, are defined to handle changes in the email and password input field. 
    // These two methods update the component's state with the new values entered in the input fields.
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    // the onSubmitSignIn method is defined to handle the submission of the sign-in form,
    // fetches data from the sign in route in our server.
    // receieves a JSON response and will only log a user in when they have entered the correct username and password
    onSubmitSignIn = () => {
        fetch(`${config.serverUrl}/signin`, {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) { // if the user id exists, load the user and load the home screen. 
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
        })
    }

    render() {
        const {onRouteChange} = this.props;
        return(
            <div>
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center shadow-color">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0 white">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
                                <input
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                                onChange={this.onEmailChange}  
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
                                <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white" 
                                type="password" 
                                name="password"  
                                id="password" 
                                onChange={this.onPasswordChange}
                                onKeyPress={this.handleKeyPress}
                                />
                            </div>
                            </fieldset>
                            <div className="">
                            {/* switches to home screen when user clicks 'sign in' button */}
                            <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white" type="submit" value="Sign in" />
                            </div>
                            <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')} className="f6 link underline-hover black db white pointer">Register</p>
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        );
    }
}

export default SignIn; 