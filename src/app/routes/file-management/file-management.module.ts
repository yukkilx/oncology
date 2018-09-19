import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';
import { ImageCropperModule } from 'ng2-img-cropper';

import { SharedModule } from '@shared/shared.module';

import { FileManagementComponent } from './file-management.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

// // 框架自带的插件
// import { StandardComponent } from '../forms/standard/standard.component';
// import { ExtendedComponent } from '../forms/extended/extended.component';
// import { UploadComponent } from '../forms/upload/upload.component';
// import { CropperComponent } from '../forms/cropper/cropper.component';
// import { ValidationComponent } from '../forms/validation/validation.component';

const routes: Routes = [
    { path: 'detail', component: FileManagementComponent },
    { path: 'file_upload', component: FileUploadComponent},

    // { path: 'standard', component: StandardComponent },
    // { path: 'extended', component: ExtendedComponent },
    // { path: 'upload', component: UploadComponent },
    // { path: 'cropper', component: CropperComponent },
    // { path: 'validation', component: ValidationComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FileUploadModule,
    ColorPickerModule,
    ImageCropperModule,
    RouterModule.forChild(routes)
  ],
    exports: [
        RouterModule,

        // StandardComponent,
        // ExtendedComponent,
        // UploadComponent,
        // CropperComponent,
        // ValidationComponent
    ],
  declarations: [
      FileManagementComponent,
      FileUploadComponent
  ]
})
export class FileManagementModule { }
