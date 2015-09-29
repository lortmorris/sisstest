
module.exports = function(mws){

        return {
				
               get: ['home']
			   ,"/cliente/:id":{
				   get:["getCliente"]
				   ,post:["putCliente"]
			   }
        }
};