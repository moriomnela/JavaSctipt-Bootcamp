let studentRoll = prompt('Roll');
let studentReg = prompt('Reg');




name.forEach((item,index) => {
    if(roll[index] == studentRoll && reg[index] == studentReg ){
        console.log(`
      Name : ${item}
      Roll : ${roll [index]}
      Reg  : ${reg[index]}
    ============================================
    Subject => Mark => Grade => GPA
    
    Bangla -> ${ban[index]} -> ${getGrade(ban[index])} ->${getGpa(ban[index])}
    English -> ${eng[index]} -> ${getGrade(eng[index])} ->${getGpa(eng[index])}
    Math -> ${math[index]} -> ${getGrade(math[index])} ->${getGpa(math[index])}
    Science -> ${science[index]} -> ${getGrade(science[index])} ->${getGpa(science[index])}
    Religion -> ${reli[index]} -> ${getGrade(reli[index])} ->${getGpa(reli[index])}

    ================================================================================================
   Final Result : ${isPassed(
    ban[index],
    eng[index],
    math[index],
    science[index],
    reli[index]
   )
    ? "Passed"
    : "Failed"
}
   Grade : ${getFinalGrade(
    ban[index],
    eng[index],
    math[index],
    science[index],
    reli[index]
   )} 
   GPA : ${getFinalGpa(
    ban[index],
    eng[index],
    math[index],
    science[index],
    reli[index]
   )}
  `);

    }
    
});



