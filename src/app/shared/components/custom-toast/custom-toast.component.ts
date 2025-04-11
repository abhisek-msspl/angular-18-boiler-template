import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toast, ToastrService, ToastPackage } from 'ngx-toastr';

@Component({
  selector: 'custom-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-toast.component.html',
  styleUrls: ['./custom-toast.component.scss'],
})
export class CustomToastComponent extends Toast {
  constructor(
    public override toastPackage: ToastPackage,
    protected override toastrService: ToastrService
  ) {
    super(toastrService, toastPackage);
  }
}
