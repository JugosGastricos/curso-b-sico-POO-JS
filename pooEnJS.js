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
}

//Escuela web:
const escuelaWeb = new LearningPaths({
    name: "Escuela de Desarrollo Web",
    courses: [
        "Curso definitivo de HTML y CSS",
        "Curso práctico de HTML y CSS",
        "Curso de responsive design"
    ]
});

//Escuela videojuegos
const escuelaVideojuegos = new LearningPaths({
    name: "Escuela de Desarrollo de Videojuegos",
    courses: [
        "Curso de introducción a la producción de VGS",
        "Curso de unreal engine",
        "Curso de unity 3D"
    ]
});

//Escuela Data science
const escuelaDataScience = new LearningPaths({
    name: "Escuela de Data Science",
    courses: [
        "Curso DataBusiness",
        "Curso DataViz",
        "Curso de Tableau"
    ]
})

// ----------------------------------------------------------------- //

//Clase para los estudiantes:

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
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
        this.personalPath = personalPath;

    }
}

//Estudiantes:
const juan2 = new Student ({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaDataScience
    ]
})

console.log(juan2);

const miguelito2 = new Student ({
    name: "Miguelito",
    username: "miguelito_feliz",
    email: "miguelito@juanito.com",
    instagram: "miguelito_feliz",
    learningPaths: [
        escuelaVideojuegos,
        escuelaDataScience
    ],
    personalPath: new LearningPaths ({
        name: 'Mis cursos',
        courses: [
            "Curso de POO", 
            "Curso de intro a la terminal", 
            "Curso de finanzas personales"
        ]
    })
})

miguelito2.personalPath.addCourse("Curso de historia de los lenguajes de programación");
console.log(miguelito2);