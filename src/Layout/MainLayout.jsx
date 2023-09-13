import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navigation/Navigation";
import {Header} from '../components/Header/Header'
import{Outlet} from 'react-router-dom'



export const MainLayout = (props) => {

    return (
        <div>
            <Header/>
            <Navigation />
            <Outlet/>
            <Footer />
        </div>
    );
};