const employee = require ("./employee.js");

class manager extends employee {
    constructor(name, id, email, officeNumber){
        this.name = name;
        this.id = id
        this.title = "manager";
        this.email = email;
        this.officeNumber = officeNumber;
    };

officeNumber(){
    return this.officeNumber;
};

getRole(){
    return this.title;
};
}
module.exports = manager;