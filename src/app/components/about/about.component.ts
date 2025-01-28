import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  services = [
    {
      number: "01",
      skill: "Network Planning & Optimization",
      highlight: "Expert planning and optimization of GSM, UMTS, LTE & NR networks, ensuring optimal coverage and capacity for telecommunications infrastructure",
    },
    {
      number: "02",
      skill: "5G Solutions",
      highlight: "Specialized implementation of 5G Fixed Wireless Access and network development strategies, driving next-generation connectivity solutions",
    },
    {
      number: "03",
      skill: "Rural Connectivity",
      highlight: "Strategic planning and deployment of rural network solutions across Sub-Saharan Africa, bridging the digital divide",
    },
    {
      number: "04",
      skill: "Data Analytics",
      highlight: "Advanced network analysis and visualization using tools like Tableau and Rabbit to generate actionable insights for network improvement",
    },
    {
      number: "05",
      skill: "Technical Consultancy",
      highlight: "Professional guidance on spectrum allocation, site evolution, and network capacity optimization for maximum efficiency",
    },
    {
      number: "06",
      skill: "Infrastructure Development",
      highlight: "Comprehensive planning and execution of new site builds and frequency modernization projects",
    }
  ]

}
