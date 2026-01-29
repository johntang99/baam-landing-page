"use client";

import { useEffect, useMemo, useState } from 'react';
import {
  BarChart3,
  BriefcaseBusiness,
  Car,
  CheckCircle2,
  Clock,
  Search,
  Sparkles,
  Stethoscope,
  TrendingUp,
  UtensilsCrossed,
  Video,
  Wrench,
  Scissors,
  ShoppingBag,
  Target,
} from 'lucide-react';

const systemCards = [
  {
    icon: Target,
    title: 'Discovery Engine',
    subtitle: 'Your Business Shows Up Everywhere Customers Search',
    items: [
      'Google Business Profile posts (2x/week)',
      'Fresh website content',
      'Social distribution',
      'Local visibility optimization',
    ],
    result:
      'Customers find you when searching for what you offer—on Google Search, Google Maps, and social feeds.',
  },
  {
    icon: Video,
    title: 'Trust Engine',
    subtitle: 'Prove Your Expertise with Content That Builds Credibility',
    items: [
      '2 short videos per month (30-45 sec)',
      'Articles published to your website',
      'Review monitoring and response',
      'Media distributed to social and YouTube',
    ],
    result:
      'When customers find you, they see proof you’re active, current, and trustworthy.',
  },
  {
    icon: BarChart3,
    title: 'Performance Engine',
    subtitle: 'Track Real Business Outcomes—Not Vanity Metrics',
    items: [
      'Visibility Score (Google ranking + presence)',
      'Calls, map clicks, website visits',
      'Review count and sentiment',
      'Content engagement and reach',
    ],
    result: 'You know exactly how your market presence is driving customer actions.',
  },
];

const deliverables = [
  {
    title: 'Google & Search Visibility',
    preview: 'Google post preview',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80',
    items: [
      'Google Business Profile optimization',
      '8 Google posts per month',
      'Local ranking monitoring',
      'Review monitoring and replies',
      'Monthly visibility report',
    ],
  },
  {
    title: 'Content Engine',
    preview: 'Short video + article preview',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
    items: [
      '2 short videos per month (30-45s)',
      'Video editing and optimization',
      '2 SEO articles for your website',
      'Fresh, search-optimized content',
      'Content stays active year-round',
    ],
  },
  {
    title: 'Distribution & Reach',
    preview: 'Social distribution preview',
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=600&q=80',
    items: [
      'Video posted to YouTube and TikTok',
      'Social content distribution',
      'Cross-posting to Facebook/Instagram',
      'Website stays fresh with blog posts',
      'Content indexed by Google continuously',
    ],
  },
  {
    title: 'Tracking & Reporting',
    preview: 'Monthly scorecard preview',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    items: [
      'Visibility Score tracking',
      'Call and click measurement',
      'Website visit analytics',
      'Review and engagement report',
      'Monthly scorecard delivered to inbox',
    ],
  },
];

const timeline = [
  {
    title: 'Month 1–2: Foundation',
    work: [
      'Google Business Profile fully optimized',
      'First content published (videos + articles)',
      'Visibility tracking begins',
      'Baseline performance established',
    ],
    results: ['Profile views increase 15-25%', 'First new reviews appear', 'Content starts ranking in search'],
  },
  {
    title: 'Months 3–4: Activation',
    work: [
      'Weekly content rhythm established',
      'Google recognizes consistent activity',
      'Social presence grows',
      'Website traffic increases',
    ],
    results: [
      'Google Maps visibility improves',
      'Calls and website visits increase 30-40%',
      'Ranking enters Top 5-10 for key searches',
    ],
  },
  {
    title: 'Months 5–8: Growth',
    work: [
      'Compounding content library',
      'Authority signals strengthen',
      'Reviews accumulate',
      'Competitors fall behind',
    ],
    results: [
      'Top-3 ranking for primary searches',
      '50-70% increase in customer actions',
      'Reviews and trust signals multiply',
    ],
  },
  {
    title: 'Months 9–12+: Market Leadership',
    work: [
      'Sustained top rankings',
      'Content library working 24/7',
      'Strong review base',
      'Long-term SEO value realized',
    ],
    results: [
      '70-100% increase in visibility',
      'Consistent lead flow',
      'Reduced reliance on ads',
      'Authority in local market',
    ],
  },
];

const industries = [
  {
    icon: Stethoscope,
    title: 'Medical & Healthcare',
    detail: 'Primary Care • Urgent Care • Physical Therapy • Chiropractors • Dental Clinics',
  },
  {
    icon: Wrench,
    title: 'Home Services',
    detail: 'HVAC • Plumbing • Electrical • Roofing • Landscaping • Tree Service',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Food',
    detail: 'Casual Dining • Fast Casual • Cafes • Bakeries • Catering',
  },
  {
    icon: Sparkles,
    title: 'Beauty & Wellness',
    detail: 'Salons • Spas • Med Spas • Fitness Studios • Yoga • Massage',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Professional Services',
    detail: 'Law Firms • Accounting • Insurance • Financial Advisors • Real Estate',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & Shops',
    detail: 'Boutiques • Specialty Stores • Pet Shops • Florists • Gift Shops',
  },
  {
    icon: Car,
    title: 'Auto Services',
    detail: 'Auto Repair • Detailing • Body Shops • Tire Services • Oil Change',
  },
  {
    icon: Scissors,
    title: 'Personal Services',
    detail: 'Barbers • Cleaners • Pet Grooming • Tutoring • Photography',
  },
];

const testimonials = [
  {
    quote:
      "Before Baam, I was invisible on Google. Now I'm in the top 3 for every search that matters. Calls are up 60% and I don't touch the marketing.",
    name: 'Sarah Martinez',
    role: 'Owner, Martinez Family Dental',
    location: 'Middletown, NY',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
    results: '+85% Visibility | +60% Calls | 6 Months',
  },
  {
    quote:
      'I tried doing social media myself for 6 months and gave up. Baam handles everything—posts, videos, Google—and I actually see results. Worth every dollar.',
    name: 'Mike Rodriguez',
    role: 'Owner, Rodriguez HVAC',
    location: 'Orange County, NY',
    avatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&q=80',
    results: '+72% Visibility | 4 Months',
  },
  {
    quote:
      'We were spending $1,200/month on ads with no long-term value. Baam costs half that, builds assets that last, and brings more qualified leads.',
    name: 'Jennifer Kim',
    role: 'Partner, Kim & Associates Law Firm',
    location: 'Hudson Valley, NY',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
    results: '+65% Visibility | 8 Months',
  },
];

const valueCalculator = [
  {
    id: 'diy',
    label: 'Doing it myself (10-20 hrs/month)',
    monthlyCost: 1200,
    description: 'Opportunity cost of your time',
  },
  {
    id: 'tools',
    label: 'Using multiple tools ($200-500/month)',
    monthlyCost: 450,
    description: 'Tools stack + coordination time',
  },
  {
    id: 'agency',
    label: 'Using an agency ($2,000-8,000/month)',
    monthlyCost: 3500,
    description: 'Typical agency retainer',
  },
];

const pricing = [
  {
    title: 'Baam Presence™',
    price: '$299/month',
    bestFor: 'Getting visible and staying active',
    included: [
      'Google Business Profile optimization',
      '2 Google posts per month',
      'Website updates & fresh content',
      'Review monitoring & replies',
      'Local visibility tracking',
      'Monthly performance summary',
    ],
    who: 'Businesses starting from low visibility or maintaining presence after other marketing',
    cta: 'Start with Presence',
  },
  {
    title: 'Baam Growth™',
    price: '$599/month',
    bestFor: 'Businesses serious about local market leadership',
    included: [
      'Everything in Presence, plus:',
      '2 professional videos per month (30-45s)',
      'Video distribution (YouTube, TikTok, social)',
      '2 SEO-optimized articles per month',
      'Weekly GBP posting (8 posts/month)',
      'Full social media distribution',
      'Advanced analytics & reporting',
      'Visibility Score tracking',
    ],
    who: 'Businesses competing actively and aiming for Top-3 local rankings',
    cta: 'Choose Growth',
    highlight: true,
  },
  {
    title: 'Baam Authority™',
    price: '$999/month',
    bestFor: 'Dominating your market completely',
    included: [
      'Everything in Growth, plus:',
      '4 videos per month',
      '4 SEO articles per month',
      'Advanced GBP optimization + local SEO',
      'Multi-platform publishing strategy',
      'Priority support & custom reporting',
      'Competitive analysis & insights',
    ],
    who: 'Multi-location businesses or highly competitive markets',
    cta: 'Go All-In',
  },
];

const faqs = [
  {
    q: 'How is Baam different from an agency?',
    a: 'Traditional agencies charge $2,000-8,000/month, require meetings, and often expect you to provide ideas or approve everything. Baam runs independently—we create, publish, and optimize without needing your time. You own all content, and there are no contracts.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Baam is month-to-month. If you cancel, you keep all the content we created (videos, articles, posts)—it’s yours forever.',
  },
  {
    q: 'Do you guarantee rankings or results?',
    a: 'No one can ethically guarantee specific rankings. What we do guarantee: consistent weekly work, accurate reporting, and best-practice optimization. Most clients see 50-70% visibility increases within 6 months.',
  },
  {
    q: "What if I'm already working with an agency?",
    a: 'Baam works alongside other marketing. We focus on organic presence (Google, content, social), which complements paid ads or other services. Many clients use Baam to reduce ad spend over time.',
  },
  {
    q: 'How much of my time does this require?',
    a: 'Setup takes about 30-60 minutes (onboarding call + brief questionnaire). After that, zero hours per month. We handle everything.',
  },
  {
    q: 'What industries does Baam work best for?',
    a: 'Any local business where customers search online before choosing a provider. That includes healthcare, home services, restaurants, professional services, retail, and more.',
  },
  {
    q: 'Do I need to provide content or ideas?',
    a: 'No. We research your industry, competitors, and common customer questions, then create everything. If you want to provide ideas or topics, great—but it’s not required.',
  },
  {
    q: 'How long until I see results?',
    a: 'Most businesses see measurable increases in visibility within 4-8 weeks. Significant call/visit increases typically occur in months 3-6 as content compounds.',
  },
  {
    q: 'Do I own the content you create?',
    a: 'Yes. Every video, article, and post is yours. If you cancel, you keep everything.',
  },
  {
    q: 'Can I see a live demo of the platform?',
    a: 'Yes. Click "Explore Live Demo Dashboard" to see exactly what clients see—real data, real reporting, no fluff.',
  },
];

export default function HomePage() {
  const [calculatorChoice, setCalculatorChoice] = useState('agency');
  const [counts, setCounts] = useState({
    score: 0,
    posts: 0,
    videos: 0,
    articles: 0,
    calls: 0,
    mapClicks: 0,
    visits: 0,
  });
  const calculatorData = useMemo(() => {
    const selected = valueCalculator.find((item) => item.id === calculatorChoice) || valueCalculator[0];
    const baam = 599;
    const savings = Math.max(selected.monthlyCost - baam, 0);
    return { selected, baam, savings };
  }, [calculatorChoice]);
  const formatCount = (value: number) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toString();
  };

  useEffect(() => {
    let animationFrame = 0;
    const duration = 1200;
    const target = {
      score: 86,
      posts: 8,
      videos: 2,
      articles: 2,
      calls: 124,
      mapClicks: 318,
      visits: 1600,
    };
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts({
        score: Math.round(target.score * eased),
        posts: Math.round(target.posts * eased),
        videos: Math.round(target.videos * eased),
        articles: Math.round(target.articles * eased),
        calls: Math.round(target.calls * eased),
        mapClicks: Math.round(target.mapClicks * eased),
        visits: Math.round(target.visits * eased),
      });
      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/baam-logo.svg" alt="Baam" style={{ height: '56px' }} />
          </a>
          <nav className="nav-links">
            <a href="#how-it-works">How It Works</a>
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#pricing">Pricing</a>
            <a href="#demo">Dashboard Demo</a>
          </nav>
          <a className="btn btn-primary" href="#preview">
            Get Free Preview
          </a>
        </div>
      </header>

      <main>
        <section id="demo" className="hero hero-gradient">
          <div className="hero-shapes">
            <span className="shape shape-one" />
            <span className="shape shape-two" />
            <span className="shape shape-three" />
            <span className="shape shape-four" />
          </div>
          <div className="container hero-layout">
            <div>
              <span className="badge" style={{ background: 'var(--mist-blue)', color: 'var(--steel-blue)', border: '1px solid rgba(47, 75, 106, 0.2)' }}>Local Demand Matching System</span>
              <h1 className="text-display" style={{ marginTop: '1.2rem', color: '#ffffff', background: 'none', WebkitTextFillColor: '#ffffff', fontSize: '3.5rem', lineHeight: '1.15' }}>
                Your business shouldn't disappear between busy weeks
              </h1>
              <p className="text-body" style={{ marginTop: '1.5rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.75', maxWidth: '680px', fontSize: '1.25rem' }}>
                BAAM keeps local businesses continuously visible where real decisions are made—without constant marketing effort.
              </p>
              <p className="text-body" style={{ marginTop: '1rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.75', maxWidth: '680px' }}>
                BAAM is an always-on operating system for local presence. It quietly maintains visibility, credibility, and consistency across search, maps, content, and discovery surfaces.
              </p>

              <div className="grid grid-2" style={{ marginTop: '2.5rem', gap: '1.5rem' }}>
                <div className="card-elevated">
                  <div className="text-subheading">
                    <span className="icon-badge"><Target size={18} /></span>
                    You Don&apos;t Do This — We Do
                  </div>
                  <p className="text-body" style={{ color: 'var(--text-gray)', marginTop: '0.75rem' }}>
                    No dashboards to operate. No content to create. We handle the weekly work.
                  </p>
                </div>
                <div className="card-elevated">
                  <div className="text-subheading">
                    <span className="icon-badge"><TrendingUp size={18} /></span>
                    Results Compound Monthly
                  </div>
                  <p className="text-body" style={{ color: 'var(--text-gray)', marginTop: '0.75rem' }}>
                    Every week of presence builds on the last: more visibility, more trust, more calls.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a className="btn btn-primary btn-lg" href="#preview">
                  Get Started
                </a>
                <a className="btn btn-light btn-lg" href="#demo">
                  See How It Works →
                </a>
              </div>
              <div style={{ marginTop: '1.2rem' }}>
                <a className="text-small" href="#pricing" style={{ color: 'var(--mist-blue)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                  View Pricing →
                </a>
              </div>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} />
                  <span>2,400+ local businesses trust BAAM</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} />
                  <span>87% average visibility increase in 6 months</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} />
                  <span>No contracts • You own all content • Month-to-month</span>
                </div>
              </div>
            </div>

            <div className="hero-visual dashboard-card">
              <div className="panel">
                <div className="panel-card">
                  <div className="text-small" style={{ color: 'var(--text-gray)' }}>
                    Live Market Presence Overview
                  </div>
                  <div className="dashboard-score">
                    <div
                      className="progress-ring"
                      style={{ ['--progress' as string]: counts.score }}
                    >
                      <div className="progress-inner">
                        <div className="text-subheading">{counts.score}</div>
                        <div className="text-small" style={{ color: 'var(--text-gray)' }}>
                          Score
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-subheading">Visibility Score</div>
                      <p className="text-small" style={{ color: 'var(--text-gray)' }}>
                        +12 points in the last 30 days
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel-card">
                  <div className="text-small" style={{ color: 'var(--text-gray)' }}>
                    Weekly Activity
                  </div>
                  <div className="grid grid-2" style={{ gap: '0.75rem', marginTop: '0.75rem' }}>
                    <div>
                      <div className="text-subheading">{counts.posts}</div>
                      <div className="text-small" style={{ color: 'var(--text-gray)' }}>
                        Google Posts
                      </div>
                    </div>
                    <div>
                      <div className="text-subheading">{counts.articles}</div>
                      <div className="text-small" style={{ color: 'var(--text-gray)' }}>
                        SEO Articles
                      </div>
                    </div>
                    <div>
                      <div className="text-subheading">{counts.videos}</div>
                      <div className="text-small" style={{ color: 'var(--text-gray)' }}>
                        Videos
                      </div>
                    </div>
                    <div>
                      <div className="text-subheading">24</div>
                      <div className="text-small" style={{ color: 'var(--text-gray)' }}>
                        Social Shares
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-card">
                  <div className="text-small" style={{ color: 'var(--text-gray)' }}>
                    Outcomes Tracked
                  </div>
                  <div className="grid grid-2" style={{ gap: '0.75rem', marginTop: '0.75rem' }}>
                    <div>
                      <div className="text-subheading">{counts.calls}</div>
                      <div className="text-small" style={{ color: 'var(--text-gray)' }}>
                        Calls
                      </div>
                    </div>
                    <div>
                      <div className="text-subheading">{counts.mapClicks}</div>
                      <div className="text-small" style={{ color: 'var(--text-gray)' }}>
                        Map Clicks
                      </div>
                    </div>
                    <div>
                      <div className="text-subheading">{formatCount(counts.visits)}</div>
                      <div className="text-small" style={{ color: 'var(--text-gray)' }}>
                        Site Visits
                      </div>
                    </div>
                    <div>
                      <div className="text-subheading">41</div>
                      <div className="text-small" style={{ color: 'var(--text-gray)' }}>
                        Bookings
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-tight">
          <div className="container" style={{ textAlign: 'center' }}>
            <p className="text-small" style={{ color: 'var(--text-gray)' }}>
              Runs across the platforms your customers already trust
            </p>
            <div className="logo-row" style={{ marginTop: '2rem', display: 'flex', gap: '3rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" style={{ height: '26px', opacity: 0.85 }} />
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0866FF', opacity: 0.85 }}>Meta</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.85 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#00F2EA"/>
                  <circle cx="12" cy="12" r="6" fill="#FF0050"/>
                </svg>
                <span style={{ fontSize: '1.4rem', fontWeight: 700, color: '#000' }}>TikTok</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.85 }}>
                <svg width="32" height="24" viewBox="0 0 32 24">
                  <rect width="32" height="24" rx="4" fill="#FF0000"/>
                  <path d="M12 8L22 14L12 20V8Z" fill="white"/>
                </svg>
                <span style={{ fontSize: '1.35rem', fontWeight: 600, color: '#282828' }}>YouTube</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.85 }}>
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <defs>
                    <linearGradient id="ig-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FED373"/>
                      <stop offset="50%" stopColor="#F15245"/>
                      <stop offset="100%" stopColor="#D92E7F"/>
                    </linearGradient>
                  </defs>
                  <rect width="28" height="28" rx="7" fill="url(#ig-grad)"/>
                  <circle cx="14" cy="14" r="7" fill="none" stroke="white" strokeWidth="2.5"/>
                  <circle cx="21" cy="7" r="2" fill="white"/>
                </svg>
                <span style={{ fontSize: '1.3rem', fontWeight: 600, color: '#262626' }}>Instagram</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-light">
          <div className="container">
            <div style={{ background: '#fff', borderRadius: '24px', padding: '4rem', boxShadow: '0 20px 60px rgba(18, 18, 18, 0.08)', border: '1px solid rgba(143, 143, 143, 0.1)' }}>
              <h2 className="text-heading" style={{ marginTop: '0', marginBottom: '2rem', textAlign: 'center' }}>
                Most local businesses don&apos;t lose customers. They fall out of the decision path before choices are made.
              </h2>
              <p className="text-body" style={{ color: '#475569', marginBottom: '3rem', textAlign: 'center', fontWeight: 500 }}>
                You didn&apos;t stop caring. You didn&apos;t stop providing great service. But online, consistency quietly broke down.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div className="card-bordered">
                    <p className="text-body" style={{ color: '#475569', fontWeight: 500 }}>Listings stop getting updated</p>
                  </div>
                  <div className="card-bordered">
                    <p className="text-body" style={{ color: '#475569', fontWeight: 500 }}>Social channels go silent</p>
                  </div>
                  <div className="card-bordered">
                    <p className="text-body" style={{ color: '#475569', fontWeight: 500 }}>Content becomes irregular</p>
                  </div>
                  <div className="card-bordered">
                    <p className="text-body" style={{ color: '#475569', fontWeight: 500 }}>Presence fades between busy weeks</p>
                  </div>
                </div>
                <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(18, 18, 18, 0.12)' }}>
                  <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80" alt="Business owner searching" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>
              
              <p className="text-body" style={{ color: '#475569', marginTop: '3rem', textAlign: 'center', fontWeight: 500, fontSize: '1.125rem' }}>
                And when customers need something — they choose the business that feels familiar, not necessarily the best one.
              </p>
            </div>
            
            <div className="card-elevated" style={{ marginTop: '3rem', padding: '3rem', textAlign: 'center', background: 'linear-gradient(135deg, var(--mist-blue), var(--off-white))' }}>
              <p className="text-heading" style={{ color: 'var(--steel-blue)', marginBottom: '1rem' }}>
                80%
              </p>
              <p className="text-body" style={{ color: '#475569', fontWeight: 500 }}>
                of U.S. consumers search for local businesses weekly
              </p>
              <p className="text-body" style={{ color: '#475569', marginTop: '1.5rem', fontWeight: 500 }}>
                Yet 70% have abandoned or inconsistent social media accounts. The issue isn't awareness or effort—it's sustainability.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section">
          <div className="container">
            <h2 className="text-heading" style={{ marginTop: '0', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              BAAM exists to stop that quiet decay
            </h2>
            <p className="text-body" style={{ color: '#475569', marginTop: '1.5rem', maxWidth: '720px', margin: '1.5rem auto 0', textAlign: 'center', fontWeight: 500, fontSize: '1.125rem' }}>
              Not to make you louder. Not to run campaigns. Not to add another tool.
            </p>
            <p className="text-body" style={{ color: '#475569', marginTop: '1rem', maxWidth: '720px', margin: '1rem auto 0', textAlign: 'center', fontWeight: 600, fontSize: '1.2rem' }}>
              Just to make sure your business stays present while you&apos;re busy running it.
            </p>

            <div className="system-diagram">
              <div className="diagram-block">
                <div className="text-body" style={{ color: '#475569', fontWeight: 600 }}>
                  Channels (We Manage)
                </div>
                <div className="diagram-items">
                  <span>🔍 Search</span>
                  <span>💬 Social</span>
                  <span>🎥 Video</span>
                  <span>🌐 Website</span>
                </div>
              </div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-block">
                <div className="text-body" style={{ color: '#475569', fontWeight: 600 }}>
                  Funnel (We Optimize)
                </div>
                <div className="diagram-items">
                  <span>Discovery</span>
                  <span>Trust</span>
                  <span>Action</span>
                </div>
              </div>
              <div className="diagram-arrow">→</div>
              <div className="diagram-block">
                <div className="text-body" style={{ color: '#475569', fontWeight: 600 }}>
                  Outcomes (We Track)
                </div>
                <div className="diagram-items">
                  <span>Calls</span>
                  <span>Map Clicks</span>
                  <span>Visits</span>
                  <span>Bookings</span>
                </div>
              </div>
            </div>

            <div className="grid grid-3">
              {systemCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="card-bordered">
                    <span className="icon-badge" style={{ marginRight: 0, marginBottom: '1rem' }}><Icon size={20} /></span>
                    <div className="text-subheading">{card.title}</div>
                  <p className="text-body" style={{ marginTop: '0.75rem', color: '#475569', fontWeight: 500 }}>
                    {card.subtitle}
                  </p>
                  <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem' }}>
                    {card.items.map((item) => (
                      <li key={item} className="text-body" style={{ marginBottom: '0.75rem', color: '#475569', fontWeight: 500 }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-body" style={{ color: '#475569', marginTop: '1rem', fontWeight: 500 }}>
                    {card.result}
                  </p>
                  </div>
                );
              })}
            </div>

            <div className="card" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <p className="text-subheading">
                Baam doesn&apos;t replace your expertise. It makes sure customers can find it, trust it, and act on it.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="section bg-gradient">
          <div className="container">
            <h2 className="text-heading" style={{ color: '#fff' }}>
              What BAAM Does Every Week
            </h2>
            <p className="text-body" style={{ color: 'rgba(255,255,255,0.9)', marginTop: '1rem', maxWidth: '720px', fontSize: '1.125rem' }}>
              While you focus on your business, BAAM quietly maintains your baseline.
            </p>
            <p className="text-body" style={{ color: 'rgba(255,255,255,0.75)', marginTop: '0.75rem', maxWidth: '720px' }}>
              No daily posting. No dashboards to babysit. No reminders to chase.
            </p>
            <div className="grid grid-4" style={{ marginTop: '2.5rem' }}>
              {deliverables.map((item) => (
                <div key={item.title} className="card-bordered" style={{ color: 'var(--text-dark)' }}>
                  <div className="deliverable-preview">
                    <img className="deliverable-thumb" src={item.image} alt={item.title} />
                  </div>
                  <div className="text-subheading" style={{ marginTop: '1rem' }}>{item.title}</div>
                  <ul style={{ marginTop: '1rem', paddingLeft: 0, listStyle: 'none' }}>
                    {item.items.map((detail) => (
                      <li key={detail} className="text-body" style={{ marginBottom: '0.75rem', color: '#475569', fontWeight: 500, display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <CheckCircle2 size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.1rem' }} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-body" style={{ textAlign: 'center', marginTop: '2rem', color: 'rgba(255,255,255,0.9)' }}>
              This work runs every week, whether you&apos;re busy or not. That&apos;s how market presence compounds.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="text-heading" style={{ textAlign: 'center' }}>Stable Presence Compounds</h2>
            <p className="text-body" style={{ marginTop: '1.5rem', color: '#475569', maxWidth: '720px', margin: '1.5rem auto 0', textAlign: 'center', fontWeight: 500 }}>
              Local visibility doesn&apos;t spike. It accumulates. Each appearance reinforces memory. Each interaction reduces friction. Each quiet signal builds confidence.
            </p>
            <div className="timeline-progress" style={{ marginTop: '2rem' }}>
              {timeline.map((stage, index) => (
                <div key={stage.title} className="timeline-progress-row">
                  <div className="timeline-progress-label">
                    <span className="text-small">{stage.title}</span>
                  </div>
                  <div className="timeline-progress-bar">
                    <span style={{ width: `${(index + 1) * 25}%` }}></span>
                  </div>
                </div>
              ))}
            </div>
            <div className="timeline" style={{ marginTop: '2.5rem' }}>
              {timeline.map((stage) => (
                <div key={stage.title} className="timeline-item">
                  <div className="text-subheading">{stage.title}</div>
                  <div className="grid grid-2" style={{ marginTop: '1rem' }}>
                    <div>
                      <div className="text-body" style={{ color: '#475569', fontWeight: 600 }}>
                        What happens:
                      </div>
                      <ul style={{ marginTop: '0.75rem', paddingLeft: '1.2rem' }}>
                        {stage.work.map((item) => (
                          <li key={item} className="text-body" style={{ marginBottom: '0.5rem', color: '#475569', fontWeight: 500 }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-body" style={{ color: '#475569', fontWeight: 600 }}>
                        Results:
                      </div>
                      <ul style={{ marginTop: '0.75rem', paddingLeft: '1.2rem' }}>
                        {stage.results.map((item) => (
                          <li key={item} className="text-body" style={{ marginBottom: '0.5rem', color: '#475569', fontWeight: 500 }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="card" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <p className="text-subheading">
                This is not a sprint. It&apos;s a system that gets stronger the longer it runs—just like reputation,
                skill, and trust.
              </p>
            </div>
          </div>
        </section>

        <section id="industries" className="section bg-light">
          <div className="container">
            <h2 className="text-heading">Built for Local Businesses That Want to Lead Their Market</h2>
            <p className="text-body" style={{ marginTop: '1rem', color: 'var(--text-gray)', maxWidth: '820px' }}>
              If customers search for you, reviews matter, and you&apos;re competing locally—Baam keeps you visible and
              trusted.
            </p>
            <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <div key={industry.title} className="card-bordered">
                    <span className="icon-badge" style={{ marginRight: 0, marginBottom: '1rem' }}><Icon size={20} /></span>
                    <div className="text-subheading">{industry.title}</div>
                  <p className="text-body" style={{ color: '#475569', marginTop: '0.75rem', fontWeight: 500 }}>
                    {industry.detail}
                  </p>
                  </div>
                );
              })}
            </div>
            <p className="text-body" style={{ textAlign: 'center', marginTop: '2.5rem', color: 'var(--text-gray)' }}>
              If you&apos;re competing locally and customers search before they choose—Baam is built for you.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="text-heading">Real Businesses, Real Results</h2>
            <div className="grid grid-3" style={{ marginTop: '2.5rem', gap: '2rem' }}>
              <div className="stat-card">
                <div className="stat-number">2,400+</div>
                <p className="text-body" style={{ color: '#475569', marginTop: '0.5rem', fontWeight: 500 }}>
                  Active businesses using Baam
                </p>
              </div>
              <div className="stat-card">
                <div className="stat-number">87%</div>
                <p className="text-body" style={{ color: '#475569', marginTop: '0.5rem', fontWeight: 500 }}>
                  Average visibility increase in 6 months
                </p>
              </div>
              <div className="stat-card">
                <div className="stat-number">4.9/5</div>
                <p className="text-body" style={{ color: '#475569', marginTop: '0.5rem', fontWeight: 500 }}>
                  Client satisfaction rating
                </p>
              </div>
            </div>
            <div className="grid grid-3" style={{ marginTop: '3rem', gap: '2rem' }}>
              {testimonials.map((item) => (
                <div key={item.name} className="card-elevated">
                  <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                    {[1,2,3,4,5].map(i => <span key={i} style={{ color: '#F59E0B', fontSize: '1.25rem' }}>★</span>)}
                  </div>
                  <p className="text-body" style={{ color: '#475569', fontStyle: 'italic', fontWeight: 500 }}>
                    "{item.quote}"
                  </p>
                  <div className="testimonial-meta">
                    <img className="testimonial-avatar" src={item.avatar} alt={item.name} />
                    <div>
                      <div className="text-subheading">{item.name}</div>
                      <div className="text-body" style={{ color: '#475569', fontSize: '0.95rem' }}>
                        {item.role}
                      </div>
                      <div className="text-small" style={{ color: 'var(--text-gray)' }}>
                        {item.location}
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(143, 143, 143, 0.15)' }}>
                    <div className="badge" style={{ background: 'var(--mist-blue)', color: 'var(--steel-blue)', fontSize: '0.85rem' }}>
                      {item.results}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="card video-card" style={{ marginTop: '2.5rem' }}>
              <div>
                <span className="badge">90-Second Demo</span>
                <h3 className="text-subheading" style={{ marginTop: '0.75rem' }}>
                  See How Baam Works in 90 Seconds
                </h3>
                <p className="text-body" style={{ color: 'var(--text-gray)', marginTop: '0.75rem' }}>
                  A quick walkthrough of the dashboard, weekly deliverables, and monthly reporting clients receive.
                </p>
              </div>
              <div className="video-placeholder">
                <div className="play-button">▶</div>
                <p className="text-small" style={{ color: 'var(--text-gray)' }}>
                  Demo video placeholder
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section bg-light">
          <div className="container">
            <h2 className="text-heading">Simple Pricing for Always-On Market Presence</h2>
            <p className="text-body" style={{ marginTop: '1rem', color: 'var(--text-gray)' }}>
              No setup fees. No contracts. Cancel anytime. Everything you need to stay visible, trusted, and growing.
            </p>
            <div className="card" style={{ marginTop: '2rem' }}>
              <div className="text-subheading">Compare Your Current Spend</div>
              <p className="text-body" style={{ color: 'var(--text-gray)', marginTop: '0.5rem' }}>
                Select the option that best matches your current approach.
              </p>
              <div className="calculator-options">
                {valueCalculator.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCalculatorChoice(item.id)}
                    className={`calculator-option ${calculatorChoice === item.id ? 'active' : ''}`}
                  >
                    <span className="text-body">{item.label}</span>
                    <span className="text-small" style={{ color: 'var(--text-gray)' }}>
                      {item.description}
                    </span>
                  </button>
                ))}
              </div>
              <div className="calculator-result">
                <div>
                  <p className="text-small" style={{ color: 'var(--text-gray)' }}>
                    Your current cost
                  </p>
                  <div className="text-subheading">${calculatorData.selected.monthlyCost.toLocaleString()}</div>
                </div>
                <div>
                  <p className="text-small" style={{ color: 'var(--text-gray)' }}>
                    Baam Growth
                  </p>
                  <div className="text-subheading">${calculatorData.baam}</div>
                </div>
                <div>
                  <p className="text-small" style={{ color: 'var(--text-gray)' }}>
                    Estimated monthly savings
                  </p>
                  <div className="text-subheading" style={{ color: 'var(--success)' }}>
                    ${calculatorData.savings.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-3" style={{ marginTop: '2.5rem' }}>
              {pricing.map((plan) => (
                <div key={plan.title} className={`card-elevated ${plan.highlight ? 'pricing-highlight' : ''}`}>
                  {plan.highlight && <div className="badge-popular">Most Popular</div>}
                  <div className="text-subheading" style={{ color: 'var(--text-dark)' }}>{plan.title}</div>
                  <div className="text-heading" style={{ marginTop: '0.75rem', color: 'var(--text-dark)' }}>
                    {plan.price}
                  </div>
                  <p className="text-body" style={{ color: '#475569', marginTop: '0.75rem', fontWeight: 500 }}>
                    Best for: {plan.bestFor}
                  </p>
                  <ul style={{ marginTop: '1.5rem', paddingLeft: 0, listStyle: 'none' }}>
                    {plan.included.map((item) => (
                      <li key={item} className="text-body" style={{ marginBottom: '0.75rem', color: '#475569', fontWeight: 500, display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <CheckCircle2 size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.1rem' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-body" style={{ color: '#475569', marginTop: '1.5rem', fontWeight: 500 }}>
                    Who it&apos;s for: {plan.who}
                  </p>
                  <button className={`btn ${plan.highlight ? 'btn-primary' : 'btn-outline'}`} style={{ marginTop: '2rem', width: '100%' }}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
            <p className="text-body" style={{ marginTop: '2.5rem', color: '#475569', fontWeight: 500 }}>
              Not sure which plan? Start with Growth—it&apos;s what 78% of our clients choose and delivers the best ROI
              for most local businesses.
            </p>
            <p className="text-body" style={{ marginTop: '0.75rem', color: '#475569', fontWeight: 500 }}>
              One-time $500 setup fee applies to all plans (waived for annual prepay)
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="text-heading">Why Businesses Choose Baam Over DIY Tools or Traditional Agencies</h2>
            <div style={{ marginTop: '2rem', overflowX: 'auto' }}>
              <table className="comparison">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>DIY Tools</th>
                    <th className="highlight">Baam</th>
                    <th>Traditional Agency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Who Does the Work</td>
                    <td>❌ You do</td>
                    <td className="highlight">✅ We do</td>
                    <td>⚠️ They do</td>
                  </tr>
                  <tr>
                    <td>Monthly Cost</td>
                    <td>❌ $50-200</td>
                    <td className="highlight">✅ $299-999</td>
                    <td>❌ $2,000-8,000</td>
                  </tr>
                  <tr>
                    <td>Time Required</td>
                    <td>❌ 10-20 hrs/month</td>
                    <td className="highlight">✅ 0 hours</td>
                    <td>⚠️ Meetings + approvals</td>
                  </tr>
                  <tr>
                    <td>Content Creation</td>
                    <td>You create</td>
                    <td className="highlight">We create</td>
                    <td>You often provide ideas</td>
                  </tr>
                  <tr>
                    <td>Consistency</td>
                    <td>Stops when you&apos;re busy</td>
                    <td className="highlight">Runs continuously</td>
                    <td>Dependent on account manager</td>
                  </tr>
                  <tr>
                    <td>Long-Term Assets</td>
                    <td>✗ No</td>
                    <td className="highlight">✓ Yes (you own it)</td>
                    <td>Sometimes</td>
                  </tr>
                  <tr>
                    <td>Setup Time</td>
                    <td>Immediate</td>
                    <td className="highlight">2 weeks</td>
                    <td>4-8 weeks</td>
                  </tr>
                  <tr>
                    <td>Reporting</td>
                    <td>Manual tracking</td>
                    <td className="highlight">Automated monthly</td>
                    <td>Custom reports (usually)</td>
                  </tr>
                  <tr>
                    <td>Best For</td>
                    <td>Marketers</td>
                    <td className="highlight">Business owners</td>
                    <td>Large budgets</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-body" style={{ marginTop: '2rem', color: 'var(--text-gray)' }}>
              Baam is designed for business owners who want results without becoming marketers—and don&apos;t want to
              pay agency prices for the same outcome.
            </p>
          </div>
        </section>

        <section className="section bg-light faq">
          <div className="container">
            <h2 className="text-heading">Common Questions About Baam</h2>
            <div className="grid" style={{ marginTop: '2rem' }}>
              {faqs.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p className="text-body" style={{ marginTop: '0.75rem', color: 'var(--text-gray)' }}>
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="preview" className="section bg-gradient">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="text-heading">You don't need to do more. You need things to stop breaking.</h2>
            <p className="text-body" style={{ marginTop: '1.5rem', color: 'rgba(255,255,255,0.9)', fontSize: '1.125rem' }}>
              If your business deserves to be chosen more often — BAAM helps make that happen, quietly and consistently.
            </p>
            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a className="btn btn-light btn-lg" href="#preview">
                Talk to Us
              </a>
              <a className="btn btn-outline btn-lg" href="#demo" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}>
                See If BAAM Is a Fit →
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="text-subheading">Baam</div>
            <p className="text-small" style={{ marginTop: '0.75rem', color: '#cbd5f5' }}>
              Market presence that runs for you—continuously.
            </p>
          </div>
          <div>
            <div className="text-small" style={{ fontWeight: 600, color: '#e2e8f0' }}>
              Product
            </div>
            <a href="#how-it-works">How It Works</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#demo">Dashboard Demo</a>
            <a href="#preview">Free Preview</a>
          </div>
          <div>
            <div className="text-small" style={{ fontWeight: 600, color: '#e2e8f0' }}>
              Industries
            </div>
            <a href="#industries">Healthcare</a>
            <a href="#industries">Home Services</a>
            <a href="#industries">Restaurants</a>
            <a href="#industries">Professional Services</a>
            <a href="#industries">Retail</a>
            <a href="#industries">View All</a>
          </div>
          <div>
            <div className="text-small" style={{ fontWeight: 600, color: '#e2e8f0' }}>
              Company
            </div>
            <a href="#demo">About</a>
            <a href="#demo">Blog</a>
            <a href="#demo">Case Studies</a>
            <a href="#preview">Support</a>
            <a href="#preview">Contact</a>
          </div>
          <div>
            <div className="text-small" style={{ fontWeight: 600, color: '#e2e8f0' }}>
              Legal
            </div>
            <a href="#demo">Terms of Service</a>
            <a href="#demo">Privacy Policy</a>
            <a href="#demo">Data Security</a>
            <a href="#demo">Cancellation Policy</a>
          </div>
        </div>
        <div className="container footer-bottom">
          © 2026 Baam Platform. All rights reserved. Powered by market presence, not miracles.
        </div>
      </footer>
    </>
  );
}
