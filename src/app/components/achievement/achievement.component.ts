import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Achievement {
  year: string;
  title: string;
  category: string;
  description: string;
  location: string;
  icon: string;
  color: string;
  highlight?: boolean;
}


@Component({
  selector: 'app-achievement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.css'
})


export class AchievementComponent {

  certs: string[] = [
    "Cyber Security for Service Works (Huawei)",
    "AWS Solution Architect (Diploma)",
    "Python Programming (Basic)",
    "Interconnecting CISCO Networking Devices (CCNA, Diploma)",
    "HCIA 5G",
    "Boundary Meters Installation and Commissioning (Hexing)"
  ]
  


  achievements: Achievement[] = [
    {
      year: "2024",
      title: "Future Star Award",
      category: "Awards",
      description: "Awarded for pioneering new approaches and implementing a customer-centric strategy to achieve key targets.",
      location: "Global Recognition",
      icon: "fas fa-star",
      color: "from-yellow-600 to-amber-500",
      highlight: true
    },
    {
      year: "2024",
      title: "High-Level Customer Engagement at AfricaCom",
      category: "Leadership",
      description: "Strengthened partnerships with Sub-Saharan operators through high-level customer interactions, leading to improved network quality.",
      location: "Cape Town, SA",
      icon: "fas fa-crown",
      color: "from-purple-600 to-pink-500",
      highlight: true
    },
    {
      year: "2024",
      title: "Safaricom Mini MWC",
      category: "Events",
      description: "Led key discussions on 5G business success and affordable devices, driving a 200,000+ increase in 5G terminals and boosting site penetration.",
      location: "Nairobi, Kenya",
      icon: "fas fa-globe",
      color: "from-blue-600 to-cyan-500"
    },
    {
      year: "2023",
      title: "AfricaCom Participation",
      category: "Events",
      description: "Engaged in AfricaCom 2023 discussions on future telecom advancements and strategic industry collaborations.",
      location: "Cape Town, SA",
      icon: "fas fa-users",
      color: "from-orange-600 to-red-500"
    },
    {
      year: "2023",
      title: "MVP at Fort Irwin",
      category: "Awards",
      description: "Recognized as Best Team Leader and Learning MVP at Huawei’s Global Wireless Network Training in Shenzhen, China.",
      location: "Fort Irwin, China",
      icon: "fas fa-trophy",
      color: "from-rose-600 to-red-500",
      highlight: true
    },
    {
      year: "2023",
      title: "Botswana CTO FWA Engagements",
      category: "Business",
      description: "Participated in 5G high-level design and business discussions, leading to the development of Botswana's 5G infrastructure.",
      location: "Botswana",
      icon: "fas fa-project-diagram",
      color: "from-green-600 to-emerald-500"
    },
    {
      year: "2023",
      title: "Zimbabwe Mini MWC",
      category: "Events",
      description: "Led discussions with Zimbabwe TelOne, NetOne, and Liquid Telecom on 5G business success, contributing to 5G development in Zimbabwe.",
      location: "Zimbabwe",
      icon: "fas fa-broadcast-tower",
      color: "from-indigo-600 to-blue-500"
    },
    {
      year: "2024",
      title: "Kenya Safaricom FWA Expansion",
      category: "Business",
      description: "Guided Safaricom’s Fixed Wireless Access business expansion, driving 5G adoption and improved customer experience.",
      location: "Kenya",
      icon: "fas fa-network-wired",
      color: "from-teal-600 to-cyan-500"
    }
  ];
  




}
