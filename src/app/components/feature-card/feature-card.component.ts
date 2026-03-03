import { Component, Input } from '@angular/core';

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-feature-card',
  template: `
    <div class="feature-card">
      <span class="feature-icon">{{ feature.icon }}</span>
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.description }}</p>
    </div>
  `,
  styles: [`
    .feature-card {
      background: var(--color-card);
      border: 1px solid var(--color-border);
      border-radius: 16px;
      padding: 2rem;
      transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
      height: 100%;
    }

    .feature-card:hover {
      transform: translateY(-4px);
      background: var(--color-card-hover);
      border-color: var(--color-primary-dark);
    }

    .feature-icon {
      font-size: 2.5rem;
      display: block;
      margin-bottom: 1rem;
    }

    h3 {
      font-family: var(--font-heading);
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: var(--color-primary);
    }

    p {
      color: var(--color-text-secondary);
      font-size: 0.95rem;
      line-height: 1.6;
    }
  `]
})
export class FeatureCardComponent {
  @Input({ required: true }) feature!: Feature;
}
