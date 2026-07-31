import logo from "../assets/logo.png";

export default function Hero(){

    return(

        <section className="hero">

            <div className="hero-left">

                <p className="section-tag">

                    NORTHPEAK DIGITAL

                </p>

                <h1>

                    Complex ideas.

                    <br/>

                    Clear digital products.

                </h1>

                <p>

                    We help ambitious companies transform complex systems into experiences people instantly understand.

                </p>

                <div className="hero-buttons">

                    <button>

                        Start a Project

                    </button>

                    <button className="ghost">

                        Explore Services

                    </button>

                </div>

            </div>

            <div className="hero-right">

                <div className="hero-logo">

                    <img
                         src={logo}
                         alt="NorthPeak Digital logo"
                         className="logo-image"
                    />

                </div>

            </div>

        </section>

    );

}