// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: "https://api.github.com/repos/user/repo/issues?state=closed&access_token=945f965fc6d9c2c28798a70431e7dc37121d321f",
  // apiKey : "945f965fc6d9c2c28798a70431e7dc37121d321f",
  clientId :"d1ffe8aae9bfa4339108",
  clientSecret : "96725105b8aa574cd4932d5c37e271f40f6d08ab",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
