export default function Contacts() {

    return (

        <section
            id="contact"
            className="contact"
        >

            <p className="section-tag">

                BEARING 05

            </p>

            <h2 className="section-title">

                Start the Conversation

            </h2>

            <form className="contact-form">

                <input
                    type="text"
                    placeholder="Your name"
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    required
                />

                <textarea
                    rows="6"
                    placeholder="Tell us about your project..."
                    required
                ></textarea>

                <button className="np-btn">

                    Send Message

                </button>

            </form>

        </section>

    );

}