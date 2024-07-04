 //=====1st ===
//===get old Data===
let oldData = getDataFromLS("Devs") 
//====add new Data===
oldData = [
    ...oldData,
    {
    id :1,
    name:"Moriom",
    age : 20,
   },
];
//===now send Data===
sendDatToLS('davs',oldData);  

//=====2nd=======
// //===get old Data===
// let oldData = getDataFromLS("devs"); 
// // //====add new Data===
// let newData = [...oldData,
//     {
//      id : 2,
//      name : "Raju",
//      age : 30,
// }];
// //==Save Data==
// sendDatToLS('devs',newData);