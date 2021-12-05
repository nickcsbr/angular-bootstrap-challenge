import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.css']
})
export class InputErrorComponent implements OnInit {

  @Input() errorMessage: string;
  @Input() showError: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}