import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactDetails: FormGroup

  constructor(private fb: FormBuilder){
    this.contactDetails = this.fb.group({
      name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        subject: ['', Validators.required],
        message: ['', Validators.required],

    })
  }

  get formControls(){
    return this.contactDetails.controls
  }

  submit(){
    
  }

}
