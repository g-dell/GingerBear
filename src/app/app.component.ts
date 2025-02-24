import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarMenuComponent } from "./sidebar-menu/sidebar-menu.component";
import { CharacterCardComponent } from "./character-card/character-card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarMenuComponent, CharacterCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GingerBear';
}
