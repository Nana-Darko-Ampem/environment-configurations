import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { firstValueFrom, retry } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private appConfig: any;

  constructor(private httpClient: HttpClient) { }

  loadConfig() {
    // You can check the environment and call the right configuration for each environment.
    // console.log("Environment", environment.projectName);
    return firstValueFrom(
      this.loadConfigAsync()
      ).then(data=>{
        this.appConfig = data;
      });
  }

  loadConfigAsync(){
    return this.httpClient.get("assets/configurations/configs.json")
    .pipe(
      retry({count: 3, delay: 1000})
    );
  }

  getConfig(){
    return this.appConfig;
  }
}
