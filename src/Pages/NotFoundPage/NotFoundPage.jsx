

import { Link } from "react-router-dom"

export const NotFoundPage = () => {

    return (
        <>
            <h1>404 Not found</h1>
            <Link to="/">Click here to go back</Link>
        </>
    )
}