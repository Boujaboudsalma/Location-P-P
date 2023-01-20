import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'connexion',
    pathMatch: 'full'
  },

  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'compte',
    loadChildren: () => import('./compte/compte.module').then( m => m.ComptePageModule)
  },
  {
    path: 'rajouter-produit',
    loadChildren: () => import('./rajouter-produit/rajouter-produit.module').then( m => m.RajouterProduitPageModule)
  },
  {
    path: 'parametre',
    loadChildren: () => import('./parametre/parametre.module').then( m => m.ParametrePageModule)
  },
  {
    path: 'recherche',
    loadChildren: () => import('./recherche/recherche.module').then( m => m.RecherchePageModule)
  },
  {
    path: 'acceuil-jardin',
    loadChildren: () => import('./acceuil-jardin/acceuil-jardin.module').then( m => m.AcceuilJardinPageModule)
  },
  {
    path: 'paiement',
    loadChildren: () => import('./paiement/paiement.module').then( m => m.PaiementPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'la-connexion',
    loadChildren: () => import('./la-connexion/la-connexion.module').then( m => m.LaConnexionPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'accceuil-btp',
    loadChildren: () => import('./accceuil-btp/accceuil-btp.module').then( m => m.AccceuilBtpPageModule)
  },
  {
    path: 'acceuil-audiovisuel',
    loadChildren: () => import('./acceuil-audiovisuel/acceuil-audiovisuel.module').then( m => m.AcceuilAudiovisuelPageModule)
  },
  {
    path: 'insdisponibilite',
    loadChildren: () => import('./insdisponibilite/insdisponibilite.module').then( m => m.InsdisponibilitePageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'cgu',
    loadChildren: () => import('./cgu/cgu.module').then( m => m.CGUPageModule)
  },
  {
    path: 'edit-profil',
    loadChildren: () => import('./edit-profil/edit-profil.module').then( m => m.EditProfilPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'ajout',
    loadChildren: () => import('./ajout/ajout.module').then( m => m.AjoutPageModule)
  },
  {
    path: 'ele-ajout',
    loadChildren: () => import('./ele-ajout/ele-ajout.module').then( m => m.EleAjoutPageModule)
  },
  {
    path: 'jard-ajout',
    loadChildren: () => import('./jard-ajout/jard-ajout.module').then( m => m.JardAjoutPageModule)
  },
  {
    path: 'accept-cgu',
    loadChildren: () => import('./accept-cgu/accept-cgu.module').then( m => m.AcceptCguPageModule)
  },
  {
    path: 'cookies',
    loadChildren: () => import('./cookies/cookies.module').then( m => m.CookiesPageModule)
  },
  {
    path: 'search-elec',
    loadChildren: () => import('./search-elec/search-elec.module').then( m => m.SearchElecPageModule)
  },
  {
    path: 'search-jard',
    loadChildren: () => import('./search-jard/search-jard.module').then( m => m.SearchJardPageModule)
  },
  {
    path: 'search-btp',
    loadChildren: () => import('./search-btp/search-btp.module').then( m => m.SearchBtpPageModule)
  },
  {
    path: 'mes-paiements',
    loadChildren: () => import('./mes-paiements/mes-paiements.module').then( m => m.MesPaiementsPageModule)
  },
  {
    path: 'star',
    loadChildren: () => import('./star/star.module').then( m => m.StarPageModule)
  },
  {
    path: 'cherche',
    loadChildren: () => import('./cherche/cherche.module').then( m => m.CherchePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
