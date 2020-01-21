var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
	scene: {
		init: init,
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);

function init(){
	var platforms;
	var player;
}
function preload(){
	this.load.image('background','assets/sky.png');	
	this.load.image('fond','assets/fond.png');
	this.load.image('sol','assets/platform.png');
	this.load.spritesheet('perso','assets/dude.png',{frameWidth: 32, frameHeight: 48});
}
function create(){
	this.add.image(400,300,'fond');
	this.add.image(400,300,'background');
	
	platforms = this.physics.add.staticGroup();
	platforms.create(400,568,'sol').setScale(2).refreshBody();
	platforms.create(600,400,'sol');
	platforms.create(50,250,'sol');
	
	player = this.physics.add.sprite(100,450,'perso');
	player.setCollideWorldBounds(true);
	player.setBounce(0.2);
	this.physics.add.collider(player,platforms);
}

function update(){
}