import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public login:LoginService){}
  iconDescription: string = '';
  showDescriptionFlag: boolean = false;

  public logout(){
    this.login.logout();
    window.location.reload();
  }

  showDescription(description: string) {
    this.iconDescription = description;
    this.showDescriptionFlag = true;
  }

  hideDescription() {
    this.showDescriptionFlag = false;
  }

}
