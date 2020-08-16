import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tic-tac-toe';

  winMessage: string = '';
  isCross = false;
  itemArray: string[] = new Array(9).fill('empty');

  constructor(private toastr: ToastrService) {}

  handleClick = (itemNumber: number) => {
    if (this.winMessage) {
      return this.toastr.success(this.winMessage);
    }

    //TODO:  understanding which user is playing
    if (this.itemArray[itemNumber] === 'empty') {
      this.itemArray[itemNumber] = this.isCross ? 'cross' : 'circle';

      //TODO: Changing the user after 1 have played its tern:
      this.isCross = !this.isCross;
    } else {
      return this.toastr.warning('Already filled !!');
    }

    // TODO: After every successfull click check if there is a winner or not !:
    this.checkIsWinner();
  };

  checkIsWinner = () => {
    if (
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[0] === this.itemArray[2] &&
      this.itemArray[0] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} Won.`;
    } else if (
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[3] === this.itemArray[5] &&
      this.itemArray[3] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[3]} Won.`;
    } else if (
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[6] === this.itemArray[8] &&
      this.itemArray[6] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[6]} Won.`;
    } else if (
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[0] === this.itemArray[6] &&
      this.itemArray[0] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} Won.`;
    } else if (
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[1] === this.itemArray[7] &&
      this.itemArray[1] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[1]} Won.`;
    } else if (
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[2] === this.itemArray[8] &&
      this.itemArray[2] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[2]} Won.`;
    } else if (
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[0] === this.itemArray[8] &&
      this.itemArray[0] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} Won.`;
    } else if (
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[2] === this.itemArray[6] &&
      this.itemArray[2] != 'empty'
    ) {
      this.winMessage = `${this.itemArray[2]} Won.`;
    } else if (
      this.itemArray[0] != 'empty' &&
      this.itemArray[1] != 'empty' &&
      this.itemArray[2] != 'empty' &&
      this.itemArray[3] != 'empty' &&
      this.itemArray[4] != 'empty' &&
      this.itemArray[5] != 'empty' &&
      this.itemArray[6] != 'empty' &&
      this.itemArray[7] != 'empty' &&
      this.itemArray[8] != 'empty'
    ) {
      this.winMessage = "It's a draw !";
    }
  };

  // reload / reset logic :
  reloadGame = () => {
    this.winMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('empty');
  };
}
