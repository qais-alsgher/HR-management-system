`use strict`;
let allemployee=[];

function Employee(name, id,department,level,image) {
this.name=name;
this.id=id;
this.department=department;
this.level=level;
this.image=image;
this.salary=this.accouSalary();
allemployee.push(this);
}

Employee.prototype.accouSalary = function()
{ 
if(this.level==="Senior")
    return Math.floor(Math.random()*(2000 - 1500 + 1) +1500);
    else if (this.level==="Mid-Senior")
        return Math.floor(Math.random()*(1500 - 1000 + 1) +1000);
       else if(this.level==="Junior")
         return Math.floor(Math.random()*(1000 - 500 + 1) +500);
};

Employee.prototype.taxSalary=function (){

    return (this.salary * 7.5)/100
}

Employee.prototype.render= function()
{

// document.write(this.name + "  :  " + this.salary + " JD after the tax "+this.taxSalary()+" JD <br/><br/>");

var myMain=document.getElementById('main');

const printEmployee=document.createElement('div');
myMain.appendChild(printEmployee);
const imgEmployee=document.createElement('img');
printEmployee.appendChild(imgEmployee);
imgEmployee.src=this.image;
imgEmployee.alt="employee image ";
const nameEmployee=document.createElement('p');
printEmployee.appendChild(nameEmployee);
nameEmployee.innerHTML="Name : "+ this.name;
const idEmployee=document.createElement('p');
printEmployee.appendChild(idEmployee);
idEmployee.innerHTML=" - ID : " + this.id;
const departmentE=document.createElement('p');
printEmployee.appendChild(departmentE);
departmentE.innerHTML="Department : "+this.department;
const levelE=document.createElement('p');
printEmployee.appendChild(levelE);
levelE.innerHTML=" - Level : " + this.level;
const salaryE=document.createElement('p');
printEmployee.appendChild(salaryE);
salaryE.innerHTML="\n"+ this.salary ;
imgEmployee.style.display="block";
};

const ghaz=new Employee("Ghazi Samer",1000,"Administration","Senior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Ghazi.jpg?raw=true");
const lana=new Employee("Lana Ali",1001,"Development","Senior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Lana.jpg?raw=true");
const tamara=new Employee("Tamara Ayoub",1002,"Development","Senior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Tamara.jpg?raw=true");
const safi=new Employee("Safi Walid",1003,"Development","Mid-Senior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Safi.jpg?raw=true");
const omar=new Employee("Omar Zaid",1004,"Development","Senior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Omar.jpg?raw=true");
const rana=new Employee("Rana Saleh",1005,"Development","Junior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Rana.jpg?raw=true");
const hadi=new Employee("Hadi Ahmad",1006,"Development","Mid-Senior","https://github.com/LTUC/new-prep-course-std/blob/main/Day10/Task/assets/Hadi.jpg?raw=true");

console.log(allemployee);

for(let i=0;i<allemployee.length; i++){

    allemployee[i].render();
}
