const express = require("express");

function SocketRouter(io) {
  const router = express.Router();

  router.get("/forecast", (req, res) => {
    const count = req.query.count;
    if (!count) {
      res
        .json({
          message: "count not exits",
        })
        .status(401);
    }

    io.emit("mod_forecast", count);
    res.json({
      message: "data delivered",
    });
  });

  return router;
}

module.exports = SocketRouter;
