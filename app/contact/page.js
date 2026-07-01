export default function Contact() {
  return (
    <section id="contact">
      <div className="section-label">// 05_CONTACT</div>
      <h2 className="section-title">Get In <span>Touch</span></h2>
      <p className="fade-in visible" style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '0.95rem', maxWidth: '500px' }}>
        Open to new opportunities, collaborations, and interesting problems. Ping me through any channel below.
      </p>
      <div className="contact-grid fade-in visible">
        <a href="mailto:choudojuajith17@gmail.com" className="contact-card">
          <div className="contact-icon" style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </div>
          <div>
            <div className="contact-label">EMAIL</div>
            <div className="contact-value">choudojuajith17@gmail.com</div>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/ajith-kumar-choudoju-37181a2b7" target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="contact-icon" style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </div>
          <div>
            <div className="contact-label">LINKEDIN</div>
            <div className="contact-value">Ajith Kumar Choudoju</div>
          </div>
        </a>
        <a href="https://github.com/ajithhhak" target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="contact-icon" style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </div>
          <div>
            <div className="contact-label">GITHUB</div>
            <div className="contact-value">github.com/ajithhhak</div>
          </div>
        </a>
        <a href="#" className="contact-card">
          <div className="contact-icon" style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          <div>
            <div className="contact-label">LOCATION</div>
            <div className="contact-value">Hyderabad, India</div>
          </div>
        </a>
      </div>
      
      <footer style={{ marginTop: '80px', paddingBottom: '20px' }}>
        BUILT WITH PASSION &amp; ELECTRONS &nbsp; | &nbsp; &copy; 2026 Ajith Kumar
      </footer>
    </section>
  );
}
