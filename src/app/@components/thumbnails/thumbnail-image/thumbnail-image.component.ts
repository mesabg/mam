import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mam-thumbnail-image',
  templateUrl: './thumbnail-image.component.html',
  styleUrls: ['./thumbnail-image.component.scss']
})
export class ThumbnailImageComponent implements OnInit {
  position = "full";
  constructor() { }

  ngOnInit() {
  }

}
