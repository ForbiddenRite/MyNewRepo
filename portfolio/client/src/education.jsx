/* education.jsx, Che Shing Winson Li, 301330329, 2024-05-26 */
export default function Education() {
    return (
        <>
            <p class="title">Education</p>

            <div class="main-content">
                <div className="vertical-timeline">
                    <div className="vertical-timeline-element">
                        <div className="vertical-timeline-element-date">2023 - current</div>
                        <div className="vertical-timeline-element-content">
                            <h3>Software Engineering Technician</h3>
                            <p>Centennial College</p>
                        </div>
                    </div>
                    <div className="vertical-timeline-element">
                        <div className="vertical-timeline-element-date">2012 - 2014</div>
                        <div className="vertical-timeline-element-content">
                            <h3>Electronic and Information Engineering</h3>
                            <p>The Hong Kong Polytechnic University</p>
                        </div>
                    </div>
                    <div className="vertical-timeline-element">
                        <div className="vertical-timeline-element-date">2004 - 2012</div>
                        <div className="vertical-timeline-element-content">
                            <h3>Secondary 1-7</h3>
                            <p>Hong Kong Chinese Women's Club College</p>
                        </div>
                    </div>
                </div>
            </div>

            <p class="title">Other Qualifications</p>

            <div class="main-content">
                <div className="vertical-timeline">
                    <div className="vertical-timeline-element">
                        <div className="vertical-timeline-element-date">2018</div>
                        <div className="vertical-timeline-element-content">
                            <h3>LCCI Level 2 Examination of Book-keeping & Accounting</h3>
                            <p>Certificate of Merit</p>
                        </div>
                    </div>
                    <div className="vertical-timeline-element">
                        <div className="vertical-timeline-element-date">2018</div>
                        <div className="vertical-timeline-element-content">
                            <h3>LCCI Level 1 Examination of Book-keeping</h3>
                            <p>Certificate of Distinction</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}