import { NavLink } from "react-router-dom";
import navdumbell from "../assets/img/navdumbell.png";
import navprogression from "../assets/img/navprogression.png";
import navworkoutplan from "../assets/img/navworkoutplan.png";
import navprofil from "../assets/img/navprofil.png";
import navexercises from "../assets/img/navexercises.png";

export default function Nav() {
    return (
        <nav>
            <NavLink to="/"><img src= {navdumbell} alt="nav icon" ></img> Min træning</NavLink>
            <NavLink to="/create"><img src= {navexercises} alt="nav icon" ></img> Øvelser</NavLink>
            <NavLink to="/profile"><img src= {navworkoutplan} alt="nav icon" ></img> Træningsplaner</NavLink>
            <NavLink to="/"><img src= {navprogression} alt="nav icon" ></img> Fremskridt</NavLink>
            <NavLink to="/"><img src= {navprofil} alt="nav icon" ></img> Profil</NavLink>
        </nav>
    );
}
