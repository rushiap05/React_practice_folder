
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
            <div className="navbar_scroll">
                <NavLink className={({ isActive }) => isActive ? "active_class" : "non_active"} to="/">
                    About us
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active_class" : "non_active"} to="/contact">
                    Contact
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active_class" : "non_active"} to="/apple">
                    Apple
                </NavLink>
            </div>
        </>
    )
}