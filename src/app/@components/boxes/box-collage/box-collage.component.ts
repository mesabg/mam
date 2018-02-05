import { Component, OnInit } from '@angular/core';

import { Collage } from '@mam/interfaces';
@Component({
  selector: 'cania-box-collage',
  templateUrl: './box-collage.component.html',
  styleUrls: ['./box-collage.component.scss']
})
export class BoxCollageComponent implements OnInit {

    public collage:Array<Collage> = [{
      src: "http://res.cloudinary.com/keystone-demo/image/upload/v1516859206/gsp1pvg4s9v6ntievuhy.png",
      position: "double",
      alt: "h"
    }
  ];
    
  constructor() { 
  }

  ngOnInit() {
    
  }

}
