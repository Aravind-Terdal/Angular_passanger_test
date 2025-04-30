import { Component, Input, OnInit } from '@angular/core';
import { PassangerService } from '../../services/passanger.service';
import { Ipassanger } from '../../models/passanger';

@Component({
  selector: 'app-passanger-dashboard',
  templateUrl: './passanger-dashboard.component.html',
  styleUrls: ['./passanger-dashboard.component.scss'],
})
export class PassangerDashboardComponent implements OnInit {
  passangerArray!: Array<Ipassanger>;
  checkInCount!: number;

  constructor(private _passangerService: PassangerService) {}

  ngOnInit(): void {
    this.passangerArray = this._passangerService.fetchAllPassanger();
    this.getCheckedInCount();
  }

  getCheckedInCount() {
    this.checkInCount = this.passangerArray.filter(
      (pass) => pass.checkedIn
    ).length;
  }
}
