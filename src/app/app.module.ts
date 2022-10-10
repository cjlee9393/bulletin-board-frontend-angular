import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DocumentComponent } from './components/document/document.component';
import { DocumentEditComponent } from './components/document-edit/document-edit.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentEditComponent } from './components/comment-edit/comment-edit.component';
import { HeaderComponent } from './Layout/header/header.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DocumentListComponent,
    SearchBarComponent,
    DocumentComponent,
    DocumentEditComponent,
    CommentComponent,
    CommentEditComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
