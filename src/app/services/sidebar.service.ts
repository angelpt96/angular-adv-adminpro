import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      title: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url: '/' },
        { title: 'ProgressBar', url: 'progress' },
        { title: 'Graficas', url: 'grafica1' },
        { title: 'Promesas', url: 'promesas' },
        { title: 'Rxjs', url: 'rxjs' },
      ],
    },
    {
      title: 'Mantenimientos',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { title: 'Usuarios', url: 'usuarios' },
        { title: 'Hospitales', url: 'hospitales' },
        { title: 'Medicos', url: 'medicos' },
      ],
    },
  ];

  constructor() {}
}
