import React from "react";
import { Container, Row, Col, CardColumns, Card } from "react-bootstrap";
// import { RightCard, LeftCard, BackgroundCard } from "../components/MyCards/";
import BudgetIMG from "../projects/budget-app-screenshot.png";
import CanIEatItIMG from "../projects/Can-I-Eat-It-Screenshot.png";
import EmployeeDirectoryIMG from "../projects/Employee-Directory-React.png";
import KeyboardKeyboardIMG from "../projects/keyboardkeyboard_screengrab.png";
import SpaceLYIMG from "../projects/spaceLY.png";
import WorkoutTrackerIMG from "../projects/workout_tracker_stats_dashboard.png";

//it'd be cool if this info was scraped from github instead of hardcoded
//maybe there should be a github scrapper to grab repo name, deployements, and descriptions based off provided github url
let currentProjects = [
  {
    name: "SpaceLY 🌟",
    image: SpaceLYIMG,//"public/projects/spaceLY.png",//path.join(__dirname, "..", "..", "public", "projects", "spaceLY.png"),
    githubLink: "https://github.com/jodoedjr/SpaceLY",
    deployedLink: "https://nameless-reaches-15845.herokuapp.com/",
    description: "SpaceLY is a sever app/localized night sky visualizer, with Point-of-interest database functionality built on VirtualSky."
  },
  {
    name: "Employee Directory (React)",
    image: EmployeeDirectoryIMG,
    githubLink: "https://github.com/jodoedjr/Employee-Directory-React",
    deployedLink: "https://jodoedjr.github.io/Employee-Directory-React/",
    description: "This demo app uses React Hooks to populate, filter, order, and rerender a sample employee directory (Data provided by randomuser.me/api)"
  },
  {
    name: "Can I Eat It? 🌟",
    image: CanIEatItIMG,
    githubLink: "https://github.com/jodoedjr/Food-Allergy-App",
    deployedLink: "https://jodoedjr.github.io/Food-Allergy-App/",
    description: "A kid-friendly web application that allows kids to check if a food item is safe for their allergies before consumption and suggests alternatives if not."
  },

  {
    name: "Online-Offline Budget Tracker",
    image: BudgetIMG,
    githubLink: "https://github.com/jodoedjr/Online-Offline-Budget-Tracker",
    deployedLink: "https://calm-tundra-97197.herokuapp.com/",
    description: "Persistent cached online/offline budget tracker server app using IndexedDB and MongoDB Atlas"
  },
  {
    name: "Workout Tracker",
    image: WorkoutTrackerIMG,
    githubLink: "https://github.com/jodoedjr/WorkoutTracker",
    deployedLink: "https://limitless-sea-39229.herokuapp.com/",
    description: "MongoDB/Mongoose Workout Tracking App"
  },
  {
    name: "Virtual Piano",
    image: KeyboardKeyboardIMG,
    githubLink: "https://github.com/jodoedjr/VirtualPiano",
    deployedLink: "https://jodoedjr.github.io/VirtualPiano/",
    description: "This very simple app implements a very basic 1-octave keyboard-controlled keyboard"
  }
]

// shuffleArray(currentProjects);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Projects = () => {
  return (
    <Container>
      <CardColumns>


        <Card bg="success" text="white" className="text-center p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>
              Take a look at some of the things I've worked on!
            </p>
            {/* <footer className="blockquote-footer">
              <small className="text-muted">
                <i>Please</i>
              </small>
            </footer> */}
          </blockquote>

        </Card>
        {currentProjects.map((proj, index) =>
          <Card key={index}>
            <a href={proj.deployedLink}><Card.Img src={proj.image} /></a>
            <Card.Body>
              <a href={proj.githubLink}><Card.Title>{proj.name}</Card.Title></a>
              <Card.Text>{proj.description}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </CardColumns>
    </Container>
  )
}

export default Projects;