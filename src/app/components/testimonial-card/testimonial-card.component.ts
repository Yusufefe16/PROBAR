import { Component, Input } from '@angular/core';

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

@Component({
  selector: 'app-testimonial-card',
  template: `
    <div class="testimonial-card">
      <div class="quote-mark">&ldquo;</div>
      <p class="quote">{{ testimonial.quote }}</p>
      <div class="author">
        <img
          [src]="testimonial.avatar"
          [alt]="testimonial.name + ' profil fotoğrafı'"
          loading="lazy"
          width="48"
          height="48"
        />
        <div class="author-info">
          <strong>{{ testimonial.name }}</strong>
          <span>{{ testimonial.role }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .testimonial-card {
      background: var(--color-card);
      border: 1px solid var(--color-border);
      border-radius: 16px;
      padding: 2rem;
      position: relative;
      transition: transform 0.3s ease, border-color 0.3s ease;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .testimonial-card:hover {
      transform: translateY(-2px);
      border-color: var(--color-primary-dark);
    }

    .quote-mark {
      font-size: 3rem;
      line-height: 1;
      color: var(--color-primary);
      font-family: Georgia, serif;
      margin-bottom: 0.5rem;
    }

    .quote {
      color: var(--color-text-secondary);
      font-size: 1rem;
      line-height: 1.7;
      font-style: italic;
      flex: 1;
      margin-bottom: 1.5rem;
    }

    .author {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .author img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid var(--color-primary-dark);
    }

    .author-info {
      display: flex;
      flex-direction: column;
    }

    .author-info strong {
      font-size: 0.95rem;
      color: var(--color-text);
    }

    .author-info span {
      font-size: 0.8rem;
      color: var(--color-text-muted);
    }
  `]
})
export class TestimonialCardComponent {
  @Input({ required: true }) testimonial!: Testimonial;
}
