import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navigation/Navigation";
import {Header} from '../components/Header/Header'



export const MainLayout = (props) => {

    return (
        <div>
            <Header/>
            <Navigation />
            <Footer />
        </div>
    );
};