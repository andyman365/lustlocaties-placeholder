'use client';

export default function MetricsStrip() {
  const metrics = [
    {
      id: 1,
      icon: '🔐',
      label: 'Privacy Score',
      value: '9.8/10',
      description: 'Industry-leading encryption & discretion protocols',
      color: 'primary',
    },
    {
      id: 2,
      icon: '❤️',
      label: 'Sex-Friendly',
      value: '97%',
      description: 'Verified adult-friendly accommodations',
      color: 'secondary',
    },
  ];

  return (
    <section className="py-section px-container bg-neutral-900 relative">
      <div className="max-w-container-lg mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-50 mb-4">
            Why Choose Lustlocaties?
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            We prioritize your privacy and comfort above all else
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="glass border border-glass backdrop-blur-md bg-neutral-900/40 rounded-xl p-8 md:p-10 transition-all duration-300 hover:bg-neutral-900/60 hover:border-primary-500/30 group"
              style={{
                borderColor: metric.color === 'secondary' ? 'rgba(255, 44, 152, 0.2)' : 'rgba(18, 183, 240, 0.2)',
              }}
            >
              {/* Icon */}
              <div className="text-5xl md:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>

              {/* Metric Value */}
              <div className="mb-4">
                <p
                  className={`text-5xl md:text-6xl font-bold mb-2 ${
                    metric.color === 'secondary'
                      ? 'text-secondary-400 glow-text-secondary'
                      : 'text-primary-400 glow-text-primary'
                  }`}
                >
                  {metric.value}
                </p>
                <h3 className="text-neutral-200 text-xl md:text-2xl font-semibold">
                  {metric.label}
                </h3>
              </div>

              {/* Description */}
              <p className="text-neutral-400 text-base leading-relaxed">
                {metric.description}
              </p>

              {/* Bottom Border Accent */}
              <div
                className={`mt-6 pt-6 border-t ${
                  metric.color === 'secondary'
                    ? 'border-secondary-500/20'
                    : 'border-primary-500/20'
                }`}
              >
                <p className="text-sm text-neutral-500">
                  {metric.color === 'secondary'
                    ? '✓ All accommodations verified'
                    : '✓ Bank-level encryption'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { number: '5K+', label: 'Verified Listings' },
            { number: '50K+', label: 'Trusted Members' },
            { number: '24/7', label: 'Privacy Support' },
            { number: '100%', label: 'Discreet' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4">
              <p className="text-2xl md:text-3xl font-bold text-primary-400 mb-1">
                {stat.number}
              </p>
              <p className="text-neutral-400 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
