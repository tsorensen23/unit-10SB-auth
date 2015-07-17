# Unit-10-authSB

This challenge will teach you a little about user authentication, or how you can insure users are who they say they are and how you can log them in. 
Our app is a pretty simple app that should let users view and add their dogs, *however* you should **not** be allowed to see the dogs unless you are logged in!


##I've set up a repo here that is a simple express app that serves up a public folder where I want you to create an angular app.

# Models
I've set up a couple different mongoose models for you all to use in this 
There is a `User` model that has a `username`, `password` and an `access_token`
Additionally, we have a `Dog` model that has a `name` and `age`.
**Remember** you should not be allowed to create dogs unless you are logged in!

# Routes

Ive set up three routes to get you started:
* a `POST` route to `/users` where a user can create an account
* a `POST` route to `/login` where a user can post their username and password to login
* a `GET` route to `/dogs` where a user can get dog data but only if they're logged in

    All the routes associated with dogs need to be secured, I wonder if theres a way to do something to a whole bunch of different routes in express....

# Hints
* take a look at the packages I require at the top, some of them should give you a clue on how to make this work.
* think of what you want to check if a user logs in, you have to different things based on whether their password is correct or not
* what gets sent on every request automatically?

# getting Started
bower install,
npm install etc
