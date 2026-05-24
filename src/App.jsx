import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
function App() {

const [mode,setMode]=useState("data");

return(
<>
<Navbar/>

<Hero
mode={mode}
setMode={setMode}
/>

<About
mode={mode}
/>
<Journey mode={mode}/>
<Projects
mode={mode}
/>
<Skills
mode={mode}
/>
<Certificates
mode={mode}
/>
<Contact/>
</>
)
}

export default App;