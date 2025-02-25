import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogInputComponent } from '../dialog-input/dialog-input.component';

export interface DialogData {
  username: string;
  email: string;
}

@Component({
  selector: 'app-input-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputModalComponent {
  username = '';
  email = '';

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogInputComponent, {
      data: { username: this.username, email: this.email }
    });

    dialogRef.afterClosed().subscribe((result: DialogData | undefined) => {
      if (result) {
        this.username = result.username;
        this.email = result.email;
        this.showNotification();
      }
    });
  }

  showNotification(): void {
    this.snackBar.open('Your changes are updated successfully', 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['custom-snackbar']
    });
  }
}
