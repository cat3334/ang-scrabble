import { Component, Input, OnInit } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';
import { Tile } from 'src/app/shared/tile/Tile';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'sb-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent {
  @Input() bonus = { bonus: '' };

  tileData: Tile | null = null;

  onDrop(event: DndDropEvent) {
    this.tileData = event.data;
  }

  destroyTile() {
    this.tileData = null;
  }
}
