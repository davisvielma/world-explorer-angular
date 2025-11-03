import { Component } from '@angular/core';
import { LucideAngularModule, LoaderCircleIcon } from 'lucide-angular';

@Component({
  selector: 'app-loader',
  imports: [LucideAngularModule],
  templateUrl: './loader.html',
})
export class Loader {
  LoaderCircleIcon = LoaderCircleIcon
}
