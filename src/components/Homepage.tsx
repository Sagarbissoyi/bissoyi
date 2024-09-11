
// import Experience from "./Experience";

import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Mail from "./Mail";
import Projects from "./Projects";
import Skills from "./Skills";
import Social from "./Social";



const Homepage=()=>{
    return<>
    
    
        <Header/>
        <About/>
        <Projects/>
        <Skills/>
        {/* <Experience/> */}
        <Contact/>
        <Mail/>
        <Social/>
        
    </>
};
export default Homepage;