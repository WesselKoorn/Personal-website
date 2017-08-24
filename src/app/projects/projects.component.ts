import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { Project } from './project';
import { ProjectImage } from './project-image';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [NgbCarouselConfig]
})
export class ProjectsComponent implements OnInit {
  description: string;
  projects: Project[];

  constructor(private firebaseService: FirebaseService, private carouselConfig: NgbCarouselConfig) {
    carouselConfig.interval = 15000;
  }

  async ngOnInit(): Promise<void> {
    this.description = await this.firebaseService.getProjectsDescriptionAsync();
    this.projects = await this.firebaseService.getProjectsAsync();

    this.loadImagesAsync(this.projects);
  }

  async loadImagesAsync(projects: Project[]) {
    for (let project of projects) {
      for (let image of project.images) {
        let url = await this.firebaseService.getImageUrlAsync(image.path);
        image.url = url;
      }
    }
  }
}
