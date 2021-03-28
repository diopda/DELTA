import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AuthentificationComponent } from './connexion/authentification/authentification.component';
import { ProductionComponent } from './production folder/production/production.component';
import { PaysanComponent } from './paysan folder/paysan/paysan.component';
import { CuvetteComponent } from './cuvette folder/cuvette/cuvette.component';
import { VillageComponent } from './village folder/village/village.component';
import { UnionComponent } from './union folder/union/union.component';
import { SectionComponent } from './section folder/section/section.component';
import { GroupementComponent } from './groupement folder/groupement/groupement.component';
import { IntrantComponent } from './intrant folder/intrant/intrant.component';
import { ExigibleComponent } from './exigible folder/exigible/exigible.component';
import { MachineComponent } from './machine folder/machine/machine.component';
import { MagasinComponent } from './magasin folder/magasin/magasin.component';
import { GestionnaireComponent } from './gestionnaire folder/gestionnaire/gestionnaire.component';
import { ConducteurComponent } from './conducteur foder/conducteur/conducteur.component';
import { BailleurComponent } from './bayeur/bailleur/bailleur.component';

import { HttpClientModule } from '@angular/common/http';
import { OrganeComponent } from './organe folder/organe/organe.component';
import { OuvrageComponent } from './ouvrage folder/ouvrage/ouvrage.component';
import { TranslateModule } from '@ngx-translate/core';
import { JoutcuvetteComponent } from './cuvette folder/joutcuvette/joutcuvette.component';
import { AjoutvillageComponent } from './village folder/ajoutvillage/ajoutvillage.component';
import { MaintenanceComponent } from './maintenance folder/maintenance/maintenance.component';
import { SaisonComponent } from './saison folder/saison/saison.component';

import { UpdatecuvetteComponent } from './cuvette folder/updatecuvette/updatecuvette.component';
import { FormsModule } from '@angular/forms';
import { AjouterbailleurComponent } from './bayeur/ajouterbailleur/ajouterbailleur.component';
import { UpdatebayeurComponent } from './bayeur/bailleur/updatebayeur/updatebayeur.component';
import { AjouterpaysanComponent } from './paysan folder/ajouterpaysan/ajouterpaysan.component';
import { UpdatepaysanComponent } from './paysan folder/updatepaysan/updatepaysan.component';
import { DetailpaysanComponent } from './paysan folder/detailpaysan/detailpaysan.component';
import { AjoutgestionnaireComponent } from './gestionnaire folder/ajoutgestionnaire/ajoutgestionnaire.component';

import { DetailgestionnaireComponent } from './gestionnaire folder/detailgestionnaire/detailgestionnaire.component';
import { AjoutersectionComponent } from './section folder/ajoutersection/ajoutersection.component';
import { UpdatesectionComponent } from './section folder/updatesection/updatesection.component';
import { DetailsectionComponent } from './section folder/detailsection/detailsection.component';
import { BoitedialogueComponent } from './boitedialogue/boitedialogue.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './connexion/login/login.component';
import { AdminComponent } from './connexion/admin/admin.component';
import {  ReactiveFormsModule} from '@angular/forms';
import { AjoutermaintenanceComponent } from './maintenance folder/ajoutermaintenance/ajoutermaintenance.component';
import { UpdatemaintenanceComponent } from './maintenance folder/updatemaintenance/updatemaintenance.component';
import { DetailmaintenanceComponent } from './maintenance folder/detailmaintenance/detailmaintenance.component';
import { PartenaireComponent } from './partenaire folder/partenaire/partenaire.component';
import { AjouerpartenaireComponent } from './partenaire folder/ajouerpartenaire/ajouerpartenaire.component';
import { ModifierpartenaireComponent } from './partenaire folder/modifierpartenaire/modifierpartenaire.component';
import { AjouterorganeComponent } from './organe folder/ajouterorgane/ajouterorgane.component';
import { UpdateorganeComponent } from './organe folder/updateorgane/updateorgane.component';
import { AjouterouvrageComponent } from './ouvrage folder/ajouterouvrage/ajouterouvrage.component';
import { UpdateouvrageComponent } from './ouvrage folder/updateouvrage/updateouvrage.component';
import { DetailouvrageComponent } from './ouvrage folder/detailouvrage/detailouvrage.component';
import { UpdategestionnaireComponent } from './gestionnaire folder/updategestionnaire/updategestionnaire.component';
import { AjoutergroupementComponent } from './groupement folder/ajoutergroupement/ajoutergroupement.component';
import { UpdategroupementComponent } from './groupement folder/updategroupement/updategroupement.component';




@NgModule({


  declarations: [

    AppComponent,

    AuthentificationComponent,
    ProductionComponent,
    PaysanComponent,
    CuvetteComponent,
    VillageComponent,
    UnionComponent,
    SectionComponent,
    GroupementComponent,
    IntrantComponent,
    ExigibleComponent,
    MachineComponent,
    MagasinComponent,
    GestionnaireComponent,
    ConducteurComponent,
    BailleurComponent,
    PartenaireComponent,
    AjouterorganeComponent,
    UpdateorganeComponent,
    OrganeComponent,
    OuvrageComponent,
    JoutcuvetteComponent,
    AjoutvillageComponent,
    MaintenanceComponent,
    SaisonComponent,
    AjouerpartenaireComponent,

    ModifierpartenaireComponent,

    UpdatecuvetteComponent,
    AjouterbailleurComponent,
    UpdatebayeurComponent,
    AjouterpaysanComponent,
    UpdatepaysanComponent,
    DetailpaysanComponent,
    AjoutgestionnaireComponent,

    DetailgestionnaireComponent,
    AjoutersectionComponent,
    UpdatesectionComponent,
    DetailsectionComponent,
    BoitedialogueComponent,
    LoginComponent,
    AdminComponent,
    AjoutermaintenanceComponent,
    UpdatemaintenanceComponent,
    DetailmaintenanceComponent,
    AjouterouvrageComponent,
    UpdateouvrageComponent,
    DetailouvrageComponent,
    AjoutgestionnaireComponent,
    UpdategestionnaireComponent,
    AjoutergroupementComponent,
    UpdategroupementComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,


    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({


    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
