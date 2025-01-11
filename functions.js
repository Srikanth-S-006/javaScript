//functions in javascript - call, apply, bind;

//call function
//call can also uses arguments to pass values as a argument value;
const UserFullName={
    fullname : function(city,country) {
        return this.firstname+" "+this.lastname+" "+city+" "+country;
    }
}
const users1={
    firstname:"srikanth",
    lastname:"raja"
}
console.log("this is call function example:"+""+UserFullName.fullname.call(users1,"bangalore","india"));

//apply function
//apply function also uses arguments to pass values as array;

const person={
    course:function(duration){
        return this.coursename+" "+this.status+" "+duration;
    }
}
const personOne={
    coursename:"javaScript",
    status:"completed"

}
console.log("this is apply function example:"+""+person.course.apply( personOne,[", Duration - three months"]));

//bind function
//object can borrow a method from another object.
const data={
    fname:"srikanth",
    lname:"raja",
    full_name : function(){
        return this.fname + " " + this.lname;
    }
}
const info = {
    fname:"ichigo",
    lname:"kurosaki",
}
let full_name = data.full_name.bind(info);
console.log("this is bind function example:",full_name())