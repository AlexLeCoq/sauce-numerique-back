require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use("/api/v1/partners", require('./routes/partners'));
app.use("/api/v1/ressources", require('./routes/ressources'));



app.listen(process.env.PORT || 5000,() => {
  console.log('Listening on port '+ process.env.PORT || 5000);
})