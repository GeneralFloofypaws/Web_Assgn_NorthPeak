import services from "../data/services";
import DrawSer from "./DrawSer";
import useDraw from "../hook/UseDraw";

export default function Services() {

    const {

        selected,

        openDrawer,

        closeDrawer

    } = useDraw();

    return (

        <section
            id="services"
            className="services"
        >

            <p className="section-tag">

                BEARING 02

            </p>

            <h2 className="section-title">

                Services

            </h2>

            <div className="service-grid">

                {

                    services.map(service => (

                        <button

                            key={service.id}

                            className="service-card"

                            onClick={() => openDrawer(service)}

                        >

                            <span>

                                0{service.id}

                            </span>

                            <h3>

                                {service.title}

                            </h3>

                            <p>

                                {service.tagline}

                            </p>

                        </button>

                    ))

                }

            </div>

            <DrawSer

                service={selected}

                onClose={closeDrawer}

            />

        </section>

    );

}