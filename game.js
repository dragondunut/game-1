'use strict';

var game = new Phaser.Game(320,568,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});
var background, goat;


function preload() {
  game.load.image("background", "background.gif");
  game.load.spritesheet('goat', "flappy.png",32,32);
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  background = game.add.tileSprite(0,0,320,568,"background");
  background.autoScroll(-100,0);
  goat = game.add.sprite(100, 245, 'goat');
  goat.anchor
  goat.animations.add('fly', [0,1,2,3,4,5,6],10, true);
  goat.play('fly');
  game.physics.arcade.enable(goat);
}

function update() { }


function render() { }
