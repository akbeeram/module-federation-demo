import React, { useEffect, useRef } from "react";

const WcWrapper = () => {
    const ref = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "./assets/usersApp.js";
        script.type = "module";
        script.async = true;
        script.onload = (e) => {
            const el = document.createElement('users-app');
            el.setAttribute('usersData', 'This is input from React Host');
      window.addEventListener('wcUsersAppEvent', (e: any) => {
        console.log(e?.detail);
      })
            if(ref.current) {
                (ref.current as HTMLElement).appendChild(el);
            }
        }
        document.head.appendChild(script);
    },[]);

    return <div ref={ref} />
}
export default WcWrapper;