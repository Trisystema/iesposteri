"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var Form_tsx_1 = require("./Form/Form.tsx");
(0, client_1.createRoot)(document.getElementById('root')).render(<react_1.StrictMode>
    <Form_tsx_1.default />
  </react_1.StrictMode>);
