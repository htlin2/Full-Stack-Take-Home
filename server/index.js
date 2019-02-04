const express = require('express');
const bodyParser = require('body-parser');
const {
  getAllDoctors,
  getAppointmentsByDocId,
} = require('../database/controllers')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/doctors', getAllDoctors);
app.get('/doctors/:docId/appointments', getAppointmentsByDocId);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
