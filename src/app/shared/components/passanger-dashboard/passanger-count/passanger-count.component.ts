import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-passanger-count',
  templateUrl: './passanger-count.component.html',
  styleUrls: ['./passanger-count.component.scss'],
})
export class PassangerCountComponent implements OnInit {
  @Input() totalPassCount!: number;
  // @Input()totalCheckInCount ! : number
  constructor() {}

  ngOnInit(): void {}
}
