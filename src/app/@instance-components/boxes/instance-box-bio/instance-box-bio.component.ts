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
			content: "Horem ipsum dolor sit amet, consectetur aoris ipsa.Lorem ipsum dolor sit amet, consectetur aoris ipsaLorem ipsum dolor sit amet, consectetur aoris ipsa",
			content_special: "Lorem ipsum dolor sit amet, consectetur aoris ipsa." ,
		};
	}
}
