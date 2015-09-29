
module.exports = function(mws){

        return {
				
               get: ['home']
			   ,"addcliente":{
				   get: ["client.alta"]
			   }
			   ,"/clientes":{
				   get:["client.getCliente"]				   
			   }
			   ,"/cliente/:id":{
				   get:["client.getCliente"]				   
			   }
			   ,"/saveClient":{
				   post:["client.putCliente"]
			   }
        }
};