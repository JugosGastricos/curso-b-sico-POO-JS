//Todas las clases para los estudiantes:
class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
        personalPath
    }){
        this.name = name;
        this.email = email;
        this._username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
        this.personalPath = personalPath;
    }
    get username(){
        return this._username; 
    }
    set username(username){
        if(username === "juanultralol"){
            console.warn("WTF you trynna' do >:v")
        } else {
            this._username = username;
        }
    }
};

export {Student}