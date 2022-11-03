import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CommunityManagementComponent } from './community-management/community-management.component';
import { DesignGraphicComponent } from './design-graphic/design-graphic.component';
import { DeveloppementWebComponent } from './developpement-web/developpement-web.component';
import { ServicephoningComponent } from './servicephoning/servicephoning.component';
import { UrbanCommunicationComponent } from './urban-communication.component';
import {CrispyComponent} from './crispy/crispy.component';
import { ChilloutComponent } from './chillout/chillout.component';
import { LaromateComponent } from './laromate/laromate.component';
import { UrbanfoodsComponent } from './urbanfoods/urbanfoods.component';
import { ButcherComponent } from './butcher/butcher.component';
import { MenziliComponent } from './menzili/menzili.component';
import { TiffservicesComponent } from './tiffservices/tiffservices.component';
import { CureacoeurComponent } from './cureacoeur/cureacoeur.component';
import { NourComponent } from './nour/nour.component';
import { BenjdidaComponent } from './benjdida/benjdida.component';
import { CabinetblancardComponent } from './cabinetblancard/cabinetblancard.component';
import { UsinecentraleComponent } from './usinecentrale/usinecentrale.component';
import { HennechimoumaComponent } from './hennechimouma/hennechimouma.component';
const routes: Routes = [
  {
    path: '',
    component: UrbanCommunicationComponent
},
{
    path: 'CommunityManager',
    component: CommunityManagementComponent
},
{
    path: 'GraphicDesign',
    component: DesignGraphicComponent
},
{
    path: 'Phoning',
    component: ServicephoningComponent
},
{
    path: 'WebDeveloppement',
    component: DeveloppementWebComponent
},
{
    path: 'Blog',
    component:  BlogComponent
},
{
    path: 'Crispy',
    component:  CrispyComponent
},
{
    path: 'Chillout',
    component:  ChilloutComponent
},
{
    path: 'Laromate',
    component:  LaromateComponent
},
{
    path: 'Urbanfoods',
    component:  UrbanfoodsComponent
},
{
    path: 'Butcher',
    component:  ButcherComponent
},
{
    path: 'Menzili',
    component:  MenziliComponent
},
{
    path: 'Tiffservices',
    component:  TiffservicesComponent
},
{
    path: 'Cureacoeur',
    component:  CureacoeurComponent
},
{
    path: 'Nour',
    component:  NourComponent
},
{
    path: 'Benjdida',
    component:  BenjdidaComponent
},
{
    path: 'CabinetBlanchard',
    component:  CabinetblancardComponent
},
{
    path: 'Usinecentrale',
    component:  UsinecentraleComponent
},
{
    path: 'Hennecheimouma',
    component:  HennechimoumaComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UrbanCommunicationRoutingModule { }
