import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentComponent } from './components/document/document.component';
import { DocumentEditComponent } from './components/document-edit/document-edit.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentEditComponent } from './components/comment-edit/comment-edit.component';
import { HeaderComponent } from './Layout/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeliverPointComponent } from './components/deliver-point/deliver-point.component';
import { DocumentCreateComponent } from './components/document-create/document-create.component';
import { BoardCreateComponent } from './components/board-create/board-create.component';
import { WriterLoginComponent } from './writer-login/writer-login.component';
import { WriterRegisterComponent } from './writer-register/writer-register.component';
import { CommentCreateComponent } from './components/comment-create/comment-create.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentListComponent,
    DocumentComponent,
    DocumentEditComponent,
    CommentComponent,
    CommentEditComponent,
    HeaderComponent,
    DeliverPointComponent,
    DocumentCreateComponent,
    BoardCreateComponent,
    WriterLoginComponent,
    WriterRegisterComponent,
    CommentCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
