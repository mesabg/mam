import { Component, OnInit } from '@angular/core';

import { BioInfo } from '@mam/interfaces';
@Component({
  selector: 'mam-instance-box-bio',
  templateUrl: './instance-box-bio.component.html',
  styleUrls: ['./instance-box-bio.component.scss']
})
export class InstanceBoxBioComponent implements OnInit {

	public bio:BioInfo;
  constructor() { }

  ngOnInit() {
  	this.parse();
  }

  /**
	 * Actions
	 */
	private parse():void{
		this.bio = {
			content_special: "No se trata de hacer una buena foto, se trata de crear una historia a través de los momentos que capturas",
			content: `
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` ,
		};
	}
}
