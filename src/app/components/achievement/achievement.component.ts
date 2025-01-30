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

  activeCategory: string = 'All';
  categories: string[] = ['All', 'Events', 'Awards', 'Business', 'Leadership'];

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
      title: "Safaricom Mini MWC",
      category: "Events",
      description: "Led strategic discussions on network evolution and 5G implementation strategies",
      location: "Nairobi, Kenya",
      icon: "fas fa-globe",
      color: "from-blue-600 to-cyan-500"
    },
    {
      year: "2023",
      title: "AfricaCom Leadership",
      category: "Leadership",
      description: "Guided high-level customer engagements on macro solutions and 5G business success",
      location: "Cape Town, SA",
      icon: "fas fa-crown",
      color: "from-purple-600 to-pink-500",
      highlight: true
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
      title: "Botswana FWA Project",
      category: "Business",
      description: "Led successful FWA deployment strategy and implementation",
      location: "Botswana",
      icon: "fas fa-project-diagram",
      color: "from-green-600 to-emerald-500"
    },
    {
      year: "2023",
      title: "Zimbabwe Tech Summit",
      category: "Events",
      description: "Showcased innovative network solutions at Mini MWC",
      location: "Zimbabwe",
      icon: "fas fa-broadcast-tower",
      color: "from-indigo-600 to-blue-500"
    }
  ];

  get filteredAchievements() {
    return this.activeCategory === 'All' 
      ? this.achievements 
      : this.achievements.filter(a => a.category === this.activeCategory);
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  ngOnInit() {}

}
