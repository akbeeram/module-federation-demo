import React, { useCallback, useEffect } from "react";
import WcWrapper from "./WcWrapper";
import NgWrapper from "./NgWrapper";
import StoreTest from "./store-test/StoreTest";
import { Provider } from "react-redux";
import { store } from "./store";
import './ReactHostApp.css';
import reactIcon from './../public/assets/images/React.png';
import ngIcon from './../public/assets/images/Angular.png';
import wcIcon from './../public/assets/images/wc-logo.svg';
import AppEvents from "./events";
import { eventBus } from './utils/event-bus';

const ReactRemoteApp = React.lazy(() => import('reactRemoteApp/ReactRemoteApp'))

const ReactHostApp = () => {

    useEffect(() => {
        eventBus.emit('outgoingData', 'This is data from React HOST for React Remote');
    }, []);

    return <Provider store={store}>
        <header>
            <img src={reactIcon} width={'40px'} />
            <h3>React Host App</h3>
        </header>
        <div className="container">
            <div className="app-tiles">
                <StoreTest />
                <div className="app-tile">
                    <div className="app-tile-img"><img src={reactIcon} width={'80px'} /></div>
                    <div className="app-tile-remote">
                        <ReactRemoteApp dataFromHost={'This is data from React HOST'} onReceviedData={(e: any) => eventBus.emit('incomingData', e)} />
                    </div>
                </div>
                <div className="app-tile">
                    <div className="app-tile-img"><img src={wcIcon} width={'80px'} /></div>

                    <div className="app-tile-remote">
                        <WcWrapper />
                    </div>
                </div>
                <div className="app-tile">
                    <div className="app-tile-img"><img src={ngIcon} width={'80px'} /></div>
                    <div className="app-tile-remote">
                        <NgWrapper />
                    </div>
                </div>
            </div>
            <aside>
                <b>Events:</b>
                <br />
                <AppEvents />
            </aside>
        </div>
    </Provider>;
}
export default ReactHostApp;