import './App.css'
import{MainLayout} from './components/Layout/MainLayout.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


    return (

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
         
        </Route>
      </Routes>
    </BrowserRouter>



    )
  }

export default App
