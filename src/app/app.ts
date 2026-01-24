import { Component, signal } from '@angular/core';
import { Footer } from "./Componentes/footer/footer";
import { Header } from "./Componentes/header/header";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Footer, Header, RouterOutlet]
})
export class App {
  protected readonly title = signal('Extintores');
}
