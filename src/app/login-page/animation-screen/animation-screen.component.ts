import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animation-screen.component.html',
  styleUrl: './animation-screen.component.scss',
})
export class AnimationScreenComponent implements OnInit {
  animation: boolean = false; // AUF TRUE STELLEN FÜR DIE ANIMATION

  ngOnInit(): void {}
}
