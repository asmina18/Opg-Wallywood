import { useEffect, useState } from 'react'
import style from './Card.module.scss'
import { OnClickButton } from '../OnClickButton/OnClickButton';

export const Card = () => {
    const [post, setPost] = useState([]); // post eto pustoy massiv
    useEffect(() => {
        const url = `http://localhost:4000/poster/list/drama`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPost(data)
            })
    }, [])

    // console.log(post);
    return (
        <>
            <div className={style.cardContainer}>
                <div className={style.imgContainer}>

                {post?.map((item, index) => {
                    return (
                        <figure key={index}>
                            <img src={item.image} alt={item.name} />
                            <figcaption>
                                <p>{item.name}</p>
                                <h4>{item.price}kr</h4>
                                <OnClickButton>Læg i kurv</OnClickButton>
                            </figcaption>
                        </figure>
                    )
                })}
                </div>
            </div>
            <div className={style.movieDetails}></div>

            {/* <div className={style.overview}>
            <h1>overview</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo deserunt alias dolorem quis ullam accusantium corrupti molestias. Aperiam ad porro alias accusantium possimus voluptatem fuga quia, amet, nemo qui ab.
        </div> */}

        </>
    )
}
