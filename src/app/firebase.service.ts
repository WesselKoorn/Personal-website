import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { PersonalInfo } from './about/personal-info';
import { Study } from './education/study';
import { Project } from './projects/project';
import { ProjectImage } from './projects/project-image';

@Injectable()
export class FirebaseService {

    // MARK: Properties

    // Get a reference to the database and storage service
    database = firebase.database();
    storage = firebase.storage();

    // Cache dictionary
    cacheDict = new Map<string, string>();

    // MARK: - About Methods

    async getAboutParagraphsAsync(): Promise<string[]> {
        // Set active listener to cache data
        this.database.ref('/about/paragraphs').on('value', function () {});
        
        // Get paragraphs from Firebase
        return this.database.ref('/about/paragraphs').once('value').then(function (snapshot) {
            return snapshot.val();
        });
    }

    async getPersonalPhotoPathAsync(): Promise<string> {
        // Set active listener to cache data
        this.database.ref('/about/personalPhoto').on('value', function () {});
        
        // Get paragraphs from Firebase
        return this.database.ref('/about/personalPhoto').once('value').then(function (snapshot) {
            return snapshot.val();
        });
    }

    async getPersonalInfoAsync(): Promise<PersonalInfo> {
        // Set active listener to cache data
        this.database.ref('/about/personalInfo').on('value', function () {});
        
        // Get personal info from Firebase
        return this.database.ref('/about/personalInfo').once('value').then(function (snapshot) {
            return snapshot.val();
        });
    }

    // MARK: - Education Methods

    async getStudiesAsync(): Promise<Study[]> {
        // Set active listener to cache data
        this.database.ref('/education/studies').on('value', function () {});
        
        // Get studies from Firebase
        return this.database.ref('/education/studies').once('value').then(function (snapshot) {
            return snapshot.val();
        });
    }

    async getCompetencesAsync(): Promise<string[]> {
        // Set active listener to cache data
        this.database.ref('/education/competences').on('value', function () {});
        
        // Get competences from Firebase
        return this.database.ref('/education/competences').once('value').then(function (snapshot) {
            return snapshot.val();
        });
    }

    async getLanguagesAsync(): Promise<string[]> {
        // Set active listener to cache data
        this.database.ref('/education/languages').on('value', function () {});
        
        // Get languages from Firebase
        return this.database.ref('/education/languages').once('value').then(function (snapshot) {
            return snapshot.val();
        });
    }

    async getTechniquesAsync(): Promise<string[]> {
        // Set active listener to cache data
        this.database.ref('/education/techniques').on('value', function () {});
        
        // Get techniques from Firebase
        return this.database.ref('/education/techniques').once('value').then(function (snapshot) {
            return snapshot.val();
        });
    }

    // MARK: - Projects Methods

    async getProjectsDescriptionAsync(): Promise<string> {
        // Set active listener to cache data
        this.database.ref('/projects/description').on('value', function () {});
        
        // Get projects description from Firebase
        this.database.ref('/projects/description').on('value', function () {});
        return this.database.ref('/projects/description').once('value').then(function (snapshot) {
            return snapshot.val();
        });
    }
    async getProjectsAsync(): Promise<Project[]> {
        // Set active listener to cache data
        this.database.ref('/projects/projects').on('value', function () {});

        // Get projects from Firebase
        return this.database.ref('/projects/projects').once('value').then((snapshot) => {
            // Get projects dictionary
            var projectsDict = snapshot.val();

            for (var projectDict of projectsDict) {
                // Check if the project dictionary contains images
                if (projectDict.images != null) {
                    // Project dictionary contains images

                    // Map imagesDict to ProjectImage[]
                    projectDict.images = this.mapProjectImages(projectDict.images);
                }
                else {
                    // Project dictionary doesn't contains images
                    projectDict.images = [];
                }
            }

            return projectsDict;
        });
    }

    // MARK: - Image Methods

    async getImageUrlAsync(imagePath: string): Promise<string> {
        // Check if the url is saved in cache
        if (this.cacheDict.has(imagePath)) {
            return this.cacheDict.get(imagePath);
        }

        return this.storage.ref(imagePath).getDownloadURL().then((url) => {
            // `url` is the download URL for the image

            // Save url in cache
            this.cacheDict.set(imagePath, url);

            return url;
        }).catch(function (error) {
            // Handle any errors
            console.error(error);
        });
    }

    // MARK: - Helper Methods

    private mapProjectImages(images): ProjectImage[] {
        let projectImages = [];

        for (let imageDict of images) {
            let image = new ProjectImage();
            image.description = imageDict.description;
            image.path = imageDict.path;

            projectImages.push(image);
        }

        return projectImages;
    }
}