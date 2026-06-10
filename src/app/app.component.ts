import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'

declare var VANTA: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnDestroy{
  private vantaEffect: any;
  ngAfterViewInit(): void {setTimeout(() => {
      if (typeof VANTA !== 'undefined') {
        this.vantaEffect = VANTA.GLOBE({
          el: document.getElementById('VANTA'),
          mouseControls: true,
          touchControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xffffff,
          backgroundColor: 0x000000
        });
      } else {
        console.error('VANTA is not defined');
      }
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }

  //Funcion para los proyectos
  proyectos = [
    {
      titulo: 'Menu para restaurante',
      desc: 'Landing page para restaurante, accesible vía QR.',
      img: 'https://i.ibb.co/mFHFDHWS/Captura-de-pantalla-2026-06-10-095923.png',
      url: 'https://lachicosmenu.netlify.app/'
    },
    {
      titulo: 'Web Spa de uñas',
      desc: 'Landingpage para servicios y horarios sobre el Spa',
      img: 'https://i.ibb.co/cXVQKCS9/Captura-de-pantalla-2026-06-10-095813.png',
      url: 'https://brusel-spa.vercel.app/'
    },
    {
      titulo: 'Cuubik Mod',
      desc: 'Implementacion de IA Chatbox para Minecraft',
      img: 'https://raw.githubusercontent.com/NicolasGS1/Cuubik-IA-Plugin/5da846cdfe48e0282cbbe68dfdb28dab63b774c0/banner.png',
      url: 'https://github.com/NicolasGS1/Cuubik-IA-Plugin'
    }
    // Agrega más aquí...
  ];
}


