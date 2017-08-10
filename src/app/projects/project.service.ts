import { Injectable } from '@angular/core';

import { Project } from './project';
import { DESCRIPTION, PROJECTS } from './mock-projects';

@Injectable()
export class ProjectService {
    getDescription(): Promise<string> {
        return Promise.resolve(DESCRIPTION);
    }
    getProjects(): Promise<Project[]> {
        return Promise.resolve(PROJECTS);
    }
}