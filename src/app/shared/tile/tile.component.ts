import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tile } from './Tile';

@Component({
  selector: 'sb-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent {
  @Output() destroyTileEvent = new EventEmitter<boolean>();
  @Input() tileData: Tile = { letter: '', value: 0, srcId: '' };

  onDragEnd(event: DragEvent | Event) {
    console.log('drag ended', JSON.stringify(event, null, 2));
    this.destroyTileEvent.emit(true);
  }
}
