import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { FavcharComponent } from './favchar/favchar.component';
import { FormComponentService } from './form-component/form-service.service';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './ex08/parent/parent.component';
import { ChildOutputComponent } from './ex08/child-output/child-output.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCardComponent,
    FormComponentComponent,
    FavcharComponent,
    ParentComponent,
    ChildOutputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [FormComponentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
