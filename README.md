# Friend Finder

### Description

A MP4 video (FriendFinder.mp4) is included in the files to explain how the program is working.

https://github.com/jfsilvah/FriendFinder/blob/master/FriendFinder.mp4

There are 4 files for this activity:

friends.js - Includes the array with the initial friends that can be matched
apiRoutes.js - It has the 2 routes useed to work with the API, the GET event returns the actual array and the POST event will process the survey sent adding the new user to the array an returning the match for the user
htmlRoutes.js - It handles the HTML that will be returned by the app for every possible path that the user can access (root, home, survey)
server.js - Main file that process any user request and using the other JS files will process any user request
survey.html - It has 10 questions with 5 radio buttons for every possible answer that will help to the app to find a match and it will display the match for every survey
home.html - Main page that will submit the survey

The MP4 explain how the programs are working and you will se how is called.
The APP has been loaded in heroku and here is the URL to access the path:

https://jfsilvah-friendfinder.herokuapp.com/