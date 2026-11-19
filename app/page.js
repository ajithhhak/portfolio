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
      
      <br><p><strong style="color:var(--accent-bright)">LOCAL HARDWARE CONTROL: PHYSICAL SWITCHES &amp; BUTTONS:</strong></p>
      <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:1.9">
        <li><strong>Physical Wall Switches (Toggle/Rocker)</strong> — Traditional wall switches integrated directly into the ESP32 GPIO circuitry via <code>SwitchManager</code>. State-change edge detection ensures flipping a switch toggles the appliance instantly.</li>
        <li><strong>Physical Push Buttons (Tactile Momentary)</strong> — Quick push-to-toggle buttons positioned on device enclosures with internal pull-ups and debouncing.</li>
        <li><strong>Two-Way State Synchronization</strong> — When a physical switch triggers a relay locally, the ESP32 immediately updates Firebase RTDB so the web and mobile app reflect changes instantly.</li>
        <li><strong>Fail-Safe Offline Mode</strong> — All local tactile inputs operate 100% autonomously without requiring Wi-Fi.</li>
      </ul>

      <br><p><strong style="color:var(--accent-bright)">PIR MOTION AUTOMATION &amp; LIVE SENSOR STREAMING:</strong></p>
      <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:1.9">
        <li><strong>Motion-Triggered Lighting</strong> — High-sensitivity PIR sensor detects motion on dedicated GPIO pins, instantly triggering the assigned relay.</li>
        <li><strong>Configurable Auto-Off Inactivity Timer</strong> — Countdown begins when motion ceases; automatically powers down appliances to maximize energy efficiency.</li>
        <li><strong>Live Telemetry Streaming</strong> — Real-time PIR sensor state is streamed continuously to Firebase and visualized dynamically on the web dashboard.</li>
      </ul>

      <br><p><strong style="color:var(--accent-bright)">ESP32 FIRMWARE &amp; WEBSERIAL REAL-TIME ORIGIN LOGGING:</strong></p>
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
    images: ['/hw1_1.png'],
    stack: ['RFID', 'IMU', 'Ultrasonic Sensors', 'Wheel Encoders', 'BFS Algorithm', 'Embedded Systems'],
    modalBody: `<p>A comprehensive warehouse automation system currently in active development, aimed at streamlining logistics and reducing manual labor. The system features custom-built robots capable of autonomous navigation across a shared warehouse environment, avoiding dynamic obstacles and finding the most efficient routes.</p>
      <p>The architecture involves a central server running a custom BFS-based pathfinding algorithm that coordinates multiple robots in real-time, preventing deadlocks and collisions.</p>
      
      <br><p><strong style="color:var(--accent-bright)">KEY FEATURES &amp; ARCHITECTURE:</strong></p>
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
      
      <br><p><strong style="color:var(--accent-bright)">KEY FEATURES &amp; ARCHITECTURE:</strong></p>
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
      
      <br><p><strong style="color:var(--accent-bright)">TECHNICAL HIGHLIGHTS:</strong></p>
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
      
      <br><p><strong style="color:var(--accent-bright)">KEY INNOVATIONS:</strong></p>
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
    modalBody: `<p style="font-style:italic;color:#a1a1aa;font-size:0.92rem;border-left:3px solid var(--accent-bright);padding-left:0.85rem;margin-bottom:1.25rem;line-height:1.7">Custom 4-layer PCB controller for retrofit smart home automation &mdash; ESP32, relays, mmWave presence detection &amp; environmental sensing, designed in Altium Designer.</p>

      <p>This project began as a hobbyist smart home build and has evolved into a fully custom-designed, production-oriented PCB system. Developed end-to-end &mdash; from system architecture and component selection, through schematic capture, all the way to a complete 4-layer PCB layout in <strong>Altium Designer</strong>.</p>

      <br><p><strong style="color:var(--accent-bright)">&#10024; FEATURES:</strong></p>
      <table style="width:100%;border-collapse:collapse;font-size:0.82rem;margin-top:0.5rem">
        <tbody>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.07)"><td style="padding:0.4rem 0.6rem;color:#a1a1aa;width:42%">&#9889; Retrofit-friendly</td><td style="padding:0.4rem 0.6rem">Works with existing electrical installations</td></tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.07)"><td style="padding:0.4rem 0.6rem;color:#a1a1aa">&#128268; Relay control</td><td style="padding:0.4rem 0.6rem">Controls lights, fans, and appliances</td></tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.07)"><td style="padding:0.4rem 0.6rem;color:#a1a1aa">&#127917; Physical switches</td><td style="padding:0.4rem 0.6rem">Wall switches remain fully functional</td></tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.07)"><td style="padding:0.4rem 0.6rem;color:#a1a1aa">&#128100; Presence detection</td><td style="padding:0.4rem 0.6rem">mmWave radar (HLK-LD2410C)</td></tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.07)"><td style="padding:0.4rem 0.6rem;color:#a1a1aa">&#127777; Environmental sensing</td><td style="padding:0.4rem 0.6rem">Temperature &amp; humidity (SHT31)</td></tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.07)"><td style="padding:0.4rem 0.6rem;color:#a1a1aa">&#128694; Motion detection</td><td style="padding:0.4rem 0.6rem">PIR sensor input</td></tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.07)"><td style="padding:0.4rem 0.6rem;color:#a1a1aa">&#128421; Local display</td><td style="padding:0.4rem 0.6rem">OLED status screen</td></tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.07)"><td style="padding:0.4rem 0.6rem;color:#a1a1aa">&#128225; Wireless</td><td style="padding:0.4rem 0.6rem">ESP32-based Wi-Fi connectivity</td></tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.07)"><td style="padding:0.4rem 0.6rem;color:#a1a1aa">&#9729; IoT ready</td><td style="padding:0.4rem 0.6rem">Dashboard &amp; cloud integration capable</td></tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.07)"><td style="padding:0.4rem 0.6rem;color:#a1a1aa">&#128737; Isolation</td><td style="padding:0.4rem 0.6rem">Dedicated mains and SELV separation</td></tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.07)"><td style="padding:0.4rem 0.6rem;color:#a1a1aa">&#128267; On-board PSU</td><td style="padding:0.4rem 0.6rem">Isolated AC-to-DC power supply</td></tr>
          <tr><td style="padding:0.4rem 0.6rem;color:#a1a1aa">&#128208; 4-Layer PCB</td><td style="padding:0.4rem 0.6rem">Custom stackup with production-ready design</td></tr>
        </tbody>
      </table>

      <br><p><strong style="color:var(--accent-bright)">&#129504; SYSTEM ARCHITECTURE:</strong></p>
      <pre style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:1rem;font-size:0.7rem;line-height:1.6;overflow-x:auto;color:#d4d4d8;font-family:monospace">AC MAINS (230V)
  |
  Protection &amp; Filter
  |
HLK-10M05 (Isolated AC/DC)
  | +5V
3.3V Buck Regulator
  | +3.3V
  |
ESP32 (Main Controller)
  |------- ULN2803A -------- Relay 1~4 ---- Lights/Fans
  |------- MCP23017 -------- Wall Switches (x6)
  |------- LD2410C (UART) -- mmWave Presence
  |------- PIR ------------- Motion
  |------- SHT31 (I2C) ----- Temp &amp; Humidity
  |------- OLED (I2C) ------ Local Display</pre>

      <br><p><strong style="color:var(--accent-bright)">&#128299; HARDWARE:</strong></p>
      <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:1.9">
        <li><strong>ESP32-WROOM-32D</strong> &mdash; Main controller: Wi-Fi, relay switching, I&sup2;C / UART peripherals, and local automation logic.</li>
        <li><strong>ULN2803A Relay Driver</strong> &mdash; Darlington array drives 4 relay coils with integrated flyback suppression, keeping coil currents off ESP32 GPIOs.</li>
        <li><strong>MCP23017 GPIO Expander</strong> &mdash; I&sup2;C expander for up to 6 physical wall-switch inputs; fully <strong>interrupt-driven</strong> &mdash; no continuous polling.</li>
        <li><strong>HLK-LD2410C mmWave Radar</strong> &mdash; UART-connected presence sensor with stationary target detection beyond a simple binary output.</li>
        <li><strong>SHT31</strong> &mdash; High-accuracy I&sup2;C temperature and relative humidity sensor.</li>
        <li><strong>PIR Sensor</strong> &mdash; Secondary motion detection channel for supplementary automation triggers.</li>
      </ul>

      <br><p><strong style="color:var(--accent-bright)">&#128268; INTERFACES:</strong></p>
      <p style="font-size:0.8rem;color:#a1a1aa;margin-bottom:0.25rem">I&sup2;C Bus</p>
      <pre style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:0.75rem 1rem;font-size:0.75rem;line-height:1.7;color:#d4d4d8;font-family:monospace">ESP32 GPIO21 &gt; SDA
ESP32 GPIO22 &gt; SCL
Peripherals: MCP23017 | SHT31 | OLED Display</pre>
      <p style="font-size:0.8rem;color:#a1a1aa;margin:0.75rem 0 0.25rem">LD2410C UART</p>
      <pre style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:0.75rem 1rem;font-size:0.75rem;line-height:1.7;color:#d4d4d8;font-family:monospace">LD2410C TX &gt; ESP32 GPIO16 (RX)
LD2410C RX &gt; ESP32 GPIO17 (TX)</pre>
      <p style="font-size:0.8rem;color:#a1a1aa;margin:0.75rem 0 0.25rem">Relay Outputs</p>
      <pre style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:0.75rem 1rem;font-size:0.75rem;line-height:1.7;color:#d4d4d8;font-family:monospace">ESP32 GPIO25 &gt; ULN2803A &gt; Relay 1
ESP32 GPIO26 &gt; ULN2803A &gt; Relay 2
ESP32 GPIO27 &gt; ULN2803A &gt; Relay 3
ESP32 GPIO33 &gt; ULN2803A &gt; Relay 4</pre>

      <br><p><strong style="color:var(--accent-bright)">&#127959; PCB LAYER STACKUP:</strong></p>
      <table style="width:100%;border-collapse:collapse;font-size:0.82rem;margin-top:0.5rem">
        <thead><tr style="border-bottom:1px solid rgba(255,36,66,0.4)"><th style="padding:0.4rem 0.6rem;text-align:left;color:var(--accent-bright);font-weight:700">Layer</th><th style="padding:0.4rem 0.6rem;text-align:left;color:var(--accent-bright);font-weight:700">Function</th></tr></thead>
        <tbody>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.07)"><td style="padding:0.4rem 0.6rem;color:#fff;font-weight:600">L1 &mdash; Top</td><td style="padding:0.4rem 0.6rem;color:#a1a1aa">Component placement, signal routing, mains routing</td></tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.07)"><td style="padding:0.4rem 0.6rem;color:#fff;font-weight:600">L2</td><td style="padding:0.4rem 0.6rem;color:#a1a1aa">Solid GND copper pour</td></tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.07)"><td style="padding:0.4rem 0.6rem;color:#fff;font-weight:600">L3</td><td style="padding:0.4rem 0.6rem;color:#a1a1aa">Power distribution / low-voltage routing</td></tr>
          <tr><td style="padding:0.4rem 0.6rem;color:#fff;font-weight:600">L4 &mdash; Bottom</td><td style="padding:0.4rem 0.6rem;color:#a1a1aa">Low-voltage signal routing</td></tr>
        </tbody>
      </table>

      <br><p><strong style="color:var(--accent-bright)">&#9889; POWER ARCHITECTURE:</strong></p>
      <pre style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:0.75rem 1rem;font-size:0.75rem;line-height:1.9;color:#d4d4d8;font-family:monospace">230V AC &gt; Fuse &gt; MOV &gt; X2 Cap &gt; Common-Mode Filter
  |
HLK-10M05 (Isolated AC/DC) &gt; +5V Rail
  |
3.3V Buck Converter &gt; +3.3V Rail</pre>
      <p style="font-size:0.82rem;color:#a1a1aa;line-height:1.7;margin-top:0.5rem">Mains section is <strong style="color:#fff">electrically isolated</strong> from SELV circuitry. Low-voltage electronics share a common DC ground on the secondary side only.</p>

      <br><p><strong style="color:var(--accent-bright)">&#127968; RETROFIT PHILOSOPHY:</strong></p>
      <p style="font-size:0.82rem;color:#a1a1aa;line-height:1.7">Traditional wall-switch operation is preserved at all times. The controller adds on top:</p>
      <ul style="margin-top:0.5rem;padding-left:1.2rem;line-height:1.9">
        <li>Remote and voice control</li>
        <li>Presence and occupancy-based automation</li>
        <li>Environmental condition-based logic</li>
        <li>Room-level scheduling and scenes</li>
        <li>Future IoT platform integrations</li>
      </ul>

      <br><p><strong style="color:var(--accent-bright)">&#128295; DESIGN WORKFLOW:</strong></p>
      <pre style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:0.75rem 1rem;font-size:0.75rem;line-height:1.9;color:#d4d4d8;font-family:monospace">Concept &gt; System Architecture &gt; Component Selection
&gt; Schematic Capture &gt; Footprint Selection &amp; Creation
&gt; PCB Stackup &amp; Design Rules &gt; Component Placement &gt; Routing
&gt; Copper Pour &amp; Ground Planes &gt; DRC &amp; Clearance Verification
&gt; Silkscreen Cleanup &gt; Final PCB Output &amp; Gerber Generation</pre>

      <br><p><strong style="color:var(--accent-bright)">&#128679; CURRENT STATUS:</strong></p>
      <p style="font-size:0.8rem;font-weight:700;color:#22c55e;margin-bottom:0.5rem">PCB Design &mdash; Complete</p>
      <ul style="margin-top:0.25rem;padding-left:1.2rem;line-height:2;font-size:0.82rem">
        <li style="color:#22c55e">&#9989; System architecture &amp; component selection</li>
        <li style="color:#22c55e">&#9989; Schematic &amp; custom footprints</li>
        <li style="color:#22c55e">&#9989; PCB stackup, routing &amp; copper pours</li>
        <li style="color:#22c55e">&#9989; Mains/SELV isolation verified</li>
        <li style="color:#22c55e">&#9989; DRC passed &amp; Gerber files generated</li>
        <li style="color:#a1a1aa">&#9744; PCB fabrication &amp; assembly</li>
        <li style="color:#a1a1aa">&#9744; Hardware bring-up &amp; firmware development</li>
        <li style="color:#a1a1aa">&#9744; Sensor validation &amp; relay testing</li>
        <li style="color:#a1a1aa">&#9744; Enclosure design &amp; long-term testing</li>
      </ul>

      <br><p style="font-size:0.79rem;color:#71717a;border-top:1px solid rgba(255,255,255,0.07);padding-top:1rem;line-height:1.7">&#9888;&#65039; <strong style="color:#facc15">Safety Notice:</strong> This project involves 230V AC mains voltage. Any work on the mains section must follow appropriate electrical safety procedures. This is a development project and should not be treated as a certified commercial product without full safety, EMC, and regulatory validation.</p>`
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

  useEffect(() => {
    if (!modalData) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const previouslyFocused = document.activeElement;
    const modal = document.querySelector('.project-modal');
    const closeButton = modal?.querySelector('.modal-close');
    closeButton?.focus();

    const handleModalKeys = (event) => {
      if (event.key === 'Escape') {
        setModalData(null);
        return;
      }

      if (event.key !== 'Tab' || !modal) return;
      const focusable = [...modal.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')];
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleModalKeys);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleModalKeys);
      if (previouslyFocused instanceof HTMLElement && previouslyFocused.isConnected) {
        previouslyFocused.focus();
      }
    };
  }, [modalData]);

  return (
    <div className="shell">
      <section className="hero" id="hero">
        <div>
          <p className="eyebrow">Electronics &amp; embedded systems</p>
          <h1>Ajith Kumar<br/><em>Choudoju.</em></h1>
          <p className="intro">I design circuit boards and write firmware for connected devices. My work spans retrofit home automation, autonomous robots, and the software that connects them.</p>
          <div className="actions"><a className="primary" href="#projects">Explore projects</a><a className="secondary" href="/resume.pdf" download>Download résumé</a></div>
          <p className="location">Hyderabad, India <b>·</b> ECE at SNIST</p>
        </div>
        <button className="feature" onClick={() => setModalData(allProjects.find(p => p.id === 'hw5'))} aria-haspopup="dialog" aria-label="View four-channel relay PCB project">
          <div className="drawing"><span className="drawing-label">PCB / TOP VIEW</span><img src="/pcb/relay-board.webp" width="877" height="297" alt="Four-channel relay controller layout"/><span className="drawing-note">ESP32 · 4-LAYER BOARD</span></div>
          <div className="caption"><div><span className="eyebrow">Featured design</span><h2>Four-channel relay PCB</h2></div><span className="plus" aria-hidden="true">+</span></div>
        </button>
      </section>
      <section className="section" id="projects"><h2>Selected projects</h2>
        <div className="projects">{allProjects.map(proj => (
          <article className="project" key={proj.id}>
            <button onClick={() => setModalData(proj)} aria-haspopup="dialog" aria-label={`Explore ${proj.title}`}>
              <div className="thumb"><img src={proj.thumbnail} alt="" loading="lazy"/></div>
              <div className="details"><span className="eyebrow">{proj.category}</span><h3>{proj.title}</h3><p>{proj.meta.split(' / ').join(' · ')}</p></div>
            </button>
          </article>))}</div>
      </section>
      <section id="education-skills" className="section"><h2>Education &amp; skills</h2><div className="background-grid"><div>{educationData.map(edu => <div className="education" key={edu.degree}><small>{edu.date}</small><h3>{edu.degree}</h3><p>{edu.college} · {edu.grade}</p></div>)}</div>
        <div>{[['Hardware & embedded', hardwareSkills], ['Software & web', softwareSkills]].map(([label, skills]) => <div className="skill-set" key={label}><h3>{label}</h3><ul>{skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div></div></section>
      <section id="work-process" className="section"><h2>Engineering process</h2><div className="background-grid"><ol className="steps">{workProcessSteps.map(step => <li key={step.title}><h3>{step.title.slice(4)}</h3><p>{step.desc}</p></li>)}</ol>
        <aside className="leadership"><img src="/profile.jpeg" alt="Ajith Kumar Choudoju" width="76" height="90" loading="lazy"/><p className="eyebrow">Leadership at SNIST</p><h3>General Secretary,<br/>Electronics Club</h3><p>Led CHARGE Revamped 2.0, a national technical symposium with a hackathon, project expo, and poster presentations.</p></aside></div></section>
      <footer className="section" id="contact"><div><p className="eyebrow">Contact</p><h2>Get in touch.</h2><p>Open to opportunities in PCB design, firmware, and robotics.</p></div><div className="contact-links"><a href="mailto:choudojuajith17@gmail.com">choudojuajith17@gmail.com</a><div><a href="https://www.linkedin.com/in/ajith-kumar-choudoju-37181a2b7" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/ajithhhak" target="_blank" rel="noreferrer">GitHub</a><a href="/resume.pdf" download>Résumé</a></div></div></footer>
      <div
        className={`project-modal-overlay ${modalData ? 'open' : ''}`}
        aria-hidden={!modalData}
        onClick={(e) => {
          if (e.target.classList.contains('project-modal-overlay')) {
            setModalData(null);
          }
        }}
      >
        {modalData && (
          <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
            <button
              className="modal-close"
              onClick={() => setModalData(null)}
              aria-label="Close modal"
            >&times;</button>

            <div className="modal-header">
              <div className="modal-header-label">
                <span className="dot"></span>
                <span>{modalData.category}</span>
              </div>
              <h3 className="modal-title" id="project-modal-title">{modalData.title}</h3>
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
                  <span>View project post</span>
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
                  <span>View design files</span>
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
