
import '../App.css'
import Login from './Login'
// import { ArrowForward, Biotech, Bloodtype, Functions, Language, Newspaper, Science } from "@mui/icons-material"

function Home() {
  return (
    <>
      <Login />
    </>
  )
}

export default Home
/*
<div className="text-[#CBD5E1] w-[40%] text-center mx-auto my-20 flex flex-col gap-6 items-center justify-center py-20 px-10 rounded-lg text-[20px] font-semibold">
        <h1 className="text-[40px] font-extrabold">Learn, Quiz, Earn Rewards</h1>
        <p>Join thousands of students and teachers on the ultimate quiz platform. Test your knowledge, compete with peers, and win exciting rewards</p>
        <div className="flex gap-6 mt-4">
          <button className="border-2 bg-[#0F172A] hover:bg-[#2563EB] px-4 py-2 rounded-xl text-[#fff] cursor-pointer">Get Started</button>
          <button className="border-2 bg-[#ffffff] px-4 py-2 rounded-xl text-[#0F172A] cursor-pointer">Explore Quizzes</button>
        </div>
      </div>
      <div className="text-[#CBD5E1] w-[100%] text-center mx-auto my-20 flex flex-col gap-6 items-center justify-center py-20 px-10 rounded-lg text-[16px] font-semibold">
        <h1 className="text-[40px] font-extrabold">Explore Quiz Categories</h1>
        <p>Discover quizzes across various subjects to test and expand your knowledge</p>
        <div className="w-full">
          <div className="grid grid-cols-3 gap-6">
            <div className="border-t-2 border-[#2563EB] p-6 rounded-lg flex bg-[#1E293B] justify-between text-start gap-4 hover:text-[#fff]">
              <Science className="cursor-pointer hover:text-[#2563EB]" sx={
                {
                  fontSize: '54px',
                }
              } />
              <div className="flex flex-col gap-3">
                <h2>Science & Tech</h2>
                <p>Test your knowledge in science & tech with our challenging quizzes</p>
                <a href="" className="cursor-pointer text-[#2563EB]">Explore Quizzes <ArrowForward  className="cursor-pointer text-[#2563EB]" sx={
                {
                  fontSize: '34px',
                }
              } /></a>
              </div>
            </div>
            <div className="border-t-2 border-[#22C55E] p-6 rounded-lg flex bg-[#1E293B] justify-between text-start gap-4 hover:text-[#fff]">
              <Functions className="cursor-pointer hover:text-[#22C55E]" sx={
                {
                  fontSize: '54px',
                }
              } />
              <div className="flex flex-col gap-3">
                <h2>Mathematics</h2>
                <p>Test your knowledge in mathematics with our challenging quizzes</p>
                <a href="" className="cursor-pointer text-[#22C55E]">Explore Quizzes <ArrowForward  className="cursor-pointer text-[#22C55E]" sx={
                {
                  fontSize: '34px',
                }
              } /></a>
              </div>
            </div>
            <div className="border-t-2 border-[#A855F7] p-6 rounded-lg flex bg-[#1E293B] justify-between text-start gap-4 hover:text-[#fff]">
              <Biotech className="cursor-pointer hover:text-[#A855F7]" sx={
                {
                  fontSize: '54px',
                }
              } />
              <div className="flex flex-col gap-3">
                <h2>Chemistry</h2>
                <p>Test your knowledge in chemistry with our challenging quizzes</p>
                <a href="" className="cursor-pointer text-[#A855F7]">Explore Quizzes <ArrowForward  className="cursor-pointer text-[#A855F7]" sx={
                {
                  fontSize: '34px',
                }
              } /></a>
              </div>
            </div>
            <div className="border-t-2 border-[#EC4899] p-6 rounded-lg flex bg-[#1E293B] justify-between text-start gap-4 hover:text-[#fff]">
              <Bloodtype className="cursor-pointer hover:text-[#EC4899]" sx={
                {
                  fontSize: '54px',
                }
              } />
              <div className="flex flex-col gap-3">
                <h2>Biology</h2>
                <p>Test your knowledge in biology with our challenging quizzes</p>
                <a href="" className="cursor-pointer text-[#EC4899]">Explore Quizzes <ArrowForward  className="cursor-pointer text-[#EC4899]" sx={
                {
                  fontSize: '34px',
                }
              } /></a>
              </div>
            </div>
            <div className="border-t-2 border-[#F59E0B] p-6 rounded-lg flex bg-[#1E293B] justify-between text-start gap-4 hover:text-[#fff]">
              <Language className="cursor-pointer hover:text-[#F59E0B]" sx={
                {
                  fontSize: '54px',
                }
              } />
              <div className="flex flex-col gap-3">
                <h2>General Knowledge</h2>
                <p>Test your knowledge in general knowledge with our challenging quizzes</p>
                <a href="" className="cursor-pointer text-[#F59E0B]">Explore Quizzes <ArrowForward  className="cursor-pointer text-[#F59E0B]" sx={
                {
                  fontSize: '34px',
                }
              } /></a>
              </div>
            </div>
            <div className="border-t-2 border-[#EF4444] p-6 rounded-lg flex bg-[#1E293B] justify-between text-start gap-4 hover:text-[#fff]">
              <Newspaper className="cursor-pointer hover:text-[#EF4444]" sx={
                {
                  fontSize: '54px',
                }
              } />
              <div className="flex flex-col gap-3">
                <h2>Current Affairs</h2>
                <p>Test your knowledge in current affairs with our challenging quizzes</p>
                <a href="" className="cursor-pointer text-[#EF4444]">Explore Quizzes <ArrowForward  className="cursor-pointer text-[#EF4444]" sx={
                {
                  fontSize: '34px',
                }
              } /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
*/