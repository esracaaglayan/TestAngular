console.log("TypeScript");
//Nom Function
var data = 44;
console.log(data);
var data2 = 55;
console.log(data2);
console.log("testAngular");
// ENUM 
var tsEnum = function () {
    var computerTrade;
    (function (computerTrade) {
        computerTrade["msi"] = "MSI";
        computerTrade["dell"] = "DELL";
        computerTrade["hp"] = "HP";
    })(computerTrade || (computerTrade = {}));
    console.log(computerTrade.msi);
    var computerOtherTrade = computerTrade.dell;
    console.log(computerOtherTrade);
};
tsEnum();
