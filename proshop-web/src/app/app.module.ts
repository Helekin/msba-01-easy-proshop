import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { NavigationComponent } from './components/navigation/navigation.component';

const routes: Routes = [
  { path: 'category/:id', component: ProductListComponent },
  { path: 'category', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, ProductListComponent, NavigationComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [provideHttpClient(), ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
