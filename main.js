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
        "5",
        "4",
        "3",
        "2",
        "1",
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

function transfrom(){
    let tipo = prompt("Ingrese en que tipo de calificacion desea ingresar\n\t1.Traditional\n\t2.Point\n\t3.SBG")
    let mensaje = "El equivalente de su nota en el Standar Grading System es"
    if(tipo == 1){
        let nota = prompt("Ingrese su nota entre\n0-100");
        if (nota >= 90 && nota <= 100){
            alert(`${mensaje} A, Felicitaciones ahora eres un Sputnik`);
        }
        else if (nota >= 80 && nota < 90){
            alert(`${mensaje} B, Felicitaciones te ganaste la beca en campus`);
        }
        else if (nota >= 70 && nota < 80){
            alert(`${mensaje} C, Agradecemos por tu participación pero no has sido seleccionado preparate mejor para el proximo mes`);
        }
        else if (nota >= 60 && nota < 70){
            alert(`${mensaje} D, Lo sentimos no has sido seleccionado, preparate mejor para que vuelvas a realizar las pruebas en agosto`);
        }
        else if (nota >0 && nota < 60){
            alert(`${mensaje} E, Dedicate a otra cosa o vuelve en un año`);
        }
        else if (nota == 0){
            alert(`${mensaje} F, Dediquese a otra cosa, buen día`);
        }
        else {
            console.log(`Porfavor ingrese datos que correspondan a una nota en los estandares`);
            transfrom()
        }
    }
    else if (tipo==2){
        let nota = prompt("Ingrese su nota entre\n0-14");
        if (nota >= 12 && nota < 15){
            alert(`${mensaje} A, Felicitaciones ahora eres un Sputnik`);
        }
        else if (nota >= 9 && nota < 12){
            alert(`${mensaje} B, Felicitaciones te ganaste la beca en campus`);
        }
        else if (nota >= 6 && nota < 9){
            alert(`${mensaje} C, Agradecemos por tu participación pero no has sido seleccionado preparate mejor para el proximo mes`);
        }
        else if (nota >= 3 && nota < 6){
            alert(`${mensaje} D, Lo sentimos no has sido seleccionado, preparate mejor para que vuelvas a realizar las pruebas en agosto`);
        }
        else if (nota >= 1 && nota < 39){
            alert(`${mensaje} E, Dedicate a otra cosa o vuelve en un año`);
        }
        else if (nota == 0){
            alert(`${mensaje} F, Dediquese a otra cosa, buen día`);
        }
        else {
            console.log(`Porfavor ingrese datos que correspondan a una nota en los estandares`);
            transfrom()
        }
    }
    else if(tipo==3){
        let nota = prompt("Ingrese su nota entre\n0-5");

        if (nota == 5){
            alert(`${mensaje} A, Felicitaciones ahora eres un Sputnik`);
        }
        else if (nota == 4){
            alert(`${mensaje} B, Felicitaciones te ganaste la beca en campus`);
        }
        else if (nota == 3){
            alert(`${mensaje} C, Agradecemos por tu participación pero no has sido seleccionado preparate mejor para el proximo mes`);
        }
        else if (nota == 2){
            alert(`${mensaje} D, Lo sentimos no has sido seleccionado, preparate mejor para que vuelvas a realizar las pruebas en agosto`);
        }
        else if (nota == 1){
            alert(`${mensaje} E, Dedicate a otra cosa o vuelve en un año`);
        }
        else if (nota == 0){
            alert(`${mensaje} F, Dediquese a otra cosa, buen día`);
        }
        else {
            console.log(`Porfavor ingrese datos que correspondan a una nota en los estandares`);
            transfrom()
        }
    }
    else {
        console.log(`Porfavor ingrese datos que correspondan a una nota en los estandares`);
        transfrom()
    }
}
transfrom()