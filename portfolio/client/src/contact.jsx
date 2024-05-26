/* contact.jsx, Che Shing Winson Li, 301330329, 2024-05-26 */
export default function Contact() {
    return (
        <>
            <p class="title">Contact Me</p>

            <p>Email: cli245@my.centennialcollege.ca</p>
            <p>Mobile: (437) 436-7538</p>
            <hr></hr>
            <div class="main-content">
                <p class="sub-title">Let's Keep in Touch!</p>
                <form id="contact-form">
                    <label>First Name<span class="required">*</span></label>
                    <input type="text" placeholder="First Name" name="firstName" required></input>
                    <br/><br/>
                    <label>Last Name<span class="required">*</span></label>
                    <input type="text" placeholder="Last Name" name="lastName" required></input>
                    <br/><br/>
                    <label>Email<span class="required">*</span></label>
                    <input type="email" placeholder="example@example.com" name="email" required></input>
                    <br/><br/>
                    <label>Phone</label>
                    <input type="text" placeholder="123-456-7890" name="phone"></input>
                    <br/><br/>
                    <label>Message<span class="required">*</span></label>
                    <textarea type="text" placeholder="Type your message here!" name="message" required></textarea>
                    <p><span class="required">*</span>Required fields</p>
                    <br/><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>

        </>
    );
}