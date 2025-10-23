
function Footer() {
    return (
        <>
            <footer className="bg-gray-200 text-center text-gray-700 py-3 dark:bg-gray-800 dark:text-gray-300 mt-4">
                © {new Date().getFullYear()} QuizApp. All rights reserved.
            </footer>
        </>
    )
}

export default Footer