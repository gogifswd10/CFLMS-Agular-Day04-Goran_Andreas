import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogcontent } from '../blogcontent';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {

blog;
 constructor(private route: ActivatedRoute) { }

 ngOnInit() {
   this.route.paramMap.subscribe(params => {
   this.blog = blogcontent[+params.get('blogId')];
  });
 }

}
