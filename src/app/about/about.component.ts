import { Component, OnInit } from '@angular/core';

import { PersonalInfo } from './personal-info';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  paragraphs: string[];
  personalPhotoPath: string;
  personalInfo: PersonalInfo = new PersonalInfo();

  personalPhotoUrl = "../assets/spinner.gif";

  constructor(private firebaseService: FirebaseService) { }

  async ngOnInit(): Promise<void> {
    this.paragraphs = await this.firebaseService.getAboutParagraphsAsync();
    this.personalPhotoPath = await this.firebaseService.getPersonalPhotoPathAsync();
    this.personalInfo = await this.firebaseService.getPersonalInfoAsync();

    this.getPersonalPhotoUrlAsync();
  }

  async getPersonalPhotoUrlAsync() {
    this.personalPhotoUrl = await this.firebaseService.getImageUrlAsync(this.personalPhotoPath);
  }
}
