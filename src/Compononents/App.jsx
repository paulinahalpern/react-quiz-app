import { HashRouter as Router,Routes,Route } from "react-router-dom";
import {Accessibility} from "../Pages/accessibility.jsx";
import {Css} from "../Pages/css.jsx";
import {Home} from "../Pages/home.jsx";
import {Html} from "../Pages/html.jsx";
import {Javascript} from "../Pages/javascript.jsx";

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/accessibility" element={<Accessibility/>}/>
        <Route path="/css" element={<Css/>}/>
        <Route path="/html" element={<Html/>}/>
        <Route path="/javascript" element={<Javascript/>}/>
      </Routes>
    </Router>
  )
}
