import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DeliverPointComponent } from './components/deliver-point/deliver-point.component';

const routes: Routes = [
  {path: "", component: DocumentListComponent},
  {path: "deliverPoint", component: DeliverPointComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
