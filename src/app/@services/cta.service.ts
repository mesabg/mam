/**
 * Global Imports
 */
import { Injectable, EventEmitter, ViewContainerRef } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

/**
 * jquery mask
 */
declare var $:any;
/**
 * Local imports (for ghost routing)
 */
import { State } from './state.interface';

/**
 * This service manages the routing of the SPA
 */
@Injectable()
export class CTAService {
	public $routeChange:EventEmitter<State> = new EventEmitter<State>();
	public $actualRoute:EventEmitter<string> = new EventEmitter<string>();

	constructor(private router:Router) {
		this.router.events
			.subscribe((navigation) => {
				if (!(navigation instanceof NavigationStart)) return;
				this.$actualRoute.emit(navigation.url);
			});
	}

	/**
	 * Get actual url
	 */
	public getActualUrl():string{
		return this.router.url;
	}
	/**
	 * Main CTA's
	 */
	public inicio():void{
		$("body").removeClass("blockScroll");
		this.router.navigateByUrl('/');
		this.$routeChange.emit({
			route: 'none',
			params: undefined
		});
	}
	public contacto():void{
		$("body").removeClass("blockScroll");
		this.router.navigateByUrl('/contacto');
		this.$routeChange.emit({
			route: 'none',
			params: undefined
		});
	}
	public historias():void{
		$("body").removeClass("blockScroll");
		this.router.navigateByUrl('/historias');
		this.$routeChange.emit({
			route: 'none',
			params: undefined
		});
	}
	public mam():void{
		$("body").removeClass("blockScroll");
		this.router.navigateByUrl('/mam');
		this.$routeChange.emit({
			route: 'none',
			params: undefined
		});
	}
	public portafolio():void{
		$("body").removeClass("blockScroll");
		this.router.navigateByUrl('/portafolio');
		this.$routeChange.emit({
			route: 'none',
			params: undefined
		});
	}
	/**
	 * @param id ID of the historia
	 */
	public historia(id:number):void{
		$("body").removeClass("blockScroll");
		this.router.navigateByUrl(`/historia-detalle/${id}`);
		this.$routeChange.emit({
			route: 'none',
			params: undefined
		});
	}


}
