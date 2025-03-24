import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ClothingPage  from './Pages/ClothingPage';
import AccessoriesPage from './Pages/AccessoriesPage';
import ElectronicsPage from './Pages/ElectronicsPage';
import HomeGoodsPage from './Pages/HomeGoodsPage';
function App() {
  return(
  <Router>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/ClothingPage" element={<ClothingPage />} />
      <Route path="/AccessoriesPage" element={<AccessoriesPage />} />
      <Route path="/ElectronicsPage" element={<ElectronicsPage />} />
      <Route path="/HomeGoodsPage" element={<HomeGoodsPage />} />
    </Routes>
  </Router>
  )
}

export default App;
