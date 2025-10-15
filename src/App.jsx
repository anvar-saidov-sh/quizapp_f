import './App.css'
  import { BrowserRouter } from "react-router";
function App() {

  const root = document.getElementById('root');
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  return (
    <>
    </>
  )
}

export default App
