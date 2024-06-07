// info("nela");
// info("moriom");
  

// dev("Moriom Nela",20,"web developer");

// ageCal("Moriom",2003);
// marriagecalculator("Moriom",2003,"female");
// marriagecalculator("Rifat",2010,"male");


// currencyconverter(500,"euro");

// console.log(ageCal("Moriom",2000));


// console.log(hello("Moriom"));


// console.log(dollartoTaka(130));



let name = prompt('Name');
let roll = prompt ('Roll');
let reg = prompt ('Reg');
let ban = prompt ('Bangla');
let eng = prompt ('English');
let math = prompt ('Math');
let phy = prompt ('Physics');
let che = prompt ('Chemistry');
let bio = prompt ('Biology');
let highermath = prompt ('Highermath');
let reli = prompt ('Religion');


console.log (`
   Student Name = ${name}
   Roll Number = ${roll}
   Reg Number = ${reg}
   ================================
   Subject - Mark - GPA - Grade 
   Bangla - ${ban} - ${getGpa(ban)} - ${getGrade(ban)}
   English - ${eng} - ${getGpa(eng)} - ${getGrade(eng)}
   Math - ${math} - ${getGpa(math)} - ${getGrade(math)}
   Physics - ${phy} - ${getGpa(phy)} - ${getGrade(phy)}
   Chemistry - ${che} - ${getGpa(che)} - ${getGrade(che)}
   Biology - ${bio} - ${getGpa(bio)} - ${getGrade(bio)}
   Highermath - ${highermath} - ${getGpa(highermath)} - ${getGrade(highermath)}
   Religion - ${reli} - ${getGpa(reli)} - ${getGrade(reli)}
   ========================================================================================
   Final Result = ${isPassed(ban,eng,math,phy,che,bio,highermath,reli) ? "Passed" : "Failed"}
   Final GPA =  ${getFinalGpa(ban,eng,math,phy,che,bio,highermath,reli)}
   Final Grade = ${getFinalGrade(ban,eng,math,phy,che,bio,highermath,reli)}

`);