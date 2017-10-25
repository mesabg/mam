import { 
	Component, 
	OnInit,
	AfterViewInit,
	ViewChild,
	ViewContainerRef,
	ElementRef,
	Input,
	OnChanges } from '@angular/core';
	
import { ThumbImage } from '@mam/interfaces';
@Component({
  selector: 'mam-thumbnail-image',
  templateUrl: './thumbnail-image.component.html',
  styleUrls: ['./thumbnail-image.component.scss']
})
export class ThumbnailImageComponent implements OnInit {
  position = "full";

  /**
  * Inputs
  */
  @Input('thumb_Image') public thumb_Image:ThumbImage;

  constructor() { }

  ngOnInit() {
  }

}
