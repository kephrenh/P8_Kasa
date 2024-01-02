import { Link } from "react-router-dom";

export default function ErrorPage() {

    return (
        <main id="error-page">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas</h2>
            <Link to="/">
               <span>
                  Retourner sur la page d'accueils
               </span> 
            </Link>
        </main>
    )
}