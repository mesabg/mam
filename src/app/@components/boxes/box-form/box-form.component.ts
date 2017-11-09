import { Component, OnInit } from '@angular/core';

import {IMyDpOptions, IMyDateModel} from 'mydatepicker';

declare var $ :any;
@Component({
  selector: 'mam-box-form',
  templateUrl: './box-form.component.html',
  styleUrls: ['./box-form.component.scss']
})
export class BoxFormComponent implements OnInit {


	public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };
  constructor() { }

  ngOnInit() {
  }

  	// dateChanged callback function called when the user select the date. This is mandatory callback
    // in this option. There are also optional inputFieldChanged and calendarViewChanged callbacks.
    onDateChanged(event: IMyDateModel) {
        // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    }

}
