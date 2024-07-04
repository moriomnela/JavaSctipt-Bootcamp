//set data to LS
const sendDatToLS = (key,data) => {
    localStorage.setItem(key,JSON.stringify(data));
};

//get data form LS
const getDataFromLS = (key) => {
  let data = localStorage.getItem(key);
  if (data){
    return JSON.parse(data);
  }else {
    return[];
  }
  
};