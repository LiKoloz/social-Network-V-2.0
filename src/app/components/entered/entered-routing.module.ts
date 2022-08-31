import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {GroupsComponent} from "./components/groups/groups.component";
import {PageComponent} from "./components/page/page.component";
import {GroupIdComponent} from "./components/group-id/group-id.component";
import {NewsComponent} from "./components/news/news.component";
import {FriendsComponent} from "./components/friends/friends.component";
import {MessagesComponent} from "./components/messages/messages.component";

const routes: Routes = [
  {path: '', component: HomeComponent,
    children: [
      {path: 'messages', component: MessagesComponent},
      {path: 'groups/:id', component: GroupIdComponent},
      {path: 'news', component: NewsComponent},
      {path: 'friends', component: FriendsComponent},
      {path: 'groups', component: GroupsComponent},
      {path: 'id/:id', component: PageComponent},
      {path: '**', redirectTo: 'news'},

      {path: '', redirectTo: 'news', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnteredRoutingModule { }
