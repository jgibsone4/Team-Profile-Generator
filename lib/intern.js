const employee = require ("./employee.js");


class intern extends employee {
    constructor(name, id, email, school){
        this.name = name;
        this.id = id;
        this.title = "intern";
        this.email = email;
        this.email = school;
    };

getSchool(){
    return this.school;
};

getRole(){
    return this.title;
};
}
module.exports = intern;