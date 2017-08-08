import { Component, OnInit } from '@angular/core';

import { Study } from './study';
import { EducationService } from './education.service';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [EducationService]
})
export class EducationComponent implements OnInit {
  title = 'Education';
  studies: Study[];
  competences: string[];
  languages: string[];
  techniques: string[];

  constructor(private educationService: EducationService) { }

  async ngOnInit(): Promise<void> {
    this.studies = await this.educationService.getStudies();
    this.competences = await this.educationService.getCompetences();
    this.languages = await this.educationService.getLanguages();
    this.techniques = await this.educationService.getTechniques();
  }
}
