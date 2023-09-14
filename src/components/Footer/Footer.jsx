import style from './Footer.module.scss'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaPinterestP } from 'react-icons/fa'


export const Footer = () => {
    return (
        <footer className={style.footerStyle}>

            <div className={style.footerContainer}>

                <div className={style.adress}>
                    <h2>Wallywood</h2>
                    <address>
                        Øster Uttrupvej 1<br />
                        9000 Aalborg
                    </address>
                </div>

                <div className={style.info}>
                    <span>CVR: 12345678</span>
                    <span>MAIL: info@wallywood.dk</span>
                    <span>MOBIL: +45 9812 3456</span>
                </div>
            </div>
            <div className={style.icons}>
                <BsInstagram size={30} />
                <AiFillTwitterCircle size={30} />
                <FaPinterestP size={30} />
                <BsFacebook size={30} />
            </div>

        </footer>
    )
}