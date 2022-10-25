import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Components/Main'

function App() 
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/home" element = {<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
