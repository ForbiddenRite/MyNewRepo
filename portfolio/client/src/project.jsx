/* project.jsx, Che Shing Winson Li, 301330329, 2024-05-26 */
export default function Project() {
    return (
        <>
            <p class="title">My Projects</p>

            <div class="main-content-project">
                <div class="table-container">
                    <div class="table-row">
                        <div class="table-cell">
                            <div class="project-title"><a href="http://studentweb.cencol.ca/cli245/assignment3/" target="_blank">Product Page</a></div><br/>
                            <img class="project-image" src="./src/assets/project-1-product-page.png"></img>
                            <div class="project-desc">A sample product page showcasing the page design with CSS.</div>
                        </div>
                    </div>
                    <div class="table-row">
                        <div class="table-cell">
                            <div class="project-title"><a href="http://studentweb.cencol.ca/cli245/project/index.html" target="_blank">Realty Webpage</a></div><br/>
                            <img class="project-image" src="./src/assets/project-2-realty.png"></img>
                            <div class="project-desc">A website for a local real estate agent.</div>
                        </div>
                    </div>
                    <div class="table-row">
                        <div class="table-cell">
                            <div class="project-title"><a href="./src/docs/linux_musicLibrary_report.pdf" target="_blank">Linux Music Database</a></div><br/>
                            <img class="project-image" src="./src/assets/project-3-linux-music-db.png"></img>
                            <div class="project-desc">The project is based on fetching music data from a free service provided in Rapid API, which will return a response in a JSON format. Linux packages (curl and jq) are used in firing API calls and breaking down the JSON content. I was responsible for API configuration, data storage management, data structure design, and data diagnosing. The project offered a great chance for me to enrich knowledge and acquire experience related to using linux system.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}