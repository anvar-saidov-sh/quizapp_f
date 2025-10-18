import {
    NavLink
} from "react-router";
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
            <div className="flex gap-5">
                <button className="text-[15px] bg-[#ffffff] text-[#000000] px-3 py-1 rounded-md ">
                    <NavLink to="/signin">Sign In</NavLink>
                </button>
                <button className="text-[15px] bg-[#ffffff] text-[#000000] px-3 py-1 rounded-md ">
                    <NavLink to="/register">Register</NavLink>
                </button>
            </div>
        </div>
    )
}

export default NavigationBar