# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

**[TODO 05/01/2018 @vanessa-cooper]:** _It's been a while since anyone ran a fresh copy of this repo. I think it's worth documenting the steps needed to install and run the repo on a new machine?_

Setup the Development Environment
1. Install docker, https://docs.docker.com/get-docker/
2. Check if everything is fine by running docker -v and docker-compose -v, you should be able to see the version of both of these commands.
3. Git clone the repository
4. Move into the root of the repository and run docker-compose up
5. If everything's alright you should see the backend running which we can test with http://localhost:3000/api/ping and the front at http://localhost:3001/register and you can sign-up with your username.
6. That's it.