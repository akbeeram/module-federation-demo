import React, { useEffect, useState } from "react";
import { eventBus } from './utils/event-bus';

const AppEvents = () => {
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        const handleIncoming = (msg: any) => {
            setMessages([msg?.detail ?? msg, ...messages]);
        };
        const handleOutgoing = (msg: string) => {
            setMessages([msg, ...messages]);
        };

        eventBus.on('incomingData', handleIncoming);
        eventBus.on('outgoingData', handleOutgoing);

        return () => {
            eventBus.off('incomingData', handleIncoming);
            eventBus.off('outgoingData', handleOutgoing);
        };
    }, [messages]);

    return <>
        {messages?.map((msg, i) => <div key={i}>{msg}</div>)}
    </>;
}

export default AppEvents;