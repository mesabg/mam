import { 
	Component, 
	OnInit,
	AfterViewInit,
	ViewChild,
	ViewContainerRef,
	ElementRef,
	Input,
  OnChanges,
  Output,
  EventEmitter } from '@angular/core';
	
import { ThumbImage } from '@mam/interfaces';
@Component({
  selector: 'mam-thumbnail-image',
  templateUrl: './thumbnail-image.component.html',
  styleUrls: ['./thumbnail-image.component.scss']
})
export class ThumbnailImageComponent implements OnInit {
  /**
  * Inputs
  */
  @Input('thumb_Image') public thumb_Image:ThumbImage;
  @Output('onClick') public onClick:EventEmitter<ThumbImage> = new EventEmitter<ThumbImage>();
  
     
  
  /*private getData():void{
    this.data = { 
        color: this.thumb_Image.alt,
        title: this.thumb_Image.src,
        content: this.thumb_Image.position,
        button: "Ver respuesta"
    }
    
  }*/
  constructor() { }

  ngOnInit() {

  }

}
