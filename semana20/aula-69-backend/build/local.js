"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const server = index_1.app.listen(3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is runing in http://localhost:${address.port}`);
    }
    else {
        console.error(`Server Failure`);
    }
});
//# sourceMappingURL=local.js.map