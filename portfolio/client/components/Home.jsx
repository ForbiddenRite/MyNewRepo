/* Home.jsx, Che Shing Winson Li, 301330329, 2024-05-26 */
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div class="home">
                <div class="title">Welcome to My Portfolio</div>
                <div class="sub-title">Discover my work and explore my journey as a developer.</div>
                <Link to="/about" class="cta">Learn More</Link>
            </div>
            <div class="mission">
                <h2>My Mission</h2>
                <p>I am committed to creating innovative and user-friendly solutions that empower businesses and enhance the digital experience for their customers. Through my work, I strive to push the boundaries of what's possible and deliver exceptional results.</p>
            </div>
        </>
    )
}