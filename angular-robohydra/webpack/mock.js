const { createRoboHydraServer } = require('robohydra');

const roboHydraConfig = {
    "pluginLoadPaths": [
        "./src/",
        ".src/mock/"
    ],
    "plugins": [
        "logger"
    ]
}

const server = createRoboHydraServer(roboHydraConfig);
const port = 3000;

server.listen(port, function() {
    console.log(`robo hydra server started: http://localhost:${port}/robohydra-admin/`);
});