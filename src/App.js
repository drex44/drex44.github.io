import React, { Component } from "react";
import "./App.css";
import Theme from "./components/Theme";
import { Box, Text } from "rebass";
import { OutsideLink, HeaderLink } from "./components/Links";
import Particles from "./components/Particles";
import Blog from "./Sections/Blog";
import Values from "./Sections/Values";
import Message from "./Sections/Message";
import Navigation from "./Sections/Navigation";
import Footer from "./Sections/Footer";
import Projects from "./Sections/Projects";

class App extends Component {
  render() {
    let projects = [
      {
        link: "https://github.com/drex44/QR-Scanner#qr-scanner",
        title: "QR Scanner React Native App",
        tags: ["react-native", "expo"],
        desc: [
          "A React Native QR code scanner app built using Expo.",
          <b>Features</b>,
          "Scans the QR code with the device camera.",
          "Stores the scanned QR code locally in SQLite.",
          "User can check the previously scanned QR codes at any time by clicking on the History Icon."
        ],
        references: [
          <OutsideLink
            hoverColor="#ff0000"
            href="https://github.com/drex44/QR-Scanner"
          >
            Github
          </OutsideLink>,
          <OutsideLink
            hoverColor="#ff0000"
            href="https://hackernoon.com/react-native-for-beginners-fb3095968acf"
          >
            Medium
          </OutsideLink>
        ]
      },
      {
        link:
          "https://github.com/drex44/good-food-guide#good-food-guide-tadatadasmile",
        title: "Good Food Guide",
        tags: ["reactjs", "nextjs", "nodejs"],
        desc: [
          "A guide to know which foods are good when you have certain disease! I have started the project for newcomers to learn React/NextJS by creating a productive website. I am the maintainer of the repo."
        ],
        references: [
          <OutsideLink
            hoverColor="#ff0000"
            href="https://good-food-guide.now.sh"
          >
            Live website
          </OutsideLink>,
          <OutsideLink
            hoverColor="#ff0000"
            href="https://github.com/drex44/good-food-guide"
          >
            Github
          </OutsideLink>
        ]
      },
      {
        link: "https://github.com/drex44/awesome-react-links",
        title: "Awesome React Links",
        tags: ["react", "sass", "npm"],
        desc: [
          "An NPM Package: A collection of animated links/ anchor tags. This can be used on any clickable element.",
          "All the links on this website are it's example."
        ],
        references: [
          <OutsideLink
            hoverColor="#ff0000"
            href="https://awesome-react-links.netlify.com"
          >
            Demo and Usage
          </OutsideLink>,
          <OutsideLink
            hoverColor="#ff0000"
            href="https://github.com/drex44/awesome-react-links"
          >
            Github
          </OutsideLink>,
          <OutsideLink
            hoverColor="#ff0000"
            href="https://www.npmjs.com/package/awesome-react-links"
          >
            NPM
          </OutsideLink>
        ]
      },
      {
        link: "https://github.com/drex44/bulletin#bulletin",
        title: "Bulletin",
        tags: ["react", "nextjs", "prismic.io"],
        desc: [
          <Text>
            Simple website to showcase the use of Prismic.io and NextJs to
            develop dynamic website for business persons. All the content is
            coming from Prismic.io CMS. the article is available on{" "}
            <OutsideLink
              hoverColor="#ff0000"
              href="https://medium.com/wineofbits/host-your-dynamic-website-without-spending-a-penny-d1ba91501a62"
            >
              <b>Medium</b>
            </OutsideLink>
          </Text>
        ],
        references: [
          <OutsideLink
            hoverColor="#ff0000"
            href="https://bulletin-tutorial.surge.sh"
          >
            Demo
          </OutsideLink>,
          <OutsideLink
            hoverColor="#ff0000"
            href="https://github.com/drex44/bulletin"
          >
            Github
          </OutsideLink>
        ]
      },
      {
        link: "https://tracklist-alpha.surge.sh",
        title: "TrackList",
        tags: [
          "React",
          "Redux",
          "React-router",
          "Semantic-ui",
          "Axios",
          "Go",
          "Echo",
          "MongoDB"
        ],
        desc: [
          "My first project in ReactJS. A Website to show checklists for general purpose or personal tasks. General purpose checklists can be published on the website and other users can add it to their own collection. Users can track all of his/her checklists via his/her dashboard. All features will be shown on the live website."
        ],
        references: [
          <OutsideLink
            hoverColor="#ff0000"
            href="https://tracklist-alpha.surge.sh"
          >
            Demo
          </OutsideLink>,
          <OutsideLink
            hoverColor="#ff0000"
            href="https://drex44.github.io/TrackList-react-frontend"
          >
            React Code
          </OutsideLink>,
          <OutsideLink
            hoverColor="#ff0000"
            href="https://drex44.github.io/TrackList-go-backend"
          >
            Golang Code
          </OutsideLink>
        ]
      },
      {
        link: "https://drex44.github.io/Notification-Bell",
        title: "Notification Bell",
        tags: ["Php", "Silex", "Webhook", "Ultrahook"],
        desc: [
          "A quick experiment to show use case of webhooks using a LAMP stack (though we don’t need MongoDb).",
          "It rings a bell sound whenever someone makes a payment on your site given you use stripe payment gateway or whenever someone makes a new commit to your project on github."
        ],
        references: [
          <OutsideLink
            hoverColor="#ff0000"
            href="https://github.com/drex44/Notification-Bell"
          >
            Github
          </OutsideLink>
        ]
      },

      {
        link:
          "https://www.freecodecamp.org/certification/drex44/apis-and-microservices",
        title: "APIs and Microservices",
        tags: ["HTML", "css", "Nodejs", "Expressjs", "MongoDB"],
        desc: [
          <Text>
            {" "}
            The goal was to learn express.js and earn{" "}
            <OutsideLink
              hoverColor="#ff0000"
              href="https://www.freecodecamp.org/certification/drex44/apis-and-microservices"
            >
              <b>freecodecamp certificate</b>
            </OutsideLink>{" "}
            for APIs and Microservices.
          </Text>,
          "All projects are also hosted on glitch.com so all can be checked live. links to glitch are given on respective project page and github. I created below projects,",
          <Text>
            <OutsideLink
              hoverColor="#ff0000"
              href="https://drex44.github.io/Timestamp-Microservice"
            >
              <b>Timestamp Microservice</b>
            </OutsideLink>{" "}
            Convert the milliseconds or date to UTC timestamp
          </Text>,
          <Text>
            <OutsideLink
              hoverColor="#ff0000"
              href="https://drex44.github.io/Header-Parser-Microservice/"
            >
              <b>Header Parser Microservice</b>
            </OutsideLink>{" "}
            Check headers of the calling agent
          </Text>,
          <Text>
            <OutsideLink
              hoverColor="#ff0000"
              href="https://drex44.github.io/File-Metadata-Microservice"
            >
              <b>File Metadata Microservice</b>
            </OutsideLink>{" "}
            Accept file and check its headers using multer library
          </Text>,
          <Text>
            <OutsideLink
              hoverColor="#ff0000"
              href="https://drex44.github.io/Exercise-Tracker-REST-API"
            >
              <b>Exercise Tracker REST API</b>
            </OutsideLink>{" "}
            REST services to create user, log its activity and get all
            activities with filter
          </Text>,
          <Text>
            <OutsideLink
              hoverColor="#ff0000"
              href="https://drex44.github.io/URL-Shortener-Microservice"
            >
              <b>URL Shortener Microservice</b>
            </OutsideLink>{" "}
            Return shorted URL which can be used to navigate to original url.
            Just your usual url shortner.
          </Text>
        ],
        references: []
      },

      {
        link: "https://drex44.github.io/Trusted-101s",
        title: "Trusted 101s",
        tags: ["React", "Angular", "Docker", "Kubernetes"],
        desc: [
          "A curated list of 101s verified by developers. nothing more.",
          "There are lots of tutorials and guides out there now but sometimes when you're just starting to learn a new technology, it is difficult to know which source is reliable. Many times, we follow off-topic tutorial resulting in wasting our time. So this is the list of articles, you can rely on confidently."
        ],
        references: [
          <OutsideLink
            hoverColor="#ff0000"
            href="https://drex44.github.io/Trusted-101s/"
          >
            Github
          </OutsideLink>
        ]
      },
      {
        link: "https://drex44.github.io/til",
        title: "Today I Learned",
        tags: ["react", "docker"],
        desc: [
          "- A collection of concise write-ups on small things I learn day to day across a variety of languages and technologies. These are things that don't really warrant a full blog post."
        ],
        references: [
          <OutsideLink hoverColor="#ff0000" href="https://drex44.github.io/til">
            Github
          </OutsideLink>
        ]
      }
    ];
    return (
      <Theme>
        <Box className="App">
          <Particles>
            <Box className="Content">
              <header>
                <Navigation />
              </header>
              <main>
                <Message />
                <Values />
                <Blog />
                <Projects projects={projects} />
                <Text textAlign="center" my={[6, 6]}>
                  <HeaderLink
                    color="grey"
                    href="https://drive.google.com/open?id=1d6SE-SDEFnVettyqsDDZ4uQfBqbgweN1"
                    new
                  >
                    Download Resume
                  </HeaderLink>
                </Text>
              </main>
              <footer>
                <Footer />
              </footer>
            </Box>
          </Particles>
        </Box>
      </Theme>
    );
  }
}

export default App;
