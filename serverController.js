const axios = require('axios');
const express = require('express');

const servidor = express()
const ruta = require('./rutas')


//Obtener pipelines
module.exports.getPipelines = (req,res)=>{

	const {id} = req.params;
	//console.log("parametro: ",req.params)

	axios({
		method: "get",
		url: 'https://dev.azure.com/hernanchavezcloudv50629/'+id+'/_apis/pipelines',
		headers: { 
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'X-TFS-FedAuthRedirect': 'Suppress',
			'Authorization':'Basic OmFjbWI0am9xbzdya3I3MnA1endyaXFjYjVsZmxzaGY3MnBhMm92b2FqeHIzbGVrNzJ2bnE='}
	})
	.then(response => {  
		 
		//console.log(response.value[i].name)
		if (response.data.count ==0)
		{
			console.log("No tiene Pipelines")
		}
		else
		{
			console.log("Pipeline existente")
		
		}
	
		return res.render('./pipelines', {pipelines: response.data, parametro: id})
		
	})
	.catch(error => {
		console.log(error);
	});


	

}

//obtener proyectos

module.exports.listar = (req,res)=>{


axios({
    method: "get",
    url: "https://dev.azure.com/hernanchavezcloudv50629/_apis/projects",
    headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-TFS-FedAuthRedirect': 'Suppress',
        'Authorization':'Basic OmFjbWI0am9xbzdya3I3MnA1endyaXFjYjVsZmxzaGY3MnBhMm92b2FqeHIzbGVrNzJ2bnE='}
})
.then((response) =>{
    let contador = JSON.stringify(response.data.count);
    let i=0;

	
    var arreglo = new Array();
    //genero un arreglo con id de proyecto.
    while (i < contador) {
        arreglo.push(JSON.stringify(response.data.value[i].id));
		
        i++;
    }
	
	return res.render('./index', {salida: response.data})
	
  
})
.catch((error) =>{
console.log(error)
})


}