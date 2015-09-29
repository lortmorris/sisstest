module.exports = SISSCore.Class({
		"construct": function(){
			console.log("Soy el constructo de site1");
			
		}
		,"home": function(req, res, next){
			console.log(this);
			this.render("home",{}, res);
			
		}
		
}).implement(SISSCore.getPrototypes())
	.implement(require("./clients"))
;