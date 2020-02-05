class Student{

    details(id,name,grade){
        this.id=id;
        this.name=name;
        this.grade=grade;

    }

    display(){

        console.log(this.id,this.name,this.grade);
    }

}

let std=new Student();
std.details(64635,"Akbar","A");
std.display();