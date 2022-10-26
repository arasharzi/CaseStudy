import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Components/Main'
import Login from './Components/Login'

function App() 
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/home" element = {<Main />} />
        <Route path ="/" element = {<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
