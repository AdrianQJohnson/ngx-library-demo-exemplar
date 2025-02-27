import { Component, inject } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { AppService } from '../services/app.service';
import { NgxLibraryComponent } from 'ngx-library';

@Component({
  selector: 'app-document',
  imports: [MatCard, MatCardContent, NgxLibraryComponent],
  template: `
    <mat-card appearance="outlined">
      <mat-card-content>
        <ngx-library></ngx-library>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      @use '@angular/material' as mat;
      :host {
        @include mat.card-overrides(
          (
            outlined-outline-width: 0.5px,
            outlined-container-color: var(--mat-sys-surface-container-low),
            outlined-outline-color: var(--mat-sys-on-surface),
          )
        );
      }
    `,
  ],
})
export class DocumentComponent {
  appService = inject(AppService);
}
