const Doctors = require('../models/Doctors.js');

const db = new Doctors();

function getAllDoctors(req, res) {
  return res.status(200).send(db.getDoctors());
}

function getAppointmentsByDocId(req, res) {
  const docId = Number(req.params.docId);
  const doc = db.getDoctorsByDocId(docId);
  return res.status(200).send(doc.appointments);
}

module.exports = {
  getAllDoctors,
  getAppointmentsByDocId,
}
