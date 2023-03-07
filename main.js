const notasTraditional = {
    traditional : [
        "90-100",
        "80-89",
        "70-79",
        "60-69",
        "<60",
        "0"
    ],
    pointRange : [
        "12-14",
        "9-11",
        "6-8",
        "3-5",
        "1-2",
        "0"
    ],
    letter : [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
    ],
    sbgRating : [
        "4",
        "3",
        "2",
        "1",
        "0",
        "0"
    ],
    proficiencyLevelWithStandard : [
        "Exceeds proficiency",
        "Demonstrates proficiency",
        "Approaches proficiency",
        "Falls well below proficiency",
        "Lacks all proficiency",
        "No attempt made"
    ]
}
console.log(notasTraditional)
function transfrom(){
    let mensaje = "El equivalente de su nota en el Standar Grading System es"
    let nota = prompt("Ingrese su nota");
    if (nota >= 90 && nota <= 100 || nota >= 12 && nota < 15 || nota == "A" || nota == "a") {
        console.log(`${mensaje} 4, Felicitaciones ahora eres un Sputnik`);
    }
    else if (nota >= 80 && nota < 90 || nota >= 9 && nota < 12 || nota == "B"|| nota == "b") {
        console.log(`${mensaje} 3, Felicitaciones te ganaste la beca en campus`);
    }
    else if (nota >= 70 && nota < 80 || nota >= 6 && nota < 9 || nota == "C"|| nota == "c") {
        console.log(`${mensaje} 2, Agradecemos por tu participación pero no has sido seleccionado preparate mejor para el proximo mes`);
    }
    else if (nota >= 60 && nota < 70 || nota >= 3 && nota < 6 || nota == "D"|| nota == "d") {
        console.log(`${mensaje} 1, Lo sentimos no has sido seleccionado, preparate mejor para que vuelvas a realizar las pruebas en agosto`);
    }
    else if (nota >=15 && nota < 60 || nota >= 1 && nota < 3 || nota == "E"|| nota == "e") {
        console.log(`${mensaje} 0, Dedicate a otra cosa o vuelve en un año`);
    }
    else if (nota == 0 || nota == "F" || nota =="f"){
        console.log(`${mensaje} 0, Dediquese a otra cosa, buen día`);
    }
    else {
        console.log(`Porfavor ingrese datos que correspondan a una nota en los estandares`);
        transfrom()
    }


}
transfrom()