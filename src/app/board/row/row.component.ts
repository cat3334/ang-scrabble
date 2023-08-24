import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sb-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
})
export class RowComponent {
  @Input() fields: any[] = [];
}
