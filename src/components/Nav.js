import { NavLink } from "react-router-dom";
import navdumbell from "../assets/img/navdumbell.png";
import navprogression from "../assets/img/navprogression.png";
import navworkoutplan from "../assets/img/navworkoutplan.png";
import navprofil from "../assets/img/navprofil.png";

export default function Nav() {
    return (
        <nav>
            <NavLink to="/posts"><img src= {navworkoutplan} alt="nav icon" ></img><p>Træningsplaner</p></NavLink>
            <NavLink to="/ovelser"><img src= {navdumbell} alt="nav icon" ></img><p>Øvelser</p></NavLink>    
            <NavLink to="/fremskridt"><img src= {navprogression} alt="nav icon" ></img><p>Fremskridt</p></NavLink>
            <NavLink to="/profile"><img src= {navprofil} alt="nav icon" ></img><p>Profil</p></NavLink>
        </nav>
    );
}
