import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
  categories : any;
  constructor(private category: CategoryService){}

  ngOnInit(): void {
    this.category.categories().subscribe((data:any)=>{
      this.categories=data.data;
      console.log(data);
    },
    (error)=>{
      console.log(error);
    });
  }

}
