/*tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ContactoApi  } from '@mam/api';

import { ContactoForm } from 'app/#interfaces/contacto.form.interface';
import { APIStatus } from 'app/@api/#responses/status.response';
 
declare var $:any;

@Component({
  selector: 'mam-box-form',
  templateUrl: './box-form.component.html',
  styleUrls: ['./box-form.component.scss']
})
export class BoxFormComponent implements OnInit {

    public submitLock: boolean = false;
    public myForm: FormGroup; 
    constructor(public fb: FormBuilder,private api:ContactoApi) { 
      
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

    public showErrors(){
      if(this.myForm.valid){
        this.send();
      }
      else{
        let keys:string[] = Object.keys(this.myForm.controls);
        keys.forEach((key:string, index:number) => {
          this.myForm.controls[key].markAsTouched();
        });
      }
      
    }
    public send(){
      console.log(this.myForm.value);
      this.submitLock = true;
      this.resolveSubmit(this.myForm.value);
    }
    public unlockSubmit() {
      this.myForm.reset();
      this.submitLock = false;
    }
    private resolveSubmit(formData:ContactoForm):void{
      console.log("submitieando");
      this.api.publishContacto(formData).subscribe((state:APIStatus) =>{
        if (state.status === 'AC'){ 
          //-- Correct answer
         // $(this.successRef.nativeElement).addClass('active');
        }else if (state.status === 'WA'){ 
          //-- Wrong answer
         // $(this.errorRef.nativeElement).addClass('active');
        }else{ 
          //-- Unknown error
         // $(this.errorRef.nativeElement).addClass('active');
        }
        this.unlockSubmit();
      });
    }
}
