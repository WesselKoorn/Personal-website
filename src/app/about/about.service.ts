import { Injectable } from '@angular/core';

import { PersonalInfo } from './personal-info';
import { PARAGRAPHS, PERSONALINFO } from './mock-about';

@Injectable()
export class AboutService {
    getParagraphs(): Promise<string[]> {
        return Promise.resolve(PARAGRAPHS);
    }

    getPersonalInfo(): Promise<PersonalInfo> {
        return Promise.resolve(PERSONALINFO);
    }
}