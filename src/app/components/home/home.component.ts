import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  skills = ["Product Management","Data & Technical Analysis","Network Engineering"]

  bio = 
"Product management and technical sales leader specializing in telecommunications and big data engineering. Expert in developing go-to-market strategies and optimizing network capacity across GSM through 5G technologies. Track record of implementing innovative solutions through cloud architecture and data visualization to bridge the digital divide in Sub-Saharan Africa. Combines strong analytical capabilities with stakeholder management skills to drive technological advancement in the telecommunications sector."  

}
