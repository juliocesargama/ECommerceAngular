import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-control',
  templateUrl: './error-control.component.html',
  styleUrls: ['./error-control.component.scss']
})
export class ErrorControlComponent implements OnInit {

  @Input() msgError!: string;
  @Input() showError: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
