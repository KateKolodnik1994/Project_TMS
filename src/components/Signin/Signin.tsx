import { Link, useParams } from "react-router-dom";

const Signin = () => {
    const params = useParams();

    return (
        <>
            <h1>SIGN IN PAGE: {params.id}</h1>
            <Link to={'/'}> Go to Home </Link>
        </>
    )
}

export default Signin;