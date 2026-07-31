export default function Prices() {

    return (

        <section
            id="pricing"
            className="pricing"
        >

            <p className="section-tag">
                BEARING 04
            </p>

            <h2 className="section-title">
                Choose Your Starting Point
            </h2>

            <div className="price-grid">

                <article className="price-card">

                    <h3>Basecamp</h3>

                    <h4>For early ideas</h4>

                    <ul>
                        <li>✓ Product Strategy</li>
                        <li>✓ Brand Direction</li>
                        <li>✓ UX Workshop</li>
                    </ul>

                    <button className="np-btn">Let's Talk</button>

                </article>

                <article className="price-card featured">

                    <span className="badge">
                        Most Popular
                    </span>

                    <h3>Ascent</h3>

                    <h4>For growing businesses</h4>

                    <ul>
                        <li>✓ Everything in Basecamp</li>
                        <li>✓ UX/UI Design</li>
                        <li>✓ Web Development</li>
                        <li>✓ Launch Support</li>
                    </ul>

                    <button className="np-btn">Let's Talk</button>

                </article>

                <article className="price-card">

                    <h3>Summit</h3>

                    <h4>End-to-end partnership</h4>

                    <ul>
                        <li>✓ Dedicated Team</li>
                        <li>✓ Growth Strategy</li>
                        <li>✓ Analytics</li>
                        <li>✓ Long-term Support</li>
                    </ul>

                    <button className="np-btn">Let's Talk</button>

                </article>

            </div>

        </section>

    );

}