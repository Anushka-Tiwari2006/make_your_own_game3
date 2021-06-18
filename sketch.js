var gameState = "levelA"
var pc,stair,stairGroup;
var sound1,background;
var zBack6
var score = 0;
var life = 0;

function preload(){
   zImage = loadImage("26.png");
   zImage2 = loadImage("32.png");
   zImage3 = loadImage("33.png");
   pcImg  = loadImage("34.png");
   zBack1 = loadImage("21.jpg");
   zBack2 = loadImage("4.png");
   zBack3 = loadImage("7.png");
   zBack4 = loadImage("23.jpg");
   zBack5 = loadImage("27.jpg");
   zBack6 = loadImage("30.jpg");
   zBack7 = loadImage("31.jpg");
   log  = loadImage("35.png");
   gImg  = loadImage("36.png");
   g2  = loadImage("37.png");
   sImg = loadImage("skull.png");
   dImg = loadImage("39.png");
   bloodIMG = loadImage("40.png")
   sound1 = loadSound("level1.mp3")
   back = loadImage("image.jpeg")
   pcImg = loadImage("34.png")
   pcImg2 = loadImage("pc2.png")
   gaintImg = loadImage("24.png")
   mImg = loadImage("25.png")
   mImg2 = loadImage("501.png")
   sword = loadImage("sw.png")
   fly = loadImage("butter.png")
   aback = loadImage("11.png")
   aback2 = loadImage("12.png")
   aback3 = loadImage("13.png")
   aback4 = loadImage("14.png")
   back = loadImage("new.png")
  

 }
function setup() {
  createCanvas(1320,650);
  background1 = createSprite(100,300,10,100);
  background1.addImage(zBack6);
  

  stairGroup = new Group();
  zombGroup = new Group();
  skullGroup = new Group();
  scoreGroup = new Group();
  bodyGroup = new Group();
   //level2
   monsterGroup = createGroup();
   monsterGroup2 = createGroup()
   gaintGroup = createGroup();
   weaponGroup = createGroup()
  
  sound1.play()

  pc = createSprite(100, 200, 50, 50);
  pc.addImage(pcImg);
  pc.scale = 0.4;
  pc.setCollider("rectangle",0,0,200,340);

  ground = createSprite(99,368,800,20);
  ground.addImage(gImg);
  ground.scale = 0.6;
  ground.setCollider("rectangle",0,0,400,100);

  ground2 = createSprite(20,508,63050,80);
  ground2.shapeColor = "black";
 
  skull2 = createSprite(12710,400,20,80);
  skull2.addImage(sImg)
  skull2.scale = 0.9;
  
  for(s = 700;s<12710;s=s+1500){
    body = createSprite(s,480,20,80);
    body.addImage(dImg)
    body.scale = 0.3;

    bodyGroup.add(body)
    }
   
  for(a = 300;a<12710;a=a+250){
    score = createSprite(a,100,20,80);
    score.addImage(fly)
    score.scale = 0.8;
    score.debug = true
    score.setCollider("circle",0,-30,20)

    scoreGroup.add(score);

  }
  
  for(var i =300;i<12710;i=i+250){ 
    stair = createSprite(i,random(30,350),80,10);
    stair.debug = true;
    stair.addImage(log);
    stair.scale = 0.3
    stair.setCollider("rectangle",0,0,300,100)
  
    stairGroup.add(stair);
    
  }
 
  button = createButton('Play');
  score = 0
 
  
  

}

function draw() {
  background("black")

  if(gameState==="levelA"){
    background1.changeImage(zBack6);
    background1.scale = 1;

  if(pc.isTouching(scoreGroup)){
    score = score+1
  }

  pc.visible = true

  if(keyDown("up")&&pc.y>1 ) {
    pc.velocityY = -18;
    pc.velocityX = 5; 
    }
  
  pc.velocityY = pc.velocityY + 0.8;
   
  pc.collide(stairGroup);
  pc.collide(ground);


  // this.button.position(560,500);
  button.style('width', '200px');
  button.style('height', '40px');
  button.style('background', 'lightpink');
    
  zombies();
  skullFun();
  camera.position.x  = pc.x;
  camera.position.y = 200;

  if(pc.isTouching(zombGroup)||pc.isTouching(skullGroup)||pc.isTouching(ground2)){
    gameState = "end";
    }

    //else if(score>=50){
      //gameState="levelB"
    //}

  if(gameState ==="end"){
      background("red") 
    }

  console .log(pc.x)  
    
  drawSprites();
  fill("white")
  textSize(25)
  text("Energy level : "+score,10,-50)
        
  }

  else if(gameState==="levelB"){

  ground .visible = false
  skull2.visible = false;
  bodyGroup.destroyEach();
  ground2.visible  = false;
  zombGroup.destroyEach()
  skullGroup.destroyEach()
  stairGroup.destroyEach()
  scoreGroup.destroyEach();

  background1.addImage(aback3)
  background1.scale = 0.75
    
  // background1.changeImage(zBack3)

  ground = createSprite(10,700,1500,70) 
  ground.shapeColor = "black"

  if(keyCode===37){
    pc.velocityX -=4
    pc.addImage(pcImg)
  }
  if(keyCode===39){
    pc.velocityX +=4
    pc.addImage(pcImg2)
  }
  if(keyCode===38){
    pc.velocityY -=4
    pc.addImage(pcImg)
  }
  if(keyCode===40){
    pc.velocityY +=4
    pc.addImage(pcImg)
  }
    
  if(weaponGroup.isTouching(gaintGroup)){
    gaint2.destroy();
    life = life +1
    butter = createSprite(80,200,10,10)
    butter.addImage(fly);
  
    if(life>1){
      butter.x = butter.x+60
    }
    if(life>2){
      butter.x = butter.x+60
    }
    if(life>3){
      butter.x = butter.x+60
    }
    if(life>4){
      butter.x = butter.x+60
    }
    if(life>5){
      butter.x = butter.x+60
    }
    if(life>6){
      butter.x = butter.x+60
    }
    if(life>7){
      butter.x = butter.x+60
    }
    if(life>8){
      butter.x = butter.x+60
    }
    }
  
    if(monsterGroup.isTouching(pc)||gaintGroup.isTouching(pc)||monsterGroup2.isTouching(pc) &&life>=1){
      life -=life
      //butter.visible = false
      }
      if(life<0||pc.isTouching(gaintGroup)){
        gameState = "end2"
      }
      else if(life>=20){
        gameState = "levelC"
      }
    if(gameState = "end2"){
      background("pink")
    }
    
  //if(gameState === "levelC"){}
  pc.debug  =true;
  
  gaintFun();
  monsterFun();
  weaponFun();
  drawSprites();

  fill("white")
  textSize(20)
  text("Energy : "+life,50,100)

  pc.x = 100
  pc.y = 400
  camera.position.x = pc.x
  camera.position.y = pc.y

  }
 
 }

 function zombies(){
  
  if(frameCount%20===0){
   zomb = createSprite(1,460,20,20);
   zomb.velocityX =random(4,8);
   
  var rand = Math.round(random(1,3));
  switch(rand){
   case 1: zomb.addImage(zImage);
      break;
   case 2: zomb.addImage(zImage2); 
      break;
   case 3: zomb.addImage(zImage3);
      break;  
      default:break;

      }
  zomb.scale = 0.4;
  //zomb.debug = true
  zomb.setCollider("rectangle",40,0,200,340);
  zombGroup.add(zomb)
  } 
 }

 function skullFun(){
  if(frameCount%20===0){
    sk = createSprite(random(8000,13050),10,10,10);
    sk.velocityY = 6;
    sk.addImage(sImg)
    sk.scale = 0.2
    //sk.debug = true
    sk.setCollider("circle",0,-40,80)
    skullGroup.add(sk)
  }
 }

 function gaintFun(){
  if(frameCount%200===0){
    gaint2 = createSprite(1,400,30,30);
    gaint2.addImage(gaintImg);
    gaint2.scale = 0.6;
    gaint2.velocityX = -4;
    gaint2.y = random(50,800);
    gaintGroup.add(gaint2);
    gaint2.debug = true;

    gaint2.setCollider("rectangle",0,0,100,200)
  }
 }

 function monsterFun(){
  if(frameCount%180===0){
    monster = createSprite(1,400,10,10)
    monster.addImage(mImg2)
    monster.scale = 0.3
    monster.velocityX  = -4
    monster.y = random(50,800)
    monster.debug = true;
    monster.setCollider("rectangle",0,0,100,200)


    monsterGroup.add(monster)
    
    
  }
  if(frameCount%240===0){
    monster2 = createSprite(1,400,10,10)
    monster2.addImage(mImg)
    monster2.scale = 0.3
    monster2.velocityX = 4
    monster2.y = random(50,800)
    monster2.debug = true;
    monster2.setCollider("rectangle",0,0,100,200)


    monsterGroup2.add(monster2)
  } 
 }

 function weaponFun(){
  if(keyDown("space")){
    weapon = createSprite(1,1,10,10)
    weapon.velocityX = 6
    weapon.addImage(sword)
    weapon.scale = 0.4;
    weapon.x = pc.x;
    weapon.y = pc.y;
    weapon.debug = true;
    weapon.lifetime = 300
    weapon.setCollider("rectangle",0,0,300,200)


    weaponGroup.add(weapon)
  }
 }





