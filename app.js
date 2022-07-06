"use strict";
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

document.write(this.name + "  :  " + this.salary + " JD after the tax "+this.taxSalary()+" JD <br/><br/>");

}
const ghaz=new Employee("Ghazi Samer",1000,"Administration","Senior","");
const lana=new Employee("Lana Ali",1001,"Development","Senior","");
const tamara=new Employee("Tamara Ayoub",1002,"Development","Senior","");
const safi=new Employee("Safi Walid",1003,"Development","Mid-Senior","");
const omar=new Employee("Omar Zaid",1004,"Development","Senior","");
const rana=new Employee("Rana Saleh",1005,"Development","Junior","");
const hadi=new Employee("Hadi Ahmad",1006,"Development","Mid-Senior","");

console.log(allemployee);

for(let i=0;i<allemployee.length; i++){

    allemployee[i].render();
}
