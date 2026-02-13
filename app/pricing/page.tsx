export default function Pricing() {
  const features = {
    free: [
      "Track your coding streak",
      "Unlimited tasks",
      "AI Help (5 days/month)",
      "Basic analytics",
      "Community support"
    ],
    pro: [
      "Everything in Free",
      "Unlimited AI usage",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "Export data"
    ],
    team: [
      "Everything in Pro",
      "Up to 10 team members",
      "Team collaboration",
      "Admin dashboard",
      "SSO authentication",
      "Dedicated support"
    ]
  };

  return (
    <div className="min-h-screen px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-xl text-secondary max-w-2xl mx-auto">
          Start free, upgrade when you&apos;re ready. No hidden fees, cancel anytime.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Free Plan */}
        <div className="bg-surface rounded-2xl border border-subtle p-8 hover:border-default transition-all duration-300">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-primary mb-2">Free</h2>
            <p className="text-muted text-sm">Perfect for getting started</p>
          </div>

          <div className="mb-8">
            <span className="text-5xl font-bold text-primary">$0</span>
            <span className="text-muted ml-2">forever</span>
          </div>

          <ul className="space-y-4 mb-8">
            {features.free.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-secondary text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <button className="w-full py-4 px-6 rounded-xl border border-default text-primary font-semibold hover:bg-elevated transition-colors duration-300">
            Get Started
          </button>
        </div>

        {/* Pro Plan - Featured */}
        <div className="bg-surface rounded-2xl border-2 border-accent p-8 relative glow-primary transform md:-translate-y-4">
          {/* Popular Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-accent text-on-accent text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Most Popular
            </span>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-primary mb-2">Pro</h2>
            <p className="text-muted text-sm">For serious developers</p>
          </div>

          <div className="mb-8">
            <span className="text-5xl font-bold text-primary">$9</span>
            <span className="text-muted ml-2">/month</span>
          </div>

          <ul className="space-y-4 mb-8">
            {features.pro.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-secondary text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <button className="w-full py-4 px-6 rounded-xl bg-accent text-on-accent font-semibold hover:opacity-90 transition-opacity duration-300">
            Start Free Trial
          </button>
        </div>

        {/* Team Plan */}
        <div className="bg-surface rounded-2xl border border-subtle p-8 hover:border-default transition-all duration-300">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-primary mb-2">Team</h2>
            <p className="text-muted text-sm">For engineering teams</p>
          </div>

          <div className="mb-8">
            <span className="text-5xl font-bold text-primary">$20</span>
            <span className="text-muted ml-2">/month</span>
          </div>

          <ul className="space-y-4 mb-8">
            {features.team.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-secondary text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <button className="w-full py-4 px-6 rounded-xl border border-default text-primary font-semibold hover:bg-elevated transition-colors duration-300">
            Contact Sales
          </button>
        </div>
      </div>

      {/* Trust Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <p className="text-muted text-sm mb-6">Trusted by developers at</p>
        <div className="flex justify-center items-center gap-8 opacity-50">
          <span className="text-secondary font-semibold">Stripe</span>
          <span className="text-secondary font-semibold">Vercel</span>
          <span className="text-secondary font-semibold">Linear</span>
          <span className="text-secondary font-semibold">Notion</span>
        </div>
      </div>
    </div>
  );
}
