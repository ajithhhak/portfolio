export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">// 02_SKILLS</div>
      <h2 className="section-title">Tech <span>Stack</span></h2>
      <div className="skills-section">
        <div className="fade-in visible">
          <div className="skills-group-label"><span className="led led-hw"></span> CORE &amp; HARDWARE</div>
          <div className="skills-grid">
            <div className="skill-chip"><span className="skill-dot copper"></span>Digital Logic</div>
            <div className="skill-chip"><span className="skill-dot copper"></span>Analog Circuits</div>
            <div className="skill-chip"><span className="skill-dot copper"></span>EDC</div>
            <div className="skill-chip"><span className="skill-dot copper"></span>Network Analysis</div>
            <div className="skill-chip"><span className="skill-dot copper"></span>Comm Systems</div>
            <div className="skill-chip"><span className="skill-dot copper"></span>Digital Comm</div>
            <div className="skill-chip"><span className="skill-dot copper"></span>VLSI Fundamentals</div>
            <div className="skill-chip"><span className="skill-dot copper"></span>Embedded Systems</div>
            <div className="skill-chip"><span className="skill-dot copper"></span>Robotics</div>
            <div className="skill-chip"><span className="skill-dot copper"></span>Arduino / Sensors</div>
            <div className="skill-chip"><span className="skill-dot copper"></span>IoT Systems</div>
          </div>
        </div>
        <div className="fade-in visible" style={{ transitionDelay: '0.2s' }}>
          <div className="skills-group-label"><span className="led led-sw"></span> SOFTWARE &amp; TOOLS</div>
          <div className="skills-grid">
            <div className="skill-chip"><span className="skill-dot blue"></span>Java</div>
            <div className="skill-chip"><span className="skill-dot blue"></span>Python</div>
            <div className="skill-chip"><span className="skill-dot blue"></span>C</div>
            <div className="skill-chip"><span className="skill-dot blue"></span>SQL</div>
            <div className="skill-chip"><span className="skill-dot blue"></span>JavaScript</div>
            <div className="skill-chip"><span className="skill-dot blue"></span>React</div>
            <div className="skill-chip"><span className="skill-dot blue"></span>Node.js</div>
            <div className="skill-chip"><span className="skill-dot blue"></span>APIs (Telegram)</div>
            <div className="skill-chip"><span className="skill-dot blue"></span>Prompt Engineering</div>
          </div>
        </div>
      </div>
    </section>
  );
}
