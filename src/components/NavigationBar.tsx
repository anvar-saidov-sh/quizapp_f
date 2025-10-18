import {
    NavLink
} from "react-router";
import '../App.css'
function NavigationBar() {
    return (
        <div className="w-full h-12 bg-[#0F172A] text-[#CBD5E1] flex justify-between px-5 py-4  items-center text-lg font-medium  list-none">
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
                <button className="text-[15px] bg-[#3B82F6] text-[#FFFFFF] px-3 py-1 rounded-xl border-2 border-[#334155]">
                    <NavLink to="/signin">Sign In</NavLink>
                </button>
                <button className="text-[15px] bg-[#2563EB]  text-[#FFFFFF] px-3 py-1 rounded-xl border-2 border-[#334155]">
                    <NavLink to="/register">Register</NavLink>
                </button>
            </div>
        </div>
    )
}

export default NavigationBar