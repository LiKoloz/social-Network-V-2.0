import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnteredRoutingModule } from './entered-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { GroupsComponent } from './components/groups/groups.component';
import { PageComponent } from './components/page/page.component';
import { GroupIdComponent } from './components/group-id/group-id.component';
import { NewsComponent } from './components/news/news.component';
import { MessagesComponent } from './components/messages/messages.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ChildComponent} from "./components/page/child.component";


@NgModule({
  declarations: [
    SidebarComponent,
    HomeComponent,
    GroupsComponent,
    PageComponent,
    GroupIdComponent,
    NewsComponent,
    MessagesComponent,
    ChildComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    EnteredRoutingModule,
  ]
})
export class EnteredModule { }
