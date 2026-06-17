import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  // Arreglo de proyectos para la vista
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
    },
    {
      titulo: 'Obsidian Desk',
      desc: 'Mesa de ayuda con tecnologias React y Firebase (VISTA PREVIA)',
      img: 'https://i.ibb.co/Ngtp2HpF/logo.png',
      url: 'https://imgur.com/a/xY0c99s'
    }
  ];
}