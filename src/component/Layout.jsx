import { Link } from "react-router-dom";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <Link to="/">Hjem</Link>
                    <Link to="/">Musikk</Link>
                    <Link to="/">Sport</Link>
                    <Link to="/">Teater/Show</Link>
                </nav>
            </header>
            {children}
            <footer>
                <p>Attribution-link til APIet skal ligge i footer-seksjonen av applikasjonen</p> {/* La inn fra huskelista til leveringen - Malene*/}
            </footer>
        </>
    )
}