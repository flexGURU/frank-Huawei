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
    {
      company: 'Huawei Technologies',
      position: 'Product Manager / Regional Technical Sales',
      duration: '2022 - Present',
      responsibilities: [
        'Developed go-to-market strategies and budget planning',
        'Led wireless network planning and optimization',
        'Conducted data analysis for GSM, UMTS, LTE & NR networks',
        'Generated network insights using Tableau visualization',
        'Provided guidance on spectrum and network capacity'
      ],
      achievements: [
        'Drove 5G Fixed Wireless Access sales across region',
        'Successfully managed rural network solutions in Sub-Saharan Africa',
        'Optimized network capacity reducing congestion points'
      ]
    },
    {
      company: 'Huawei Technologies', 
      position: 'Big Data Architect',
      duration: 'Feb 2022 - July 2022',
      responsibilities: [
        "Managed the development and implementation of big data-driven solutions",
        "Developed scalable data architectures and optimized data processing pipelines",
        "Designed and implemented ETL/ELT processes using Hadoop",
        "Managed data from on-premises and cloud provisioned resources",
        "Wrote complex SQL queries and scripts in Python and Java",
        "Developed data models and data visualizations for data analysis",
        "Designed user interface and use cases utilizing Tableau skills, leading to an increase in productivity among non-technical users"
      ],
      
      achievements: [
        'Successfully completed management training program',
        'Implemented effective data analysis solutions'
      ]
    },
    {
      company: 'Baran Telecom Networks Kenya Limited',
      position: 'Field Engineer', 
      duration: 'Feb 2022 - July 2022',
      responsibilities: [
        'Provided technical support for various systems',
        'Conducted wireless hotspot surveys and installations',
        'Designed and deployed wide area networks',
        'Installed network devices and fiber networks'
      ],
      achievements: [
        'Successfully deployed multiple LoRaWAN/NBIoT nodes',
        'Optimized network communication systems'
      ]
    },
    {
      company: 'Adpower Limited (JTL)',
      position: 'Engineer',
      duration: 'Jun 2017 - Dec 2021',
      responsibilities: [
        'Installed fiber and commissioned routers',
        'Conducted fiber and power installation surveys',
        'Managed technician teams',
        'Reported on fiber installation progress'
      ],
      achievements: [
        'Led successful fiber network deployments',
        'Effectively managed technical teams',
        'Improved installation efficiency'
      ]
    }
 ]
}
