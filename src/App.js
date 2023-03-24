import Home from './Home'
import About from './About.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrList from './PrList'
function App() {
  return (
      <BrowserRouter>
         
          <Routes>
              <Route index element={<Home />} />
              <Route path='/PrList' element={<PrList />} />
              <Route path='/About' element={<About />} />
          </Routes>
        
      </BrowserRouter>
  );
}

export default App;
