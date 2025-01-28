import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailjsService } from '../../services/emailjs.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  emailjs = inject(EmailjsService)
  toastr = inject(ToastrService)

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
    return this.contactDetails.controls;
  }

  submit(){
    // this.emailjs.sendEmail(this.contactDetails);
    this.toastr.success('Hello world!', 'Toastr fun!');
    console.log(this.contactDetails.value);
    
  }

}
