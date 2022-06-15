<!-- **Note: This project is currently _NOT_ in development!** -->
<!-- Logo Block -->
<h1 align="center">
	<a href="https://youtemy.tech"><img height=100 src="src/Components/Navbar/Logo.png" alt="YouTemy"/></a>
</h1>

<!-- Main Badges Block (for Quick Actions) -->
<p align="center">
    <a href="https://youtemy.tech">
        	<img src="https://img.shields.io/website?down_color=red&down_message=down&label=Website%20Status&up_color=green&up_message=online&url=https%3A%2F%2Fyoutemy.tech" alt="Website State">
	</a>
	<a href="https://github.com/rosekamallove/youtemy/releases">
        	<img src="https://img.shields.io/github/v/release/rosekamallove/youtemy" alt="Latest Release">
	</a>
    <a href="https://github.com/rosekamallove/youtemy/blob/main/LICENSE">
        	<img src="https://img.shields.io/github/license/rosekamallove/youtemy?color=blue" alt="License">
	</a>
    <a href="https://github.com/rosekamallove/youtemy/graphs/contributors">
        	<img src="https://img.shields.io/github/contributors/rosekamallove/youtemy?color=green" alt="Contributors">
	</a>
</p>

YouTemy is a platform to accelerate learning from YouTube courses. Users can learn from YouTube courses without any distractions and have the ability to enroll in courses and track them with a daily streak to become more consistent.

<!-- Tech Stack Block -->

# 🚀 Tech Stack

<!-- <p align="center">
    <a href="https://firebase.google.com"><img width=32 height=32 src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg" alt="Firebase logo"></a>
</p> -->

YouTemy is a web app built with the following:

- [Javascript](https://www.javascript.com)
- [ReactJS](https://reactjs.org/)
- [Firebase](https://firebase.google.com)
- [YouTube Data API V3](https://developers.google.com/youtube/v3)

<!-- CI/CD Block -->

# 🤖 CI/CD

<p align="center">
    <a href="https://github.com/rosekamallove/youtemy/actions/workflows/firebase-hosting-pull-request.yml">
        	<img src="https://github.com/rosekamallove/youtemy/actions/workflows/firebase-hosting-pull-request.yml/badge.svg" alt="Firebase Deploy on PR">
	</a>
    <a href="https://github.com/rosekamallove/youtemy/actions/workflows/firebase-hosting-pull-request.yml">
        	<img src="https://github.com/rosekamallove/youtemy/actions/workflows/firebase-hosting-merge.yml/badge.svg" alt="Firebase Deploy on Merge">
	</a>
</p>
Deployment to Firebase is automated and controlled through GitHub Actions.

<!-- Page Hierarchy Block -->

# 🗺 Page Hierachy

- ### Pages:

  - [**Landing Page**](https://youtemy.tech/) (Middleware goes here if not logged in)
    - LogIn or Contribute
  - **Dashboard**:

    - Courses currently enrolled
    - Streak Tracker
      - Daily Goal (Progress)
    - All-time Progress (Across Courses)

  - [**Course Curriculum**](https://youtemy.tech/courses)

    - Different Tracks
      - Web-Dev Track
        - HTML\CSS
        - JavaScript
        - React/Vue/Angular
        - Node.JS / Express

  - **User Dashboard**

    - Courses currently enrolled in
    - Charts for the progress
    - Tutorial Hell Warnings
    - Maybe percentile
    - Suggested next course

  - [**Explore Page**](https://youtemy.tech/explore)
    - Search for new Courses on Youtube
    - Add them to bookmrks or enroll in them
  - **Settings**
    - Delete all Bookmarks
    - Delete all enrolled courses

<!-- Snapshot Block -->

> # 📷 Snapshots of the Hosted Projects

> ### ![Dashboard](protoypes/Website1.png)

> ### ![CoursesPage1](protoypes/Website2.png)

> ### ![CoursesPage2](protoypes/Website3.png)

> ### ![ExplorePage](protoypes/Website4.png)

> ### ![BookmarksPage](protoypes/Website5.png)

<!-- Development Block -->

# ⚙ Running the Project

## Starting the Dev Server

- Clone the repository to your local system. `https://github.com/rosekamallove/youtemy`

- Firebase API Setup:

  1.  Go to [Firebase Console](https://console.firebase.google.com) and follow the steps to create a new Firebase project.
  2.  Select `</>` , _Add a project via Code_.

  3.  Create a new web app using the steps provided on the console.

  4.  You will recieve a firebasConfig object with the first paramter as API key. Copy it, which will look something like:

      ```js
              cosnt firebaseConfig = {
              apiKey: "process.env.REACT_APP_FIREBASE",
              authDomain: "AUTH_DOMAIN",
              projectId: "PROJECT_ID",
              storageBucket: "STORAGE_BUCKET",
              messagingSenderId: "*************",
              appId: "******************************",
              measurementId: "*************"
            };
      ```

  5.  After you get the Firebase API key, create a .env file in the root folder of the repository

  6.  Insert the folowing snippet in the file

           REACT_APP_FIREBASE="API_KEY_HERE"

- Youtube API Setup:

  1.  Go to the following link and set up a new project from <https://console.cloud.google.com/apis/>

  2.  Go the the project's dashboard and click on **Enable APIs and Services**

  3.  Select **Youtube Data API v3**

  4.  Click on Credentials to create new credentials for the API client

  5.  Select API Key out of the 3 options available (API Key, OAuth Client ID, Service Key)

  6.  A new API key will be generated. Copy it in the .env file.

               REACT_APP_YOUTUBE="API_KEY_HERE"

- Ensure that .env is added in .gitignore file.

- In the root folder and enter the following commands in the CLI

          npm i or yarn
          npm start or yarn start

- If you wish to contribute, either look for issues already created or create an issue if you have a new idea.

# 👨‍🔬 Contributors

<a href="https://github.com/rosekamallove/youtemy/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=rosekamallove/youtemy" />
</a>

_Contribution list made with [contrib.rocks](https://contrib.rocks)._

<!--
### MVP Flow:
![NavBar](protoypes/Youtemy-Flow.png) -->

<!-- ### MVP Mockups:

**Navbar and Footer:**
![NavBar](protoypes/NavBar.jpg)
![Footer](protoypes/Footer.jpg)
**Dashboard:**
![Dashboard](protoypes/Dashboard.jpg)

**Course Curriculam:**
![CourseCurriculam](protoypes/Course-Curriculum.jpg)

**Video Player:**
![Player](protoypes/Player.png) -->
