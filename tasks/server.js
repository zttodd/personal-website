const server = require("browser-sync").create();

function serve(done) {
  server.init({
    server: {
      baseDir: "./build"
    }
  });
  done();
}

function reload(done) {
  server.reload();
  done();
}

module.exports = {
  serve,
  reload
};
