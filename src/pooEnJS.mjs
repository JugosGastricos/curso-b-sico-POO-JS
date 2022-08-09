//Clase general de las clases de platzi:
function videoPlay(id){
    const urlSecreta = `https://platziultrasecreto.com/${id}`;
    console.log(`Se está reproduciendo desde la URL ${urlSecreta}`);
}

function videoStop(id){
    const urlSecreta = `https://platziultrasecreto.com/${id}`;
    console.log(`Pausamos la URL ${urlSecreta}`);
}

class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    play(){
        videoPlay(this.videoID);
    }
    pause(){
        videoStop(this.videoID);
    }
}

//Clase para los cursos:

class Course {
    constructor({
        name,
        classes = []
    }){
        this._name = name;
        this.classes = classes;
    }

    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
};

//-----------------------------------------------------------------//

//Clase para las rutas de las escuelas: 

class LearningPaths {
    constructor({
        name,
        courses = []
    }){
        this.name = name;
        this.courses = courses;
    }
    addCourse(newCourse) {
        this.courses.push(newCourse);
    }
};

// ----------------------------------------------------------------- //

export {PlatziClass, Course, LearningPaths}