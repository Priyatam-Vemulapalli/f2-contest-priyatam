/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(employee => {
    if(employee.profession==="developer"){
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(employee=>{
    if(employee.profession==="developer"){
      console.log(employee);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let tempEmployee ={id:4,name:"susan", age:"20", profession:"intern"};
  arr.push(tempEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr= arr.filter(employee=> employee.profession !=="admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newData = [{id:5, name: "priyatam", age:"22", profession:"developer"},
    {id:6, name:"sunny", age:"22",profession:"designer"},
    {id:7, name:"ronda", age:"22", profession:"coder"}
  ];
  arr= arr.concat(newData);
  console.log(arr);

}
