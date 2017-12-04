import { Component, OnInit } from '@angular/core';

import {IMyDpOptions, IMyDateModel} from 'mydatepicker';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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

    public myForm: FormGroup; 
    constructor(public fb: FormBuilder,) { 
      
      this.myForm = this.fb.group({
      nameAndLastName: ["",Validators.required],
      email: ["",Validators.compose([Validators.required,Validators.minLength(6)])],
      phone: ["",Validators.required],
      SocialNetwork: ["",Validators.required],
      dateWedding: ["",Validators.required],
      locationChurch: ["",Validators.required],
      locationReception: ["",Validators.required],
      numInvited: ["",Validators.required],
      details: ["",Validators.required],
      });

    }

  ngOnInit() {
  }

  	// dateChanged callback function called when the user select the date. This is mandatory callback
    // in this option. There are also optional inputFieldChanged and calendarViewChanged callbacks.
    onDateChanged(event: IMyDateModel) {
        // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    }

}
