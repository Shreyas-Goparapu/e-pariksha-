import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { LoginService } from 'src/app/services/login.service';

export interface user_data {
  details: string;
  info: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  displayedColumns: string[] = ['details', 'info'];
  dataSource :user_data[]=[];
  name:string|any;
  constructor(private login: LoginService) {
  }
  ngOnInit(): void {
      let cur_user=this.login.getUser();
      this.name=cur_user.firstName+" "+cur_user.lastName;
      console.log(cur_user);
      let data1={details: "USERNAME",info: cur_user.username};
      let data2={details: "E-Mail",info: cur_user.email};
      let data3={details: "PHONE NUMBER",info: cur_user.phone};
      let data4={details: "ROLE",info: cur_user.authorities[0].authority};
      let data5={details: "STATUS",info: cur_user.accountNonExpired?"ACTIVE":"EXPIRED"};
      let cur_data=[data1,data2,data3,data4,data5];
      this.dataSource=cur_data;
  }
}
