import { Component, OnInit } from '@angular/core';
import { blogcontent } from '../blogcontent';

@Component({
 selector: 'app-about',
 templateUrl: './about.component.html',
 styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
 blogcontent = blogcontent;
 constructor() { }

 ngOnInit() {
 }

}


