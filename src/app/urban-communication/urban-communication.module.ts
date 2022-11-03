import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogComponent} from '../urban-communication/blog/blog.component';
import {CommunityManagementComponent} from './community-management/community-management.component';
import {DesignGraphicComponent} from './design-graphic/design-graphic.component';
import {DeveloppementWebComponent} from './developpement-web/developpement-web.component';
import {FooterComponent} from './footer/footer.component';
import { ServicephoningComponent } from './servicephoning/servicephoning.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import {SwitcherComponent} from './switcher/switcher.component';
import { ScrollspyDirective } from '../scrollspy.directive';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { NgParticlesModule } from 'ng-particles';
import { UrbanCommunicationRoutingModule } from './urban-communication-routing.module';
import { UrbanCommunicationComponent } from './urban-communication.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CrispyComponent } from './crispy/crispy.component';
import { BenjdidaComponent } from './benjdida/benjdida.component';
import { CabinetblancardComponent } from './cabinetblancard/cabinetblancard.component';
import { ChilloutComponent } from './chillout/chillout.component';
import { LaromateComponent } from './laromate/laromate.component';
import { CureacoeurComponent } from './cureacoeur/cureacoeur.component';
import { HennechimoumaComponent } from './hennechimouma/hennechimouma.component';
import { MenziliComponent } from './menzili/menzili.component';
import { NourComponent } from './nour/nour.component';
import { TiffservicesComponent } from './tiffservices/tiffservices.component';
import { UrbanfoodsComponent } from './urbanfoods/urbanfoods.component';
import { UsinecentraleComponent } from './usinecentrale/usinecentrale.component';
import { ButcherComponent } from './butcher/butcher.component';
@NgModule({
  declarations: [BlogComponent,CommunityManagementComponent,DesignGraphicComponent,DeveloppementWebComponent,FooterComponent,ServicephoningComponent,SwitcherComponent,ScrollspyDirective,UrbanCommunicationComponent, NavbarComponent, CrispyComponent, BenjdidaComponent, CabinetblancardComponent, ChilloutComponent, LaromateComponent, CureacoeurComponent, HennechimoumaComponent, MenziliComponent, NourComponent, TiffservicesComponent, UrbanfoodsComponent, UsinecentraleComponent, ButcherComponent],
  imports: [
    CommonModule,
    CarouselModule,
    UrbanCommunicationRoutingModule,
    NgxTypedJsModule,
    NgParticlesModule,
    ScrollToModule.forRoot()
  ],
  exports: [BlogComponent,CommunityManagementComponent,DesignGraphicComponent,DeveloppementWebComponent,FooterComponent,ServicephoningComponent,SwitcherComponent]
})
export class UrbanCommunicationModule { }
