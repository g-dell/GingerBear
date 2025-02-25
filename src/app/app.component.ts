import { Component } from '@angular/core';
import { SidebarMenuComponent } from "./sidebar-menu/sidebar-menu.component";
import { CharacterCardComponent } from "./character-card/character-card.component";
import { InputModalComponent } from "./input-modal/input-modal.component";

@Component({
  selector: 'app-root',
  imports: [SidebarMenuComponent, CharacterCardComponent, InputModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GingerBear';
}
