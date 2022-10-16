
const inquirer = require ('inquirer');
const Enemy = require ('./Enemy');
const Player = require ('./Player');


function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;

    Game.prototype.initializeGame = function(){
        
        this.enemies.push(new Enemy('goblin','sword'));
        this.enemies.push(new Enemy('orc','baseball bat'));
        this.enemies.push(new Enemy('skeleton','axe'));
        this.currentEnemy=this.enemies[0];
        let cEnemy=this.currentEnemy;
        //console.log(this.currentEnemy);
        inquirer
            .prompt({
                type:'text',
                name:'name',
                message:'What is your name?'
            })
            //destructure name from the prmpt object
            .then(function({name}) {
                this.player=new Player(name);//should not use this with arrow function
                this.currentEnemy=cEnemy;
                
                //test the object creation
                //console.log(cEnemy, this.player);
                this.startNewBattle();
            })

    };
        
    
}

module.exports = Game;