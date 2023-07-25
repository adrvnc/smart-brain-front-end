import React from "react";
import config from "../../config";


class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

     // This method is called when a key is pressed in the input fields
     handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.onSubmitSignIn(); // Call the sign-in method when the Enter key is pressed
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch(`${config.serverUrl}/register`, {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) { // once the user has been created, load the new user and the home screen. 
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
        })
    }

    render() {
        return(
            <div>
                <article className="br3 ba b--black-10 mv4 w-100 w-60-m w-70-l mw6 shadow-5 center shadow-color">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0 white">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 white" htmlFor="name">Name</label>
                                <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 white" 
                                type="text" 
                                name="name"  
                                id="name"
                                onChange={this.onNameChange} 
                                />
                            </div>
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
                            <input 
                            onClick={this.onSubmitSignIn} 
                            className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white" 
                            type="submit" 
                            value="Register" />
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        );
    }    
};

export default Register; 