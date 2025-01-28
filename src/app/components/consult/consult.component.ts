import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SchrollService } from '../../services/schroll.service';

@Component({
  selector: 'app-consult',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consult.component.html',
  styleUrl: './consult.component.css'
})
export class ConsultComponent {
    constructor(private schrollService: SchrollService) {}
  

  skills = [
    // Technical Skills - First Set
    "Network Planning",
    "5G Technologies",
    "Data Analysis",
    "Python Programming",
    "Wireless Networks",
    "Cloud Solutions",
    "Fiber Optics",
    "Network Optimization",
    "Project Management",
    "Technical Sales",
    
    // Technical Skills - Second Set
    "Network Planning",
    "5G Technologies", 
    "Data Analysis",
    "Python Programming",
    "Wireless Networks",
    "Cloud Solutions",
    "Fiber Optics",
    "Network Optimization",
    "Project Management",
    "Technical Sales"
 ]


 scrollToSection(fragment){
  this.schrollService.scrollToSection(fragment)
  console.log(fragment);
  

}
}
