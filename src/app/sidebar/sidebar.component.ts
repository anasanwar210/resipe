import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() isSidebarOpen = false;
  @Output() sidebarToggled = new EventEmitter<void>();
  links = ['Home', 'About', 'Contact'];

  toggleSidebar() {
    this.sidebarToggled.emit();
  }
}
