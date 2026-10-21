import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { IAtor } from '../model/IAtor';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor(
    public router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
  ) {}

  ExibirAtor(ator: IAtor) {
    const navigationExtras: NavigationExtras = { state: { paramAtor: ator } };
    this.router.navigate(['ator-detalhe'], navigationExtras);
  }

  listaAtores: IAtor[] = [
    {
      nome: 'Tom Hanks',
      nascimento: '09/07/1956',
      popularidade: 9,
      foto: 'https://media.themoviedb.org/t/p/w600_and_h900_face/xndWFsBlClOJFRdhSt4NBwiPq2o.jpg',
      conhecidoPor: ['Forrest Gump', 'Cast Away', 'O Terminal'],
      favorito: false
    },
    {
      nome: 'Leonardo DiCaprio',
      nascimento: '11/11/1974',
      popularidade: 9,
      foto: 'https://media.themoviedb.org/t/p/w600_and_h900_face/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg',
      conhecidoPor: ['Titanic', 'A Origem', 'O Lobo de Wall Street'],
      favorito: false
    },
    {
      nome: 'Scarlett Johansson',
      nascimento: '22/11/1984',
      popularidade: 8,
      foto: 'https://media.themoviedb.org/t/p/w600_and_h900_face/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg',
      conhecidoPor: ['Viúva Negra', 'Os Vingadores', 'Her'],
      favorito: false
    },
    {
      nome: 'Dwayne Johnson',
      nascimento: '02/05/1972',
      popularidade: 8,
      foto: 'https://media.themoviedb.org/t/p/w600_and_h900_face/5QApZVV8FUFlVxQpIK3Ew6cqotq.jpg',
      conhecidoPor: ['Velozes e Furiosos', 'Jumanji', 'Moana'],
      favorito: false
    },
    {
      nome: 'Margot Robbie',
      nascimento: '02/07/1990',
      popularidade: 9,
      foto: 'https://media.themoviedb.org/t/p/w600_and_h900_face/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg',
      conhecidoPor: ['Barbie', 'Aves de Rapina', 'Era Uma Vez em Hollywood'],
      favorito: false
    },
  ];

  async exibirAlertaFavorito(ator: IAtor) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o ator?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            ator.favorito = false;
          }
        },
        {
          text: 'Sim, favoritar.',
          handler: () => {
            ator.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Ator adicionado aos favoritos.',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

}
