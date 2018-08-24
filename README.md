# Firebase Auth one time password, Udemy tutorial
Simple app, following advanced Udemy [React Native: Advanced Concepts course](https://www.udemy.com/react-native-advanced/learn/v4/overview)
## Main Goal
Practice more advanced React Native concepts and integrating the app to the external tools such as Firebase, Google Cloud Functions and Twilio.
To test the client app please navigate to **firebase-auth-client-app** folder,
To see the server side Google Cloud Functions please navigate to **one-time-password-server** folder. Note that server folder API keys are hidden, please refer to `.gitignore` file and include them with your own keys.


### [Demo - Try it on Expo](https://expo.io/@jkhusanov/firebase-auth-client-app)

## Demo, screenshots
<div style={{display: flex; flex-direction: row}}>
  <img src="screenshots/1-image.png" width="270" />
  <img src="screenshots/2-image.png" width="270" />
</div>



## Getting started, with app client

```
git clone https://github.com/jkhusanov/firebase-auth-udemy.git

cd firebase-auth-client-app

exp start

exp ios
```



## TODO

- [x] Create **Firebase** project 🔥
- [x] Set up local Firebase project 🔥
- [x] Write function to create a user, **Google Cloud Functions** ☁️
- [x] Sign up for **Twilio** 📞
- [x] Write function to generate code and text a user
- [x] Write function to verify code
- [x] Implement simple **client Sign Up** form with actual working Google Functions and SMS
- [x] Implement simple client **Log In** form with actual working Google Functions and SMS
- [x] Attach the screenshots/gif of screens to `README.MD`

## Wireframes and project plan


<div style={{display: flex; flex-direction: row}}>
  <img  alt="wireframe1" src="screenshots/tech-stack.png" width="450" />
  <p></p>
  <img  alt="wireframe2" src="screenshots/app-flow.png" width="450" />
  <p></p>
  <img  alt="wireframe3" src="screenshots/handling-user.png" width="450" />
  <p></p>
  <img  alt="wireframe3" src="screenshots/simple-interface.png" width="450" />
  <p></p>
</div>



