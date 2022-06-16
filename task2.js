//a.........
let multiplication=(a,b)=>{
    return a*b;
}

console.log(multiplication(3,6));

//b..............
class Students{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks
    }
    setPlacmentAge(minAge){
        console.log(this);// output is current object
        // return setPlacmentMarks(minMarks){
        //         //in this type of function declartion this keyword
        //         // is not reachable or accessible
        //     if(this.marks>minMarks && this.age>minAge){
        //         console.log(this.name,'ready for placments' );
        //     }else{
        //         console.log(this.name,'not ready for placments');
        //     }
        // } //toremove this type of error we jus use arrow function
        return minMarks => {
            if (this.marks > minMarks && this.age > minAge) {
                console.log(this.name, 'ready for placments');
            } else {
                console.log(this.name, 'not ready for placments');
            }
        }
    }
};

let zed=new Students('zed',27,89);
let zed1=new Students('zed1',15,79);
zed.setPlacmentAge(18)(40);
zed1.setPlacmentAge(18)(40);