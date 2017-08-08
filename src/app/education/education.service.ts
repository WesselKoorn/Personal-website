import { Injectable } from '@angular/core';

import { Study } from './study';
import { STUDIES, COMPETENCES, LANGUAGES, TECHNIQUES } from './mock-education';

@Injectable()
export class EducationService {
    getStudies(): Promise<Study[]> {
        return Promise.resolve(STUDIES);
    }

    getCompetences(): Promise<string[]> {
        return Promise.resolve(COMPETENCES);
    }

    getLanguages(): Promise<string[]> {
        return Promise.resolve(LANGUAGES);
    }

    getTechniques(): Promise<string[]> {
        return Promise.resolve(TECHNIQUES);
    }
}