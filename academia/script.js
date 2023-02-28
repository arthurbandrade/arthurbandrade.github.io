let Marina = 27;
let Silvia = 45;
let Iza = 26;

if (Marina < Silvia && Marina < Iza) {
    console.log("Marina é a pessoa mais jovem");
}
else if (Silvia < Marina && Silvia < Iza) {
    console.log("Silvia é a pessoa mais jovem");
}
else if (Iza < Silvia && Iza < Marina) {
    console.log("Iza é a pessoa mais jovem");
}
else {
    console.log("As idades são iguais.");
}