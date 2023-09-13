import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { HomePage } from "./Pages/HomePage";
import { PostPage } from './Pages/PostPage'
import { AboutPage } from "./Pages/AboutPage";
import { ContactPage } from './Pages/ContactPage'
// import { LoginPage } from "./Pages/LoginPage";
import { NotFoundPage } from "./Pages/NotFoundPage";

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage title="HOME" />} />
          <Route path='/post' element={<PostPage />} />
          <Route path='/about' element={<AboutPage title="ABOUT" />} />
          <Route path='/contact' element={<ContactPage title='Contact' />} />
          {/* <Route path="/login" element={<LoginPage title="LOGIN"/>}/> */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App
