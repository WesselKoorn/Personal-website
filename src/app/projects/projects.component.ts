import { Component, OnInit } from '@angular/core';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  title = 'Projects';
  description = `
    Here are some projects that I've done. .......
  `;
  projects: Project[];

  constructor(private projectService: ProjectService) { }

  async ngOnInit(): Promise<void> {
    this.projects = await this.projectService.getProjects();
  }
}
