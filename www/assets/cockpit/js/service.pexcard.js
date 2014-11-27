NGApp.factory( 'PexCardService', function( $resource, $http, $routeParams ) {

	var service = {};

	var pexcard = $resource( App.service + 'pexcard/:action/', { action: '@action' }, {
		'pex_id' : { 'method': 'POST', params : { action: 'pex-id' } },
		'admin_pexcard' : { 'method': 'POST', params : { action: 'admin-pexcard' } },
		'admin_pexcard_remove' : { 'method': 'POST', params : { action: 'admin-pexcard-remove' } }
	}	);

	service.pex_id = function( id, callback ){
		pexcard.pex_id( { 'id': id }, function( data ){
			callback( data );
		} );
	}

	service.admin_pexcard = function( params, callback ){
		pexcard.admin_pexcard( params, function( data ){
			callback( data );
		} );
	}

	service.admin_pexcard_remove = function( id_pexcard, callback ){
		pexcard.admin_pexcard_remove( { id_pexcard: id_pexcard }, function( data ){
			callback( data );
		} );
	}

	return service;

} );