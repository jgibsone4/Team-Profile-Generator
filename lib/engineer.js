const employee = require ("./employee.js");


class engineer extends employee {
    constructor(name, id, email, github){
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.title = "engineer"
    };

    getGithub(){
        return this.github;
    };
    
    getRole(){
        return this.title;
    };
   
    }
    module.exports = engineer; 