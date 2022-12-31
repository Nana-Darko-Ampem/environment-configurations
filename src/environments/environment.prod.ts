// 1. The build for local system `ng s` defaults to the dev environment which uses 'environment.ts`, but if you do
// 'ng s --configuration production` then `environment.prod.ts` will be used instead.

// 2. The build system `ng build` defaults to the production environment which uses 'environment.prod.ts`.

// The list of which env maps to which file can be found in 
// `.angular-cli.json => architect => build => configurations`.

export const environment = {
    production: true,
    projectName: "Production"
}