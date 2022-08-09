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

class FreeStudent extends Student {
    constructor(props){
        super(props);
    }
    approvedCourse(newCourse){
        if (newCourse.isFree){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(`Lo sentimos, ${this.name}, no puedes tomar el ${newCourse.name} porque no está disponible en tu suscripción gratis`);
        }
    }
};

class BasicStudent extends Student {
    constructor(props){
        super(props);
    }
    approvedCourse(newCourse){
        if (newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(`Lo sentimos, ${this.name}, no puedes tomar el ${newCourse._name} porque no está disponible en tu suscripción Basic`);
        }
    }
};

class ExpertStudent extends Student {
    constructor(props){
        super(props);
    }
    approvedCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
};


export {FreeStudent, BasicStudent, ExpertStudent}