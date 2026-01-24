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
    name: 'Sarah M.',
    role: 'Family Medicine Clinic',
    location: 'Middletown, NY',
    avatar: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=200&q=80',
  },
  {
    quote:
      'I tried doing social media myself for 6 months and gave up. Baam handles everything—posts, videos, Google—and I actually see results. Worth every dollar.',
    name: 'Mike R.',
    role: 'HVAC Company',
    location: 'Orange County, NY',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  },
  {
    quote:
      'We were spending $1,200/month on ads with no long-term value. Baam costs half that, builds assets that last, and brings more qualified leads.',
    name: 'Jennifer K.',
    role: 'Law Firm',
    location: 'Hudson Valley, NY',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&q=80',
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
          <div className="text-subheading" style={{ fontWeight: 700 }}>
            Baam
          </div>
          <nav className="nav-links">
            <a href="#how-it-works">How It Works</a>
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#pricing">Pricing</a>
            <a href="#demo">Dashboard Demo</a>
          </nav>
          <a className="btn btn-primary" href="#preview">
            Get Free Market Presence Preview
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
              <span className="badge">Always-On Market Presence System</span>
              <h1 className="text-display" style={{ marginTop: '1.2rem' }}>
                Your Business Should Be Growing Every Week. Let Baam Handle It.
              </h1>
              <p className="text-body" style={{ marginTop: '1.2rem', color: 'var(--text-gray)' }}>
                We run your market presence across Google, social, video, and your website—continuously—so
                customers can find you, trust you, and choose you. No tools to learn. No campaigns to
                manage. Just consistent work that compounds over time.
              </p>

              <div className="grid grid-3" style={{ marginTop: '2rem' }}>
                <div className="card">
                  <div className="text-subheading">
                    <span className="icon-badge"><Target size={18} /></span>
                    You Don&apos;t Do This — We Do
                  </div>
                  <p className="text-body" style={{ color: 'var(--text-gray)', marginTop: '0.5rem' }}>
                    No dashboards to operate. No content to create. We handle the weekly work.
                  </p>
                </div>
                <div className="card">
                  <div className="text-subheading">
                    <span className="icon-badge"><TrendingUp size={18} /></span>
                    Results Compound Monthly
                  </div>
                  <p className="text-body" style={{ color: 'var(--text-gray)', marginTop: '0.5rem' }}>
                    Every week of presence builds on the last: more visibility, more trust, more calls.
                  </p>
                </div>
                <div className="card">
                  <div className="text-subheading">
                    <span className="icon-badge"><CheckCircle2 size={18} /></span>
                    Real Outcomes Tracked
                  </div>
                  <p className="text-body" style={{ color: 'var(--text-gray)', marginTop: '0.5rem' }}>
                    Calls, map clicks, website visits, bookings—not vanity metrics.
                  </p>
                </div>
              </div>

              <div className="grid grid-2" style={{ marginTop: '2rem' }}>
                <a className="btn btn-primary btn-lg" href="#preview">
                  Get Free Market Presence Preview
                </a>
                <a className="btn btn-outline" href="#demo">
                  Explore Live Demo Dashboard
                </a>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <a className="text-small" href="#pricing" style={{ color: 'var(--primary)' }}>
                  View Pricing
                </a>
              </div>
              <div className="stats-row text-small">
                <span>Trusted by 2,400+ local businesses</span>
                <span>•</span>
                <span>124,000+ calls tracked</span>
                <span>•</span>
                <span>4.9/5 client satisfaction</span>
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
            <div className="logo-row" style={{ marginTop: '1.5rem' }}>
              <span>Google</span>
              <span>Meta</span>
              <span>TikTok</span>
              <span>YouTube</span>
              <span>Instagram</span>
            </div>
          </div>
        </section>

        <section className="section bg-light">
          <div className="container">
            <p className="text-subheading" style={{ color: 'var(--text-gray)' }}>
              Maeket Reality & Business Owners' Pain Points
            </p>
            <h2 className="text-heading">Most Local Businesses Stay Invisible—Not Because They&apos;re Bad, But Because They&apos;re Inconsistent</h2>
            <p className="text-body" style={{ color: 'var(--text-gray)', marginTop: '1rem', maxWidth: '820px' }}>
              Your potential customers are searching right now. If your business isn&apos;t showing up with fresh
              content, trust signals, and consistent activity, they&apos;re choosing someone else.
            </p>
            <div className="grid grid-3" style={{ marginTop: '2.5rem' }}>
              <div className="card">
                <div className="text-subheading">
                  <span className="icon-badge"><Search size={18} /></span>
                  Market Reality
                </div>
                <p className="text-small" style={{ color: 'var(--text-gray)', marginTop: '0.5rem' }}>
                  Based on 2024–2025 local search studies (BrightLocal, Google, Moz).
                </p>
                <ul style={{ marginTop: '0.9rem', paddingLeft: '1rem', color: 'var(--text-gray)' }}>
                  <li className="text-small">70–80% of local searches happen on Google Search + Google Maps</li>
                  <li className="text-small">20–30% discover businesses via Facebook, Instagram, YouTube, TikTok</li>
                </ul>
                <p className="text-body" style={{ color: 'var(--text-gray)', marginTop: '0.9rem' }}>
                  If you’re inactive on Google and social, customers don’t see you—and don’t choose you.
                </p>
              </div>
              <div className="card">
                <div className="text-subheading">
                  <span className="icon-badge"><Clock size={18} /></span>
                  No Time & No Knowledge
                </div>
                <p className="text-small" style={{ color: 'var(--text-gray)', marginTop: '0.5rem' }}>
                  Most owners already know they need consistency—the problem is execution.
                </p>
                <ul style={{ marginTop: '0.9rem', paddingLeft: '1rem', color: 'var(--text-gray)' }}>
                  <li className="text-small">No time to manage GBP or create content</li>
                  <li className="text-small">Unclear what content actually works</li>
                  <li className="text-small">Websites rarely updated, rankings slip</li>
                  <li className="text-small">Inactive social + GBP → no exposure, no trust</li>
                </ul>
                <p className="text-body" style={{ color: 'var(--text-gray)', marginTop: '0.9rem' }}>
                  This is why good businesses still lose customers online.
                </p>
              </div>
              <div className="card">
                <div className="text-subheading">
                  <span className="icon-badge"><BarChart3 size={18} /></span>
                  Agency Costs Add Up
                </div>
                <p className="text-small" style={{ color: 'var(--text-gray)', marginTop: '0.5rem' }}>
                  Typical market pricing across multiple vendors:
                </p>
                <ul style={{ marginTop: '0.9rem', paddingLeft: '1rem', color: 'var(--text-gray)' }}>
                  <li className="text-small">Website + SEO setup: $1,500–$4,000</li>
                  <li className="text-small">Monthly website & SEO: $800–$2,500/mo</li>
                  <li className="text-small">Content + social: $1,000–$3,000/mo</li>
                  <li className="text-small">GBP management: $300–$800/mo</li>
                </ul>
                <p className="text-body" style={{ color: 'var(--text-gray)', marginTop: '0.9rem' }}>
                  That’s $2,000–$8,000 per month spread across multiple vendors.
                </p>
              </div>
            </div>
            <div className="card" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <p className="text-subheading">
                The businesses that win locally aren&apos;t necessarily the best—they&apos;re the most consistently visible
                and trusted.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section">
          <div className="container">
            <span className="badge">How Baam Works</span>
            <h2 className="text-heading" style={{ marginTop: '1rem' }}>
              Market Presence = Growth Engine
            </h2>
            <p className="text-body" style={{ color: 'var(--text-gray)', marginTop: '1rem', maxWidth: '850px' }}>
              Baam isn&apos;t a campaign or a tool. It&apos;s a complete system with three connected parts that run
              continuously—weekly work that drives monthly results.
            </p>

            <div className="system-diagram">
              <div className="diagram-block">
                <div className="text-small" style={{ color: 'var(--text-gray)', fontWeight: 600 }}>
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
                <div className="text-small" style={{ color: 'var(--text-gray)', fontWeight: 600 }}>
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
                <div className="text-small" style={{ color: 'var(--text-gray)', fontWeight: 600 }}>
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
                  <div key={card.title} className="card">
                    <div className="text-subheading">
                      <span className="icon-badge"><Icon size={18} /></span>
                      {card.title}
                    </div>
                  <p className="text-body" style={{ marginTop: '0.5rem', color: 'var(--text-gray)' }}>
                    {card.subtitle}
                  </p>
                  <ul style={{ marginTop: '1rem', paddingLeft: '1rem', color: 'var(--text-gray)' }}>
                    {card.items.map((item) => (
                      <li key={item} className="text-small" style={{ marginBottom: '0.5rem' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-body" style={{ color: 'var(--text-gray)', marginTop: '1rem' }}>
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
              What Runs for You Every Month
            </h2>
            <p className="text-body" style={{ color: 'rgba(255,255,255,0.9)', marginTop: '1rem', maxWidth: '820px' }}>
              Clear, predictable work. No surprises. This is what $599/month delivers—continuously.
            </p>
            <div className="grid grid-4" style={{ marginTop: '2.5rem' }}>
              {deliverables.map((item) => (
                <div key={item.title} className="card" style={{ color: 'var(--text-dark)' }}>
                  <div className="deliverable-preview">
                    <img className="deliverable-thumb" src={item.image} alt={item.title} />
                    <div className="text-small" style={{ color: 'var(--text-gray)' }}>
                      {item.preview}
                    </div>
                    <div className="preview-bars">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="text-subheading">{item.title}</div>
                  <ul style={{ marginTop: '1rem', paddingLeft: '1rem', color: 'var(--text-gray)' }}>
                    {item.items.map((detail) => (
                      <li key={detail} className="text-small" style={{ marginBottom: '0.5rem' }}>
                        ✓ {detail}
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
            <h2 className="text-heading">Real Market Presence Compounds—Here&apos;s What to Expect</h2>
            <p className="text-body" style={{ marginTop: '1rem', color: 'var(--text-gray)', maxWidth: '820px' }}>
              Baam doesn&apos;t promise instant rankings. We build sustainable visibility and trust that grows stronger
              every month.
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
                      <div className="text-small" style={{ color: 'var(--text-gray)', fontWeight: 600 }}>
                        What happens:
                      </div>
                      <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem', color: 'var(--text-gray)' }}>
                        {stage.work.map((item) => (
                          <li key={item} className="text-small" style={{ marginBottom: '0.4rem' }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-small" style={{ color: 'var(--text-gray)', fontWeight: 600 }}>
                        Results:
                      </div>
                      <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem', color: 'var(--text-gray)' }}>
                        {stage.results.map((item) => (
                          <li key={item} className="text-small" style={{ marginBottom: '0.4rem' }}>
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
            <div className="grid grid-4" style={{ marginTop: '2.5rem' }}>
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <div key={industry.title} className="card">
                    <div className="text-subheading">
                      <span className="icon-badge"><Icon size={18} /></span>
                      {industry.title}
                    </div>
                  <p className="text-body" style={{ color: 'var(--text-gray)', marginTop: '0.75rem' }}>
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
            <div className="grid grid-3" style={{ marginTop: '2rem' }}>
              <div className="card" style={{ textAlign: 'center' }}>
                <div className="text-display">2,400+</div>
                <p className="text-small" style={{ color: 'var(--text-gray)' }}>
                  Active businesses using Baam
                </p>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <div className="text-display">87%</div>
                <p className="text-small" style={{ color: 'var(--text-gray)' }}>
                  Average visibility increase in 6 months
                </p>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <div className="text-display">4.9/5</div>
                <p className="text-small" style={{ color: 'var(--text-gray)' }}>
                  Client satisfaction rating
                </p>
              </div>
            </div>
            <div className="grid grid-3" style={{ marginTop: '2.5rem' }}>
              {testimonials.map((item) => (
                <div key={item.name} className="card">
                  <p className="text-body" style={{ color: 'var(--text-gray)' }}>
                    “{item.quote}”
                  </p>
                  <div className="testimonial-meta">
                    <img className="testimonial-avatar" src={item.avatar} alt={item.name} />
                    <div>
                      <div className="text-subheading">{item.name}</div>
                      <div className="text-small" style={{ color: 'var(--text-gray)' }}>
                        {item.role} • {item.location}
                      </div>
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
                <div key={plan.title} className={`card ${plan.highlight ? 'pricing-highlight' : ''}`}>
                  {plan.highlight && <div className="badge-popular">Most Popular</div>}
                  <div className="text-subheading">{plan.title}</div>
                  <div className="text-heading" style={{ marginTop: '0.75rem' }}>
                    {plan.price}
                  </div>
                  <p className="text-body" style={{ color: 'var(--text-gray)' }}>
                    Best for: {plan.bestFor}
                  </p>
                  <ul style={{ marginTop: '1rem', paddingLeft: '1rem', color: 'var(--text-gray)' }}>
                    {plan.included.map((item) => (
                      <li key={item} className="text-small" style={{ marginBottom: '0.4rem' }}>
                        ✓ {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-body" style={{ color: 'var(--text-gray)', marginTop: '1rem' }}>
                    Who it&apos;s for: {plan.who}
                  </p>
                  <button className={`btn ${plan.highlight ? 'btn-primary' : 'btn-outline'}`} style={{ marginTop: '1.5rem' }}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
            <p className="text-body" style={{ marginTop: '2rem', color: 'var(--text-gray)' }}>
              Not sure which plan? Start with Growth—it&apos;s what 78% of our clients choose and delivers the best ROI
              for most local businesses.
            </p>
            <p className="text-small" style={{ marginTop: '0.75rem', color: 'var(--text-gray)' }}>
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
            <h2 className="text-heading">Your Market Presence Should Be Working for You Right Now</h2>
            <p className="text-body" style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.9)' }}>
              Stop waiting for customers to find you by accident. Baam runs your visibility system—Google, content,
              social, video—every single week. You focus on your business. We handle the rest.
            </p>
            <div className="grid grid-2" style={{ marginTop: '2rem' }}>
              <a className="btn btn-light" href="#demo">
                Explore Live Demo Dashboard
              </a>
              <a className="btn btn-outline" href="#preview" style={{ borderColor: 'rgba(255,255,255,0.6)', color: '#fff' }}>
                Get Free Market Presence Preview
              </a>
            </div>
            <p className="text-small" style={{ marginTop: '1.5rem', color: 'rgba(255,255,255,0.8)' }}>
              No sales calls required. See how it works, then decide.
            </p>
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
