import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

})
export class ContactComponent implements OnInit {
  // favoriteSeason: string;
  // seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];


messageForm: FormGroup; 
submitted = false;
success  = false;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      info: ['', Validators.required],
      type: ['', Validators.required],
      flagIsUp: ['', Validators.required],
    })
   }

onSubmit(){
  this.submitted = true;

  if(this.messageForm.invalid){
    return;
  }
  this.success = true;
}

  ngOnInit() {
  }

}
