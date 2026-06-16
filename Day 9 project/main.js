let employeeinfo =[
    {
        name:"Ajay",
        position:"Manager",
        salary:"10000",

    },
     {
        name:"Ram",
        position:"designer",
        salary:"5000",

    },
     {
        name:"Sita",
        position:"developer",
        salary:"4000",

    }
]


function displayinfo() {
let displayinfo=document.getElementById
("emg-mng");
 
info.innerHTML = employeeinfo.map(function(emp) {
    return "Name : "  + emp.name +
          "<br /> Position : " + emp.position +
          "<br /> salary : " + emp.salary


})

}

    
    
