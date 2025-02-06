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
    "Business and Network Consultancy",
    "MBB and Home Broadband Network Planning",
    "Product and User Development",
    "Budget Guidance",
    "5G Business Success",
    "Data Governance",
    "Data Value Realization",
    "Business and Network Consultancy",
    "MBB and Home Broadband Network Planning",
    "Product and User Development",
    "Budget Guidance",
    "5G Business Success",
    "Data Governance",
    "Data Value Realization"
 ]


 scrollToSection(fragment){
  this.schrollService.scrollToSection(fragment)
  console.log(fragment);
  

}
}
