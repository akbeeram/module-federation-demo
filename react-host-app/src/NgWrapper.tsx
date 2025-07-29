import React, { useEffect, useRef } from "react";
import { eventBus } from './utils/event-bus';
const NgWrapper = () => {
    const ref = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "./assets/angular/main.js";
        script.type = "module";
        script.async = true;
        script.onload = () => {
            const el = document.createElement('app-orders');
            (el as any).ordersData = 'This is data from React HOST';
            eventBus.emit('outgoingData', 'This is data from React HOST');
            el.addEventListener('onDataReceived', (e) => {
                console.log(e);
                eventBus.emit('incomingData', e);
            })
            if (ref?.current) {
                (ref.current as any).appendChild(el);
            }
        }
        document.head.appendChild(script);
    }, []);

    return <div ref={ref}></div>

}

export default NgWrapper;