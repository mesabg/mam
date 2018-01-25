/*tslint:disable*/
import { 
	Component, 
	OnInit,
	Input } from '@angular/core';

@Component({
	selector: 'mam-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	@Input('description') public description:string;
	constructor() { }
	ngOnInit() { }
}
