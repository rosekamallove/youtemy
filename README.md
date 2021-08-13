# Youtemy
Track your YouTube learning with progress bars and pies, avoiding the infamous _Tutorial Hell_
<br/>

## _Start Dev Server_

  -  ### Firebase API 
        - Use the following documentation to create a **Firebase Project** and get a Firebase API key.
                
                
                i. Go to ["Firebase Console"]("console.firebase.google.com").
                   Follow the steps to create a new Firebase project.

                ii. Select </> , *Add a project via Code*.

                iii. Create a new web app using the steps provided on the console.

                iv. You will recieve a firebasConfig object with the first paramter as API key. Copy it.

        - After you get the Firebase API key, create a .env file in the root folder of the repository

        - Insert the folowing snippet in the file
               
             		```REACT_APP_FIREBASE="API_KEY_HERE"```

  -  ### Youtube API
        - Go to the following link and set up a new project
                
                [Youtube API Console]("https://console.cloud.google.com/apis/")

        - Go the the project's dashboard and click on **Enable APIs and Services**

        - Select **Youtube Data API v3**

        - Click on Credentials to create new credentials for the API client

        - Select API Key out of the 3 options available (API Key, OAuth Client ID, Service Key)

        - A new API key will be generated. Copy it in the .env file.

                     ```REACT_APP_YOUTUBE="API_KEY_HERE"```

  -  ### Ensure that .env is added in .gitignore file.

  -  ### In the root folder and enter the following commands in the CLI
        -   ```npm i```
        - ```npm start```

## Overview

- ### Pages:
    - **Landing Page** (Middleware goes here if not logged in)
    - **Dashboard**:
        - Courses currently enrolled
        - Course Tracker (with progress pie)
        - Streak Tracker
            - Daily Goal (Progress)
        - All-time Progress (Across Courses)
        - Captions to Transcript
    - **Course Curriculum**
        - Different Tracks
            - Web-Dev Track
                - HTML\CSS
                - JavaScript
                - React/Vue/Angular
                - Node.JS / Express
        - At max two playlists of the same topic
        - Suggested playlists
    - **User Dashboard**
        - Courses currently enrolled in
        - Charts for the progress
        - Tutorial Hell Warnings
        - Maybe percentile
        - Suggested next course
    - **Explore Page**
        - Search for new Courses on Youtube
        - Add them to bookmrks or enroll in them
     - **Settings**
        - Delete all Bookmarks
        - Delete all enrolled courses

### MVP Flow:
![NavBar](protoypes/Youtemy-Flow.png)

### MVP Mockups:

**Navbar and Footer:**
![NavBar](protoypes/NavBar.jpg)
![Footer](protoypes/Footer.jpg)
**Dashboard:**
![Dashboard](protoypes/Dashboard.jpg)

**Course Curriculam:**
![CourseCurriculam](protoypes/Course-Curriculum.jpg)

**Video Player:**
![Player](protoypes/Player.png)

