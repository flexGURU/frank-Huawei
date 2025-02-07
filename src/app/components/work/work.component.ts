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
      position: 'Product Manager / Netwok Analyst / Regional Expert',
      duration: 'December 2024 - Present',
      responsibilities: [
        "Developed FWA strategies at Huawei, boosting market share.",
        "Optimized MBB and FWA synergy for better network performance.",
        "Guided budgets for MTN and Airtel, improving financial results.",
        "Implemented Rural Solutions to reduce the digital divide.",
        "Designed user-centric promotions to enhance engagement.",
        "Trained product managers to improve technical skills."
      ],
      achievements: [
        'Drove 5G Fixed Wireless Access sales across region',
        'Successfully managed rural network solutions in Sub-Saharan Africa',
        'Optimized network capacity reducing congestion points'
      ]
    },
    {
      company: 'Huawei Technologies',
      position: 'Product Engineer / Southern Africa Region Technical Sales',
      duration: 'December 2022 - December 2024',
      responsibilities: [
        "Plan wireless networks, site evolution, and spectrum use.",
        "Provide budget guidance and forecast network growth.",
        "Guide engineers on data collection and network analysis.",
        "Generate insights using Tableau and Rabbit visualization.",
        "Analyze congestion, coverage, and user experience, recommending solutions.",
        "Plan new sites, frequency modernization, and 5G FWA expansion.",
        "Assess data tariffs, market trends, and competitive strategies.",
        "Collaborate with operators to align 5G initiatives with market needs."
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
