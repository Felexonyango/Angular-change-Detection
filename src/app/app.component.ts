import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { projectConstants } from './shared/constants/project.constants';
import { UtilService } from './shared/util/util.service';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  food:any
  constructor() {}

  ngOnInit() {}
}
