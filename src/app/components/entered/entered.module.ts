import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnteredRoutingModule } from './entered-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { GroupsComponent } from './components/groups/groups.component';
import { PageComponent } from './components/page/page.component';
import { GroupIdComponent } from './components/group-id/group-id.component';
import { NewsComponent } from './components/news/news.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HomeComponent,
    GroupsComponent,
    PageComponent,
    GroupIdComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    EnteredRoutingModule
  ]
})
export class EnteredModule { }
