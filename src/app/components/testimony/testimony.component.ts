import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimony',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimony.component.html',
  styleUrl: './testimony.component.css'
})
export class TestimonyComponent {
  testimonies = [
    {
      name: "James Juma Sindani",
      key: "Francis is a remarkable professional who combines deep technical knowledge with excellent business acumen. His work in telecommunications infrastructure and network optimization has consistently demonstrated his ability to deliver high-impact solutions. His strategic thinking and problem-solving skills make him an invaluable asset to any technology initiative.",
      position: "Solution Architect at Rainforest Alliance",
      img: "../../../assets/juma.jpeg"
    },
    {
      name: "Raymond Kipng'etich",
      key: "Working with Francis at Huawei has been exceptional. His expertise in 5G technologies and rural connectivity solutions is outstanding. He has a unique ability to translate complex technical requirements into practical business outcomes. His leadership in network planning and optimization projects has set new standards for excellence.",
      position: "Solution Architect at Huawei Technologies",
      img: "../../../assets/raymond.jpeg"    
    },
    {
      name: "Nganga John",
      key: "Francis's approach to product management and technical solutions is truly innovative. His understanding of both infrastructure and software development needs makes him a versatile professional. I've been particularly impressed by his ability to bridge the gap between technical capabilities and business requirements.",
      position: "Golang and TypeScript Developer",
      img: "../../../assets/john.jpeg"
    }
 ]

}
