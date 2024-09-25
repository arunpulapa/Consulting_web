import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutComponent {
  animals = [
    {
      title: 'Jellyfish',
      description: 'Jellyfish and sea jellies are the informal common names given to the medusa-phase of certain gelatinous members of the subphylum Medusozoa.',
      media: 'https://i.pinimg.com/736x/16/e4/4a/16e44a1228db05d403459cc8010a4a5e.jpg'
    },
    {
      title: 'Seahorse',
      description: 'Seahorses are mainly found in shallow tropical and temperate salt water throughout the world.',
      media: 'https://i.pinimg.com/564x/2e/52/a1/2e52a11efe043f28c332f916da2d6db0.jpg'
    },
    {
      title: 'Octopus',
      description: 'Octopuses inhabit various regions of the ocean, including coral reefs, pelagic waters, and the seabed.',
      media: 'https://i.pinimg.com/564x/2e/14/f0/2e14f004782aabf238b73439e1a2e1c8.jpg'
    },
    {
      title: 'Shark',
      description: 'Sharks are a group of elasmobranch fish characterized by a cartilaginous skeleton.',
      media: 'https://i.pinimg.com/564x/2e/52/a1/2e52a11efe043f28c332f916da2d6db0.jpg'
    },
    {
      title: 'Dolphin',
      description: 'Dolphins are widespread, mostly preferring warm waters.',
      media: 'https://i.pinimg.com/564x/aa/6c/4a/aa6c4ae88d3ff228a6043e2c21e323bc.jpg'
    }
  ];

  ngAfterViewInit() {
    new Swiper('.swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      },
      keyboard: {
        enabled: true,
      },
      mousewheel: {
        thresholdDelta: 70,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1560: {
          slidesPerView: 3,
        },
      },
    });
  }
}
