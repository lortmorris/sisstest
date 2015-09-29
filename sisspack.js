module.exports = {
	
		'_name':		'site1'
		,'_version':	'1.0.0'
		,'_type':		'web'
		,'_virtualdir':	'site1'
		,'_enabled':    true
		,'_domains':    ['site1.com']
		,'_mongodb':	{
			connection: { 'connection':		'mongodb://127.0.0.1/site1' }
			,collections: ["logs","clientes"]

		}
		,"_primary":true
		,'_transactions': false
		
		
	
};

