
// Prima parte esercizio
// Creiamo un oggetto che descriva le proprietà dello studente

var student = {
    "nome": "Antonio",
    "cognome": "Cardone",
    "età": 29
};



// Con il ciclo for in stampiamo le proprietà dell'oggetto

for (var key in student) {
    console.log(student[key]);

}
document.getElementById("nameStudent").innerText = ("Il nome dello studente è :" + " " + student.nome)
document.getElementById("surnameStudent").innerText = ("Il cognome dello studente è :" + " " + student.cognome)
document.getElementById("ageStudent").innerText = ("L'età dello studente è :" + " " + student.età)

// Seconda parte esercizio
// creiamo un array che abbia al suo interno più oggetti

var classRoom = [{
    "nome": "Mario",
    "cognome": "Rossi",
    "età": 22
}, {
    "nome": "Giuseppe",
    "cognome": "Garibaldi",
    "età": 150
}, {
    "nome": "Lorenzo",
    "cognome": "Jovanotti",
    "età": 50
}, {
    "nome": "Fabio",
    "cognome": "Cannavaro",
    "età": 45
}
]

//con un ciclo faccio stampare il nome e il cognome

for (var i=0 ; classRoom.length ; i++){

    var element = classRoom[i];


    console.log(element.nome);
    console.log(element.cognome);


}
