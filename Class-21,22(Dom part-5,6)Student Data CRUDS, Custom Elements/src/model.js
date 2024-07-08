
/**
//  * Get data form LS
//  * @param {*} key
//  */
 const getDataLS = (key) => {
     const data = localStorage.getItem(key);
  
     if (data) {
       return JSON.parse(data);
     } else {
       return false; 
     }
   };

/**
 * save data to ls   
 * @param {*} key 
 * @param {*} stdData 
 */
   const sendDataLS = (key, stdData) => {
     const data = localStorage.getItem(key);
  
     let lsData;
     if (data) {
     lsData = JSON.parse(data);
     } else {
       lsData = [];
     }
  
     lsData.push(stdData);
  
     localStorage.setItem(key, JSON.stringify(lsData));
   };
  
   const getSingledata = (key,id) => {

    const data = JSON.parse(localStorage.getItem(key));
    if(data){
       return data.find(data => data.id == id);
    }else{
       return false;
    }

   };

   const deletSingleData = (key,id) => {
    const data = JSON.parse(localStorage.getItem(key));
    
   
       const deletData = data.filter((item) => item.id != id);
       localStorage.setItem(key, JSON.stringify(deletData));
    

   };