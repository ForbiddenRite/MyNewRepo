/* about.jsx, Che Shing Winson Li, 301330329, 2024-05-26 */
export default function About() {
    return (
        <>
            <p class="title">About Me</p>

            <div class="main-content">
                <div class="about-container">
                    <div class="about-image">
                        <img src="./src/assets/self-portrait.png"></img>
                    </div>
                    <div class="about-content">
                        <p class="name">Li, Che Shing Winson</p>
                        <p class="intro">I have 4 years of experience as a frontend programmer working in an e-commerce company in Hong Kong. I cooperate with other team members in crafting user-friendly and visually appealing websites that provide a seamless experience for site visitors. I have a strong background in HTML5, Java and AngularJS, as well as experience with CSS, and JavaScript. I continuously explore new technologies to deliver innovative solutions.</p>
                    </div>
                </div>
                <p class="resume">View my <a href="./src/docs/resume.pdf" target="_blank">resume</a></p>
            </div>
        </>
    );
}