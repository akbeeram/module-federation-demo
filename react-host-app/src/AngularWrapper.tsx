import React, { useEffect, useRef } from "react";

const AngularWrapper = () => {
    const ref = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "./assets/angular/main.js";
        script.type = "module";
        script.async = true;
        script.onload = (e) => {
            const el = document.createElement('app-billing');
            (el as any).billingData = "This is data from React Host to NG Remote";
            el.addEventListener('receivedEvent', (e: any) => {
                console.log(e?.detail);
            });
            if(ref.current) {
                (ref.current as HTMLElement).appendChild(el);
            }
        }
        document.head.appendChild(script);
    },[]);

    return <div ref={ref} />
}
export default AngularWrapper;