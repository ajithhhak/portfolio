export default function About() {
  return (
    <section id="about" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh' }}>
      <div className="about-grid fade-in visible">
        <div className="about-bio">
          <div className="section-label">// 01_ABOUT</div>
          <h2 className="section-title">Who I <span>Am</span></h2>
          <p>I'm a final-year Electronics and Communication Engineering student with hands-on experience in robotics, automation, embedded systems, and intelligent software solutions.</p>
          <p>Proficient in Java, Python, IoT systems, and hardware-software integration, with experience developing multi-robot warehouse navigation systems and serverless workflow automation platforms.</p>
          <p>Adept at designing practical engineering solutions, optimizing system workflows, and translating real-world requirements into scalable and functional products.</p>
        </div>
        <div className="about-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          <img 
            src="/profile.jpeg" 
            alt="Ajith Kumar Avatar" 
            className="profile-hover"
            style={{ 
              width: '100%', 
              maxWidth: '350px', 
              borderRadius: '12px', 
              border: '1px solid var(--chip-border)', 
              boxShadow: '0 0 30px rgba(0, 255, 136, 0.1)',
              objectFit: 'cover'
            }} 
          />
        </div>
      </div>
    </section>
  );
}
