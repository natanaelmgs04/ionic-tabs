import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(
    public router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
  ) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 9,
      cartaz: 'https://upload.wikimedia.org/wikipedia/pt/a/aa/Mortal_Kombat_%282021%29.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 6,
      cartaz: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/vingadores-ultimato',
      favorito: false
    },
    {
      nome: 'Harry Potter e a Pedra Filosofal (2001)',
      lancamento: '15/11/2001 (BR)',
      duracao: '2h32m',
      classificacao: 8,
      cartaz: 'https://media.themoviedb.org/t/p/w600_and_h900_face/4rtsbE9aQ1qw4gv7yYwaNYfWFoS.jpg',
      generos: ['Fantasia', 'Aventura'],
      pagina: '/harry-potter-pedra-filosofal',
      favorito: false
    },
    {
      nome: 'Toy Story (1995)',
      lancamento: '12/01/1995 (BR)',
      duracao: '1h21m',
      classificacao: 6,
      cartaz: 'https://media.themoviedb.org/t/p/w600_and_h900_face/6AafgfifXkFS4g2xGJZIwsPQK6P.jpg',
      generos: ['Aventura', 'Comédia', 'Animação'],
      pagina: '/toy-story',
      favorito: false
    },
    {
      nome: 'Invocação do Mal (2013)',
      lancamento: '13/09/2013 (BR)',
      duracao: '1h39m',
      classificacao: 7,
      cartaz: 'https://media.themoviedb.org/t/p/w600_and_h900_face/1NxHKZW5DPbUFtbF3MxbdSyxRqU.jpg',
      generos: ['Terror', 'Suspense'],
      pagina: '/invocacao-mal',
      favorito: false
    },
  ];

  ExibirFilme(filme: IFilme) {
    const navigationExtras: NavigationExtras = {state: {paramFilme: filme}};
    this.router.navigate(['filme-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            filme.favorito = false;
          }
        },
        {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }


}
