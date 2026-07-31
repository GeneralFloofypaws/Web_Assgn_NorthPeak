import { useState } from "react";

export default function useDraw() {

    const [selected, setSelected] = useState(null);

    const openDrawer = (service) => {

        setSelected(service);

    };

    const closeDrawer = () => {

        setSelected(null);

    };

    return {

        selected,

        openDrawer,

        closeDrawer

    };

}