class engineer {
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
    
    get role(){
        return this.title;
    };
   
    }