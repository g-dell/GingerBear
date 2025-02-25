import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-character-card',
  imports: [
    MatCardModule
  ],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})
export class CharacterCardComponent {
  longText = `Erza è una guerriera imponente con lunghi capelli rossi e occhi penetranti. La sua postura fiera e
  la sua voce autoritaria impongono rispetto tra compagni e nemici. Indossa un'armatura scintillante, ma il suo vero
  talento risiede nella sua magia di riorganizzazione, che le permette di evocare diverse armature e armi a seconda
  della battaglia..`;
}

