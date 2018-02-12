/**
 * Global Imports
 */
import { Injectable, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs/Subject';


/**
 * [Service description]
 */
@Injectable()
export class FormService {
  public myForm: FormGroup; 
	public submit$ = new EventEmitter<any>();
  public submitLock: boolean = false;
  public clicked:boolean = false;
    
  public showErrors(Form){
    this.myForm = Form;
    this.clicked = true;
    if(this.myForm.valid){ 
      this.submit(Form);
    }
    else{
      let keys:string[] = Object.keys(this.myForm.controls);
      keys.forEach((key:string, index:number) => {
        this.myForm.controls[key].markAsTouched();
      });
    }
        
  }
  public submit(form:FormGroup) {
    this.myForm = form;
		this.submitLock = true;
		this.submit$.emit(this.myForm.value);
	}
  public unlockSubmit() {
    this.myForm.reset();
    this.submitLock = false;
    this.clicked =false;
  }
}