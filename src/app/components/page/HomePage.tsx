import "../../resources/css/sections/sectionHome.css"
import SectionAbout from "../sections/SectionAbout/SectionAbout"
import SectionSkills from "../sections/SectionSkills/SectionSkills"
import SectionHome from "../sections/SectionHome/SectionHome"

export default function HomePage() {
    
    return (
       <div className="bg-content-style">
           <SectionHome />
           <SectionAbout />
           <SectionSkills />
       </div>
    )
}  