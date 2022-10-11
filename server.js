const axios = require('axios');
const express = require('express');

const server = express()
const ruta = require('./rutas')

server.use(express.urlencoded({extended: true}));


//servidor.use(ruta)
server.use(ruta)

server.set('view engine', 'ejs')
server.use(express.json)




//Llamado que devuelve la cantidad total de proyectos.
// axios({
//     method: "get",
//     url: "https://dev.azure.com/hernanchavezcloudv50629/_apis/projects",
//     headers: { 
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'X-TFS-FedAuthRedirect': 'Suppress',
//         'Authorization':'Basic OmFjbWI0am9xbzdya3I3MnA1endyaXFjYjVsZmxzaGY3MnBhMm92b2FqeHIzbGVrNzJ2bnE='}
// })
// .then((response) =>{
//     let contador = JSON.stringify(response.data.count);
//     let i=0;


//     var arreglo = new Array();
//     //genero un arreglo con id de proyecto.
//     while (i < contador) {
//         arreglo.push(JSON.stringify(response.data.value[i].id));
//         i++;
//     }

//     //Ciclo que recorre el arreglo de ID proyectos.
//     for (i = 0; i < arreglo.length; i++) {
//         let idprojects = response.data.value[i].id;

//         axios({
//             method: "get",
//             url: 'https://dev.azure.com/hernanchavezcloudv50629/'+idprojects+'/_apis/pipelines',
//             headers: { 
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-TFS-FedAuthRedirect': 'Suppress',
//                 'Authorization':'Basic OmFjbWI0am9xbzdya3I3MnA1endyaXFjYjVsZmxzaGY3MnBhMm92b2FqeHIzbGVrNzJ2bnE='}
//         })
//         .then(res => {  
//             //Muestro el resultado de los pipelines por proyecto.   
//             console.log(res.data)
//         })
//         .catch(error => {
//             console.log(error);
//         });
      
//     } 

// })
// .catch((error) =>{
// console.log(error)
// })



server.listen('4000', ()=>{
    console.log('conectado en puerto ', 4000);
 })