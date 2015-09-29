
module.exports = function(mws){

        return {
				
               get: ['home']
			   ,"/cliente/:id":{
				   get:["client.getCliente"]
				   ,post:["client.putCliente"]
			   }
        }
};