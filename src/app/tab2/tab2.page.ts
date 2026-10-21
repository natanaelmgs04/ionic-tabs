import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ISerie } from '../model/ISerie';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(
    public router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
  ) {}

  ExibirSerie(serie: ISerie) {
    const navigationExtras: NavigationExtras = { state: { paramSerie: serie } };
    this.router.navigate(['serie-detalhe'], navigationExtras);
  }

  listaSeries: ISerie[] = [
    {
      nome: 'Breaking Bad (2008)',
      lancamento: '20/01/2008',
      duracao: '47min/ep',
      classificacao: 9,
      cartaz: 'https://media.themoviedb.org/t/p/w600_and_h900_face/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
      generos: ['Crime', 'Drama'],
      favorito: false
    },
    {
      nome: 'Game of Thrones (2011)',
      lancamento: '17/04/2011',
      duracao: '57min/ep',
      classificacao: 8,
      cartaz: 'https://media.themoviedb.org/t/p/w600_and_h900_face/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg',
      generos: ['Ação', 'Drama', 'Fantasia'],
      favorito: false
    },
    {
      nome: 'The Last of Us (2023)',
      lancamento: '15/01/2023',
      duracao: '55min/ep',
      classificacao: 9,
      cartaz: 'https://media.themoviedb.org/t/p/w600_and_h900_face/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
      generos: ['Drama', 'Ação'],
      favorito: false
    },
    {
      nome: 'Stranger Things (2016)',
      lancamento: '15/07/2016',
      duracao: '51min/ep',
      classificacao: 8,
      cartaz: 'https://media.themoviedb.org/t/p/w600_and_h900_face/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
      generos: ['Drama', 'Suspense', 'Ficção Científica'],
      favorito: false
    },
    {
      nome: 'Arcane (2021)',
      lancamento: '06/11/2021',
      duracao: '40min/ep',
      classificacao: 9,
      cartaz: 'https://media.themoviedb.org/t/p/w600_and_h900_face/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg',
      generos: ['Animação', 'Ação', 'Aventura'],
      favorito: false
    },
  ];

  async exibirAlertaFavorito(serie: ISerie) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a série?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            serie.favorito = false;
          }
        },
        {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Série adicionada aos favoritos.',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

}
