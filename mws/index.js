module.exports = SISSCore.Class({
		"construct": function(){
			console.log("Soy el constructo de site1");
			
		}
		,"home": function(req, res, next){
			console.log(this);
			this.render("home",{}, res);
		}
		,"getCliente": function(req, res, next){
			var _this =this;
			_this.mongodb.clientes.findOne({clienteID: req.params.id},{}, function(err, data){
				_this.render("clientes", {cliente: data}, res);
			});
		}
		,"putCliente": function(req, res, next){
			var _this =this;
			
			req.body.clienteID = req.params.id;
			_this.mongodb.clientes.save(req.body, function(err, dat){
					_this.json(dat, res);
			});
		}
}).implement(SISSCore.getPrototypes());