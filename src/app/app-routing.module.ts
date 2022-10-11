import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DeliverPointComponent } from './components/deliver-point/deliver-point.component';
import { BoardCreateComponent } from './components/board-create/board-create.component';
import { HeaderComponent } from './Layout/header/header.component';

const routes: Routes = [
  {path: "", component: DocumentListComponent},
  {path: "deliverPoint", component: DeliverPointComponent},
  {path: "boardCreate", component: BoardCreateComponent},
  {path: "header", component: HeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
