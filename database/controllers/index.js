const Doctors = require('../models/Doctors.js');

const db = new Doctors();

function getAllDoctors(req, res) {
  return res.status(200).send(db.getDoctors());
}

function getAppointmentsByDocId(req, res) {
}

module.exports = {
  getAllDoctors,
  getAppointmentsByDocId,
}
