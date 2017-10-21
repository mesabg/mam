export const environment = {
	production: true,
	API:{
		BASE: "http://",
		VERSION: "v1",
		URL: function(){
			return `${environment.API.BASE}/${environment.API.VERSION}/`;
		},
		KEY: "Q0FOSUE="
	}
};
