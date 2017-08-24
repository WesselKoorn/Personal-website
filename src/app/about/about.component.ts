import { Component, OnInit } from '@angular/core';

import { PersonalInfo } from './personal-info';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  paragraphs: { string: string };
  personalInfo: PersonalInfo = new PersonalInfo();

  constructor(private firebaseService: FirebaseService) { }

  async ngOnInit(): Promise<void> {
    this.paragraphs = await this.firebaseService.getAboutParagraphsAsync();
    this.personalInfo = await this.firebaseService.getPersonalInfoAsync();
  }
}
