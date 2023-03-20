// Actividad 1 - Diseño y operaciones CRUD en Bases de datos NoSQL

// 1 - Realizar la instalación de MongoDB incluido compas


// 2 - Abribr el servidor de mongo 
// 	- Se abre cmd 
// 	- Se busca la ubicacion del server 
// 		C:\Program Files\MongoDB\Server\6.0\bin
// 	- Se agrega la variable de entorno para ejecutarlo desde cualquier ubicación

// En la version 6.0 no viene el paquete de Mongo Shell así que debe instakarse manualmente
// https://www.mongodb.com/try/download/shell
// Se debe agregar a la carpeta bin de l servidor de mongo y se ejecuta desde consola con mongosh

// Comandos de mongo 

// Creación de la base de datos
const usar_base = 'use admin_torneo';   

// Eliminar una colección
db.rol_persona.drop();

// Insertar el primer registro
db.personas.insertOne(
{ 
	identificacion: '43218765',
	nombre: 'Pedro',
	apellido: 'Gómez',
	fecha_de_nacimiento: '1995-02-25',
	genero: 'Masculino',
	nacionalidad: 'Perú',
	rol: 'Participante',  
	categoría: 'Amateur' 
});


// Insertar todos los participantes 
db.personas.insertMany([
{
	identificacion: '43218765',
	nombre: 'Pedro',
	apellido: 'Gómez',
	fecha_de_nacimiento: '1995-02-25',
	genero: 'Masculino',
	nacionalidad: 'Perú',
	rol: 'Participante',
	categoria: 'Amateur'
},
{
	identificacion: '23456789',
	nombre: 'Carlos',
	apellido: 'Fernández',
	fecha_de_nacimiento: '1989-12-07',
	genero: 'Masculino',
	nacionalidad: 'Bolivia',
	rol: 'Participante',
	categoria: 'Amateur'
},
{
	identificacion: '65432198',
	nombre: 'Gabriela',
	apellido: 'Suárez',
	fecha_de_nacimiento: '1991-02-16',
	genero: 'Femenino',
	nacionalidad: 'Colombia',
	rol: 'Participante',
	categoria: 'Amateur'
},
{
	identificacion: '34567890',
	nombre: 'José',
	apellido: 'Martinez',
	fecha_de_nacimiento: '1995-02-20',
	genero: 'Masculino',
	nacionalidad: 'México',
	rol: 'Participante',
	categoria: 'Amateur'
},
{
	identificacion: '23456789',
	nombre: 'Luis',
	apellido: 'González',
	fecha_de_nacimiento: '2002-12-10',
	genero: 'Masculino',
	nacionalidad: 'Colombia',
	rol: 'Participante',
	categoria: 'Amateur'
},
{
	identificacion: '98765432',
	nombre: 'Juan',
	apellido: 'Castro',
	fecha_de_nacimiento: '2004-04-02',
	genero: 'Masculino',
	nacionalidad: 'Chile',
	rol: 'Participante',
	categoria: 'Amateur'
},
{
	identificacion: '23456781',
	nombre: 'Daniela',
	apellido: 'García',
	fecha_de_nacimiento: '2003-03-05',
	genero: 'Femenino',
	nacionalidad: 'Colombia',
	rol: 'Participante',
	categoria: 'Amateur'
},
{
	identificacion: '56789012',
	nombre: 'Laura',
	apellido: 'Ortiz',
	fecha_de_nacimiento: '1995-02-20',
	genero: 'Femenino',
	nacionalidad: 'México',
	rol: 'Participante',
	categoria: 'Amateur'
},
{
	identificacion: '34567890',
	nombre: 'Carolina',
	apellido: 'Rodriguez',
	fecha_de_nacimiento: '2002-12-10',
	genero: 'Femenino',
	nacionalidad: 'Colombia',
	rol: 'Participante',
	categoria: 'Amateur'
},
{
	identificacion: '45678901',
	nombre: 'Camila',
	apellido: 'Flores',
	fecha_de_nacimiento: '1989-07-15',
	genero: 'Femenino',
	nacionalidad: 'Perú',
	rol: 'Participante',
	categoria: 'Amateur'
},
{
	identificacion: '98765432',
	nombre: 'Valeria',
	apellido: 'González',
	fecha_de_nacimiento: '2004-04-02',
	genero: 'Femenino',
	nacionalidad: 'Chile',
	rol: 'Participante',
	categoria: 'Amateur'
},
{
	identificacion: '23456781',
	nombre: 'Javier',
	apellido: 'García',
	fecha_de_nacimiento: '2003-03-05',
	genero: 'Masculino',
	nacionalidad: 'Colombia',
	rol: 'Participante',
	categoria: 'Amateur'
}
]);

// Insertar todos los entrenadores
db.entrenadores.insertMany([
{
	identificacion:'56781234',	
	nombre: 'María',	
	apellido: 'López',
	fecha_de_nacimiento: '2001-05-03',
	genero: 'Femenino',
	nacionalidad:'Chile',
	rol:'Entrenador'
},
{
	identificacion:'78912345',	
	nombre: 'Martina',	
	apellido: 'González',
	fecha_de_nacimiento: '1992-05-18',
	genero: 'Femenino',
	nacionalidad:'Paraguay',
	rol:'Entrenador'
},
{
	identificacion:'12349876',	
	nombre: 'Lucas',	
	apellido: 'Torres',
	fecha_de_nacimiento: '1992-11-09',
	genero: 'Masculino',
	nacionalidad:'Argentina',
	rol:'Entrenador'
},
{
	identificacion:'87654329',	
	nombre: 'Sofia',	
	apellido: 'Ramos',
	fecha_de_nacimiento: '1993-05-28',
	genero: 'Femenino',
	nacionalidad:'Argentina',
	rol:'Entrenador'
},
{
	identificacion:'34567812',	
	nombre: 'Lucía',	
	apellido: 'Herrera',
	fecha_de_nacimiento: '1991-09-19',
	genero: 'Femenino',
	nacionalidad:'Colombia',
	rol:'Entrenador'
},
{
	identificacion:'87654321',	
	nombre: 'Federico',	
	apellido: 'Sanchez',
	fecha_de_nacimiento: '1993-05-28',
	genero: 'Masculino',
	nacionalidad:'Argentina',
	rol:'Entrenador'
},
{
	identificacion:'34567812',	
	nombre: 'Andrés',	
	apellido: 'Herrera',
	fecha_de_nacimiento: '1991-09-19',
	genero: 'Masculino',
	nacionalidad:'Colombia',
	rol:'Entrenador'
},
{
	identificacion:'34567812',	
	nombre: 'Pedro',	
	apellido: 'Quintanares',
	fecha_de_nacimiento: '1991-09-19',
	genero: 'Masculino',
	nacionalidad:'Colombia',
	rol:'Entrenador'
},
{
	identificacion:'86512655',	
	nombre: 'Alonso',	
	apellido: 'Moralez',
	fecha_de_nacimiento: 	'1991-09-19',
	genero: 'Masculino',
	nacionalidad:'Colombia',
	rol:'Entrenador'
},
{
	identificacion:'98621651',	
	nombre: 'Hernestina', 	
	apellido: 'Quintero',
	fecha_de_nacimiento: 	'1991-09-19',
	genero: 'Femenino',
	nacionalidad:'Colombia',
	rol:'Entrenador'
},
{
	identificacion:'36254125',	
	nombre: 'Julian', 	
	apellido: 'Manrique',
	fecha_de_nacimiento: '1991-09-19',
	genero: 'Masculino',
	nacionalidad:'Colombia',
	rol:'Entrenador'
},
{
	identificacion:'79754532',	
	nombre: 'Miguel',	
	apellido: 'Fernandez',
	fecha_de_nacimiento: '1991-09-19',
	genero: 'Masculino',
	nacionalidad:'Colombia',
	rol:'Entrenador'
},
]);

// Insertar arbitros


db.arbitros.insertMany([
{
	identificacion:'87654321',
	nombre:'Juan',
	apellido:'Pérez',
	fecha_de_nacimiento:'1985-07-25',
	genero:'masculino',
	nacionalidad:'Argentina',
	rol:'Árbitro'
},
{
	identificacion:'34567891',
	nombre:'Luis',
	apellido:'Torres',
	fecha_de_nacimiento:'1985-12-15',
	genero:'masculino',
	nacionalidad:'Uruguay',
	rol:'Árbitro'
},
{
	identificacion:'19283746',
	nombre:'Pablo',
	apellido:'Rodríguez',
	fecha_de_nacimiento:'1987-04-13',
	genero:'masculino',
	nacionalidad:'Ecuador',
	rol:'Árbitro'
},
{
	identificacion:'90876543',
	nombre:'Ana',
	apellido:'Romero',
	fecha_de_nacimiento:'1987-09-05',
	genero:'Femenino',
	nacionalidad:'Ecuador',
	rol:'Árbitro'
},
{
	identificacion:'76543210',
	nombre:'Ana',
	apellido:'Flores',
	fecha_de_nacimiento:'1999-01-01',
	genero:'Femenino',
	nacionalidad:'Brasil',
	rol:'Árbitro'
},
{
	identificacion:'90876512',
	nombre:'Jorge',
	apellido:'Diaz',
	fecha_de_nacimiento:'1986-11-12',
	genero:'Masculino',
	nacionalidad:'Venezuela',
	rol:'Árbitro'
},
{
	identificacion:'10987654',
	nombre:'Diego',
	apellido:'García',
	fecha_de_nacimiento:'1987-09-05',
	genero:'Masculino',
	nacionalidad:'Ecuador',
	rol:'Árbitro'
},
{
	identificacion:'76543210',
	nombre:'Roberto',
	apellido:'Mendez',
	fecha_de_nacimiento:'1999-01-01',
	genero:'Masculino',
	nacionalidad:'Brasil',
	rol:'Árbitro'
},
{
	identificacion:'90876512',
	nombre:'Gabriela',
	apellido:'Diaz',
	fecha_de_nacimiento:'1986-11-12',
	genero:'Femenino',
	nacionalidad:'Venezuela',
	rol:'Árbitro'
},
]);

// Insertar todos los estadios
db.estadios.insertMany([
{
	nombre:'Paddle Palace',
	ciudad: 'Bogotá',
	ubicacion:'4.710989, -74.072092',
	capacidad:'3000'
},
{
	nombre:'Ping Pong Park',
	ciudad: 'Medellín',
	ubicacion:'6.244203, -75.581211',
	capacidad:'2500'
},
{
	nombre:'Racket Center',
	ciudad: 'Cali',
	ubicacion:'3.451646, -76.531985',
	capacidad:'2800'
},
{
	nombre:'Ping Pong Stadium',
	ciudad: 'Barranquilla',
	ubicacion:'10.963889, -74.796389',
	capacidad:'3200'
},
{
	nombre:'Paddle Dome',
	ciudad: 'Bucaramanga',
	ubicacion:'7.129722, -73.125833',
	capacidad:'2700'
},
{
	nombre:'Mesa Palace',
	ciudad: 'Cartagena',
	ubicacion:'10.400000, -75.500000',
	capacidad:'3500'
},
{
	nombre:'Ping Pong Arena',
	ciudad: 'Pereira',
	ubicacion:'4.813333, -75.696111',
	capacidad:'2500'
},
{
	nombre:'Paddle Arena',
	ciudad: 'Villavicencio',
	ubicacion:'4.142002, -73.626645',
	capacidad:'3000'
},
]);



// Obtener los ObjectId de todos los registros 
db.personas.find({}, { _id: 1 });

// Obtener los ObjectId de todos los registros del rol participante
db.personas.find({ rol: { $eq: "Participante" } }, { _id: 1 });

// Insertar todos los partidos
db.partidos.insertMany([
	{numero:'1',  fecha:'2023-05-15', jugador1_id:'6418b566b1b5bb1d322c919e', jugador2_id:'6418b566b1b5bb1d322c91a0', puntos_jugador1:'2', puntos_jugador2:'1', ganador_id:'6418b566b1b5bb1d322c919e'},
	{numero:'4',  fecha:'2023-05-15', jugador1_id:'6418b566b1b5bb1d322c91a1', jugador2_id:'6418b566b1b5bb1d322c91a2', puntos_jugador1:'1', puntos_jugador2:'2', ganador_id:'6418b566b1b5bb1d322c91a2'},
	{numero:'7',  fecha:'2023-05-15', jugador1_id:'6418b566b1b5bb1d322c91a4', jugador2_id:'6418b566b1b5bb1d322c91a5', puntos_jugador1:'2', puntos_jugador2:'0', ganador_id:'6418b566b1b5bb1d322c919f'},
	{numero:'10', fecha:'2023-05-15', jugador1_id:'6418b566b1b5bb1d322c91a7', jugador2_id:'6418b566b1b5bb1d322c91a9', puntos_jugador1:'2', puntos_jugador2:'1', ganador_id:'6418b566b1b5bb1d322c91a2'},
	{numero:'2',  fecha:'2023-05-17', jugador1_id:'6418b566b1b5bb1d322c919f', jugador2_id:'6418b566b1b5bb1d322c919e', puntos_jugador1:'0', puntos_jugador2:'2', ganador_id:'6418b566b1b5bb1d322c919f'},
	{numero:'5',  fecha:'2023-05-17', jugador1_id:'6418b566b1b5bb1d322c91a2', jugador2_id:'6418b566b1b5bb1d322c91a3', puntos_jugador1:'0', puntos_jugador2:'2', ganador_id:'6418b566b1b5bb1d322c91a1'},
	{numero:'8',  fecha:'2023-05-17', jugador1_id:'6418b566b1b5bb1d322c91a5', jugador2_id:'6418b566b1b5bb1d322c91a6', puntos_jugador1:'2', puntos_jugador2:'1', ganador_id:'6418b566b1b5bb1d322c91a5'},
	{numero:'11', fecha:'2023-05-17', jugador1_id:'6418b566b1b5bb1d322c91a8', jugador2_id:'6418b566b1b5bb1d322c91a7', puntos_jugador1:'1', puntos_jugador2:'2', ganador_id:'6418b566b1b5bb1d322c91a7'},
	{numero:'3',  fecha:'2023-05-19', jugador1_id:'6418b566b1b5bb1d322c91a0', jugador2_id:'6418b566b1b5bb1d322c919f'},
	{numero:'6',  fecha:'2023-05-19', jugador1_id:'6418b566b1b5bb1d322c91a3', jugador2_id:'6418b566b1b5bb1d322c91a1'},
	{numero:'9',  fecha:'2023-05-19', jugador1_id:'6418b566b1b5bb1d322c91a6', jugador2_id:'6418b566b1b5bb1d322c91a4'},
	{numero:'12', fecha:'2023-05-19', jugador1_id:'6418b566b1b5bb1d322c91a9', jugador2_id:'6418b566b1b5bb1d322c91a8'},
	{numero:'13', fecha:'2023-05-20'},
	{numero:'14', fecha:'2023-05-21'},
	{numero:'15', fecha:'2023-05-22'},
	{numero:'16', fecha:'2023-05-23'},
	{numero:'17', fecha:'2023-05-24'},
	{numero:'18', fecha:'2023-05-25'},
	{numero:'19', fecha:'2023-05-26'},
	]);

// Obtener la información del partido número 1
db.partidos.find({ numero: "1" });

// Obtener la información del partido por su ObjectId
db.partidos.find({ _id: ObjectId("6418cb4ab1b5bb1d322c91d4")});

// Actualizar campos del partido por ObjectId
db.partidos.updateOne(
{ 
	_id: ObjectId("6418cb4ab1b5bb1d322c91d4") 
},
{ 
	$set:
	{ 
		puntos_jugador1: "2", 
		puntos_jugador2: "1", 
		ganador_id:'6418b566b1b5bb1d322c91a0' 
	} 
} 
);

// Obtener los ObjectId de todos los registros 
db.partidos.find({}, { _id: 1 });



db.grupos.insertMany([
{		
	nombre: 'B',
	partidos: {
		primer_partido: '6418cb4ab1b5bb1d322c91c8',
		segundo_partido: '6418cb4ab1b5bb1d322c91cc',
		tercer_partido: '6418cb4ab1b5bb1d322c91d0',
	} 
},
{		
	nombre: 'C',
	partidos: {
		primer_partido: '6418cb4ab1b5bb1d322c91c9',
		segundo_partido: '6418cb4ab1b5bb1d322c91cd',
		tercer_partido: '6418cb4ab1b5bb1d322c91d1',
	} 
},
{		
	nombre: 'D',
	partidos: {
		primer_partido: '6418cb4ab1b5bb1d322c91ca',
		segundo_partido: '6418cb4ab1b5bb1d322c91ce',
		tercer_partido: '6418cb4ab1b5bb1d322c91d2',
	} 
},
]);


// Eliminar Registros por nombre de parametro
db.personas.deleteMany({ rol: "Entrenador" });

// Eliminar Registros por nombre de parametro
db.personas.deleteMany({ rol: "Árbitro" });


// Cambiar el nombre a una colección
db.personas.renameCollection("participante");


// Buscar arbitros
db.partidos.find({ numero: "1" });

// Actualizar partidos con Arbitros
db.partidos.updateOne(
{ 
	_id: ObjectId("6418cb4ab1b5bb1d322c91c7") 
},
{ 
	$set:
	{ 
		arbitro_principal: "6418e033b1b5bb1d322c91ea", 
		segundo_arbitro: "6418e033b1b5bb1d322c91eb", 
		tercer_arbitro:'6418e033b1b5bb1d322c91ec' 
	} 
} 
);
