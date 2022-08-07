// Objeto literal:
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(curso){
        this.cursosAprobados.push(curso);
    }
};

natalia.name = "Nath";
natalia.aprobarCurso("Curso de Responsive Design");
console.log(natalia);

//Creando un prototipo:
function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student('Juanita', 25, ["Curso Definitivo de HTML y CSS", "Curso Práctico de HTML y CSS"]);
juanita.aprobarCurso("Curso de Responsive Design");
console.log(juanita);

//Creando clases en JS

class Student2 {
    constructor(name, age, cursosAprobados){
        this.name = name,
        this.age = age,
        this.cursosAprobados = cursosAprobados
    }
    aprobarCurso(curso) {
        this.cursosAprobados.push(curso);
    }
}

const miguelito = new Student2('Miguel',28,["Curso de análisis de negocios para ciencia de datos", "Principios de visualización de datos para BI"]);

miguelito.aprobarCurso("Curso de Tableau");

console.log(miguelito)

class Student3 {
    constructor({
        name, 
        age, 
        cursosAprobados = [],
        email,
        facebook,
        instagram,
        twitter,
    }){
        this.name = name,
        this.age = age,
        this.cursosAprobados = cursosAprobados,
        this.email = email,
        this.facebook = facebook ??= 'none',
        this.instagram = instagram ??= 'none',
        this.twitter = twitter ??= 'none'
    }
    aprobarCurso(curso) {
        this.cursosAprobados.push(curso);
    }
}

const judas = new Student3 ({
    name: 'Judas',
    age: '27',
    email: 'judas@666.lol',
    twitter: 'judas666'
})

judas.aprobarCurso("Curso básico de JavaScript");

console.log(judas)