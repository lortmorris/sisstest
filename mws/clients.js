module.exports = {
	"client.getCliente": function(req, res, next){
			var _this =this;
			_this.mongodb.clientes.findOne({clienteID: req.params.id},{}, function(err, data){
				_this.render("clientes", {cliente: data}, res);
			});
		}
		,"client.putCliente": function(req, res, next){
			var _this =this;
			
			req.body.clienteID = req.params.id;
			_this.mongodb.clientes.save(req.body, function(err, dat){
					_this.json(dat, res);
			});
		}
	
};