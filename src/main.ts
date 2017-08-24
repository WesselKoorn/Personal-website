import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import * as firebase from 'firebase';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Initialize Firebase
let config = {
  apiKey: environment.firebase.apiKey,
  authDomain: environment.firebase.authDomain,
  databaseURL: environment.firebase.databaseURL,
  storageBucket: environment.firebase.storageBucket
};
firebase.initializeApp(config);

// Initialize Google Analytics
document.write(`
  <script type="text/javascript">
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  
    ga('create', '${environment.googleAnalyticsID}', 'auto');
    ga('send', 'pageview');
  </script>`);

platformBrowserDynamic().bootstrapModule(AppModule);
