import firebase from './config';


class BusinessService {

    businessDB = firebase.database().ref("business");

    getAll() {
        return this.businessDB;
    }

    newBusiness(business) {
        return this.businessDB.push(business);
    }

    delete(key) {
        return this.businessDB.child(key).remove();
    }

    deleteAll() {
        return this.businessDB.remove();
    }

}

export default new BusinessService();
