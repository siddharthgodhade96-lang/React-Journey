import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

export default function App() {
  return (
    <div>
        <h1>Welcome to Kodest</h1>
        <p>This is a simple React application demonstrating routing using React Router.</p>
        <p>Use the navigation links below to explore different pages.</p>
      <Navbar />
      <Routes>
      <Route path="/home" element= {<Home/>}> </Route>
      <Route path="/about" element= {<About/>}> </Route>
      <Route path="/contact" element= {<Contact/>}> </Route>
      </Routes>
    </div>
  )
}
