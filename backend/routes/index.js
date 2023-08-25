const userRouter = require("./userRoute");
const productRouter = require("./productRoute");
const orderRouter = require("./orderRoute");

const route = (app) => {
  app.use("/api/v1", userRouter);
  app.use("/api/v1/product", productRouter);
  app.use("/api/v1/order", orderRouter);
};

module.exports = route;
