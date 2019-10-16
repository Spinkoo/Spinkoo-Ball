function init() {
  var hardness=0; 
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var posX, posY;
  var centerX=370;  
  var scale = 20;

  var cpt=0;
  var    Vect2D = Box2D.Common.Math.b2Vec2
            ,   BodyDef = Box2D.Dynamics.b2BodyDef  // attributs: type, position.x, position.y
            ,   Body = Box2D.Dynamics.b2Body // permet de définir le type static ou dynamic
			//  .b2_dynamicBody or .b2_staticBody
            ,   FixtureDef = Box2D.Dynamics.b2FixtureDef // attributs: density, friction, restitution
            ,   World = Box2D.Dynamics.b2World  // une fois les objets crées, ils sont ajoutés au world
			// avec ajout de la friction .CreateBody(OBJECT1).CreateFixture(fixDef)
      ,   Polygon = Box2D.Collision.Shapes.b2PolygonShape
			// la forme de l'objet est ajoutée fixDef.shape.SetAsBox
      ,   DebugDraw = Box2D.Dynamics.b2DebugDraw      ,   Circle = Box2D.Collision.Shapes.b2CircleShape;

    var world = new World(new Vect2D(0,5),  false);//  (vecteur de gravité, paramètre sleep)
    //On défini un ‘world’ avec deux paramètres : 
	// la gravité 
	//le paramètre ‘’sleep’’ dit à Box2D de ne pas traiter l’objet s'il est en équilibre.

    // On définit le sol (Ground, floor) en définissant ses propriétés 
    var fixDef = new FixtureDef;
    fixDef.density = 0.001;
    fixDef.friction = 0.4;
    fixDef.restitution = 0.4;

    var X_CENTER_GROUND=400;
    var Y_CENTER_GROUND=280;
	// Ground is simply a static rectangular body with its center at X_CENTER_GROUND and Y_CENTER_GROUND

	var SCENE_OBJECT1 = new BodyDef;
  SCENE_OBJECT1.type = Body.b2_staticBody;
    SCENE_OBJECT1.position.x = 140/scale;//20 mètres;   
	SCENE_OBJECT1.position.y =250/scale; // 20 mètres;

 fixDef.shape = new Polygon;
   fixDef.shape.SetAsBox(2/scale, 170/scale); // les w et h données représentent la moitié de la largeur et hauteur
   
   // And finally add the object1 to the world
   world.CreateBody(SCENE_OBJECT1).CreateFixture(fixDef);





   SCENE_OBJECT1.type = Body.b2_staticBody;
    SCENE_OBJECT1.position.x = 370/scale;//20 mètres;   
  SCENE_OBJECT1.position.y =406/scale; // 20 mètres;
  

  fixDef.shape = new Polygon;
   fixDef.shape.SetAsBox(10/scale, 15/scale); // les w et h données représentent la moitié de la largeur et hauteur

   // And finally add the object2 to the world
   world.CreateBody(SCENE_OBJECT1).CreateFixture(fixDef);








   
   var SCENE_OBJECT2 = new BodyDef;
   /* SCENE_OBJECT2.type = Body.b2_staticBody;
    SCENE_OBJECT2.position.x = 345/scale;//20 mètres;   
	SCENE_OBJECT2.position.y =425/scale; // 20 mètres;
   
   fixDef.shape = new Polygon;
   fixDef.shape.SetAsBox(200/scale, 2/scale); // les w et h données représentent la moitié de la largeur et hauteur
   
   // And finally add the object2 to the world
   world.CreateBody(SCENE_OBJECT2).CreateFixture(fixDef);*/

   //-------------------------------------
   SCENE_OBJECT2.type = Body.b2_staticBody;
    SCENE_OBJECT2.position.x = 200/scale;//20 mètres;   
  SCENE_OBJECT2.position.y =425/scale; // 20 mètres;

  fixDef.shape = new Polygon;
   fixDef.shape.SetAsBox(60/scale, 2/scale); // les w et h données représentent la moitié de la largeur et hauteur
   
   // And finally add the object2 to the world
   world.CreateBody(SCENE_OBJECT2).CreateFixture(fixDef);
   //----------------
   SCENE_OBJECT2.type = Body.b2_staticBody;
    SCENE_OBJECT2.position.x = 360/scale;//20 mètres;   
  SCENE_OBJECT2.position.y =425/scale; // 20 mètres;

  fixDef.shape = new Polygon;
   fixDef.shape.SetAsBox(50/scale, 2/scale); // les w et h données représentent la moitié de la largeur et hauteur
   
   // And finally add the object2 to the world
   world.CreateBody(SCENE_OBJECT2).CreateFixture(fixDef);
   //------------------
   SCENE_OBJECT2.type = Body.b2_staticBody;
    SCENE_OBJECT2.position.x = 500/scale;//20 mètres;   
  SCENE_OBJECT2.position.y =425/scale; // 20 mètres;

  fixDef.shape = new Polygon;
   fixDef.shape.SetAsBox(50/scale, 2/scale); // les w et h données représentent la moitié de la largeur et hauteur
   
   // And finally add the object2 to the world
   world.CreateBody(SCENE_OBJECT2).CreateFixture(fixDef);





   var SCENE_OBJECT3 = new BodyDef;
   SCENE_OBJECT3.type = Body.b2_staticBody;
    SCENE_OBJECT3.position.x = 550/scale;//20 mètres;   
  SCENE_OBJECT3.position.y =250/scale; // 20 mètres;

  fixDef.shape = new Polygon;
   fixDef.shape.SetAsBox(2/scale, 170/scale); // les w et h données représentent la moitié de la largeur et hauteur
   
   // And finally add the object1 to the world
   world.CreateBody(SCENE_OBJECT3).CreateFixture(fixDef);

   posX=370;posY=100;
   var bodies=new Array;

   for(var i = 0; i < 5; ++i) {
    var DYNAMIC_SCENE_OBJECT = new BodyDef;
    DYNAMIC_SCENE_OBJECT.type = Body.b2_dynamicBody;
    fixDef.shape = new Polygon;
    fixDef.shape.SetAsBox(
                      0.7 //half width
                  ,  0.7 //half height
                  );

    DYNAMIC_SCENE_OBJECT.position.x = posX/scale;
    DYNAMIC_SCENE_OBJECT.position.y = (posY+50*i)/scale;
    DYNAMIC_SCENE_OBJECT.userData={type:"box"};
      //SCENE_OBJECT.position.Set(2,2);
      bodies[i]=(DYNAMIC_SCENE_OBJECT);
      world.CreateBody(DYNAMIC_SCENE_OBJECT).CreateFixture(fixDef);

    }




    var objctsToDestory=new Array();

    var contactListener = new Box2D.Dynamics.b2ContactListener;
    contactListener.BeginContact = function(contact) {

      var fixA = contact.GetFixtureA().GetBody().GetUserData();
      var fixB = contact.GetFixtureB().GetBody().GetUserData();
      if(fixA != null && fixB!=null)
        if(fixA['type']=="circle" && fixB['type']=="circle"){

          if(  contact.GetFixtureA().GetBody().GetUserData()['onFire'] || contact.GetFixtureB().GetBody().GetUserData()['onFire']){

           contact.GetFixtureA().GetBody().m_fixtureList.m_shape.m_radius=1.5;
         }
         contact.GetFixtureB().GetBody().m_linearVelocity.y+= 15;
         contact.GetFixtureA().GetBody().m_linearVelocity.y+= 15;
         contact.GetFixtureA().GetBody().GetUserData()['onFire']=true;
         contact.GetFixtureB().GetBody().GetUserData()['onFire']=true;

       } else  if(fixB['type']=="box" && fixA['type']!="box"){
        if(fixA['onFire']){
          Score++;
          objctsToDestory.push(contact.GetFixtureB().GetBody());
          objctsToDestory.push(contact.GetFixtureA().GetBody());

        }

      }
      else if(fixA['type']=="box" && fixB['type']!="box"){

        if(fixB['onFire']){
          Score++;
          objctsToDestory.push(contact.GetFixtureA().GetBody());
          objctsToDestory.push(contact.GetFixtureB().GetBody());

        }
      }


    };

    world.SetContactListener(contactListener);

    var debug = new DebugDraw();
    var changed=false;
    debug.SetSprite(document.getElementById("canvas").getContext("2d"));
    debug.SetDrawScale(scale);
    debug.SetFillAlpha(0.6);
    debug.SetLineThickness(2.0);
	debug.SetFlags(DebugDraw.e_shapeBit); // display all shapes and joints 
	world.SetDebugDraw(debug); // initialiser debug draw par le passage de debug à SetDebugDraw()
    world.DrawDebugData(); // draw the world in the given canvas for debugging and testing purposes           
    var nbBalls=0,nbBox=5;





  // Une fois les objets crées, il faut les dessiner et les animer.
  // Il faut utiliser une fonction de rappel. 


  window.setInterval(update, 1000 / 60);
         //   window.setInterval(update2, 5000);
         var minVil=0.0000000001;
         var Score=0;
         var cpt2=0;
         var gameOver=false;
         function update(){

          slidebar();
          if(gameOver) return;
          getScore();
          c=0;
          for(i=0;i<world.m_island.m_bodies.length;i++){
           if(world.m_island.m_bodies[i]!=null && world.m_island.m_bodies[i].m_userData!=null)
            if(world.m_island.m_bodies[i].m_userData['type']!="box")
              if(Math.floor(world.m_island.m_bodies[i].m_xf.position.y)==20 &&world.m_island.m_bodies[i].m_linearVelocity.x<minVil && world.m_island.m_bodies[i].m_linearVelocity.y<minVil )
               world.m_island.m_bodies[i].ApplyImpulse( new Vect2D(0,0.02),world.m_island.m_bodies[i].m_xf.position );



           }

           if(world.m_bodyCount>150)  {
            context.clearRect(0, 0, canvas.width, canvas.height);
            canvas.style.backgroundColor ="white";
            context.font="30px Arial";
            context.fillText("Game Over",200,200);
            gameOver=true; return;}

            world.Step(1/60, 10, 10);
            for(i=0;i<objctsToDestory.length;i++)
             { world.DestroyBody( objctsToDestory[i]);
             }

             objctsToDestory=[];


             world.DrawDebugData();

           }
           document.addEventListener("click", MousePosition);

           window.setInterval(ballsAllowd,3000)
           function ballsAllowd(){
            if(gameOver) return;
            cpt=0;
            cpt2=0;
          }
          prevval=0;

          function slidebar(){
            var sc = document.getElementById('myRange');
            hardness=sc.value;
            if(prevval!=hardness)
              window.clearInterval(myinter);
            else return;
            if(hardness==0)
             myinter= window.setInterval(update2,12000);
           if(hardness==1)
            myinter=window.setInterval(update2,8000);
          if(hardness==2)
           myinter= window.setInterval(update2,4500);
         prevval=hardness;


       }
       function getScore(){
        if(gameOver) return;
        var sc = document.getElementById('ScoreDiv');
        var stats = document.getElementById('stats');

        sc.innerHTML="Your Score : "+Score+"/"+nbBox+" (Boxes)<br>Number of balls used : "+nbBalls ;
        if(nbBalls==0)     stats.innerHTML="<br>Accuracy : "+(0).toFixed(2)+"%";
        else
          stats.innerHTML="<br>Accuracy : "+(100*Score/nbBalls).toFixed(2)+"%";
      }
      function MousePosition(event)
      {
        if(gameOver) return;
        posX=event.clientX;
        posY=event.clientY;
        if(cpt==1 && posX>centerX) return;
        if(cpt2==1 && posX<centerX) return;

        var DYNAMIC_SCENE_OBJECT = new BodyDef;
        DYNAMIC_SCENE_OBJECT.type = Body.b2_dynamicBody;
        
        fixDef.shape = new Circle;
        fixDef.shape.SetRadius(0.5);
        if(posX<centerX){    
          DYNAMIC_SCENE_OBJECT.position.x = 540/scale;
          DYNAMIC_SCENE_OBJECT.position.y =100/scale;

        }
        else{

         DYNAMIC_SCENE_OBJECT.position.x = 150/scale;
         DYNAMIC_SCENE_OBJECT.position.y =100/scale;
       }
       if(posX<centerX) {posX=-(centerX-posX+370);
         cpt2++;


       } else cpt++;

       nbBalls++;
       var vx, vy;
       vx=(posX-DYNAMIC_SCENE_OBJECT.position.x)/(2*scale);
       vy=(posY-DYNAMIC_SCENE_OBJECT.position.y)/(2*scale);   
       DYNAMIC_SCENE_OBJECT.linearVelocity.Set(vx, vy);  

      //SCENE_OBJECT.position.Set(2,2);
      DYNAMIC_SCENE_OBJECT.userData={type:"circle",onFire:false};

      world.CreateBody(DYNAMIC_SCENE_OBJECT).CreateFixture(fixDef);

    }



  myinter=window.setInterval(update2,12000);
  function update2(){
    slidebar();

    if(gameOver) return;
    posX=370;posY=100;
    rand=Math.random();
    mod=9;
    if(hardness==1)
      mod=7;
    if(hardness==2)
      mod=5;
    for(var i = 0; i < 5; ++i) {
      var DYNAMIC_SCENE_OBJECT = new BodyDef;

      DYNAMIC_SCENE_OBJECT.type = Body.b2_dynamicBody;
      fixDef.shape = new Polygon;
      if(Math.floor(rand*10)%mod==0 || nbBox%(30+mod)==0)
        if(i%2==0)
         fixDef.shape.SetAsBox(
                      1.2 //half width
                  ,  1.2 //half height
                  );
       else     fixDef.shape.SetAsBox(
                      0.7 //half width
                  ,  0.7 //half height
                  );

         else
           fixDef.shape.SetAsBox(
                      0.7 //half width
                  ,  0.7 //half height
                  );
         
         DYNAMIC_SCENE_OBJECT.position.x = posX/scale;
         DYNAMIC_SCENE_OBJECT.position.y = (posY+50*i)/scale;
         DYNAMIC_SCENE_OBJECT.userData={type:"box"};
      //SCENE_OBJECT.position.Set(2,2);
      world.CreateBody(DYNAMIC_SCENE_OBJECT).CreateFixture(fixDef);

    }
    nbBox+=5;


  }


}






function isStopped(body) {

  var isMoving = (
    Math.abs(body.linearVelocity.x) >0.0 || Math.abs(body.linearVelocity.y) >0.0);
  if(isMoving) {
    timeStopped = 0.0;
    return false;
  } else {
    return true;
  }
}



