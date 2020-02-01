## :book: MERN technology stack practice - Kanban

MERN is technology stack using **M**ongoDB, **E**xpress, **R**eact and **N**odeJS.
I used **mern-starter** in my practice to minimises the setup time and create Kanban Board App.

### Quickstart with mern-starter
It minimises the setup time and gets you up to speed using proven technologies but it was popular in 2018 and now days :disappointed: it is no longer supported :fearful:
```
  npm install -g mern-cli
  mern init your_new_app
  cd your_new_app
  npm install
  npm start
```
**Note : Please make sure your MongoDB is running.** For MongoDB installation guide see [this](https://docs.mongodb.org/v3.0/installation/).

### Getting Started
#### Prerequisites
To run project on your local machine for development and testing purposes you need to install the following software:
* [node.js](https://nodejs.org/en/) & [npm](https://www.npmjs.com/get-npm)
#### Install & usage (bash)
1. Clone repository 
```
Git clone git@github.com:freefrogs/EX_MERN_Kanban.git
```
2. Install required project dependencies
```
cd EX_MERN_Kanban
npm install
```
3. Run your local MongoDB (if you are working on Windows I suggest using Windows command line)
```
mongod
```
4. Run developer server (front-end and back-end)
```
npm run start
```
5. To see and test app open [localhost:8000](http://localhost:8000) (default port)

### Used technologies:
* JavaScript (ES5+)
* [mern-cli](https://www.npmjs.com/package/mern-cli)
* MERN (MongoDB, Express, React, Node.js)

## License
MERN is released under the [MIT License](http://www.opensource.org/licenses/MIT).
