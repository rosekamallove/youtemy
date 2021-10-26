1. **Setting up firebase & firestore**
  - Firstly create an app on the [firebase console](https://console.firebase.google.com)
  - Then copy the firebase config which gets auto prompted when setting it up, or we can go to project setting later on
  - Enable `firestore` in the firestore tab on the console in testing mode
  - It'll look like this:
  ```js
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "youtemy-bc22a.firebaseapp.com",
      projectId: "youtemy-bc22a",
      storageBucket: "youtemy-bc22a.appspot.com",
      messagingSenderId: "1024405097955",
      appId: "1:1024405097955:web:e7ba949495c50d122da4d6",
      measurementId: "G-RWDSSPKX4E"
  };
  ```
  - Then paste this firebase config in `src/firebase.js` after removing the existing **firebaseConfig**

2. **Setting up Youtube Data API**
  - Go to [google-cloud-console](https://console.cloud.google.com/) and generate credentials for **Youtebe Data API** and copy the _API_KEY_
  - Create a `.env` in the root of the folder
  - And paste the following in it
  ```
  REACT_APP_YOUTUBE="YOUR_API_KEY"
  ```
  - Restart the development server. 
