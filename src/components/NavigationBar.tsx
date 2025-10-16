import {
    NavLink
} from "react-router";

function NavigationBar() {
    return (
        <div className="w-full h-12 bg-green-500 flex justify-around items-center text-lg font-medium ">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </div>
    )
}

export default NavigationBar