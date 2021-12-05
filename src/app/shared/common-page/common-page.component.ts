import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrls: ['./common-page.component.css']
})
export class CommonPageComponent implements OnInit {

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() message: string = '';
  @Input() buttonLabel: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
