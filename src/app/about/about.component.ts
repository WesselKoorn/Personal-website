import { Component, OnInit } from '@angular/core';

import { PersonalInfo } from './personal-info';
import { AboutService } from './about.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [AboutService]
})
export class AboutComponent implements OnInit {
  paragraphs: string[];
  personalInfo: PersonalInfo = new PersonalInfo();

  constructor(private aboutService: AboutService) { }

  async ngOnInit(): Promise<void> {
    this.paragraphs = await this.aboutService.getParagraphs();
    this.personalInfo = await this.aboutService.getPersonalInfo();
  }
}
