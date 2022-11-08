export default class LoginInfo {
    constructor() {
        this.login = [['jackson', 'password123'], 
        ['colby', 'password123'], 
        ['joshua', 'password123']];
    }

    addLogin(user, pass) {
        let flag = true;
        this.login.forEach(combo => {
            if (JSON.stringify(combo) === JSON.stringify([user, pass])) {
                flag = false;
            }
        });
        if (flag) {
            this.login.push([user, pass]);
        }
    }

    checkLogin(user, pass) {
        let flag = false;
        this.login.forEach(combo => {
            if (JSON.stringify(combo) === JSON.stringify([user, pass])) {
                flag = true;
            }
        });
        return flag;
    }

    getLogin() {
        return this.login;
    }


}