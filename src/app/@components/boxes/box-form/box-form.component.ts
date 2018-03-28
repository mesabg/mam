/*tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ContactoApi  } from '@mam/api';

import { ContactoForm } from 'app/#interfaces/contacto.form.interface';
import { APIStatus } from 'app/@api/#responses/status.response';
import { FormService } from '@mam/services';
//import { DatepickerModule } from 'angular-mat-datepicker';

declare var $:any;

@Component({
  selector: 'mam-box-form',
  templateUrl: './box-form.component.html',
  styleUrls: ['./box-form.component.scss']
})
export class BoxFormComponent implements OnInit {

    
    public myForm: FormGroup; 
    constructor(public fb: FormBuilder, private api:ContactoApi, public formService:FormService) { 
      
      this.myForm = this.fb.group({
      nameAndLastName: ["",Validators.required],
      email: ["",Validators.compose( [Validators.required, Validators.email] )],
      phone: [""],
      SocialNetwork: ["",Validators.required],
      dateWedding: ["",Validators.required],
      locationChurch: ["",Validators.required],
      locationReception: [""],
      numInvited: ["",Validators.compose( [Validators.required, Validators.min(1)] ) ],
      details: [""],
      });

    }

  ngOnInit() {
    $('.datepicker').datepicker({
      format: 'mm-dd-yyyy',
      language: "es"
  });
  }
}
