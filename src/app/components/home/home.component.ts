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

  skills = [
    "Go-to-Market & Product Strategy",
    "User Experience & Design Thinking",
    "Strategic & Agile Planning",
    "Pricing & Revenue Strategy",
    "Cloud Architecture & Data Engineering",
    "Market to Lead & Lead to Cash"
  ]

  bio = 
"Product management and technical sales leader in telecom and big data engineering. Expert in go-to-market strategies, network optimization (GSM to 5G), and cloud solutions. Passionate about bridging the digital divide in Sub-Saharan Africa through innovation and data visualization."

}
