import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { WorkComponent } from "./components/work/work.component";
import { ConsultComponent } from "./components/consult/consult.component";
import { ContactComponent } from "./components/contact/contact.component";
import { TestimonyComponent } from "./components/testimony/testimony.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NavbarComponent, HomeComponent, AboutComponent, WorkComponent, ConsultComponent, ContactComponent, TestimonyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frank';
}
