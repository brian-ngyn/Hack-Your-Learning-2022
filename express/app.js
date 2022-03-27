const http = require("http");
const app = require("./index");

const port = "3000";

const onError = error => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
        throw error;
    }
};

const onListening = () => {
    console.log("Listening on port " + port);
}

console.log("Local Dev Environment");

const server = http.createServer(app);

server.on("error", onError);
server.on("listening", onListening);
server.listen(port); 




