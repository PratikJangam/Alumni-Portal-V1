const mongoose = require("mongoose");
mongoose.connect(
  //   "mongodb+srv://alumni-rscoe:umeshUmang@cluster0.bksgz.mongodb.net/alumniDatabase?retryWrites=true&w=majority",
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
