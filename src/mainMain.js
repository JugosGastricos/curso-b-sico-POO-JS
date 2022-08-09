//Todos los objetos que deriven de las clases creadas:
import { Student } from "./student.mjs";
import { Course, LearningPaths } from "./pooEnJS.mjs";

//Cursos:

//Escuela web
const cursoProgBasica = new Course({
    name: "Curso de Programación Básica"
});
const cursoDefHtmlCss = new Course({
    name:"Curso definitivo de HTML y CSS"
});
const cursoPractHtmlCss = new Course({
    name:"Curso práctico de HTML y CSS"
});
const cursoResponsiveDesign = new Course({
    name:"Curso de responsive design"
}); 

//Escuela videojuegos
const cursoIntroProduccionVGS = new Course({
    name:"Curso de introducción a la producción de VGS"
}); 
const cursoUnrealEngine = new Course({
    name:"Curso de unreal engine"
}); 
const cursoUnity3D = new Course({
    name:"Curso de unity 3D"
}); 

//Escuela data science
const cursoDataBusiness = new Course({
    name:"Curso DataBusiness"
});
const cursoDataViz = new Course({
    name:"Curso DataViz"
}); 
const cursoTableau = new Course({
    name:"Curso de Tableau"
}); 

//Mis cursos
const cursoPOO = new Course({
    name:"Curso de POO"
}); 
const cursoTerminal = new Course({
    name:"Curso de intro a la terminal"
}); 
const cursoFinazasPer = new Course({
    name:"Curso de finanzas personales"
}); 
//---------------------------------------------------------//

//Escuelas:

//Escuela web:
const escuelaWeb = new LearningPaths({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefHtmlCss,
        cursoPractHtmlCss,
        cursoResponsiveDesign
    ]
});

//Escuela videojuegos
const escuelaVideojuegos = new LearningPaths({
    name: "Escuela de Desarrollo de Videojuegos",
    courses: [
        cursoProgBasica,
        cursoIntroProduccionVGS,
        cursoUnity3D,
        cursoUnrealEngine
    ]
});

//Escuela Data science
const escuelaDataScience = new LearningPaths({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        cursoDataBusiness,
        cursoDataViz,
        cursoTableau
    ]
});

//---------------------------------------------------------------//

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
});

juan2.username = "juanultralol";
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
            cursoPOO,
            cursoFinazasPer,
            cursoTerminal
        ]
    })
});

miguelito2.personalPath.addCourse("Curso de historia de los lenguajes de programación");
console.log(miguelito2);
//------------------------------------------------------------------------//