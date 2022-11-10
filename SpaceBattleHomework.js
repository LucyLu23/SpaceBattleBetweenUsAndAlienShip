const button = document.getElementById('StartGame');
button.addEventListener('click',func1);
const mySpaceship = {
        'hull':20,
        'firepower':5,
        'accuracy':0.7
    }
    
const alienSpaceship={
        'hull': Math.floor(Math.random()*3+4), //3-6  Math.floor((Math.random() * (max - min)) + min)
        'firepower':Math.floor(Math.random()*2+3), //2-4
        'accuracy':(Math.floor(Math.random()*2+7))/10,//0.6-0.8
        'number':6,
    }
var ourAttack;
var alienRandomAttack;
var alienShipHullValue;
var myShipHullValue;

 
function func1() {
    alert('Welcom to the Space Battle Game: mySpaceshipHull:20, firepower:5, accuracy:0.7; AlienSpaceshipHUll:3-6, firepower:2-4, accuracy:0.6-0.8,number:6');
    var name1 = prompt("Enter your name");
    var age = prompt("Enter your age");
    if (name1 != null && age >=18) {
        alert("Hello! Welcome to the Space Battle Game  "+ name1);
        beginOrContinue();
    }else {
        alert("Hello! you are not allowed to play this game, bye bye "+ name1);
        process.exit();
    }
};

function beginOrContinue(){
    var yourChoice = prompt('play the game? must input "yes" to start the game', 'yes');
    if (yourChoice ==="yes"){
        alert('Come On, Let Us Begin/Continue Our Fighting Adventure!');
        func2();                    
    }else{
        alert("you don't input yes, You are out of the game! Byebye ")
        process.exit();
}
};

function func2(){
    //let alienSpaceShip=[alienSpaceship1, alienSpaceship2,alienSpaceship3,alienSpaceship4,alienSpaceship5,alienSpaceship6];
    for(let i=1; i<=alienSpaceship.number; i++){
        ourAttack= prompt(`my firepower: ${mySpaceship.firepower}`, 5);
        if (ourAttack==5){    
            alienShipHullValue = Math.floor(Math.random()*3+4)-ourAttack;
            if (alienShipHullValue > 0){
                alert(`the first Alian Spaceship got hit,but it is not destroyed, alienShipHullValue:${alienShipHullValue}, we need to keep fighting!`);
                alert('It is alienship turn to hit');
                func3();
            }
            else if (alienShipHullValue == Math.floor(Math.random()*3+4)){
                alert('We missed attacking the Alien spaceship! it is alienship turn to hit');
                func3();
            }
            else if (alienShipHullValue < 0 || alienShipHullValue==0){
                alert('Alien Spaceship has been destroyed, we won the game')
                process.exit();                
            }else{
                alert('We retreated, and We do not want to play the game')
                process.exit();
            }                
            }
        else{alert('please input the right firepower,this one is not right one-5!');
        process.exit();
        }
    }
}
        

function func3() {
    alienRandomAttack = Math.floor(Math.random()*2+3);
    myShipHullValue = mySpaceship.hull - alienRandomAttack;
    if (alienRandomAttack ) {  
        myShipHullValue -= alienRandomAttack;
        alert('We got hit by alienship')
        alert(`Our spaceship has been hit and our ship hull is ${myShipHullValue}, it is our turn to attack!`)            
    }else{
        alert('Alien spaceship missed hitting our spaceship, We won this round, and it our turn to attack!')
    }
};




