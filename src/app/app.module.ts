import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { CommonFooterComponent } from './common-footer/common-footer.component';
import { ContentDataComponent } from './content-data/content-data.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    CommonHeaderComponent,
    CommonFooterComponent,
    ContentDataComponent
  ],exports:[SideNavComponent,CommonHeaderComponent,CommonHeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
