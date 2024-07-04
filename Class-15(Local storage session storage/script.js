 //==1st =-practise==
// const devs = [
//     {
//         name: "Nela",
//         age: 20,
//         skill: "IOS",
//     },
//     {
//         name: "Rifat",
//         age: 14,
//         skill: "Laravel",
//     },
//     {
//         name: "Nurmoni",
//         age: 10,
//         skill: "Js",
//     },
// ];
// console.log(JSON.stringify(dev));
//localStorage.setItem("devs", JSON.stringify(devs));

//==2nd practise==
// let devs = localStorage.getItem("devs");
// console.log(JSON.parse(devs));

//====3rd practise
// const students = [
//     {
//         id : 1,
//         name: "Rifat",
//         age : 14,
//         location : "Gazipur",
//     },
//     {
//         id : 2,
//         name: "Nela",
//         age : 14,
//         location : "Tongi",
//     },
//     {
//         id : 3,
//         name: "Nurmoni",
//         age : 7,
//         location : "Borobari",
//     },
//     {
//         id : 4,
//         name: "Raju",
//         age : 24,
//         location : "Uttara",
//     },
// ];
// localStorage.setItem('students',JSON.stringify(students));
 
//=====4th practise=======
//=====Get all student data====
//let students = localStorage.getItem("students");
//console.log(students);

//=====lets parse data=====
//let studentsData = JSON.parse(students);
//console.log(studentsData);

//===now add new data=====
// studentsData.push({
//     id : 5,
//     name : "Lipi",
//     age :36,
//     location : "Olipiur",
// });
//console.log(studentsData);

//====Now update your Database====
//  localStorage.setItem('students',JSON.stringify(studentsData));

//====5th prsctise======
//======Add data another type========
// studentsData = [
//     ...studentsData,
//     {
//      id : 6,
//      name :"Asma",
//      age :56,
//      location :"Bonbariya",
// }];
// localStorage.setItem('students',JSON.stringify(studentsData));

//=====6th practise=======
//=====DATA Delete==========
//studentsData = studentsData.filter((data) => data.id !== 1);
// studentsData = studentsData.filter((data) => data.location !== "Bonbariya");
// localStorage.setItem('students',JSON.stringify(studentsData));

//========7th practise=====
//=======Add new data with old data=======
// studentsData = studentsData.map((item, index) => {
//     if(item.id == 2){
//         return {
//             ...item,
//             name : "Moriom Nela",
//         }
//     }
//     else{
//        return item; 
//     }
// });
// localStorage.setItem('students',JSON.stringify(studentsData));




