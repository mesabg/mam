import { Component, OnInit } from '@angular/core';
import { ThumbImage } from '@mam/interfaces';
@Component({
  selector: 'mam-instance-thumbnail-image',
  templateUrl: './instance-thumbnail-image.component.html',
  styleUrls: ['./instance-thumbnail-image.component.scss']
})
export class InstanceThumbnailImageComponent implements OnInit {
  public thumb_Image:ThumbImage ={
  	alt : "titulo 1",
  	src: "assets/images/foto-02.png",
  	position : "rigth"
  };
  constructor() { }

  ngOnInit() {
  }

}
