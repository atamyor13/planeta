//ALEJANDRA TAMAYO RIVERA
//Fecha 13/05/2020
//Este codigo es para crear un mundo
var scene = new THREE.Scene(); //Se genera la escena
var camera = new THREE.PerspectiveCamera(75,innerWidth/window.innerHeight,0.1,1000);//Se genera la variable de camara y ajustamos su perspectiva
//Se genera el render
//alpha: true es para que el render quede transparente
var renderer = new THREE.WebGLRenderer({alpha: true});
	renderer.setClearColor(0.000000, 0);//Se establece el color del fondo
	renderer.setSize(window.innerWidth, window.innerHeight);//Se establecen dimensiones
document.body.appendChild(renderer.domElement);//Y todo se renderiza
// Se crea la geometria de la esfera.
var geometry = new THREE.SphereGeometry(12, 32, 32);//Parametros para la geometria
var loader = new THREE.TextureLoader();//Este permite cargar la imagen al objeto
var texture = loader.load('earth.jpg');//Se carga la imagen
var material = new THREE.MeshBasicMaterial({
	map:texture,
	//Este permite observar la figura mas estructurada en true y en false lisa
	flatShading: false,
	//En este caso no reflejo nada de cambio
	shininess: 50,
	specularMap:texture,
	normalMap:texture,
	//Opacidad más opaca llegando a cero y mas visible llegando a uno
  	opacity: 0.3,
  	//Permite ver las lineas que componen a la figura.
  	wireframe: false,
});
//Se declaran las variables que mostraran las figuras como lo son la esfera, el plano y el cubo.
var sphere = new THREE.Mesh(geometry, material);
var geometry1 = new THREE.PlaneGeometry(19,14,20);
var plane = new THREE.Mesh(geometry1, material);//plano
var geometry2 =new THREE.BoxGeometry(10,10,10);
var cube = new THREE.Mesh(geometry2, material);//cubo
scene.add(sphere, plane, cube);//Se añade en la escena las figuras
//Aqui definimos donde van a quedar las figuras en un eje de cordenadas x.
	plane.position.x =-30;//El plano quedará a la izquierda
	cube.position.x=30;//El cubo quedará a la derecha
	camera.position.z = 30;//Esta es la cantidad de espacio que abarcara la camra, por lo tanto
	//Entre mas cerca al cero, estará más cerca del objeto.
var animate = function () {
	//Se genera el cuadro de animación
  requestAnimationFrame( animate );
	cube.rotation.y+= 0.02; //Este permitira que el cubo rote en un eje y, porque si le colocamos x rotara en y.
  	sphere.rotation.x += 0.02;//Rotacion para la esfera en el eje x
  	sphere.rotation.y += -0.02;//Rotacion para la esfera en el eje y
	renderer.render( scene, camera );//Finalmente se renderiza la camara y la escena
};
animate();//Se observa la animación del proyecto