import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Importing Angular Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  // Required for Material Animations
    MatButtonModule,          // Material Button
    MatInputModule,           // Material Input Field
    MatSelectModule,          // Material Select Dropdown
    MatCardModule,            // Material Card
    MatToolbarModule,         // Material Toolbar (for a navigation bar)
    MatIconModule             // Material Icon
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
