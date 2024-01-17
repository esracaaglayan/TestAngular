console.log("TypeScript");

//Nom Function

let data=44;
console.log(data);

let data2:number=55;
console.log(data2);

console.log("testAngular");

// ENUM 
let tsEnum = () => {
enum computerTrade {
    msi = "MSI",
    dell = "DELL",
    hp = "HP"
}
console.log(computerTrade.msi);
let computerOtherTrade: computerTrade = computerTrade.dell;
console.log(computerOtherTrade);
};
tsEnum();

