import { Component, Input, OnInit } from '@angular/core';
import { Ipassanger } from 'src/app/shared/models/passanger';

@Component({
  selector: 'app-passanger-list',
  templateUrl: './passanger-list.component.html',
  styleUrls: ['./passanger-list.component.scss']
})
export class PassangerListComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
