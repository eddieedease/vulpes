import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  // if component busy?
  public loading = false;

  constructor() {
    //this.loading = true;
  }

  ngOnInit(): void {
  }

}
