"use client";
import { useState } from 'react';
import ImageCarousel from '@/components/ImageCarousel';

const hardwareProjects = [
  {
    id: 'hw3',
    title: 'IoT Smart Home Automation System',
    desc: 'A comprehensive IoT-based smart home automation system designed to provide secure remote control of household appliances from anywhere over the internet. The system utilizes an ESP8266 NodeMCU connected to Google Firebase Realtime Database for real-time communication.',
    stack: ['ESP8266', 'Arduino C++', 'Firebase RTDB', 'Firebase Auth', 'Arduino IDE', 'SSD1306 OLED', 'I²C', 'Wi-Fi', 'Relay Module', 'GitHub'],
    images: ['/auto/1.jpg', '/auto/2.jpg', '/auto/3.jpg', '/auto/4.jpg'],
    modalBody: `<p>A comprehensive IoT-based smart home automation system designed to provide secure remote control of household appliances from anywhere over the internet. The system utilizes an ESP8266 NodeMCU connected to Google Firebase Realtime Database for real-time communication, while an SSD1306 OLED display provides live system diagnostics including Wi-Fi status, cloud connectivity, relay states, signal strength, and device health.</p>
      <p>The architecture follows a cloud-based client-server model where Firebase acts as the central communication layer between the user interface and the embedded controller. The NodeMCU continuously synchronizes relay states with the cloud, ensuring real-time appliance control, automatic Wi-Fi recovery, and reliable operation even after temporary network interruptions.</p>
      <br><p><strong style="color:#00ff88">KEY FEATURES & ARCHITECTURE:</strong></p>
      <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:2">
        <li>ESP8266 NodeMCU-based IoT controller with integrated Wi-Fi connectivity</li>
        <li>Google Firebase Realtime Database for real-time cloud synchronization</li>
        <li>4-channel Active-LOW relay module supporting independent appliance control</li>
        <li>SSD1306 OLED display for Wi-Fi status, Firebase connection, relay states, RSSI, and system diagnostics</li>
        <li>Automatic Wi-Fi reconnection and Firebase recovery for uninterrupted operation</li>
        <li>Cloud heartbeat monitoring with device uptime, IP address, and signal strength reporting</li>
        <li>Active-LOW relay control logic ensuring safe startup with all relays initialized in the OFF state</li>
        <li>Modular architecture allowing future integration of PIR sensors, DHT22, energy monitoring, scheduling, and security features</li>
        <li>OTA (Over-the-Air) firmware update support for wireless software deployment</li>
        <li>Expandable ecosystem compatible with Google Assistant, mobile applications, and voice-controlled automation</li>
      </ul>`
  },
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
    desc: 'A secure autonomous delivery robot developed to automate package transportation in warehouses, campuses, and controlled-access environments. The system is designed to reduce manual intervention while ensuring that delivered items remain accessible only to authorized recipients.',
    stack: ['Arduino', 'Fingerprint Sensor', 'Bluetooth Module', 'Robotics', 'C++'],
    images: ['/1_autobot.jpeg', '/2_autobot.jpeg', '/3_autobot.jpeg'],
    modalBody: `<p>A secure autonomous delivery robot developed to automate package transportation in warehouses, campuses, and controlled-access environments. The system is designed to reduce manual intervention while ensuring that delivered items remain accessible only to authorized recipients. By integrating autonomous navigation, biometric authentication, and wireless communication into a single embedded platform, the robot provides an efficient and secure solution for last-mile indoor delivery.</p>
      <p>The robot continuously navigates its environment using ultrasonic sensors for obstacle detection and avoidance, enabling safe movement through dynamic indoor spaces. An MPU6050 inertial measurement unit assists with orientation tracking and directional stability, while a differential drive mechanism powered by dual DC geared motors allows precise motion control. A custom navigation algorithm processes real-time sensor inputs to make movement decisions and safely reach the destination.</p>
      <p>Security is achieved through an integrated fingerprint authentication system that electronically locks the storage compartment until a registered user is verified. This prevents unauthorized access and ensures that only the intended recipient can retrieve the delivered package. For maintenance, testing, and emergency situations, the robot also supports Bluetooth-based manual control, allowing operators to override autonomous navigation when required.</p>
      <p>The project follows a modular embedded systems architecture, making it easy to integrate additional technologies such as RFID-based localization, computer vision, AI-powered path planning, cloud monitoring, GPS navigation, and fleet management. The design demonstrates the practical integration of robotics, embedded systems, IoT, and access control into a scalable autonomous delivery platform.</p>
      <br><p><strong style="color:#00ff88">KEY FEATURES & ARCHITECTURE:</strong></p>
      <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:2">
        <li>Autonomous indoor navigation using ultrasonic sensor-based obstacle detection and avoidance</li>
        <li>MPU6050 IMU for orientation tracking and improved navigation stability</li>
        <li>Fingerprint authentication for secure package access and recipient verification</li>
        <li>Electronic locking mechanism to prevent unauthorized access</li>
        <li>Bluetooth manual override for maintenance, testing, and emergency operation</li>
        <li>Differential drive system powered by L298N motor driver and dual DC geared motors</li>
        <li>Real-time embedded decision-making using continuous sensor feedback</li>
        <li>Modular hardware architecture supporting future AI, RFID, GPS, and computer vision integration</li>
        <li>Battery-powered mobile robotic platform designed for continuous autonomous operation</li>
        <li>Scalable solution suitable for smart warehouses, hospitals, campuses, and industrial logistics</li>
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
