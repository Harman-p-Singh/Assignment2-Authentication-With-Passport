"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secret = exports.HostName = exports.RemoteURI = exports.LocalURI = void 0;
exports.LocalURI = "mongodb://localhost/contact";
exports.RemoteURI = process.env.RemoteURI;
exports.HostName = (process.env.RemoteURI) ? "remotehost" : "localhost";
exports.Secret = "someSecret";

// module.exports = 
// {
//     //"URI": "mongodb://localhost/book_store"
//     "URI": "mongodb+srv://thomas:Hq3DKYN2NaAqGyyV@mongodbserver.k15hk.azure.mongodb.net/book_store?retryWrites=true&w=majority",
//     "Secret": 'SomeSecret'
// }
//# sourceMappingURL=db.js.map