import React from "react";
import { createRoot } from "react-dom/client";
import ReactHostApp from './ReactHostApp';

const root = createRoot(document.getElementById('root')!);
root.render(<ReactHostApp />);