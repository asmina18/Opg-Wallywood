import { useEffect, useState } from "react"
import { Headline } from "../../components/Headline/Headline";
import style from './PostPage.module.scss'
import { Card } from '../../components/Card/Card'




export const PostPage = () => {
    const [movieData, setData] = useState([])
    const [genre, setGenres] = useState([])


    useEffect(() => {
        const url = `http://localhost:4000/poster/list`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(setData);
            })
        const urlType = "http://localhost:4000/genre"
        fetch(urlType)
            .then(res => res.json())
            .then(data => setGenres(data))

    }, [setData])

    return (
        <>


            <div className={style.PlakaterStyle}>
                <Headline>Plakater</Headline>
                <h4>Filter</h4>
                <h3>Genre</h3>
                <nav>
                    <ul>
                        {genre?.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href="">{item.title}</a></li>
                            )

                        })}
                    </ul>
                </nav>
                <form >
                    <h4>Prisområde</h4>
                    <div className={style.inputContainer}>
                        <input type="text" placeholder="0" className="inputText" />
                        <p> - </p>
                        <input type="text" placeholder="3800" className="inputText" />
                        <h5>kr</h5>
                    </div>
                </form>
            </div>
            <Card />

        </>
    );
}

