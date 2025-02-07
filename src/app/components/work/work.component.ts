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
        "Led Fixed Wireless Access strategies at Huawei, boosting market share and engagement",
        "Optimized MBB and FWA synergy to enhance network performance in Southern Africa",
        "Provided budget guidance for MTN and Airtel, improving financial outcomes",
        "Implemented Rural Solutions to bridge the digital divide in Sub-Saharan Africa",
        "Designed user-centric promotions with marketing teams to enhance engagement",
        "Trained frontline product managers on technical skills and customer engagement",
        "Planned wireless target networks, spectrum, site evolution, and capacity standards",
        "Guided product managers on GSM, UMTS, LTE & NR network data analysis",
        "Generated network insights using Tableau and Rabbit for better customer engagement",
        "Analyzed network congestion and recommended optimization strategies",
        "Planned new site builds, frequency modernization, and 5G FWA deployment",
        "Recommended data tariff strategies to enhance user experience and competitiveness",
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
      duration: 'July 2022 - December 2022',
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
       "Provided technical support for various systems and technologies",
      "Installed and integrated wireless hotspots (Ruckus, Cisco)",
      "Tested products and optimized performance, cost, and schedule",
      "Designed and debugged low-power embedded microprocessor systems",
      "Developed specifications for product design and validation",
      "Reduced costs and improved product performance",
      "Designed and deployed Wide Area Networks and IoT solutions",
      "Managed IoT network testing, deployment, and maintenance",
      "Configured routers, switches, and network infrastructure",
      "Installed fiber networks and configured Huawei AR/Cisco routers",
      "Deployed and maintained microwave, E1/SIP, and P2P links",
      "Troubleshot and maintained MPLS/P2P networks",
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
