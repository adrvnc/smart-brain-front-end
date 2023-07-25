import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank';
import React, { Component } from 'react';
import ParticlesBackground from './Components/ParticlesBackground';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import config from './config';

class App extends Component {
  // creating a state so the app knows, remembers, and updates the value at any time.
  constructor() {
    super();
    this.state = {
      input: '',
      imgUrl: '',
      box: {},
      route: 'signin', // displays sign in form first
      isSignedIn: false,
      user: {
        id: '',
        name: '', 
        email: '',
        password: '',
        entries: 0, 
        joined: '' 
      }
    }
  }

  // update the state with the user we receive
  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name, 
      email: data.email,
      password: data.password,
      entries: data.entries, 
      joined: data.joined 
    }})
  }

  // takes the data returned from the Clarifai API, 
  // along with the dimensions of an image, 
  // and calculates the position and size of the bounding box around an image with a detected face. 
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  // handles submission of a JPG image,
  // sends a request to the server endpoint(imageurl) to detect faces, and the server can then process the request and send back a response.
  // if the face detection was successful, update the users entry count
  // and display a face detection box around detected face(s) 
  onPhotoSubmit = () => {
    this.setState({imgUrl: this.state.input})
    fetch(`${config.apiUrl}/imageurl`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log('hi', response)
        if (response) {
          fetch(`${config.apiUrl}/image`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })

        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
    }

    // allows users to sign in and out 
    onRouteChange = (route) => {
      if (route === 'signout') {
        this.setState({isSignedIn: false})
      } else if (route === 'home') {
        this.setState({isSignedIn: 'true'})
      }
      this.setState({route: route});
    }

  render() {
    const {isSignedIn, imgUrl, route, box} = this.state;
    return (
      <div className="App">
        <ParticlesBackground />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home' 
         ? <div>
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkForm
            onInputChange={this.onInputChange}
            onPhotoSubmit={this.onPhotoSubmit} />
            <FaceRecognition box={box} imgUrl={imgUrl}/>
          </div>
          : (
            route === 'signin' 
            ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
        } 
      </div>
    );
  }

}

export default App;
