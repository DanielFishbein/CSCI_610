
import * as THREE from 'three';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

var webglEl = document.getElementById("webgl");

const scene = new THREE.Scene();
let moveRate = 1
let position = {x:-50, y:50,z:150};

// let rotate_matrix = new THREE.Matrix4();
// lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
// directionalLight.position.set(200, 500, 300);
directionalLight.position.set(120, 100, 50);
scene.add(directionalLight); 

// camra
const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 150;
const cameraHeight = cameraWidth / aspectRatio;

const camera = new THREE.PerspectiveCamera( 50, 1, 0.5, 2000);


function table_leg(){
  const geometry = new THREE.BoxBufferGeometry(5, 20, 5);
  
  const material = new THREE.MeshLambertMaterial({ color:"rgb(0, 200, 0)" });
  const leg = new THREE.Mesh(geometry, material);
  return leg;
}

function table_top(){
  const geometry = new THREE.BoxBufferGeometry(41, 5, 34);
  const material = new THREE.MeshLambertMaterial({ color:"rgb(200, 0, 0)" });
  const top = new THREE.Mesh(geometry, material);
  return top;
}

function floor(){
  const geometry = new THREE.BoxBufferGeometry(150, 10, 150);
  const texture = new THREE.TextureLoader().load( "photo-1628699265231-97b2a3e7b9ae.jpg" );
  const material = new THREE.MeshPhongMaterial({ map: texture});
  const myfloor = new THREE.Mesh(geometry, material);
  return myfloor;
}

function party_hat(){
  const geometry = new THREE.ConeBufferGeometry(5, 15, 10);
  const texture = new THREE.TextureLoader().load( "Bertjan_Pot_26_Stripes_A_Broadlooma.jpg" );

  // const material = new THREE.MeshBasicMaterial( {  texture } );
  const material = new THREE.MeshPhongMaterial({  map:texture  });
  const hat = new THREE.Mesh(geometry, material);
  return hat;
}

function ball(){
  const geometry = new THREE.SphereBufferGeometry(6, 9, 10);
  
  const material = new THREE.MeshLambertMaterial({ color:"rgb(0, 50, 200)" });
  const sphere = new THREE.Mesh(geometry, material);
  return sphere;
}

function create_hat_textue(width, height, depth, segments) {
  return new THREE.Mesh(
    new THREE.BoxGeometry(width, height, depth, segments, segments, segments),
    new THREE.MeshPhongMaterial({
      map: THREE.ImageUtils.loadTexture("Bertjan_Pot_26_Stripes_A_Broadlooma.jpg"),
    })
  );
}


function animate() {

	requestAnimationFrame( animate );

  controls.keys = {
    LEFT: 'ArrowLeft', //left arrow
    UP: 'ArrowUp', // up arrow
    RIGHT: 'ArrowRight', // right arrow
    BOTTOM: 'ArrowDown' // down arrow
  }
  update_camra();
  camera.position.set( position.x, position.y, position.z );
  
  camera.lookAt(0,0,0);
  
  
	renderer.render( scene, camera );

}

function update_camra(){
  window.addEventListener("keydown", function(event) {
    const p = document.createElement("p");
    ;
    document.getElementById("output").appendChild(p);
  }, true);

  window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
      return; 
    }
  
    switch(event.code) {
      case "ArrowUp":
        // change y camra position
        updatePosition_y(moveRate);
        break;
      case "ArrowDown":
        // change y camra position
        updatePosition_y(-moveRate);
        break;
      case "ArrowLeft":
        // rotate x
        updatePosition_x(-moveRate);
        break;
      case "ArrowRight":
        // rotate x
        updatePosition_x(moveRate);
        break;
    }

    event.preventDefault();
}, true);
}

function updatePosition_x(offset) {

  
  position.x += offset;
}


function updatePosition_y(offset) {
  position.y += offset;
  

  if (position.y < -70) {
    position.y = 70;
  } else if (position.y > 70) {
    position.y = -70;
  }
}

function render() {
  controls.update();
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}



function createscean() {
  const scean = new THREE.Group();

 
  const the_floor = floor();
  the_floor.translateZ(-10);
  the_floor.translateY(-25);
  the_floor.translateX(10);
  scean.add(the_floor);


  const back_left_leg = table_leg();
  back_left_leg.translateZ(-18);
  back_left_leg.translateY(-10);
  back_left_leg.translateX(-18);
  scean.add(back_left_leg);

  const back_right_leg = table_leg();
  back_right_leg.translateZ(-18);
  back_right_leg.translateY(-10);
  back_right_leg.translateX(18);

  scean.add(back_right_leg);

  const front_left_leg = table_leg();
  front_left_leg.translateZ(10);
  front_left_leg.translateY(-10);
  front_left_leg.translateX(-18);
  scean.add(front_left_leg);

  const front_right_leg = table_leg();
  front_right_leg.translateZ(10);
  front_right_leg.translateY(-10);
  front_right_leg.translateX(18);
  scean.add(front_right_leg);

  const top = table_top();
  top.translateZ(-4);
  top.translateY(0);
  top.translateX(0);
  scean.add(top);

  const hat = party_hat();
  hat.translateZ(0);
  hat.translateY(7);
  hat.translateX(0);

  scean.add(hat);

  const fun_ball = ball();
  fun_ball.translateZ(-10);
  fun_ball.translateY(9);
  fun_ball.translateX(-10);
  scean.add(fun_ball)


  return scean;
}

camera.position.set(position.x, position.y, position.z);
camera.lookAt(0, 0, 0);
camera.translateZ(-100);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
const controls = new OrbitControls( camera, renderer.domElement );


document.body.appendChild(renderer.domElement);
render()
const scean = createscean();
scene.add(scean);

renderer.render(scene, camera);
controls.update(); 
camera.position.set( 0, 20, 100 );
camera.lookAt(camera.position);
animate();




