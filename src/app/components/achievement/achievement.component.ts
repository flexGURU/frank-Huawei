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
      description: "Recognition for outstanding innovation and leadership potential in telecommunications",
      location: "Global Recognition",
      icon: "fas fa-star",
      color: "from-yellow-600 to-amber-500",
      highlight: true
    },
    {
      year: "2024",
      title: "High-Level Customer Engagement at AfricaCom",
      category: "Leadership",
      description: "Guided customers on macro solutions and 5G business success",
      location: "Cape Town, SA",
      icon: "fas fa-crown",
      color: "from-purple-600 to-pink-500",
      highlight: true
    },
    {
      year: "2024",
      title: "Safaricom Mini MWC",
      category: "Events",
      description: "Led strategic discussions on network evolution and 5G implementation strategies",
      location: "Nairobi, Kenya",
      icon: "fas fa-globe",
      color: "from-blue-600 to-cyan-500"
    },
    {
      year: "2023",
      title: "AfricaCom Participation",
      category: "Events",
      description: "Engaged in AfricaCom 2023 discussions on future telecom advancements",
      location: "Cape Town, SA",
      icon: "fas fa-users",
      color: "from-orange-600 to-red-500"
    },
    {
      year: "2023",
      title: "MVP at Fort Irwin",
      category: "Awards",
      description: "Recognized as Best Team Leader and Most Valuable Player during China training",
      location: "Fort Irwin, China",
      icon: "fas fa-trophy",
      color: "from-rose-600 to-red-500",
      highlight: true
    },
    {
      year: "2023",
      title: "Botswana CTO FWA Engagements",
      category: "Business",
      description: "Led discussions on Fixed Wireless Access strategies in Botswana",
      location: "Botswana",
      icon: "fas fa-project-diagram",
      color: "from-green-600 to-emerald-500"
    },
    {
      year: "2023",
      title: "Zimbabwe Mini MWC",
      category: "Events",
      description: "Showcased innovative network solutions at Mini MWC",
      location: "Zimbabwe",
      icon: "fas fa-broadcast-tower",
      color: "from-indigo-600 to-blue-500"
    },
    {
      year: "2024",
      title: "Kenya Safaricom FWA Expansion",
      category: "Business",
      description: "Guided Safaricom's Fixed Wireless Access business expansion in Kenya",
      location: "Kenya",
      icon: "fas fa-network-wired",
      color: "from-teal-600 to-cyan-500"
    }
];




}
