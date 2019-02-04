class Doctors {
  constructor() {
    this.doctors = [
      {
        id: 1,
        dFirstName: 'd1First',
        dLastName: 'd1Last',
        appointments: {},
      },
      {
        id: 2,
        dFirstName: 'd2First',
        dLastName: 'd2Last',
        appointments: {},
      },
      {
        id: 3,
        dFirstName: 'd3First',
        dLastName: 'd3Last',
        appointments: {},
      },
      {
        id: 4,
        dFirstName: 'd4First',
        dLastName: 'd4Last',
        appointments: {},
      },
      {
        id: 5,
        dFirstName: 'd5First',
        dLastName: 'd5Last',
        appointments: {},
      },
    ]
  }

  getDoctors() {
    return this.doctors.map(doc => {
      return {
        id: doc.id,
        dFirstName: doc.dFirstName,
        dLastName: doc.dLastName,
      }
    })
  }

  getDoctorsByDocId(docId) {
  }

  getApptByDocIdAndDay(doc, time) {
  }
}

module.exports = Doctors;
