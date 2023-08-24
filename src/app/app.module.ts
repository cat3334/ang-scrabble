import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { FieldComponent } from './board/row/field/field.component';
import { RowComponent } from './board/row/row.component';
import { TileComponent } from './shared/tile/tile.component';
import { InventoryComponent } from './player/inventory/inventory.component';
import { DndModule } from 'ngx-drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    FieldComponent,
    RowComponent,
    TileComponent,
    InventoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DndModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
