import { Component, OnInit, Input } from '@angular/core';

import { Miniatura }  from '@mam/interfaces';

@Component({
  selector: 'mam-instance-box-miniatura',
  templateUrl: './instance-box-miniatura.component.html',
  styleUrls: ['./instance-box-miniatura.component.scss']
})
export class InstanceBoxMiniaturaComponent implements OnInit {

 	/*@Input('miniatura') public miniatura:Miniatura;*/
 	public miniatura:Miniatura;

  constructor() { }

  ngOnInit() {
  	this.parse();
  }

   /**
	 * Actions
	 */
	private parse():void{
		this.miniatura = {
			content: "Lorem ipsum dolor sit amet, consectetur aoris ipsa.",
			author: "Lorem ipsum dolor sit amet, consectetur aoris ipsa." ,
			image: "assets/images/foto-01.png",
		};
	}

}
