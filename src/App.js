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
import HelmetHead from "./components/helmet";

class App extends Component {
  render() {
    const projectLink = { hoverColor: "#ff0000" };

    let projects = [
      {
        link: "https://drex44.github.io/QR-Scanner/",
        title: "QR Scanner React Native App",
        tags: ["React-Native", "Expo"],
        desc: [
          "A React Native QR code scanner app, built using Expo.",
          <b>Features</b>,
          "Scans the QR code with the device camera.",
          "Stores the scanned QR code locally in SQLite.",
          "A user can check the previously scanned QR codes at any time by checking the History screen."
        ],
        references: [
          <OutsideLink
            {...projectLink}
            href="https://drex44.github.io/QR-Scanner/"
          >
            Preview
          </OutsideLink>,
          <OutsideLink
            {...projectLink}
            href="https://expo.io/@drex44/qr-scanner"
          >
            Live Preview
          </OutsideLink>,
          <OutsideLink
            {...projectLink}
            href="https://github.com/drex44/QR-Scanner"
          >
            Github
          </OutsideLink>,
          <OutsideLink
            {...projectLink}
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
        tags: ["ReactJS", "NextJS", "NodeJS"],
        desc: [
          <Text>
            A guide to know which foods are good when you have a certain
            disease! I am the maintainer of the repository and we have had a
            total of 25{" "}
            <OutsideLink
              {...projectLink}
              href="https://good-food-guide.netlify.com/contributors"
            >
              contributors
            </OutsideLink>
            . The goal of the repository is to serve as a ground for newcomers
            to learn ReactJS/NextJS by creating a productive website.
          </Text>
        ],
        references: [
          <OutsideLink
            {...projectLink}
            href="https://good-food-guide.netlify.com"
          >
            Live website
          </OutsideLink>,
          <OutsideLink
            {...projectLink}
            href="https://github.com/drex44/good-food-guide"
          >
            Github
          </OutsideLink>
        ]
      },
      {
        link: "https://github.com/drex44/awesome-react-links",
        title: "Awesome React Links",
        tags: ["ReactJS", "SASS", "NPM"],
        desc: [
          "An NPM Package: A collection of fully customizable animated links/ anchor tags. It can be used on any clickable elements.",
          "All the links on this website are created using this package."
        ],
        references: [
          <OutsideLink
            {...projectLink}
            href="https://awesome-react-links.netlify.com"
          >
            Demo and Usage
          </OutsideLink>,
          <OutsideLink
            {...projectLink}
            href="https://github.com/drex44/awesome-react-links"
          >
            Github
          </OutsideLink>,
          <OutsideLink
            {...projectLink}
            href="https://www.npmjs.com/package/awesome-react-links"
          >
            NPM
          </OutsideLink>
        ]
      },
      {
        link: "https://github.com/drex44/bulletin#bulletin",
        title: "Bulletin",
        tags: ["ReactJS", "NextJS", "Prismic.io"],
        desc: [
          <Text>
            Simple website to showcase the use of{" "}
            <OutsideLink {...projectLink} href="https://prismic.io/">
              <b>Prismic.io CMS</b>
            </OutsideLink>{" "}
            and NextJS to develop dynamic website for business persons.
          </Text>,
          <Text>
            All the content is coming from the prismic.io CMS and a business
            person can use it's admin panel to easily control the content. I
            have written an article on how we can leverage the features of both
            tools. it is available on{" "}
            <OutsideLink
              {...projectLink}
              href="https://medium.com/wineofbits/host-your-dynamic-website-without-spending-a-penny-d1ba91501a62"
            >
              <b>Medium</b>
            </OutsideLink>
            .
          </Text>
        ],
        references: [
          <OutsideLink
            {...projectLink}
            href="https://bulletin-tutorial.surge.sh"
          >
            Demo
          </OutsideLink>,
          <OutsideLink
            {...projectLink}
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
          "ReactJS",
          "Redux",
          "React-Router",
          "Semantic-UI",
          "Axios",
          "Go",
          "Echo",
          "MongoDB"
        ],
        desc: [
          "My first project in ReactJS. A Website to manage checklists for general purpose or personal tasks. General purpose checklists can be made public so that other users can track it/ add it to their own collection.",
          "In simpler terms, Works similarly to a public/private git repository but for checklists instead of a repository.",
          "I used ReactJS in the frontend and Golang in the backend.",
          "* If you checkout the Demo then please Wait for some time on the website to get the public checklist loaded. Free heroku dynos sleeps if not utilized continuously."
        ],
        references: [
          <OutsideLink {...projectLink} href="https://tracklist-alpha.surge.sh">
            Demo
          </OutsideLink>,
          <OutsideLink
            {...projectLink}
            href="https://drex44.github.io/TrackList-react-frontend"
          >
            React Code
          </OutsideLink>,
          <OutsideLink
            {...projectLink}
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
          <Text>
            A quick experiment to show use case of <b>webhooks</b> using a LAMP
            stack (though we don’t need MongoDb).
          </Text>,
          "It rings a bell sound whenever the webhook is called.",
          "For example, whenever someone makes a payment on your site or whenever someone makes a new commit to your project on github."
        ],
        references: [
          <OutsideLink
            {...projectLink}
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
        tags: ["HTML", "CSS", "NodeJS", "ExpressJS", "MongoDB"],
        desc: [
          <Text>
            {" "}
            The goal was to learn express.js and earn{" "}
            <OutsideLink
              {...projectLink}
              href="https://www.freecodecamp.org/certification/drex44/apis-and-microservices"
            >
              <b>freecodecamp certificate</b>
            </OutsideLink>{" "}
            for APIs and Microservices.
          </Text>,
          "All projects are also hosted on glitch.com so each project can be checked live. Links to glitch are given on respective project page and github. During this, I created below projects,",
          <Text>
            <OutsideLink
              {...projectLink}
              href="https://drex44.github.io/Exercise-Tracker-REST-API"
            >
              <b>Exercise Tracker REST API</b>
            </OutsideLink>{" "}
            REST services to create a new user, log its activity and get all the
            activities or some of the activities using filters.
          </Text>,
          <Text>
            <OutsideLink
              {...projectLink}
              href="https://drex44.github.io/URL-Shortener-Microservice"
            >
              <b>URL Shortener Microservice</b>
            </OutsideLink>{" "}
            Just your usual url shortner. Returns a shortened URL which can be
            used to navigate to the original url.
          </Text>,
          <Text>
            <OutsideLink
              {...projectLink}
              href="https://drex44.github.io/Timestamp-Microservice"
            >
              <b>Timestamp Microservice</b>
            </OutsideLink>{" "}
            Convert the milliseconds or date to UTC timestamp.
          </Text>,
          <Text>
            <OutsideLink
              {...projectLink}
              href="https://drex44.github.io/File-Metadata-Microservice"
            >
              <b>File Metadata Microservice</b>
            </OutsideLink>{" "}
            Accept file and check its headers using multer library.
          </Text>,
          <Text>
            <OutsideLink
              {...projectLink}
              href="https://drex44.github.io/Header-Parser-Microservice/"
            >
              <b>Header Parser Microservice</b>
            </OutsideLink>{" "}
            Check headers of the calling agent.
          </Text>
        ],
        references: []
      },

      {
        link: "https://drex44.github.io/Trusted-101s",
        title: "Trusted 101s",
        tags: ["ReactJS", "AngularJS", "Docker", "Kubernetes"],
        desc: [
          "A curated list of 101s verified by developers. nothing more.",
          "There are lots of tutorials and guides out there now but sometimes when you're just starting to learn a new technology, it is difficult to know which source is reliable. Many times, we follow off-topic tutorial resulting in wasting our time. So this is the list of articles, you can rely on confidently."
        ],
        references: [
          <OutsideLink
            {...projectLink}
            href="https://drex44.github.io/Trusted-101s/"
          >
            Github
          </OutsideLink>
        ]
      },
      {
        link: "https://drex44.github.io/til",
        title: "Today I Learned",
        tags: ["ReactJS", "Docker"],
        desc: [
          "A collection of concise write-ups on small things I learn day to day across a variety of languages and technologies. These are things that don't really warrant a full blog post."
        ],
        references: [
          <OutsideLink {...projectLink} href="https://drex44.github.io/til">
            Github
          </OutsideLink>
        ]
      }
    ];
    return (
      <Theme>
        <Box className="App">
          <HelmetHead crispId={"59674e9a-5024-498c-806c-ff38fc41243b"} />
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
