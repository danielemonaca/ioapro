import firebase from './config';


class ReportService {

    reportsDB = firebase.database().ref("reports");

    getAll() {
        return this.reportsDB;
    }

    newReport(report) {
        return this.reportsDB.push(report);
    }

    delete(key) {
        return this.reportsDB.child(key).remove();
    }

    deleteAll() {
        return this.reportsDB.remove();
    }

}

export default new ReportService();
