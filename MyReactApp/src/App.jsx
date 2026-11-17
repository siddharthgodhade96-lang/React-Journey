
import './App.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx';
import HomeClassComponent from './ClassComponents/HomeClassComponent.jsx';
import ContactClassComponent from './ClassComponents/ContactClassComponent.jsx';
import PersonalInfo from './PersonalInfo.jsx';

function Greeting() {
  return (<><h1> REACT APPLICATION </h1>
  <h3>start building react project</h3></>);
}

 ;

function Goodby() {
  return (<><h4>Steps to build react project</h4>
  <h5>1. Create project using this command in that directory " npm create vite@latest project name. "</h5></>);
 }

 export default function App() {
  let firstName = "John";
  let lastName = "Doe";
  let email = "john.doe@example.com";

  return (
    <>
      <Greeting />
      <Goodby />
      <Home />
      <HomeClassComponent />
      <About />
      <Contact />
      <ContactClassComponent />
      <PersonalInfo firstName={firstName} lastName={lastName} email={email} favColor={"blue"} />
    </>
  );
}

