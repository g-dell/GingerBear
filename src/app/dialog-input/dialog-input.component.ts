import { Component } from '@angular/core';
import {ChangeDetectionStrategy, inject, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

export interface DialogData {
  username: string;
  email: string;
}

@Component({
  selector: 'app-dialog-input',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './dialog-input.component.html',
  styleUrl: './dialog-input.component.scss'
})
export class DialogInputComponent {
  readonly usernameRef = inject(MatDialogRef<DialogInputComponent>);
  readonly emailRef = inject(MatDialogRef<DialogInputComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly username = model(this.data.username);
  readonly email = model(this.data.email);

  onNoClick(): void {
    this.usernameRef.close();
    this.emailRef.close();
  }
}
