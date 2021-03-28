import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdminComponent } from './connexion/admin/admin.component';
import { AjouterbailleurComponent } from './bayeur/ajouterbailleur/ajouterbailleur.component';
import { AjouterpaysanComponent } from './paysan folder/ajouterpaysan/ajouterpaysan.component';
import { AjoutersectionComponent } from './section folder/ajoutersection/ajoutersection.component';
import { AjoutgestionnaireComponent } from './gestionnaire folder/ajoutgestionnaire/ajoutgestionnaire.component';

import { AjoutvillageComponent } from './village folder/ajoutvillage/ajoutvillage.component';
import { AuthentificationComponent } from './connexion/authentification/authentification.component';
import { BailleurComponent } from './bayeur/bailleur/bailleur.component';

import { ConducteurComponent } from './conducteur foder/conducteur/conducteur.component';
import { CuvetteComponent } from './cuvette folder/cuvette/cuvette.component';
import { DetailbailleurComponent } from './bayeur/detailbailleur/detailbailleur.component';
import { DetailcuvetteComponent } from './cuvette folder/detailcuvette/detailcuvette.component';
import { DetailgestionnaireComponent } from './gestionnaire folder/detailgestionnaire/detailgestionnaire.component';
import { DetailpaysanComponent } from './paysan folder/detailpaysan/detailpaysan.component';
import { DetailsectionComponent } from './section folder/detailsection/detailsection.component';
import { ExigibleComponent } from './exigible folder/exigible/exigible.component';
import { GestionnaireComponent } from './gestionnaire folder/gestionnaire/gestionnaire.component';
import { GroupementComponent } from './groupement folder/groupement/groupement.component';

import { IntrantComponent } from './intrant folder/intrant/intrant.component';
import { JoutcuvetteComponent } from './cuvette folder/joutcuvette/joutcuvette.component';
import { LoginComponent } from './connexion/login/login.component';

import { MachineComponent } from './machine folder/machine/machine.component';
import { MagasinComponent } from './magasin folder/magasin/magasin.component';
import { MaintenanceComponent } from './maintenance folder/maintenance/maintenance.component';
import { OrganeComponent } from './organe folder/organe/organe.component';
import { OuvrageComponent } from './ouvrage folder/ouvrage/ouvrage.component';
import { PartenaireComponent } from './partenaire folder/partenaire/partenaire.component';
import { PaysanComponent } from './paysan folder/paysan/paysan.component';
import { ProductionComponent } from './production folder/production/production.component';

import { SaisonComponent } from './saison folder/saison/saison.component';

import { SectionComponent } from './section folder/section/section.component';
import { UnionComponent } from './union folder/union/union.component';
import { UpdatebayeurComponent } from './bayeur/bailleur/updatebayeur/updatebayeur.component';
import { UpdatecuvetteComponent } from './cuvette folder/updatecuvette/updatecuvette.component';

import { UpdatepaysanComponent } from './paysan folder/updatepaysan/updatepaysan.component';
import { UpdatesectionComponent } from './section folder/updatesection/updatesection.component';
import { VillageComponent } from './village folder/village/village.component';
import { AuthGuard } from './auth.guard';
import { DetailmaintenanceComponent } from './maintenance folder/detailmaintenance/detailmaintenance.component';
import { AjoutermaintenanceComponent } from './maintenance folder/ajoutermaintenance/ajoutermaintenance.component';
import { UpdatemaintenanceComponent } from './maintenance folder/updatemaintenance/updatemaintenance.component';
import { DetailpartenaireComponent } from './partenaire folder/detailpartenaire/detailpartenaire.component';
import { AjouerpartenaireComponent } from './partenaire folder/ajouerpartenaire/ajouerpartenaire.component';
import { ModifierpartenaireComponent } from './partenaire folder/modifierpartenaire/modifierpartenaire.component';
import { AjouterorganeComponent } from './organe folder/ajouterorgane/ajouterorgane.component';
import { UpdateorganeComponent } from './organe folder/updateorgane/updateorgane.component';
import { DetailorganeComponent } from './organe folder/detailorgane/detailorgane.component';
import { DetailouvrageComponent } from './ouvrage folder/detailouvrage/detailouvrage.component';
import { UpdateouvrageComponent } from './ouvrage folder/updateouvrage/updateouvrage.component';
import { AjouterouvrageComponent } from './ouvrage folder/ajouterouvrage/ajouterouvrage.component';
import { UpdategestionnaireComponent } from './gestionnaire folder/updategestionnaire/updategestionnaire.component';
import { AjoutergroupementComponent } from './groupement folder/ajoutergroupement/ajoutergroupement.component';
import { DetailgroupementComponent } from './groupement folder/detailgroupement/detailgroupement.component';
import { UpdategroupementComponent } from './groupement folder/updategroupement/updategroupement.component';
const routes: Routes = [

    {path: 'acceuil', component: AcceuilComponent},
    {path: 'authentification', component: AuthentificationComponent},
    {path: 'bailleur', component: BailleurComponent},
    {path: 'conducteur', component: ConducteurComponent},
    {path: 'cuvette', component: CuvetteComponent},
    {path: 'exigible', component: ExigibleComponent},
    {path: 'gestionnaire', component: GestionnaireComponent},
    {path: 'groupement', component: GroupementComponent},
    {path: 'intrant', component: IntrantComponent},
    {path: 'machine', component: MachineComponent},
    {path: 'magasin', component: MagasinComponent},
    {path: 'partenaire', component: PartenaireComponent},
    {path: 'paysan', component: PaysanComponent},
    {path: 'production', component: ProductionComponent},
    {path: 'section', component: SectionComponent},
    {path: 'union', component:UnionComponent},
    {path: 'village', component: VillageComponent},
    {path: 'organe', component: OrganeComponent},
    {path: 'ouvrage', component: OuvrageComponent},
    {path:'savecuvette', component:JoutcuvetteComponent},
    {path:'ajoutvillage',component:AjoutvillageComponent},
    {path:'maintenance',component:MaintenanceComponent},
    {path:'saison',component:SaisonComponent},
    {path:'updatecuvette/:id',component:UpdatecuvetteComponent},

     {path:'savebayeur',component:AjouterbailleurComponent},
    {path:'detailcuvette/:id',component:DetailcuvetteComponent},
    {path:'updatebayeur/:id',component:UpdatebayeurComponent},
    {path:'detailsbayeur/:id',component:DetailbailleurComponent},

    {path:'savepaysan',component:AjouterpaysanComponent},
    {path:'updatepaysan/:id',component:UpdatepaysanComponent},
    {path:'detailspaysan/:id',component:DetailpaysanComponent},
    {path:'detailsgestionnaire/:id',component:DetailgestionnaireComponent},
    {path:'savegestionnaire',component:AjoutgestionnaireComponent},
    {path:'updategestionnaire/:id',component:UpdategestionnaireComponent},

    {path:'detailsection/:id',component:DetailsectionComponent},
    {path:'savesection',component:AjoutersectionComponent},
    {path:'updatesection/:id',component:UpdatesectionComponent},
    { path: '', pathMatch: 'full', redirectTo: 'connexion'},
    { path: 'connexion', component:LoginComponent },
    { path: '', component:LoginComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'savemaintenance', component: AjoutermaintenanceComponent },
    { path: 'updatemaintenances/:id', component: UpdatemaintenanceComponent },
    { path: 'detailmaintenances/:id', component: DetailmaintenanceComponent },
    { path: 'detailpartenaire/:id', component: DetailpartenaireComponent },
    { path: 'ajoutpartenaire', component: AjouerpartenaireComponent },
    { path: 'updatepartenaire/:id', component: ModifierpartenaireComponent},
    { path: 'ajoutOrgane', component: AjouterorganeComponent},
    { path: 'updateOrgane/:id', component: UpdateorganeComponent},
    { path: 'detailOrgane/:id', component: DetailorganeComponent},
    { path: 'detailOuvrage/:id', component: DetailouvrageComponent},
    { path: 'updateOuvrage/:id', component: UpdateouvrageComponent},
    { path: 'ajoutOuvrage', component: AjouterouvrageComponent},
    { path: 'ajoutGroupement', component: AjoutergroupementComponent},
    { path: 'updateGroupement/:id', component: UpdategroupementComponent},
    { path: 'detailGroupement/:id', component: DetailgroupementComponent},













];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
