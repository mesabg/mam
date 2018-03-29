import { Component, OnInit,NgZone,ViewChild,
	ViewContainerRef,
	ComponentFactory,
	ComponentFactoryResolver, } from '@angular/core';

	/**
 * Local imports
 */
import { MAMApi } from '@mam/api';
import { CitaResponse } from '@mam/responses';
import { BioInfo } from '@mam/interfaces';


@Component({
  selector: 'mam-instance-box-bio',
  templateUrl: './instance-box-bio.component.html',
  styleUrls: ['./instance-box-bio.component.scss']
})
export class InstanceBoxBioComponent implements OnInit {

  public bio:BioInfo;
  constructor(
	    private ngZone:NgZone,private MamApi:MAMApi, 
		private resolver:ComponentFactoryResolver) { }

  ngOnInit() {
		//-- Retrieve data outside angular zone
		this.ngZone.runOutsideAngular(async () => {
				let responseCita = await this.MamApi.getCita();
				this.ngZone.run(() => { this.render(responseCita); });
		});
  }

  /**
	 * Actions
	 */
	private parse():void{
		this.bio = {
			cita: "No se trata de hacer una buena foto, se trata de crear una historia a través de los momentos que capturas",
			descripcion: `
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` ,
		};
	}

	private render(cita:CitaResponse):void{	
		this.bio = {
			cita: cita.cita,
			descripcion: cita.descripcion
		};
	}
}
