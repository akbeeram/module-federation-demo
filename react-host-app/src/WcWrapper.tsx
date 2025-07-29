import React, { useEffect, useRef } from "react";
import { eventBus } from './utils/event-bus';

const WcWrapper = () => {
    const ref = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "./assets/usersApp.js";
        script.type = "module";
        script.async = true;
        script.onload = () => {
            const el = document.createElement('users-app');
            (el as any).setAttribute('usersData', 'This is data from React HOST');
            eventBus.emit('outgoingData', 'This is data from React HOST');
            el.addEventListener('onWcReceviedData', (e) => {
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

export default WcWrapper;