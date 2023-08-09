# Smart Brain

- A comprehensive Full-Stack web application that allows users to register and submit an image address for face detection using the Clarifai API. Whenever a user submits an image to be detected, their rank increases. 
- **NOTE**: Encountered issues with Clarifai API's face detection functionality; actively troubleshooting and seeking resolution.


## Table of Contents 
- [My Process](#my-process)
  - [Built With](#built-with)
  - [Installation](#installation)
- [Important Note About Facial Recognition](#important-note-about-facial-recognition)
  - [Potential Limitations](#potential-limitations)
  - [Recommendations for Users](#recommendations-for-users)
  - [Reporting Issues](#reporting-issues)
## My Process
### Built With 
- **Front-end:** React, HTML, CSS 
- **Back-end (Server):** Express.js, Node.js
- **API**: Clarifai 
- **API Testing:** Postman
- **Database:** PostgreSQL
- **Deployment:** GitHub Pages (Front-End), Railway (Server and Database)

### Installation
To Start The React App in your browser: 
- **Step 1:** Clone this repository
- **Step 2:** Navigate to the project directory in your terminal 
- **Step 3:** Run ```npm install```
- **Step 4:** Run ```npm start``` 

To use Clarifai's Facial Recognition API, follow these steps: 
- **Step 1:** Find an image of a person using any web search engine.
- **Step 2:** Right-click on the image, and then choose "Copy image address" from the context menu.
- **Step 3:** Paste the image adress into the input field and click the "Detect" button

## Important Note About Facial Recognition
**Please be aware that the facial recognition feature in this project relies on the Clarifai API's Image Detection Model. While this model is powerful and accurate in many cases, it may not always detect faces and images correctly, or at all.**

### Potential Limitations
**Image Quality:** The accuracy of the facial recognition may be affected by the quality of the images supplied to the model. Low-resolution, heavily compressed, or heavily distorted images may lead to suboptimal results.

**Lighting Conditions:** The model's performance could be influenced by lighting conditions in the images. Poor lighting, extreme shadows, or overexposure might reduce the accuracy of face detection.

**Pose and Angle:** The model's ability to detect faces could be impacted by the pose or angle of the subjects in the images. Profiles, extreme angles, or partially obstructed faces might pose challenges.

### Recommendations for Users 
To mitigate potential issues with facial recognition, I recommend the following:

**Use High-Quality Images:** Whenever possible, provide high-quality images with clear and well-lit faces for the best results.

### Reporting Issues 
If you encounter consistent problems with the facial recognition feature or have specific cases where it fails, please feel free to report any issues in this GitHub repository.



