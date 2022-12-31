import { Component } from '@angular/core';
import { environment } from "src/environments/environment";
import { ConfigService } from './service/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = environment.projectName;
  
  constructor(private configService: ConfigService){
    // console.log("Configurations", this.configService.getConfig().environment);
  }
}
