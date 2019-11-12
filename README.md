<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo, twitter_handle, email
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
[![LinkedIn][linkedin-shield]][linkedin-url]
<!--[![MIT License][license-shield]][license-url]-->



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/dormalk/NodeChatApp">
    <img src="https://i.imgur.com/mR1jiau.png" alt="logo" width="150" height="150"/>
  </a>

  <h3 align="center">Chat Application</h3>

  <p align="center">
    Discrect Room for chatting
    <br />
    <a href="https://github.com/dormalk/NodeChatApp"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://obscure-tundra-27473.herokuapp.com/" target="_blank">Open Chat App</a>
    ·
    <a href="https://github.com/dormalk/NodeChatApp/issues">Report Bug</a>
    ·
    <a href="https://github.com/dormalk/NodeChatApp/issues">Request Feature</a>
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
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)
<!--* [Contributing](#contributing)
* [Roadmap](#roadmap)
* [License](#license)-->



<!-- ABOUT THE PROJECT -->
## About The Project

![product-screenshot][product-screenshot1]
![product-screenshot][product-screenshot2]


Create a discrect room chat for discuss with your lover or with your co-workers.<br/>
It's really easy. choose uniq name for your room, and pick cool nickname and get in to the chat.<br/>
Don't forget to share the other participents with the room name =)

### Built With

  * [NodeJs](https://nodejs.org/en/)
  * [Mustache](https://github.com/janl/mustache.js/)



<!-- GETTING STARTED -->
## Getting Started

Follow the next indtuction to run this project on local enviroment.
### Prerequisites

* NodeJs
```sh
npm install npm -g
```

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/dormalk/NodeChatApp
```
2. Install NPM packages
```sh
npm install
```
3. Run app from CMD
```sh
npm start
```
4. Follow the instruction on the opened web page
```sh
http://localhost:3000
```

<!-- USAGE EXAMPLES -->
## Usage
  - Server Side 
    Implements with node.js \
    Hendle receiving/sending messages with 'socket.io' lib
    Only users on the same room can communicate
    Return location of user
    Holds connected users list
  - Client Side
    Implements with HTML,CSS,JS \
    Hendle register new user to room when first login
    Presents list of online users in the same room and their messages
    Optinal send location computer location to all users in the same room
  - Testing
    Implements with mustache and mocha
    To run tests enter on command line
    ```sh
      npm test
    ```
  - <a href="https://obscure-tundra-27473.herokuapp.com/" target="_blank">Link to Chat App</a>
<!--_For more examples, please refer to the [Documentation](https://example.com)_-->



<!-- ROADMAP -->
<!--## Roadmap

See the [open issues](https://github.com/dormalk/NodeChatApp/issues) for a list of proposed features (and known issues).



CONTRIBUTING
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

-->

<!-- LICENSE
## License

Distributed under the MIT License. See `LICENSE` for more information.

-->

<!-- CONTACT -->
## Contact

Dor Malka - [dormalk@gmail.com](mailto:dormalk@gmail.com)

Project Link: [https://github.com/dormalk/NodeChatApp](https://github.com/dormalk/NodeChatApp)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

  * [NodeJs](https://nodejs.org/en/)
  * [Mustache](https://github.com/janl/mustache.js/)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/dormalk/NodeChatApp.svg?style=flat-square
[contributors-url]: https://github.com/dormalk/NodeChatApp/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dormalk/NodeChatApp.svg?style=flat-square
[forks-url]: https://github.com/dormalk/NodeChatApp/network/members
[stars-shield]: https://img.shields.io/github/stars/dormalk/NodeChatApp.svg?style=flat-square
[stars-url]: https://github.com/dormalk/NodeChatApp/stargazers
[issues-shield]: https://img.shields.io/github/issues/dormalk/NodeChatApp.svg?style=flat-square
[issues-url]: https://github.com/dormalk/NodeChatApp/issues
[license-shield]: https://img.shields.io/github/license/dormalk/NodeChatApp.svg?style=flat-square
[license-url]: https://github.com/dormalk/NodeChatApp/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/dor-malka-444b94116/
[product-screenshot1]: https://i.imgur.com/xovoFwG.png
[product-screenshot2]: https://i.imgur.com/Vzlp38V.png
