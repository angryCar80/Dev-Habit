export default function Pricing() {
  return (
    <>
      <div className="text-center mb-16 mt-10">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-xl text-secondary max-w-2xl mx-auto">
          Start free, upgrade when you're ready. No hidden fees.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div className="feature-card bg-surface p-6 rounded-xl border border-subtle hover:border-accent transition-all duration-300 group text-left">
          <div className="mb-6 ">
            <h1 className="text-xl text-primary font-semibold ">
              Free Plan
            </h1>
            <p className="text-muted text-sm">
              Good For Getting Started
            </p>
          </div>

          <div className="mb-6">
            <span className="text-4xl font-bold text-primary">
              $0
            </span>
            <span> forever</span>
          </div>

          <p className="text-muted text-sm">
            ✓ Track Your streak
          </p>
          <p className="text-muted text-sm">
            ✓ Add Unlimitied tasks
          </p>
          <p className="text-muted text-sm">
            ✓ AI Help For 5 Days In a Month
          </p>

          <div className="flex justify-center">
            <button
              className={"relative w-40 h-16 transition-colors duration-300  focus:outline-none focus:ring-accent overflow-hidden mt-10 cursor-pointer text-center rounded-xl "}
            >Get Started</button>
          </div>
        </div>

        <div className="feature-card bg-surface p-6 rounded-xl border border-subtle hover:border-accent transition-all duration-300 group cursor-pointer text-left">
          <h1 className="text-2xl text-primary font-semibold mb-6">
            Pro Plan
          </h1>
          <div className="mb-6">
            <span className="text-4xl font-bold text-primary">
              $9
            </span>
            <span>/month</span>
          </div>
          <p className="text-muted text-sm">
            ✓ Everything In Free Plan
          </p>
          <p className="text-muted text-sm">
            ✓ Unlimitied AI Usage
          </p>
          <p className="text-muted text-sm">
            ✓ 2 People Sharing The Account maybe
          </p>

          <div className="flex justify-center">
            <button
              className={"relative w-40 h-16 transition-colors duration-300 focus:outline-none focus:ring-accent overflow-hidden mt-10 cursor-pointer text-center bg-accent text-on-accent font-semibold rounded-xl hover:opacity-90 transition-opacity"}
            >
              Start Free Trial
            </button>
          </div>
        </div>

        <div className="feature-card bg-surface p-6 rounded-xl border border-subtle hover:border-accent transition-all duration-300 group cursor-pointer text-left">
          <h1 className="text-2xl text-primary font-semibold mb-6">
            Team Plan
          </h1>
          <p className="text-muted text-sm">
            ✓ Everything In Free Plan
          </p>
          <p className="text-muted text-sm">
            ✓ Unlimitied AI Usage
          </p>
          <p className="text-muted text-sm">
            ✓ 2 People Sharing The Account maybe
          </p>
        </div>
      </div>
    </>
  );
}
