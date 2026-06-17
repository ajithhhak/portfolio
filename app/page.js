import Link from 'next/link';

export default function LandingPage() {
  return (
    <section id="hero" style={{ padding: 0, justifyContent: 'center' }}>
      <div className="hero-badge power-on" style={{ animationDelay: '0s' }}>
        SYSTEM INITIALIZATION
      </div>
      <h1 className="hero-name power-on" style={{ marginTop: '2rem', animationDelay: '0.2s' }}>
        Ready to <span className="accent">Boot</span><span className="cursor"></span>
      </h1>
      <p className="hero-desc fade-in visible" style={{ marginTop: '1rem', transitionDelay: '0.4s' }}>
        Welcome to the terminal. Press run to continue.
      </p>
      <div className="hero-btns fade-in visible" style={{ marginTop: '2.5rem', transitionDelay: '0.6s' }}>
        <Link href="/home" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1rem' }}>
          RUN SYSTEM
        </Link>
      </div>
    </section>
  );
}
