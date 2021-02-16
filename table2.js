let idname1 = prompt("Digite o Nome da primeira pessoa");
let age1 = prompt("Digite a Idade da primeira pessoa");
let favoritecolor1 = prompt("Digite a Cor favorita da primeira pessoa");

let idname2 = prompt("Digite o Nome da segunda pessoa");
let age2 = prompt("Digite a Idade da segunda pessoa");
let favoritecolor2 = prompt("Digite a Cor favorita da segunda pessoa");

let idname3 = prompt("Digite o Nome da terceira pessoa");
let age3 = prompt("Digite a Idade da terceira pessoa");
let favoritecolor3 = prompt("Digite a Cor favorita da terceira pessoa");

console.log(`Registro de ${idname1} e ${idname2} e ${idname3}`); 
console.log(`Idade de: ${idname1} ${age1}`);
console.log(`Idade de: ${idname2} ${age2}`);
console.log(`Idade de: ${idname3} ${age3}`);
console.log(`Cor favorita de: ${idname1} ${favoritecolor1}`);
console.log(`Cor favorita de: ${idname2} ${favoritecolor2}`);
console.log(`Cor favorita de: ${idname3} ${favoritecolor3}`);

if (age1 > age2 && age1 > age3) {
    console.log(`${idname1} "é mais velho/a que" ${idname2} "e" ${idname3}`)
}
   else if(age2 > age3 && age2 > age1) {
        console.log(`${idname2} "é mais velho/a que" ${idname3} "e" ${idname1}`)
    }
    
    else if(age3 > age2 && age3 > age1){
        console.log(`${idname3} "é mais velho/ a que" ${idname2} "e" ${idname1}`)
    }


