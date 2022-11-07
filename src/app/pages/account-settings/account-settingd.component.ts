import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settingd',
  templateUrl: './account-settingd.component.html',
  styles: [
  ]
})
export class AccountSettingdComponent implements OnInit {

  constructor( private settingsService: SettingsService ) { }

  ngOnInit(): void {

    this.settingsService.checkCurrentTheme();
  }

  changeTheme( theme: string ) {

    this.settingsService.changeTheme( theme );

  }

}
