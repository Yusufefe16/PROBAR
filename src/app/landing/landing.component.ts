import {
  Component,
  AfterViewInit,
  ElementRef,
  inject,
  OnDestroy
} from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  stagger,
  query
} from '@angular/animations';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { FeatureCardComponent, Feature } from '../components/feature-card/feature-card.component';
import {
  TestimonialCardComponent,
  Testimonial
} from '../components/testimonial-card/testimonial-card.component';

@Component({
  selector: 'app-landing',
  imports: [ReactiveFormsModule, FeatureCardComponent, TestimonialCardComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  animations: [
    trigger('heroAnimation', [
      transition(':enter', [
        query('.hero-animate', [
          style({ opacity: 0, transform: 'translateY(40px)' }),
          stagger(180, [
            animate(
              '0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ])
        ])
      ])
    ])
  ]
})
export class LandingComponent implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef);
  private fb = inject(FormBuilder);
  private observer!: IntersectionObserver;

  menuOpen = false;
  navScrolled = false;
  formSubmitted = false;

  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  features: Feature[] = [
    {
      icon: '💪',
      title: 'Yüksek Protein',
      description:
        "Her barda 20g protein ile kas gelişimini destekle, gün boyu tok kal."
    },
    {
      icon: '🍃',
      title: 'Doğal İçerik',
      description:
        'Yapay tatlandırıcı ve koruyucu yok. Sadece doğanın sunduğu en iyi malzemeler.'
    },
    {
      icon: '⚡',
      title: 'Düşük Şeker',
      description:
        "Sadece 2g şeker. Enerji çöküşü olmadan sürdürülebilir performans."
    },
    {
      icon: '🎒',
      title: 'Pratik & Taşınabilir',
      description:
        "Çantana at, cebine koy. Her an, her yerde yanında."
    },
    {
      icon: '🏋️',
      title: 'Antrenman Desteği',
      description:
        'Antrenman öncesi enerji, sonrası toparlanma. Sporcunun vazgeçilmezi.'
    },
    {
      icon: '🌾',
      title: 'Lif Kaynağı',
      description:
        "5g diyet lifi ile sindirim sağlığını destekle, dengeyi koru."
    }
  ];

  flavors = [
    {
      name: 'Bitter Kakao',
      description: 'Yoğun kakao lezzeti, sütlü çikolata parçacıklarıyla.',
      image:
        'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=400&q=80',
      color: '#4a2c2a'
    },
    {
      name: 'Fıstık Ezmesi',
      description: 'Gerçek fıstık ezmesi, çıtır fıstık parçalarıyla.',
      image:
        'https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=400&q=80',
      color: '#8B6914'
    },
    {
      name: 'Tuzlu Karamel',
      description: 'Tatlı-tuzlu denge, karamel soslu katmanlar.',
      image:
        'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80',
      color: '#a0522d'
    },
    {
      name: 'Çilekli Yoğurt',
      description: 'Taze çilek aroması, yoğurt kaplama ile.',
      image:
        'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=400&q=80',
      color: '#c41e3a'
    }
  ];

  nutritionItems = [
    { label: 'Protein', value: '20g', icon: '💪' },
    { label: 'Şeker', value: '2g', icon: '🍬' },
    { label: 'Kalori', value: '210', icon: '🔥' },
    { label: 'Lif', value: '5g', icon: '🌾' },
    { label: 'Yağ', value: '8g', icon: '🥑' },
    { label: 'Karbonhidrat', value: '22g', icon: '⚡' }
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Elif Yılmaz',
      role: 'Fitness Eğitmeni',
      quote:
        "Öğrencilerime hep PROBAR öneriyorum. Temiz içerik listesi ve lezzeti rakipsiz. Antrenman aralarında mükemmel bir tercih.",
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Burak Demir',
      role: 'Maraton Koşucusu',
      quote:
        "Yarış öncesi ve sonrası PROBAR tüketiyorum. Hafif, tok tutuyor ve midemi rahatsız etmiyor. En sevdiğim lezzet Tuzlu Karamel!",
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
    },
    {
      name: 'Zeynep Aksoy',
      role: 'Diyetisyen',
      quote:
        "Piyasadaki protein barların çoğunun içerik listesi ürkütücü. PROBAR ise gerçekten temiz içerikli, danışanlarıma güvenle önerebiliyorum.",
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80'
    }
  ];

  faqItems = [
    {
      question: "PROBAR'ı kimler tüketebilir?",
      answer:
        "PROBAR, aktif yaşam süren herkes için uygundur. Sporcular, öğrenciler, çalışanlar — protein ihtiyacını sağlıklı ve pratik şekilde karşılamak isteyen herkes güvenle tüketebilir.",
      open: false
    },
    {
      question: 'Günde kaç bar tüketebilirim?',
      answer:
        "Günlük protein ihtiyacınıza bağlı olarak 1-3 bar tüketebilirsiniz. Dengeli beslenme planınıza ek olarak tüketmenizi öneririz.",
      open: false
    },
    {
      question: 'PROBAR gluten içeriyor mu?',
      answer:
        "Ürünlerimiz gluten içermez. Üretim tesisimizde çapraz kontaminasyonu önlemek için gerekli önlemler alınmaktadır.",
      open: false
    },
    {
      question: 'Nereden satın alabilirim?',
      answer:
        "PROBAR'ı yakında online mağazamız, seçili spor salonları ve sağlıklı yaşam mağazalarından temin edebileceksiniz. Lansman tarihi için bizi takip edin!",
      open: false
    },
    {
      question: 'Ürünlerin raf ömrü ne kadar?',
      answer:
        "PROBAR'ın raf ömrü üretim tarihinden itibaren 12 aydır. Serin ve kuru ortamda saklamanızı öneririz.",
      open: false
    }
  ];

  private scrollHandler = () => {
    this.navScrolled = window.scrollY > 50;
  };

  ngAfterViewInit(): void {
    this.setupScrollAnimations();
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    window.removeEventListener('scroll', this.scrollHandler);
  }

  private setupScrollAnimations(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    this.el.nativeElement
      .querySelectorAll('.animate-on-scroll')
      .forEach((el: Element) => {
        this.observer.observe(el);
      });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleFaq(index: number): void {
    this.faqItems[index].open = !this.faqItems[index].open;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form gönderildi:', this.contactForm.value);
      this.formSubmitted = true;
      this.contactForm.reset();
      setTimeout(() => (this.formSubmitted = false), 4000);
    }
  }

  scrollTo(event: Event, targetId: string): void {
    event.preventDefault();
    this.closeMenu();
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
