import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from "@angular/material";

@NgModule({
    imports: [
      CommonModule,
        Material.MatGridListModule, // for grid column
        Material.MatFormFieldModule, //form
        Material.MatInputModule, //input
        Material.MatRadioModule, //mat-radio-group - radio button
        Material.MatDatepickerModule, //matDatepicker - datepicker
        Material.MatNativeDateModule, //required for datepicker
        Material.MatSelectModule, //mat-select - dropdown
        Material.MatCheckboxModule, //mat-checkbox - checkbox
        Material.MatButtonModule, // for button
        Material.MatSidenavModule,
        Material.MatListModule,
        Material.MatToolbarModule,
        Material.MatIconModule,
        Material.MatTableModule,
        Material.MatCardModule,
        Material.MatDialogModule
    ],
    exports: [
        Material.MatGridListModule,
        Material.MatFormFieldModule,
        Material.MatInputModule,
        Material.MatRadioModule,
        Material.MatDatepickerModule,
        Material.MatNativeDateModule,
        Material.MatSelectModule,
        Material.MatCheckboxModule,
        Material.MatButtonModule,
        Material.MatSidenavModule,
        Material.MatToolbarModule,
        Material.MatListModule,
        Material.MatIconModule,
        Material.MatTableModule,
        Material.MatCardModule,
        Material.MatDialogModule

    ]
})
export class MaterialModule { }
