import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './prac/game-control/game-control.component';
import { OddComponent } from './prac/odd/odd.component';
import { EvenComponent } from './prac/even/even.component';
import { BasicHighlighterDirective } from './directives/basic-highlighter.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './services/accounts.service';
import { LoggingService } from './services/logging.services';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlighterDirective,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AccountsService,LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
