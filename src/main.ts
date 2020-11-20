import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: "ap-south-1",

    // Amazon Cognito User Pool ID
    userPoolId: "ap-south-1_6kw8v1CTN",

    // Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: "3sfo10pjphb4jv8v8m6tf62v05"
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
