import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService, NgbCarouselConfig]
})
export class ProjectsComponent implements OnInit {
  description: string;
  projects: Project[];

  constructor(private projectService: ProjectService, private carouselConfig: NgbCarouselConfig) { 
    carouselConfig.interval = 15000;
  }

  async ngOnInit(): Promise<void> {
    this.description = await this.projectService.getDescription();
    this.projects = await this.projectService.getProjects();
  }
}
