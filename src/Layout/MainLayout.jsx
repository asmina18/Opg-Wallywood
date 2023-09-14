import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navigation/Navigation";
import {Header} from '../components/Header/Header'
import{Outlet} from 'react-router-dom'
import style from './MainLayout.module.scss'



export const MainLayout = (props) => {

    return (
        <div className={style.layoutStyle}>
            <Header/>
            <Navigation />
            <Outlet/>
            <Footer />
        </div>
    );
};