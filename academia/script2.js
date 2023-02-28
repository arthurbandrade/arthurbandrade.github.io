let age = 18;
let sex = "masculino";
let weight = 60;
let height = 175;
let tmb;


 if (age == 0){
    console.log("Resultado Inválido.");
 } else if (sex === "feminino"){
    tmb = (height * 6.25) + (weight * 9.99) - (age * 4.92) - 161 ;
    console.log("A taxa metabólica é " + tmb);
 } else if (sex === "masculino"){
    tmb = (height * 6.25) + (weight * 9.99) - (age * 4.92) - 5 ;
    console.log("A taxa metabólica é " + tmb);
 }