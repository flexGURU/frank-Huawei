import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-consult',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consult.component.html',
  styleUrl: './consult.component.css'
})
export class ConsultComponent {

  skills = ["Python", "Data Analysis","Team Leadership","5G Networking","Problem Solving","Strategic Planning","Python", "Data Analysis","Team Leadership","5G Networking","Problem Solving","Strategic Planning"]

}
