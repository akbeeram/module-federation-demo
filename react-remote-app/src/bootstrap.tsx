import React from "react";
import { createRoot } from "react-dom/client";
import ReactRemoteApp from './ReactRemoteApp';

const root = createRoot(document.getElementById('root')!);
root.render(<ReactRemoteApp />);