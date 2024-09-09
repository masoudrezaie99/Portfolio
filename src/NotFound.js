import { Link } from "react-router-dom";


const notFound = () => {
    return ( 
        <div className="container container-flex">
            <main role="main">
                <h2>Page is not Found</h2>
                <Link to="/">Back to HomePage</Link>
            </main>

        </div>
     );
}
 
export default notFound;