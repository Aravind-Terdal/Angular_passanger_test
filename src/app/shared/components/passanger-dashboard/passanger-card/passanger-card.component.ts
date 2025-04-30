import { Component, Input, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { Ipassanger } from 'src/app/shared/models/passanger';
import { PassangerService } from 'src/app/shared/services/passanger.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@Component({
  selector: 'app-passanger-card',
  templateUrl: './passanger-card.component.html',
  styleUrls: ['./passanger-card.component.scss']
})
export class PassangerCardComponent implements OnInit {
  @Input() passObj ! : Ipassanger
  isInEditMode : boolean = false
  constructor(
    private _passangerService : PassangerService,
    private openSnackBAr : SnackBarService
  ) { }

  ngOnInit(): void {
  }

  onPassNameUpdate(updatedName : string){
    if(this.isInEditMode){
      let updatedPassObj : Ipassanger = {...this.passObj, fullname : updatedName}
      this._passangerService.updateNameofPassanger(updatedPassObj)
      this.openSnackBAr.openSnackBar(`Passanger Name ${updatedName} Updated`)
    }
    this.isInEditMode = !this.isInEditMode;
  }

  onRemove(){
    this._passangerService.removePass(this.passObj.id);
    this.openSnackBAr.openSnackBar(`Passanger Removed ${this.passObj.fullname} succesfully`)
  }
}
