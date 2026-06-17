export default function Resume() {
  return (
    <section id="resume">
      <div className="section-label">// 03_RESUME</div>
      <h2 className="section-title">Experience &amp; <span>Education</span></h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="fade-in visible">
        <div>
          <div className="skills-group-label" style={{ marginBottom: '1.5rem' }}><span className="led led-green"></span> EXPERIENCE</div>
          <div className="timeline">
            <div className="timeline-item visible">
              <div className="tl-date">NOV 2025 — PRESENT</div>
              <div className="tl-role">General Secretary, Electronics Club</div>
              <div className="tl-company">CHARGE Revamped 2.0 | SNIST</div>
              <div className="tl-desc">Spearheaded the planning and execution of a national-level technical symposium. Coordinated student committees, faculty, and participants to manage event logistics and technical operations. Led end-to-end execution of multiple technical events.</div>
            </div>
            <div className="timeline-item visible" style={{ transitionDelay: '0.1s' }}>
              <div className="tl-date">2025</div>
              <div className="tl-role">Cisco Networking Academy Intern</div>
              <div className="tl-company">SNIST</div>
              <div className="tl-desc">Completed practical networking assignments covering IP addressing, subnetting, routing, and switching. Configured and analysed network topologies with TCP/IP protocols and VLANs. Applied cybersecurity concepts through laboratory exercises and simulations.</div>
            </div>
            <div className="timeline-item visible" style={{ transitionDelay: '0.2s' }}>
              <div className="tl-date">JUL 2025</div>
              <div className="tl-role">Deloitte Cyber Job Simulation</div>
              <div className="tl-company">Forage</div>
              <div className="tl-desc">Completed a job simulation focusing on cyber risk, security policies, and incident response, gaining practical insights into enterprise cybersecurity practices.</div>
            </div>
          </div>
        </div>
        <div>
          <div className="skills-group-label" style={{ marginBottom: '1.5rem' }}><span className="led led-green"></span> EDUCATION</div>
          <div className="timeline">
            <div className="timeline-item visible" style={{ transitionDelay: '0.3s' }}>
              <div className="tl-date">SEP 2023 — JUN 2027 (EXPECTED)</div>
              <div className="tl-role">B.Tech — Electronics &amp; Communication</div>
              <div className="tl-company">Sreenidhi Institute of Science and Technology</div>
              <div className="tl-desc">GPA: 7.3 / 10.</div>
            </div>
            <div className="timeline-item visible" style={{ transitionDelay: '0.4s' }}>
              <div className="tl-date">JUN 2021 — APR 2023</div>
              <div className="tl-role">Intermediate (Class XII)</div>
              <div className="tl-company">Narayana Junior College, Hyderabad</div>
              <div className="tl-desc">Achieved 94.2%.</div>
            </div>
            <div className="timeline-item visible" style={{ transitionDelay: '0.5s' }}>
              <div className="tl-date">COMPLETED 2021</div>
              <div className="tl-role">Class X</div>
              <div className="tl-company">Vignan Model High School, Hyderabad</div>
              <div className="tl-desc">CGPA: 10 / 10.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
