import {
    NavLink
} from "react-router";
import AdbIcon from '@mui/icons-material/Adb';
import '../App.css'
function NavigationBar() {
    return (
        <div className="w-full h-12 bg-green-500 text-white flex justify-between px-5 py-4  items-center text-lg font-medium  list-none">
            <h2 className="text-3xl p-3"><NavLink to="/">Quizzy</NavLink></h2>
            <div className="flex gap-8">
                <li>
                    <NavLink to="/quiz">Quiz</NavLink>
                </li>
                <li>
                    <NavLink to="/weeklyquiz">Weekly Quiz</NavLink>
                </li>
                <li>
                    <NavLink to="/rewards">Rewards</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </div>
            <div>
                <li>
                    <NavLink to="/signin">Sign In</NavLink>
                </li>
                <li>
                    <NavLink to="/register">Register</NavLink>
                </li>
            </div>
        </div>
    )
}

export default NavigationBar