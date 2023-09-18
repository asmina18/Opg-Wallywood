import style from './Headline.module.scss'

export const Headline=({children})=>{
    return(

        <h1 className={style.HeadlineStyle}>{children}</h1>
    )
}