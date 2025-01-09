class Box {

height = 400;
width = 300;

setValues(height,width){
    this.height = height;
    this.width = width;
}

printBox(){
    console.log(`Height: ${this.height}, Width: ${this.width}  `,);
    
}

resetValues(height,width){
    this.height = height;
    this.width = width;
}

}

const myBox = new Box();
console.log(myBox);

myBox.height = 200;
console.log(myBox);



class Person {
    first = 'gal'
    last = 'lavi'
    age = '30'
}

p1 = new Person()
console.log(typeof p1);
console.log(p1);

p1.first = 'david'
p1.last = 'qaissi'

console.log(p1.first +' ' + p1.last);

const p2 = p1
console.log(p2);
p2.first = 'alex'
p2.last = 'perirea'
console.log(p2);

const p3 = new Person()
p3.first = 'heloo'
p3.last = 'word'
console.log(p3);



const anotherBox = new Box()
anotherBox.setValues(899,555)
anotherBox.printBox()
anotherBox.resetValues(1000,2000)
anotherBox.printBox()



class Simple_User{
    first = 'gal'
    last = 'lavi'
    age = '30'

    SayWelcome(){
        console.log(`welcome ${this.first } ${this.last}`);
        
    }

    changeName(first,last){
        this.first = first
        this.last = last
        console.log(first,last);
        
    }

    printNow(){
        console.log();
        
    }
}



const test1 = new Simple_User();
console.log(typeof test1);
console.log(test1);


test1.SayWelcome()
//let first = prompt('enter First Name')
//let last = prompt('enter last Name')




class Box2{
    constructor(newWidth,newHeight){
            this.width=newWidth
            this.height=newHeight
            console.log('okii thank You....');
            
    }
}
const box2 = new Box2(89,22)
console.log(box2);

const box3 = new Box2(21331,2131455)
console.log(box3);



class all{
    width;
    height;
    color;
    bgColor;
    text;
    constructor(newWidth,newHeight,newColor,newbgColor,newText){
            this.width=newWidth
            this.height=newHeight
            this.color=newColor
            this.bgColor=newbgColor
            this.text=newText

            document.createElement('div');
            div.style.width = `${this.width}px`;
            div.style.height = `${this.height}px`;
            div.style.color = this.color;
            div.style.backgroundColor = this.bgColor;
            div.innerText = this.text;
            document.body.appendChild(div);
    }
}




class BasicUser {
    first = 'Gal'
    last = 'Lavi'
    username = 'gallavi'
    password = 'gal123'
    islogin = false  

    constructor(newFirst,newLast,newUsername,newPassword){
        this.first = newFirst
        this.last = newLast
        this.username = newUsername
        this.password = newPassword

        
    }

    SayWel(){
        console.log(`welcome ${this.first } ${this.last}`);
        
    }



    
    change(first,last){
        this.first = first
        this.last = last
        console.log(first,last);
        
    }



 
login(username,password){
if(username === this.username||password=== this.password){
    this.islogin=true
    alert('thanks')
}
}

 
logOff(username,password){
   else usernameme ||password!== this.password){
        this.islogin=false
        alert(
            'baaad'
        )
    }
        

}
} 

const per1 = new BasicUser('firas','qaissi','firasq','1234')

console.log(per1);

per1.change('annna','vladimer')

per1.login('firasq','1234')
console.log(per1);

per1.logOff()

username


