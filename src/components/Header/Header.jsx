import style from './Header.module.scss'
import { BsFillBasketFill } from 'react-icons/bs'

export const Header = () => {

    return (
        <header className={style.headerStyle}>
            <h1>Wallywood</h1>
            <BsFillBasketFill size={30} />
        </header>
    )

}