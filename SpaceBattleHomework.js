const button = document.getElementById('StartGame');
button.addEventListener('click',func1);
const mySpaceship = {
        'hull':20,
        'firepower':5,
        'accuracy':0.7
    }
    
const alienSpaceship={
        'hull': Math.floor(Math.random()*4+3), //3-6  Math.floor(Math.random()*(max-min+1)+min);
        'firepower':Math.floor(Math.random()*3+2), //2-4
        'accuracy':(Math.floor(Math.random()*3+6))/10,//0.6-0.8
        'number':6,
    }
/* var ourAttack;
var alienRandomAttack;
var alienShipHullValue;
var myShipHullValue; */

 
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
        var ourAttack= prompt(`my firepower: ${mySpaceship.firepower}`, 5);
        var ourRandomAccuracy = Math.random().toFixed(1);
        if (ourAttack==5 ){   
            if(ourRandomAccuracy > mySpaceship.accuracy) {
                var alienShipHullValue = alienSpaceship.hull-ourAttack;
                if (alienShipHullValue > 0){
                    alert(`the Alian Spaceship ${i} got hit,but it is not destroyed, alienShipHullValue:${alienShipHullValue}, we need to keep fighting!`);
                    alert('It is alienship turn to hit');
                
                }
            
                else if (alienShipHullValue < 0 || alienShipHullValue==0){
                    alert(`Alien Spaceship ${i} has been destroyed, we won this round`)
                                
                } else{
                    alert(`We missed attacking the Alien spaceship ${i}! it is alienship turn to hit`);
            
            }               
        }else{
            alert('Our attack missed hitting the alien ship')
        }
        }else{
            alert('please input the right firepower,this one is not right one-5!');
            process.exit();
        }

        
        var alienRandomAttack1= prompt(`Alienship ${i} attack. To start the NO.1 attack USS HelloWorld, you must input 1`);
        var alienRandomAttack = alienSpaceship.firepower;
        var alienshipRandomAccuracy = Math.random().toFixed(1);
        if (alienshipRandomAccuracy > alienSpaceship.accuracy){
        
            if (i==6){
                break;
            }else{
                if (alienRandomAttack1==='1' ) {  
                    var myShipHullValue = mySpaceship.hull - alienRandomAttack;        
                    alert(`Our spaceship has been hit and our ship hull is ${myShipHullValue}, it is our turn to attack!`);
                }else if(alienRandomAttack !=='1'){
                    myShipHullValue -= alienRandomAttack;        
                    alert(`Our spaceship has been hit and our ship hull is ${myShipHullValue}, it is our turn to attack!`);                              
                }else if(alienRandomAttack !=='1'&& (myShipHullValue -= alienRandomAttack) <= 0){
                    alert("We lost the game")
                    process.exit();
                    
                }else{
                    myShipHullValue = myShipHullValue;
                    alert(`Alien spaceship missed hitting our spaceship, our ship hull is ${myShipHullValue}, and it our turn to attack!`)
        
                }
        } 
          
    }else{
        alert ('Alien Ship missed hitting us, great!')
    }
    }
    alert('CONGRATULATIONS, WE WON THE GAME!');
    }




        
/* 
function func3() {
    var alienRandomAttack = alienSpaceship.firepower;
    var myShipHullValue = mySpaceship.hull - alienRandomAttack;
    if (alienRandomAttack ) {  
        
        alert('We got hit by alienship')
        alert(`Our spaceship has been hit and our ship hull is ${myShipHullValue}, it is our turn to attack!`);
        myShipHullValue -= alienRandomAttack;
        //i++;  
        func2(); 
               
    }else{
        alert('Alien spaceship missed hitting our spaceship, We won this round, and it our turn to attack!')
        //i++;
        func2();
    }
}; */




