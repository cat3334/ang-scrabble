import { Component } from '@angular/core';
import { rows } from './row/rowsData';
@Component({
  selector: 'sb-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  rows = rows;
}
