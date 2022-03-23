import { NavLink } from "react-router-dom";
import navdumbell from "../assets/img/navdumbell.png";
import navprogression from "../assets/img/navprogression.png";
import navworkoutplan from "../assets/img/navworkoutplan.png";
import navprofil from "../assets/img/navprofil.png";
import navexercises from "../assets/img/navexercises.png";

export default function Nav() {
    return (
        <nav>
            <NavLink to="/create"><img src= {navdumbell} alt="nav icon" ></img><p>Min træning</p></NavLink>
            <NavLink to="/øvelser"><img src= {navexercises} alt="nav icon" ></img><p>Øvelser</p></NavLink>
            <NavLink to="/posts"><img src= {navworkoutplan} alt="nav icon" ></img><p>Træningsplaner</p></NavLink>
            <NavLink to="/fremskridt"><img src= {navprogression} alt="nav icon" ></img><p>Fremskridt</p></NavLink>
            <NavLink to="/profile"><img src= {navprofil} alt="nav icon" ></img><p>Profil</p></NavLink>
        </nav>
    );
}
