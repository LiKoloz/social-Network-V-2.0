import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {GroupsComponent} from "./components/groups/groups.component";
import {PageComponent} from "./components/page/page.component";
import {GroupIdComponent} from "./components/group-id/group-id.component";
import {NewsComponent} from "./components/news/news.component";

const routes: Routes = [
  {path: '', component: HomeComponent,
    children: [
      {path: 'groups', component: GroupsComponent},
      {path: ':id', component: PageComponent},
      {path: 'groups/:id', component: GroupIdComponent},
      {path: 'news', component: NewsComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnteredRoutingModule { }
