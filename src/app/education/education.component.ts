import { Component, OnInit } from '@angular/core';

import { Study } from './study';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  studies: Study[];
  competences: string[];
  languages: string[];
  techniques: string[];

  constructor(private firebaseService: FirebaseService) { }

  async ngOnInit(): Promise<void> {
    this.studies = await this.firebaseService.getStudiesAsync();
    this.competences = await this.firebaseService.getCompetencesAsync();
    this.languages = await this.firebaseService.getLanguagesAsync();
    this.techniques = await this.firebaseService.getTechniquesAsync();
  }
}
