import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule} from './shared/navbar/navbar.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PropiedadesService } from './services/propiedades.service';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard, AdminGuard } from './authentication/auth.guard';


@NgModule({
    imports:      [
        BrowserModule,
        DashboardModule,
        SidebarModule,
        NavbarModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([])
    ],
    declarations: [ AppComponent, DashboardComponent ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, PropiedadesService, AuthenticationService, AuthGuard, AdminGuard],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
