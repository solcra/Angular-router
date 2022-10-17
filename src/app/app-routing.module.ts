import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomPreloadService } from './services/custom-preload.service';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AdminGuard } from './guards/admin.guard';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule),
    data:{
      preload: true,
    }
  },
  {
    path: 'cms',
    // canActivate: [AdminGuard],
    loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule),
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules //Este es para el tema de que me carge todas los modulos del sitio
    // preloadingStrategy: CustomPreloadService // estrategia realizada personal
    preloadingStrategy: QuicklinkStrategy // estrategia que si se muestra en pantalla raliza preload del resto de vistas
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
