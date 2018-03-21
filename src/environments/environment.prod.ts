export const environment = {
	production: true,
	API: {
		BASE: 'https://mam-restful-api.herokuapp.com/api',
		URL: function(){
			return `${environment.API.BASE}/`;
		}
	}
};
