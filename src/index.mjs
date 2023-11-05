import "./styles.css";
import * as THREE from 'three';
import gsap from 'gsap'

//cursor
const cursor={
  x:0,
  y:0
}
window.addEventListener('mousemove',(event)=>{
  cursor.x=event.clientX/800 -0.5
  cursor.y=-(event.clientY/600 -0.5)
  console.log(cursor.x, cursor.y)
})

const canvas=document.querySelector(".webgl");

///scene
const scene=new THREE.Scene()

//camera
const camera=new THREE.PerspectiveCamera( 75, 800 / 600,1,100);
// const camera = new THREE.OrthographicCamera(-1,1,1,-1,0.1,100);
scene.add(camera)
camera.position.set(0,0,3)

//model
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const mesh = new THREE.Mesh( geometry, material );
mesh.position.set=(0,0,0)
// camera.lookAt(mesh.position)

// mesh.scale.set(1.5,2,1)
// mesh.rotation.y=10
scene.add( mesh );
// console.log(camera.position.length())


//axes helper
// const axesHelper=new THREE.AxesHelper(2)
// scene.add(axesHelper)

//renderer
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( 800,600 );

renderer.render(scene,camera)



let time=Date.now()
const clock=new THREE.Clock()


// gsap.to(mesh.position,{duration:3,delay:1,x:5})
// gsap.to(mesh.position,{duration:3,delay:1,x:0})
//animation
const tick=()=>{
  //time
  // const currentTime=Date.now()
  // const dt=currentTime-time
  // time=Date.now()

  //camera on mouse
  camera.position.x=cursor.x*3
  camera.position.y=cursor.y*3
  camera.lookAt(mesh.position)

  const elapsedTime=clock.getElapsedTime()

  // //update object
  // mesh.rotation.y=elapsedTime
  // mesh.position.y=Math.sin(elapsedTime)
  // mesh.position.x=Math.cos(elapsedTime)
  // //render
  renderer.render(scene,camera)

  // //
  window.requestAnimationFrame(tick)
}
tick()



