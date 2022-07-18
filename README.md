# Frontend Coding Challenge

- I started off by installing react router and configuring basic routing with placeholder components. As the user needs to log into the app before visiting the protected route I first decided to work on the login page. I added Axios as the http client to interact with the backend API. To be able test out if the submit works with axios to the login api I set the port of this react app in package.json to 5000, and set the proxy which will send the requests to my localhost on port 3000 where backend server is running. Proxying is only used during development, so I wouldn't use this for deployed apps.  

- I decided to store the value of email and password in state with onChange events in the input form. And then submitted that data to the api with a POST request using axios. Since the encoder page needs to be protected from unauthorized users, I decided to create isLoggedIn and authToken state in App.js. So I can re-use it in other components. If this was a bigger app that required more state handling, then I would have used a library like Redux or Immer, but for this simple coding app challenge, I did not think it was neccessary.

- I stored the authtoken just as it is for this challenge since the login API is written like that, usually I would use sessions or jwts on the backend/server for the authorization process if this part was required from me.  

- Next, I started thinking about the input validation of the form, I decided to use a regex to check if the email is valid by searching to see if there is a dot after @, I am only checking for this because I know that when I use input type email, it has it's own native validation to check if the email is properly formatted. And it will show the user an error if he forgots to include @, but doesn't do that if there is a . missing. 

- I created a homepage that is shown to logged in users and has a link to the encode page for the user to navigate to. The encode page is also protected from unregistered users. Just like the login page, I used axios to make a POST request to API. I decided to add two validations on the frontend for the encode page, and that was to show an error message if the text contains symbols, or if it contains digits.

- Created an additional component for displaying error messages to the user. 

- I decided to do minimalistic design for this app with all the content  centered in the middle of the page, I want the focus to be on the little content there is, since this is not a very complex app, with a lot of functonalities.