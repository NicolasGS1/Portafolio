import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var VANTA: any;

// Definimos una interfaz para tipar fuertemente tus proyectos
interface Proyecto {
  titulo: string;
  desc: string;
  img: string;
  url: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  
  private vantaEffect: any;

  // 1. Propiedades del componente al inicio
  proyectos: Proyecto[] = [
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
    },
    {
      titulo: 'Obsidian Desk',
      desc: 'Mesa de ayuda con tecnologias React y Firebase (VISTA PREVIA)',
      img: 'https://i.ibb.co/Ngtp2HpF/logo.png',
      url: 'https://imgur.com/a/xY0c99s'
    }
  ];

  // 2. Ciclos de vida (Lifecycle Hooks) ordenados cronológicamente
  ngAfterViewInit(): void {
    // El pequeño retraso asegura que el elemento con ID 'VANTA' ya exista en el DOM
    setTimeout(() => {
      this.initVantaEffect();
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }

  // 3. Métodos privados de soporte al final
  private initVantaEffect(): void {
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
  }
}