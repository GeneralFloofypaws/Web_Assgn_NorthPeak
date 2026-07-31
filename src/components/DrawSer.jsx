export default function DrawSer({ service, onClose }) {

    if (!service) return null;

    return (

        <aside className="drawer">

            <button
                className="close-btn"
                onClick={onClose}
            >
                ✕
            </button>

            <p className="section-tag">

                SERVICE

            </p>

            <h2>

                {service.title}

            </h2>

            <p>

                {service.tagline}

            </p>

            <p>

                {service.description}

            </p>

            <h3>

                Deliverables

            </h3>

            <ul>

                {service.deliverables.map(item => (

                    <li key={item}>

                        ✓ {item}

                    </li>

                ))}

            </ul>

        </aside>

    );

}