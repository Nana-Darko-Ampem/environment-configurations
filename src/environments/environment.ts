// 1. The build for local system `ng s` defaults to the dev environment which uses 'environment.ts`.

// The file content for the current environment will overwrite these during build.
// 2. The build system defaults to the production environment which uses 'environment.prod.ts`, but if you do
// 'ng build --configuration development` then `environment.dev.ts` will be used instead.

// The list of which env maps to which file can be found in 
// `.angular-cli.json => architect => build => configurations`.

export const environment = {
    production: false,
    projectName: "Localhost"
}