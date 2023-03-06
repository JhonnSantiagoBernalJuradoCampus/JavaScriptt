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
console.table(notasTraditional)
function transfrom(){
    let nota = prompt("Ingrese su nota")
    for (nota in) {
        console.log(nota);
    }
}
transfrom()