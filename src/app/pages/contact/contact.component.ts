import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Handle the form submission, e.g., send the data to a backend service
    console.log('Contact Form Data:', this.contact);
    alert('Thank you for reaching out! We will get back to you soon.');
    this.contact = { name: '', email: '', message: '' }; // Reset form
  }

  
}
