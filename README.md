<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Joaquim09Castro/TODO_app">
    <img src="./src/app/public/img/favicon.ico" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">TODO APP</h3>

  <p align="center">
    TODO App made with express & sqlite3
    <br />
    <a href="https://github.com/Joaquim09Castro/TODO_app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://todo-joka.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/Joaquim09Castro/TODO_app/issues">Report Bug</a>
    ·
    <a href="https://github.com/Joaquim09Castro/TODO_app/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

TODO app made as part of the Resilia Web Development course, to train express use.

### Built With
* [Express](https://expressjs.com/)
* [node-postgres](https://node-postgres.com/)


<!-- GETTING STARTED -->
## Getting Started

- You can have the usage experience of this application through it's heroku instance [here](https://todo-joka.herokuapp.com).

- For running this on your local machine, follow these steps.

### Prerequisites

* Node.js

> Node is a runtime built to develop the application's back end in JavaScript language.
>
> You can search for your preferable form of download [here](https://nodejs.org/en/download/).

* A Postgres database

> You can use a database located on your own machine.
>
> or
>
> Use a database from a hosting service provider (the heroku instance of this app uses [ElephantSQL](https://www.elephantsql.com/))

### Installation

1. Clone the repo
```sh
git clone https://github.com/Joaquim09Castro/TODO_app.git
```
2. Install NPM packages
```sh
npm install
```


---
## Usage

1. Set the `database.js` file to use your database:

```js
// Option 1. Set the value directilly to the connection string value
const databaseURL = "YOUR_DATABASE_CONNECTION_STRING";

// Option 2. Install the dotenv node package and set the DATABASE_URL variable value inside it
DATABASE_URL="YOUR_DATABASE_URL"
```

2. On your computer's terminal, run the code
```sh
node src/config/database/tableCreation.js
```

3. Run the code
```sh
npm start
```
to initialize the application on your machine.

4. Use the Port number the application gives you and go to
```http
http://localhost:(PORT_NUMBER)
```

> You may set a PORT value in your .env file
> 
> By default the app will use it's value.
>
> If there is no value for PORT in it, the app will use Port 9000

---
## Roadmap

See the [open issues](https://github.com/Joaquim09Castro/TODO_app/issues) for a list of proposed features (and known issues).

---
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---
## License

Distributed under the MIT License. See `LICENSE` for more information.

---
## Contact

Joaquim Rodrigo Moraes de Castro - joaquimcastro2909@gmail.com

Project Link: [https://github.com/Joaquim09Castro/TODO_app](https://github.com/Joaquim09Castro/TODO_app)



<!-- ## Acknowledgements -->





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Joaquim09Castro/TODO_app.svg?style=flat
[contributors-url]: https://github.com/Joaquim09Castro/TODO_app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Joaquim09Castro/TODO_app.svg?style=flat
[forks-url]: https://github.com/Joaquim09Castro/TODO_app/network/members
[stars-shield]: https://img.shields.io/github/stars/Joaquim09Castro/TODO_app.svg?style=flat
[stars-url]: https://github.com/Joaquim09Castro/TODO_app/stargazers
[issues-shield]: https://img.shields.io/github/issues/Joaquim09Castro/TODO_app.svg?style=flat
[issues-url]: https://github.com/Joaquim09Castro/TODO_app/issues
[license-shield]: https://img.shields.io/badge/License-MIT-purple
[license-url]: https://github.com/Joaquim09Castro/TODO_app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat&logo=linkedin&colorB=2867B2
[linkedin-url]: https://www.linkedin.com/in/joaquim-rodrigo-moraes-de-castro-9980291a1/
[product-screenshot]: images/screenshot.png