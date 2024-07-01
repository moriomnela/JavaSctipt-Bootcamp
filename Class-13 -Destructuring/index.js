                                    /* ======Array,Object Destructuring==== 1st practise*/
// const dev = {
//     name : "Moriom",
//     age : 20,
//     skill : "java",
// };
// const org = {
//     name : "Rifat",
//     age : 14,
//     skill : "javascript",
// }

// const { name, age, skill } = dev;
// const {name :orgName, age :orgAge, skill: orgSkill} = org;

// console.log (orgSkill );

/*const {skill} = org;
console.log(`Hello ${skill} Developers`);*/


/*2nd practise*/

// const dev = {
//     name: "Moriom Islam Nela",
//     age: 20,
//     skill: "C language",
//     edu: {
//       bangla: 79,
//       english: 80, 
//       math: 85,
//       science: 90,
//       reli: 83,
//     },
// };
 
// const { name,age,skill,edu } = dev;
// const { bangla,english,math,science,reli} = edu;
// console.log (bangla,english);

/*  3rd practise*/

const devs = [
    {
        name: "Moriom nela",
        age: 20,
        skill: {
            web: "Laravel",
            mobile: "Nativ",
            bd: "mysql"
        },
        location: "GAzipur",
        gender: "Female",
        isMaried: "false",
        food: ["alo", "pasta", "vat"]
    },
    {
        name: "Rubayet rifat",
        age: 10,
        skill: {
            web: "Mern",
            mobile: "IOS",
            bd: "mysql"
        },
        location: "Uttara",
        gender: "Male",
        isMaried: "false",
        food: ["alo", "misti", "vat"]
    },
    {
        name: "Nurmoni",
        age: 30,
        skill: {
            web: "Django",
            mobile: "Flater",
            bd: "mysql"
        },
        location: "Borobari",
        gender: "Female",
        isMaried: "true",
        food : ["Pitha", "pasta", "pangash fish"]
    },
    {
        name: "Raju",
        age: 29,
        skill: {
            web: "IOS",
            mobile: "Nativ",
            bd: "mysql"
        },
        location: "Mirpur",
        gender: "Male",
        isMaried: "false",
        food: ["Pitha", "pasta", "pangash fish"]
    },
];   
 /*==========Object destructring ======= */

  devs.map((item,index) => {
    const { name } = item ;
    const { web } = item.skill;
      console.log(`Hello ${name} ,You are ${web} developer`);
  });
  
//             const dev = {
//                     name: "Raju",
//                     age: 29,
//                     skill:"IOS",
//                   }
//              const ddd = {...dev};
//              console.log(ddd);


               /*==========Array destructring 5th practise======= */

      /*const food =  ["Pitha", "pasta", "pangash fish"];
      const [a, b, c] = food;
      console.log(b);*/


      /*arrayre vitore array */
 /*const food = ["Pitha", "pasta", "pangash fish"];
 console.log ([...food]);*/

 /*const food1 = ["Pitha", "pasta", "pangash fish"];
 const food2 = ["alo", "misti", "vat"];

 const newArr = [...food1,...food2.filter((data) => data !="alo" && data !="vat")];
console.log(newArr.reverse());*/


const dev = {
    name : "Moriom Islam Nela",
    age : 20,
    skill : "Laravel Developer",
    edu : {
        ssc :{
            gpa : "5.00",
            grade : "A+",
        },
        hsc : {
            gpa : "5.00",
            grade : "A+",
        },
        Bsc : {
            cgpa : "3.50",
        },
    },
};
const { name, age , skill, edu } = dev;
const { ssc, hsc, Bsc } = edu;

console.log (skill);            
