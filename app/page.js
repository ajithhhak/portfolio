"use client";
import { useState, useEffect } from 'react';
import ImageCarousel from '@/components/ImageCarousel';

const allProjects = [
  {
    id: 'hw4',
    num: '01',
    category: 'Hardware & IoT',
    title: 'Retrofit Smart Home Automation',
    meta: 'Custom ESP32 / Retrofit Switchboard / WebSerial / RTDB / Next.js',
    postUrl: 'https://www.linkedin.com/posts/ajith-kumar-choudoju-37181a2b7_iot-esp32-embeddedsystems-activity-7490087173564772353-Hupu',
    thumbnail: '/auto/1.jpg',
    images: ['/auto/1.jpg', '/auto/2.jpg', '/auto/3.jpg', '/auto/4.jpg'],
    stack: ['ESP32', 'C++', 'Firebase RTDB', 'React Native', 'Next.js', 'PIR Sensor', 'Physical Switches & Buttons', 'Relay Module', 'WebSerial', 'SSD1306 OLED'],
    modalBody: `<p>Most commercial smart-home products work well—until you need something they weren't designed to do. <strong>Smart Home Ecosystem v2.0</strong> is a custom, full-stack home automation platform engineered to provide total control over the <strong>hardware, firmware, local tactile inputs, automation logic, and cloud integration</strong>.</p>
      <p>Built around <strong>ESP32 microcontrollers</strong> and 4-channel active-LOW optocoupled relay modules, the system controls real household loads such as lights, fans, and sockets (up to 230V AC). It prioritizes <strong>local hardware resilience</strong>: appliances remain fully operable via <strong>physical wall switches and tactile push buttons</strong> with zero latency even during network outages, while seamlessly synchronizing state with the cloud, web dashboard, and mobile app when connected.</p>
      
      <br><p><strong style="color:#ff2442">LOCAL HARDWARE CONTROL: PHYSICAL SWITCHES &amp; BUTTONS:</strong></p>
      <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:1.9">
        <li><strong>Physical Wall Switches (Toggle/Rocker)</strong> — Traditional wall switches integrated directly into the ESP32 GPIO circuitry via <code>SwitchManager</code>. State-change edge detection ensures flipping a switch toggles the appliance instantly.</li>
        <li><strong>Physical Push Buttons (Tactile Momentary)</strong> — Quick push-to-toggle buttons positioned on device enclosures with internal pull-ups and debouncing.</li>
        <li><strong>Two-Way State Synchronization</strong> — When a physical switch triggers a relay locally, the ESP32 immediately updates Firebase RTDB so the web and mobile app reflect changes instantly.</li>
        <li><strong>Fail-Safe Offline Mode</strong> — All local tactile inputs operate 100% autonomously without requiring Wi-Fi.</li>
      </ul>

      <br><p><strong style="color:#ff2442">PIR MOTION AUTOMATION &amp; LIVE SENSOR STREAMING:</strong></p>
      <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:1.9">
        <li><strong>Motion-Triggered Lighting</strong> — High-sensitivity PIR sensor detects motion on dedicated GPIO pins, instantly triggering the assigned relay.</li>
        <li><strong>Configurable Auto-Off Inactivity Timer</strong> — Countdown begins when motion ceases; automatically powers down appliances to maximize energy efficiency.</li>
        <li><strong>Live Telemetry Streaming</strong> — Real-time PIR sensor state is streamed continuously to Firebase and visualized dynamically on the web dashboard.</li>
      </ul>

      <br><p><strong style="color:#ff2442">ESP32 FIRMWARE &amp; WEBSERIAL REAL-TIME ORIGIN LOGGING:</strong></p>
      <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:1.9">
        <li><strong>RelayManager</strong> — Active-LOW relay outputs with safe boot defaults (all relays initialize OFF).</li>
        <li><strong>SwitchManager</strong> — Real-time debounced polling and edge detection for physical switches.</li>
        <li><strong>PIRManager</strong> — Autonomous motion-event handling, retrigger logic, and auto-off timers.</li>
        <li><strong>OLEDManager</strong> — Local I²C SSD1306 display rendering device IP, Wi-Fi status, Firebase connectivity, and relay states.</li>
        <li><strong>WebSerialManager</strong> — Embedded lightweight web server hosting a live diagnostic console over local Wi-Fi with exact origin audit logging.</li>
      </ul>`
  },
  {
    id: 'hw1',
    num: '02',
    category: 'Robotics & Automation',
    title: 'Multi-Robot Warehouse Navigation',
    meta: 'Autonomous Navigation / RFID Grid / BFS Pathfinding / IMU',
    thumbnail: '/hw1_1.png',
    images: ['/hw1_1.png', '/hw1_2.png', '/hw1_3.png'],
    stack: ['RFID', 'IMU', 'Ultrasonic Sensors', 'Wheel Encoders', 'BFS Algorithm', 'Embedded Systems'],
    modalBody: `<p>A comprehensive warehouse automation system currently in active development, aimed at streamlining logistics and reducing manual labor. The system features custom-built robots capable of autonomous navigation across a shared warehouse environment, avoiding dynamic obstacles and finding the most efficient routes.</p>
      <p>The architecture involves a central server running a custom BFS-based pathfinding algorithm that coordinates multiple robots in real-time, preventing deadlocks and collisions.</p>
      
      <br><p><strong style="color:#ff2442">KEY FEATURES &amp; ARCHITECTURE:</strong></p>
      <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:1.9">
        <li><strong>RFID Localization Grid</strong> — Precision indoor positioning without GPS using embedded floor tags.</li>
        <li><strong>IMU-Assisted Heading Tracking</strong> — Directional stability to maintain accurate heading over long distances.</li>
        <li><strong>Dynamic Obstacle Detection</strong> — Array of ultrasonic sensors for real-time collision avoidance.</li>
        <li><strong>Wheel-Encoder Precision Movement</strong> — Closed-loop odometry feedback for precise millimeter-level movements.</li>
        <li><strong>Centralized BFS Route Optimization</strong> — Central server for multi-agent coordination and collision-free routing.</li>
      </ul>`
  },
  {
    id: 'hw2',
    num: '03',
    category: 'Robotics & Security',
    title: 'Autonomous Secure Delivery Bot',
    meta: 'Biometric Access / Obstacle Avoidance / MPU6050 IMU',
    postUrl: 'https://www.linkedin.com/posts/ajith-kumar-choudoju-37181a2b7_hackathon-rampagev26-robotics-activity-7438813219198103554-OhpW',
    thumbnail: '/1_autobot.jpeg',
    images: ['/1_autobot.jpeg', '/2_autobot.jpeg', '/3_autobot.jpeg'],
    stack: ['Arduino', 'Fingerprint Sensor', 'Bluetooth Module', 'Robotics', 'C++', 'L298N'],
    modalBody: `<p>A secure autonomous delivery robot developed to automate package transportation in warehouses, campuses, and controlled-access environments. Designed to reduce manual intervention while ensuring that delivered packages remain strictly accessible only to authenticated recipients.</p>
      <p>Security is guaranteed through an integrated <strong>fingerprint authentication module</strong> that electronically locks the storage compartment until a registered user is verified, preventing unauthorized tampering during transit.</p>
      
      <br><p><strong style="color:#ff2442">KEY FEATURES &amp; ARCHITECTURE:</strong></p>
      <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:1.9">
        <li><strong>Autonomous Indoor Navigation</strong> — Ultrasonic sensor array detecting and navigating around obstacles.</li>
        <li><strong>MPU6050 IMU Orientation</strong> — Continuous gyro and accelerometer feedback for directional stability.</li>
        <li><strong>Fingerprint Security Lock</strong> — Electronic lock mechanism released exclusively upon authorized biometric scan.</li>
        <li><strong>Bluetooth Manual Override</strong> — Remote wireless control for maintenance, testing, and emergency handling.</li>
        <li><strong>Differential Drive Chassis</strong> — Powered by dual high-torque DC geared motors and an L298N dual H-bridge motor driver.</li>
      </ul>`
  },
  {
    id: 'sw1',
    num: '04',
    category: 'Full-Stack Software',
    title: 'HabitSync',
    meta: 'Next.js / Tailwind CSS / MongoDB / Framer Motion',
    thumbnail: '/1_habitsync.png',
    images: ['/1_habitsync.png', '/2_habitsync.jpeg', '/3_habitsync.jpeg', '/4_habitsync.png', '/5_habitsync.png'],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'MongoDB', 'Framer Motion', 'Node.js'],
    modalBody: `<p>A modern, highly interactive Habit Tracker built from the ground up focusing on performance, fluid UI/UX, and daily habit consistency.</p>
      <p>Features optimistic UI updates, dynamic GitHub-style contribution heatmaps, smooth micro-interactions, and a custom OTP passwordless authentication flow.</p>
      
      <br><p><strong style="color:#ff2442">TECHNICAL HIGHLIGHTS:</strong></p>
      <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:1.9">
        <li><strong>Interactive Heatmap Grid</strong> — Zero-latency updates calculated immediately on the client before syncing with MongoDB.</li>
        <li><strong>Streak Calculations</strong> — Real-time tracking of current and longest streaks with completion metrics.</li>
        <li><strong>Micro-Animations</strong> — Smooth state transitions, SVG progress indicators, and celebratory completion cues.</li>
        <li><strong>Secure Passwordless Auth</strong> — Email OTP verification handled by serverless Next.js API routes.</li>
      </ul>`
  },
  {
    id: 'sw2',
    num: '05',
    category: 'Serverless Automation',
    title: 'Visitor Management System',
    meta: 'Telegram Bot API / Upstash Redis / Next.js / PWA',
    thumbnail: '/1_tele.png',
    images: ['/1_tele.png', '/2_tele.png', '/3_tele.png', '/4_tele.png', '/5_tele.png', '/6_tele.png'],
    stack: ['Telegram Bot API', 'Vercel', 'Upstash Redis', 'Next.js', 'PWA', 'JsBarcode', 'ZXing'],
    modalBody: `<p>An innovative serverless visitor management platform enabling friction-free visitor check-in, multi-tier approval workflows, dynamic barcode identification, and automated access control—operated entirely through a Telegram bot interface.</p>
      
      <br><p><strong style="color:#ff2442">KEY INNOVATIONS:</strong></p>
      <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:1.9">
        <li><strong>Dynamic Barcode Verification</strong> — Generates Code128 barcodes scanned directly via camera with ZXing.</li>
        <li><strong>Telegram Bot Interface</strong> — Host approval / rejection buttons integrated into Telegram with instantaneous webhook response.</li>
        <li><strong>TTL-Based Security Tokens</strong> — Temporary visitor access passes auto-expire using Upstash Redis key expiration.</li>
        <li><strong>PWA Scanner</strong> — Lightweight progressive web application interface for gate security officers.</li>
      </ul>`
  },
  {
    id: 'hw5',
    num: '06',
    category: 'PCB Design & Hardware',
    title: 'Smart Home — 4-Channel Relay PCB',
    meta: 'Altium Designer / 4-Layer PCB / ESP32 / mmWave Radar / Isolated AC-DC',
    gitUrl: 'https://github.com/ajithhhak/HOME-AUTOMATION-4-CHANNEL-RELAY',
    thumbnail: '/pcb/pcb_1.jpg',
    images: ['/pcb/pcb_1.jpg', '/pcb/pcb_2.jpg', '/pcb/pcb_3.jpg', '/pcb/pcb_4.jpg', '/pcb/pcb_5.jpg', '/pcb/pcb_6.jpg', '/pcb/pcb_7.jpg'],
    stack: ['Altium Designer', 'ESP32-WROOM-32D', 'ULN2803A', 'MCP23017', 'HLK-LD2410C', 'SHT31', 'HLK-10M05', 'PIR Sensor', 'OLED Display', '4-Layer PCB'],
    modalBody: `<p style="font-style:italic;color:#a1a1aa;font-size:0.92rem;border-left:3px solid #ff2442;padding-left:0.85rem;margin-bottom:1.25rem;line-height:1.7">Custom 4-layer PCB controller for retrofit smart home automation — ESP32, relays, mmWave presence detection &amp; environmental sensing, designed in Altium Designer.</p>
      <p>A fully custom-designed <strong>4-layer PCB</strong> for a retrofit smart home automation controller — engineered from first principles in <strong>Altium Designer</strong>, taking the project from a breadboard prototype all the way to production-ready Gerber files.</p>
      <p>The board is designed to fit into existing electrical installations without requiring rewiring, while adding smart control, presence detection, and environmental sensing capabilities on top of traditional wall switches.</p>

      <br><p><strong style="color:#ff2442">PCB ARCHITECTURE & STACKUP:</strong></p>
      <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:1.9">
        <li><strong>4-Layer Stack</strong> — L1: components &amp; signal routing / L2: solid GND pour / L3: power distribution / L4: low-voltage signals.</li>
        <li><strong>Isolated AC/DC Supply</strong> — HLK-10M05 provides galvanic isolation between 230V mains and SELV control circuitry.</li>
        <li><strong>Mains / SELV Separation</strong> — Physical isolation boundary enforced in layout with creepage and clearance rules set before routing began.</li>
        <li><strong>Design Rules First</strong> — Clearance, track widths, and isolation constraints established upfront; DRC passed with minimal cleanup.</li>
      </ul>

      <br><p><strong style="color:#ff2442">KEY HARDWARE:</strong></p>
      <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:1.9">
        <li><strong>ESP32-WROOM-32D</strong> — Main controller for Wi-Fi, relay switching, I²C / UART peripherals, and local automation logic.</li>
        <li><strong>ULN2803A Relay Driver</strong> — Darlington array drives 4 relay coils with integrated flyback suppression, keeping coil current off ESP32 GPIOs.</li>
        <li><strong>MCP23017 GPIO Expander</strong> — I²C expander for up to 6 physical wall-switch inputs; fully interrupt-driven, no polling.</li>
        <li><strong>HLK-LD2410C mmWave Radar</strong> — UART-connected presence sensor with stationary target detection beyond simple binary output.</li>
        <li><strong>SHT31</strong> — High-accuracy I²C temperature and relative humidity sensor.</li>
        <li><strong>PIR Sensor</strong> — Secondary motion detection channel for supplementary automation triggers.</li>
      </ul>

      <br><p><strong style="color:#ff2442">DESIGN WORKFLOW:</strong></p>
      <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:1.9">
        <li><strong>Component Selection</strong> — Each component validated against datasheets for electrical ratings, pin spacing, footprint dimensions, and availability.</li>
        <li><strong>Custom Footprints</strong> — Several footprints created or verified manually against manufacturer mechanical drawings.</li>
        <li><strong>Routing &amp; Copper Pour</strong> — Signal routing completed with solid ground planes and power distribution on inner layers.</li>
        <li><strong>DRC &amp; Gerber Output</strong> — Full design rule check passed; production Gerber files generated and verified.</li>
      </ul>`
  }
];

const educationData = [
  {
    degree: 'B.Tech — Electronics & Communication',
    college: 'Sreenidhi Institute of Science and Technology',
    grade: 'GPA: 7.3 / 10',
    date: '2023 — 2027'
  },
  {
    degree: 'Intermediate (Class XII)',
    college: 'Narayana Junior College, Hyderabad',
    grade: 'Score: 94.2%',
    date: '2021 — 2023'
  },
  {
    degree: 'Secondary School (Class X)',
    college: 'Vignan Model High School, Hyderabad',
    grade: 'CGPA: 10.0 / 10.0',
    date: 'Completed 2021'
  }
];

const hardwareSkills = [
  'Embedded Systems', 'ESP32 / Arduino', 'Robotics & Automation',
  'IoT Architecture', 'Sensors & Actuators', 'Digital Logic',
  'PCB Design', 'Altium Designer', 'VLSI Fundamentals', 'Analog Circuits', 'Network Analysis',
  'Comm Systems', 'Hardware Debugging'
];

const softwareSkills = [
  'C / C++', 'Python', 'Java', 'SQL',
  'JavaScript', 'Next.js', 'React', 'Node.js',
  'Firebase RTDB', 'Telegram Bot API', 'Git & GitHub',
  'Prompt Engineering'
];

const workProcessSteps = [
  {
    title: '01. Discover & Specify',
    desc: 'Research sensor feasibility, hardware requirements, power budgets, and mechanical constraints.'
  },
  {
    title: '02. System Architecture',
    desc: 'Design circuit schematics, pinout allocation, communication buses (I²C, SPI, UART), and state machine flows.'
  },
  {
    title: '03. Prototype & Firmware',
    desc: 'Breadboarding, modular OOP embedded C++ development, sensor debouncing, and local tactile fail-safes.'
  },
  {
    title: '04. Cloud & Telemetry',
    desc: 'Bi-directional real-time data sync with Firebase RTDB, WebSerial diagnostic consoles, and Next.js dashboards.'
  },
  {
    title: '05. Validate & Deploy',
    desc: 'Stress-testing edge cases, thermal reliability, power fail-safe verification, and physical enclosure integration.'
  }
];

export default function Home() {
  const [modalData, setModalData] = useState(null);

  return (
    <div className="page-container">
      {/* =========================================================
          HERO SECTION (Matching the editorial reference layout)
          ========================================================= */}
      <section className="hero-wrapper" id="hero">
        {/* Giant Watermark behind the hero */}
        <div className="hero-watermark" aria-hidden="true">
          PORTFOLIO
        </div>

        <div className="hero-main-grid">
          {/* Left Column: Intro, Titles & Bio */}
          <div className="hero-left">
            <div className="hero-script-intro">Hello, I'm</div>
            <div className="hero-title-group">
              <h1>Ajith Kumar</h1>
              <div className="hero-role-title">Electronics Engineer</div>
            </div>
            <p className="hero-bio">
              Final-year ECE student with hands-on experience in robotics, automation, embedded systems, and intelligent software solutions. Building resilient systems where hardware and code seamlessly converge.
            </p>

            {/* Resume CTA and Location Group */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
              <a
                href="/resume.pdf"
                download="Ajith_Kumar_Choudoju_Resume.pdf"
                className="btn-crimson-download"
                title="Download Official Resume PDF"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download Resume</span>
              </a>

              <div className="hero-location" style={{ margin: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                </svg>
                <span>Based in Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Center Column: Portrait in styled frame */}
          <div className="hero-center-portrait">
            <div className="portrait-frame">
              <img
                src="/profile.jpeg"
                alt="Ajith Kumar Choudoju"
                className="portrait-img"
              />
            </div>
          </div>

          {/* Right Column: Engineering Highlights */}
          <div className="hero-right-highlights">
            <div className="hero-highlight-header">
              <div className="highlight-circle-icon">+</div>
              <span>Engineering practical systems that bridge physical hardware and intelligent code.</span>
            </div>

            <ul className="hero-highlight-list">
              <li className="hero-highlight-item">
                <span className="plus">+</span>
                <span>Multi-Robot Autonomous Warehouse Navigation</span>
              </li>
              <li className="hero-highlight-item">
                <span className="plus">+</span>
                <span>Retrofit Smart Home Automation</span>
              </li>
              <li className="hero-highlight-item">
                <span className="plus">+</span>
                <span>Biometric Robotics &amp; Autonomous Delivery</span>
              </li>
              <li className="hero-highlight-item">
                <span className="plus">+</span>
                <span>Full-Stack Cloud Sync &amp; Real-Time Telemetry</span>
              </li>
              <li className="hero-highlight-item">
                <span className="plus">+</span>
                <span>4-Layer PCB Design — Smart Home Controller</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================
          SELECTED PROJECTS SECTION (4+ Card Showcase with 01 →)
          ========================================================= */}
      <section className="section-wrapper" id="projects">
        <div className="section-header">
          <h2 className="section-title">Selected Projects</h2>
        </div>

        <div className="projects-grid">
          {allProjects.map((proj) => (
            <div
              key={proj.id}
              className="project-card"
              onClick={() => setModalData(proj)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setModalData(proj);
              }}
            >
              {/* Project Image Box */}
              <div className="project-thumb-box">
                <img
                  src={proj.thumbnail}
                  alt={proj.title}
                  className="project-thumb-img"
                />
                <div className="project-tag-overlay">{proj.category}</div>
              </div>

              {/* Project Details */}
              <div className="project-card-body">
                <h3 className="project-card-title">{proj.title}</h3>
                <p className="project-card-meta">{proj.meta}</p>

                <div className="project-card-footer">
                  <span style={{ fontSize: '0.72rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700' }}>
                    View Specs
                  </span>
                  <div className="project-num-arrow">
                    <span>{proj.num}</span>
                    <span>→</span>
                  </div>
                </div>

                {proj.postUrl && (
                  <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <a
                      href={proj.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="project-post-link"
                    >
                      <span className="post-icon">in</span>
                      <span>LinkedIn Post &amp; Video ↗</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          3-COLUMN SECTION:
          Col 1: Education & Skills
          Col 2: Work Process
          Col 3: Philosophy & Quote Card
          ========================================================= */}
      <section className="three-col-section" id="education-skills">
        {/* Column 1: Education & Skills */}
        <div className="col-card">
          <h2 className="col-header-title">Education &amp; Skills</h2>

          <div className="col-sublabel">Education</div>
          {educationData.map((edu, idx) => (
            <div key={idx} className="edu-item">
              <div className="edu-main">
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-college">{edu.college}</div>
                <div className="edu-grade">{edu.grade}</div>
              </div>
              <div className="edu-date">{edu.date}</div>
            </div>
          ))}

          <div style={{ marginTop: '0.85rem' }}>
            <a
              href="/resume.pdf"
              download="Ajith_Kumar_Choudoju_Resume.pdf"
              className="resume-download-link"
              title="Download Full Resume PDF"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>

          <div className="col-sublabel" style={{ marginTop: '1.25rem' }}>Core Hardware &amp; Embedded</div>
          <div className="skills-pills-wrap">
            {hardwareSkills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>

          <div className="col-sublabel" style={{ marginTop: '1.25rem' }}>Software &amp; Web Development</div>
          <div className="skills-pills-wrap">
            {softwareSkills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Column 2: Work Process */}
        <div className="col-card" id="work-process">
          <h2 className="col-header-title">Work Process</h2>
          <div className="process-timeline">
            {workProcessSteps.map((step, idx) => (
              <div key={idx} className="process-step">
                <div className="process-node-icon">
                  {idx + 1}
                </div>
                <div className="process-step-content">
                  <div className="process-step-title">{step.title}</div>
                  <div className="process-step-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Philosophy & Quote Card */}
        <div className="col-card">
          <div className="quote-card">
            <div>
              <div className="quote-marks">““</div>
              <p className="quote-text">
                Good engineering is not just how it looks or simulates, but how reliably it performs when hardware meets the physical world.
              </p>
              <div className="quote-signature">Ajith Kumar</div>
            </div>

            <div>
              <div style={{ padding: '0.85rem 0', borderTop: '1px solid var(--border-accent)', marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--accent-bright)', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Leadership &amp; Experience
                </div>
                <div style={{ fontSize: '0.82rem', color: '#ffffff', fontWeight: '600', marginTop: '0.25rem' }}>
                  General Secretary — Electronics Club
                </div>
                <div style={{ fontSize: '0.74rem', color: '#a1a1aa' }}>
                  CHARGE Revamped 2.0 | SNIST (2025 — Present)
                </div>
              </div>

              <div className="quote-slogan">
                <span>LET'S CREATE SOMETHING GREAT TOGETHER.</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LET'S WORK TOGETHER / CONTACT FOOTER
          ========================================================= */}
      <footer className="footer-section" id="contact">
        <div className="footer-grid">
          {/* Left: Call to action */}
          <div className="footer-left-cta">
            <h2 className="footer-headline">
              Let's Work<br />Together <span>+</span>
            </h2>
            <p className="footer-subtext">
              I'm currently open for new opportunities, robotics &amp; embedded engineering collaborations, and impactful technical problems. Let's create something exceptional.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <a
                href="mailto:choudojuajith17@gmail.com"
                className="footer-action-btn"
                style={{ marginTop: 0 }}
              >
                <span>→</span>
                <span>Available for Hire</span>
              </a>
              <a
                href="/resume.pdf"
                download="Ajith_Kumar_Choudoju_Resume.pdf"
                className="footer-action-btn footer-resume-btn"
                style={{ marginTop: 0 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Middle: Social & Contact Links */}
          <div className="footer-middle-contacts">
            <a
              href="mailto:choudojuajith17@gmail.com"
              className="contact-link-row"
            >
              <div className="contact-icon-circle">✉</div>
              <span className="contact-link-text">choudojuajith17@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ajith-kumar-choudoju-37181a2b7"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-row"
            >
              <div className="contact-icon-circle">in</div>
              <span className="contact-link-text">linkedin.com/in/ajith-kumar-choudoju</span>
            </a>

            <a
              href="https://github.com/ajithhhak"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-row"
            >
              <div className="contact-icon-circle">gh</div>
              <span className="contact-link-text">github.com/ajithhhak</span>
            </a>

            <div className="contact-link-row">
              <div className="contact-icon-circle">📍</div>
              <span className="contact-link-text">Hyderabad, India</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <div>© 2026 AJITH KUMAR CHOUDOJU</div>
          <div>BASED IN HYDERABAD, INDIA</div>
        </div>
      </footer>

      {/* =========================================================
          INTERACTIVE SPECIFICATION MODAL
          ========================================================= */}
      <div
        className={`project-modal-overlay ${modalData ? 'open' : ''}`}
        onClick={(e) => {
          if (e.target.classList.contains('project-modal-overlay')) {
            setModalData(null);
          }
        }}
      >
        {modalData && (
          <div className="project-modal" role="dialog" aria-modal="true">
            <button
              className="modal-close"
              onClick={() => setModalData(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="modal-header">
              <div className="modal-header-label">
                <span className="dot"></span>
                <span>{modalData.category}</span>
              </div>
              <h3 className="modal-title">{modalData.title}</h3>
            </div>

            {modalData.images && modalData.images.length > 0 && (
              <ImageCarousel
                images={modalData.images}
                alt={modalData.title}
                variant="modal"
              />
            )}

            {modalData.postUrl && (
              <div style={{ padding: '0.85rem 2rem', background: 'var(--accent-tint)', borderBottom: '1px solid var(--border-accent)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.82rem', color: '#ffffff', fontWeight: '600' }}>
                  Live Demo &amp; Discussion on LinkedIn:
                </span>
                <a
                  href={modalData.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-post-link"
                >
                  <span className="post-icon">in</span>
                  <span>Open LinkedIn Post ↗</span>
                </a>
              </div>
            )}

            {modalData.gitUrl && (
              <div style={{ padding: '0.85rem 2rem', background: 'var(--accent-tint)', borderBottom: '1px solid var(--border-accent)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.82rem', color: '#ffffff', fontWeight: '600' }}>
                  Source & Design Files on GitHub:
                </span>
                <a
                  href={modalData.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-post-link"
                >
                  <span className="post-icon">gh</span>
                  <span>Open GitHub Repository ↗</span>
                </a>
              </div>
            )}

            <div
              className="modal-body"
              dangerouslySetInnerHTML={{ __html: modalData.modalBody }}
            />

            {modalData.stack && (
              <div className="modal-stack">
                <div className="modal-stack-label">Technical Stack &amp; Components</div>
                <div className="modal-stack-tags">
                  {modalData.stack.map((item) => (
                    <span key={item} className="modal-stack-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
