module.exports = {
	
		'_name':		'site2'
		,'_version':	'1.0.0'
		,'_type':		'web'
		,'_virtualdir':	'site2'
		,'_enabled':    true
		,'_domains':    ['site2.com']
		,'_mongodb':	{
			connection: { 'connection':		'mongodb://127.0.0.1/site2' }
			,collections: ["logs","clientes"]

		}
		,"_primary":true
		,'_transactions': false
		
		
	
};

