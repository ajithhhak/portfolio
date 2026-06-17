import Link from 'next/link';

export default function Home() {
  return (
    <section id="hero">
      <div className="hero-badge power-on" style={{ animationDelay: '0s' }}>
        ● SYSTEM ONLINE — v1.7.5
      </div>
      
      <div className="power-on" style={{ animationDelay: '0.2s', marginTop: '1rem', marginBottom: '1rem' }}>
        <img 
          src="/profile.jpeg" 
          alt="Profile Picture" 
          className="profile-hover"
          style={{ 
            width: '150px', 
            height: '150px', 
            borderRadius: '50%', 
            border: '2px solid var(--glow)', 
            boxShadow: '0 0 15px rgba(0,255,136,0.3)',
            objectFit: 'cover'
          }} 
        />
      </div>

      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <h1 className="hero-name power-on" style={{ animationDelay: '0.4s', margin: 0, paddingBottom: '5px' }}>
          Ajith<span className="accent">Kumar</span><span className="cursor"></span>
        </h1>
        <div className="power-on" style={{ 
          animationDelay: '0.5s', 
          display: 'flex', 
          justifyContent: 'space-between', 
          fontSize: '1.6rem', 
          color: '#ffffff', 
          textShadow: '0 0 10px rgba(255,255,255,0.3)',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          padding: '0 2px'
        }}>
          {'Choudoju'.split('').map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </div>
      </div>
      <p className="hero-role power-on" style={{ animationDelay: '0.6s' }}>
        Electronics &amp; Software Engineer
      </p>
      <p className="hero-desc fade-in visible" style={{ transitionDelay: '0.8s' }}>
        Final-year ECE student with hands-on experience in robotics, automation, embedded systems, and intelligent software solutions. Building at the intersection of hardware and software.
      </p>
      <div className="hero-btns fade-in visible" style={{ transitionDelay: '1s' }}>
        <Link href="/projects" className="btn btn-primary">VIEW PROJECTS</Link>
        <Link href="/contact" className="btn btn-outline">GET IN TOUCH</Link>
      </div>
    </section>
  );
}
