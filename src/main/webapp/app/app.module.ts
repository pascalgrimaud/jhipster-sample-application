import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterSampleApplication200601SharedModule } from 'app/shared/shared.module';
import { JhipsterSampleApplication200601CoreModule } from 'app/core/core.module';
import { JhipsterSampleApplication200601AppRoutingModule } from './app-routing.module';
import { JhipsterSampleApplication200601HomeModule } from './home/home.module';
import { JhipsterSampleApplication200601EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterSampleApplication200601SharedModule,
    JhipsterSampleApplication200601CoreModule,
    JhipsterSampleApplication200601HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterSampleApplication200601EntityModule,
    JhipsterSampleApplication200601AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsterSampleApplication200601AppModule {}
