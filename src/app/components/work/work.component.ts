import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  experience = [
    {company: 'Huawei Technologies',
      position: 'Product Manager / Regional Technical Sales',
      duration: '2022 - Present',
      responsibilities: [
        'Developed go-to-market strategies',
        'Planned wireless target networks',
        'Led data collection and analysis for network technologies'
      ],
      achievements: [
        'Drove 5G Fixed Wireless Access sales',
        'Managed rural network sales in Sub-Saharan Africa'
      ]
    },
    {company: 'Huawei Technologies',
      position: 'Product Manager / Regional Technical Sales',
      duration: '2022 - Present',
      responsibilities: [
        'Developed go-to-market strategies',
        'Planned wireless target networks',
        'Led data collection and analysis for network technologies'
      ],
      achievements: [
        'Drove 5G Fixed Wireless Access sales',
        'Managed rural network sales in Sub-Saharan Africa'
      ]
    }
    
]
}
