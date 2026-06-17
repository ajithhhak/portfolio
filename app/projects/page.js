"use client";
import { useState } from 'react';
import ImageCarousel from '@/components/ImageCarousel';

const hardwareProjects = [
  {
    id: 'hw1',
    title: 'Multi-Robot Warehouse Navigation System [IN DEVELOPMENT]',
    desc: 'Currently in development. Designing a scalable warehouse automation robot capable of autonomous navigation. It utilizes RFID-based localization, an IMU for orientation tracking, ultrasonic sensors for dynamic obstacle detection, and wheel encoders for precise odometry.',
    stack: ['RFID', 'IMU', 'Ultrasonic Sensors', 'Wheel Encoders', 'BFS Algorithm', 'Embedded Systems'],
    images: ['/hw1_1.png', '/hw1_2.png', '/hw1_3.png'],
    modalBody: `<p>A comprehensive warehouse automation system currently in active development, aimed at streamlining logistics and reducing manual labor. The system features custom-built robots capable of autonomous navigation across a shared warehouse environment, avoiding dynamic obstacles and finding the most efficient routes.</p>
      <p>The architecture involves a central server running a custom BFS-based pathfinding algorithm that coordinates multiple robots in real-time, preventing deadlocks and collisions.</p>
      <br><p><strong style="color:#00ff88">Key Features & Architecture:</strong></p>
      <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:2">
        <li>RFID-based localization grid for precise indoor positioning without GPS</li>
        <li>IMU-assisted orientation tracking to maintain accurate heading over long distances</li>
        <li>Array of ultrasonic sensors for real-time dynamic obstacle detection and avoidance</li>
        <li>Wheel-encoder-based precision movement and odometry feedback</li>
        <li>Centralized BFS route optimization server for multi-robot coordination and deadlock resolution</li>
        <li>Modular hardware design allowing easy swapping of sensor payloads</li>
      </ul>`
  },
  {
    id: 'hw2',
    title: 'Autonomous Secure Delivery Bot',
    desc: 'An autonomous delivery robot designed for secure last-mile package transportation. It integrates biometric authentication and embedded control systems to ensure only the intended recipient can access the cargo.',
    stack: ['Arduino', 'Fingerprint Sensor', 'Bluetooth Module', 'Robotics', 'C++'],
    images: ['/1_autobot.jpeg', '/2_autobot.jpeg', '/3_autobot.jpeg'],
    modalBody: `<p>Designed and developed as part of Team HackForge during Rampage v2.6, securing 3rd place in the national-level hackathon. The system was prototyped from scratch within a grueling 24-hour time constraint.</p>
      <p>The bot addresses the growing issue of package theft ("porch piracy") by ensuring the cargo compartment remains locked until the verified recipient scans their fingerprint. The chassis and control electronics were custom assembled to support the secure payload.</p>
      <br><p><strong style="color:#00ff88">Key Features & Achievements:</strong></p>
      <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:2">
        <li>Integrated fingerprint biometric module for secure user verification to authorize package access</li>
        <li>Biometric vehicle activation ensuring secure delivery and theft prevention</li>
        <li>Custom Bluetooth-based manual override functionality via a mobile app for fail-safe operation</li>
        <li>Rapid hardware-software prototyping, circuit design, and assembly under strict time constraints</li>
        <li>Awarded 3rd place out of 50+ competing teams nationwide</li>
      </ul>`
  }
];

const softwareProjects = [
  {
    id: 'sw1',
    title: 'HabitSync',
    desc: 'A modern, highly interactive Habit Tracker built from the ground up. Features optimistic UI updates, dynamic contribution grids (similar to GitHub), smooth micro-animations, and a custom OTP-based authentication flow.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'MongoDB', 'Framer Motion', 'Node.js'],
    images: ['/1_habitsync.png', '/2_habitsync.jpeg', '/3_habitsync.jpeg', '/4_habitsync.png', '/5_habitsync.png'],
    modalBody: `<p>A full-stack habit tracking application heavily focused on web performance, modern UI/UX principles, and complex state management. The goal was to create a friction-free experience that rewards users for consistency.</p>
      <p>The backend is powered by Next.js Serverless Functions communicating with a MongoDB database, ensuring rapid response times and scalable data storage.</p>
      <br><p><strong style="color:#3a9fff">Key Features & Technical Highlights:</strong></p>
      <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:2">
        <li>Dynamic, highly interactive heatmap grid with optimistic UI updates for zero-latency interactions</li>
        <li>Real-time calculation of daily completion percentages, current streaks, and longest streaks</li>
        <li>Extensive use of Framer Motion for smooth micro-animations, including interactive SVG pie charts and confetti celebration explosions on goal completion</li>
        <li>Secure, passwordless user authentication using email OTP verification via custom serverless API routes</li>
        <li>Responsive, mobile-first interface featuring advanced glassmorphism CSS effects and vibrant dynamic gradients</li>
      </ul>`
  },
  {
    id: 'sw2',
    title: 'Visitor Management System',
    desc: 'A complete serverless visitor management platform enabling seamless visitor registration, multi-tier approval workflows, dynamic barcode-based identification, and automated access control—all managed entirely via a Telegram bot interface.',
    stack: ['Telegram Bot API', 'Vercel', 'Upstash Redis', 'Next.js', 'PWA', 'JsBarcode', 'ZXing'],
    images: ['/1_tele.png', '/2_tele.png', '/3_tele.png', '/4_tele.png', '/5_tele.png', '/6_tele.png'],
    modalBody: `<p>An innovative end-to-end serverless visitor management platform that eliminates the need for expensive dedicated backend infrastructure or complex admin dashboards. By leveraging Telegram as the primary administrative UI, security personnel can approve or reject visitors instantly from their mobile devices.</p>
      <p>The system utilizes edge computing and distributed key-value stores to provide ultra-fast access token generation and validation.</p>
      <br><p><strong style="color:#3a9fff">Key Features & Innovations:</strong></p>
      <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:2">
        <li>Secure visitor verification using dynamic Code128 barcode generation and integrated camera-based scanning via ZXing</li>
        <li>Interactive Telegram bot interface for seamless registration, document upload, and instant approval workflows</li>
        <li>Implemented Upstash Redis TTL-based record expiration for secure, self-destructing temporary access passes</li>
        <li>Role-based access control (RBAC) ensuring only authorized personnel can approve entry requests</li>
        <li>Real-time check-in and check-out tracking with automated notifications sent to the host</li>
        <li>Frontend scanning interface deployed as a Progressive Web App (PWA) for offline capability and native mobile feel</li>
      </ul>`
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('hardware');
  const [modalData, setModalData] = useState(null);

  const projects = activeTab === 'hardware' ? hardwareProjects : softwareProjects;

  return (
    <section id="projects">
      <div className="section-label">// 04_PROJECTS</div>
      <h2 className="section-title">Featured <span>Work</span></h2>

      <div className="projects-tabs">
        <button 
          className={`tab-btn ${activeTab === 'hardware' ? 'active' : ''}`} 
          data-tab="hardware"
          onClick={() => setActiveTab('hardware')}
        >
          <span className="tab-led"></span>HARDWARE
        </button>
        <button 
          className={`tab-btn ${activeTab === 'software' ? 'active' : ''}`} 
          data-tab="software"
          onClick={() => setActiveTab('software')}
        >
          <span className="tab-led"></span>SOFTWARE
        </button>
      </div>

      <div className="projects-panel active fade-in visible">
        {projects.map(proj => (
          <div 
            key={proj.id} 
            className={`project-card ${activeTab === 'hardware' ? 'hw' : 'sw'}`}
            onClick={() => setModalData(proj)}
          >
            <span className={`project-tag ${activeTab === 'hardware' ? 'hw' : 'sw'}`}>
              {activeTab === 'hardware' ? 'HARDWARE' : 'SOFTWARE'}
            </span>
            {proj.images && proj.images.length > 0 && (
              <ImageCarousel images={proj.images} alt={proj.title} variant="card" />
            )}
            <div className="project-title">{proj.title}</div>
            <div className="project-desc">{proj.desc}</div>
            <div className="project-stack">
              {proj.stack.map(tag => (
                <span key={tag} className="stack-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* PROJECT MODAL */}
      <div className={`project-modal-overlay ${modalData ? 'open' : ''}`} onClick={(e) => {
        if (e.target.className.includes('project-modal-overlay')) setModalData(null);
      }}>
        {modalData && (
          <div className="project-modal">
            <button className="modal-close" onClick={() => setModalData(null)}>✕</button>
            <div className="modal-header">
              <div className={`modal-header-label ${activeTab === 'hardware' ? 'hw' : 'sw'}`}>
                <span className={`modal-led ${activeTab === 'hardware' ? 'modal-led-hw' : 'modal-led-sw'}`}></span>
                {activeTab === 'hardware' ? 'HARDWARE PROJECT' : 'SOFTWARE PROJECT'}
              </div>
              <div className="modal-title">{modalData.title}</div>
            </div>
            {modalData.images && modalData.images.length > 0 && (
              <ImageCarousel images={modalData.images} alt={modalData.title} variant="modal" />
            )}
            <div className="modal-body" dangerouslySetInnerHTML={{ __html: modalData.modalBody }}></div>
            {modalData.stack && (
              <div className="modal-stack">
                <div className="modal-stack-label">TECH STACK</div>
                {modalData.stack.map(tag => (
                  <span key={tag} className="stack-tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
