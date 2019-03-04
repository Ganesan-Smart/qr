import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reponsepage',
  templateUrl: './reponsepage.component.html',
  styleUrls: ['./reponsepage.component.css']
})
export class ReponsepageComponent implements OnInit {
  id:String;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  this.id = this.route.snapshot.paramMap.get('id');
  }

}