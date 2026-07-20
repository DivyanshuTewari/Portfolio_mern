// ─── PROJECTS DATA ────────────────────────────────────────────
// imageFallback is the src used by the <img> tag.
// Set to an external URL or a local /public path. null = placeholder icon shown.
export const projectsData = [
  {
    id: 'reserva360',
    title: 'Reserva360',
    subtitle: 'Hotel Management Platform  ·  Currently Building',
    tagline: 'A full-fledged modern hotel management website and software.',
    description: 'Reserva360 is a comprehensive hotel management system currently in active development. It includes room booking, guest management, billing, analytics dashboards, and staff operations — all built with modern web technologies for hospitality businesses.',
    imageFallback: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    isActive: true,
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/DivyanshuTewari',
    demo: null,
    behindBuild: [
      { phase: 'Problem', desc: 'Hotels often rely on outdated, disconnected tools for managing bookings, guests, staff, and billing with no single unified platform.' },
      { phase: 'Research', desc: 'Studied leading HMS platforms (Oracle OPERA, Little Hotelier) to identify gaps in affordability and ease-of-use for smaller hotels.' },
      { phase: 'Planning', desc: 'Designed a modular architecture: Booking Engine, Guest CRM, Billing System, Staff Portal, and an Admin Analytics Dashboard.' },
      { phase: 'Development', desc: 'Currently building the frontend in React with a Node/Express backend. Core modules include real-time room status, reservation management, and invoice generation.' },
      { phase: 'Testing', desc: 'Ongoing — unit testing API routes, validating booking logic, and testing the dashboard for real-time data accuracy.' },
      { phase: 'Result', desc: 'A scalable, cloud-ready hotel management software platform currently in active development and feature testing.' }
    ]
  },
  {
    id: 'hiresphere',
    title: 'HireSphere',
    subtitle: 'Full-Stack MERN Job Portal',
    tagline: 'A modern job platform connecting talent with opportunity.',
    description: 'A full-stack job portal built using the MERN stack with role-based authentication for both job seekers and recruiters. Features include resume upload, recruiter dashboards, and a clean job listing experience.',
    imageFallback: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Cloudinary'],
    github: 'https://github.com/DivyanshuTewari',
    demo: null,
    behindBuild: [
      { phase: 'Problem', desc: 'Job seekers struggle to find a clean, role-specific platform that separates recruiter and candidate workflows.' },
      { phase: 'Research', desc: 'Analyzed existing platforms like LinkedIn and Naukri to identify UX gaps and authentication patterns.' },
      { phase: 'Planning', desc: 'Designed the database schema for Users (role-based), Jobs, and Applications. Wireframed the UI flows.' },
      { phase: 'Development', desc: 'Built the backend API with Express & Mongoose, then built the React frontend with JWT-protected routes.' },
      { phase: 'Testing', desc: 'Manually tested all role-based routes (recruiter vs candidate), form validations, and file uploads.' },
      { phase: 'Result', desc: 'A complete MERN job portal with recruiter dashboards, resume uploads, and a smooth candidate experience.' }
    ]
  },
  {
    id: 'hids',
    title: 'Host Intrusion Detection System',
    subtitle: 'Real-Time Security Monitoring',
    tagline: 'Monitoring processes, files, and registry for active threats.',
    description: 'A real-time HIDS for Windows that monitors processes, file system changes, registry modifications, and anomalous behavior using YARA rules, WMI, and Windows API. A Flask dashboard provides live alerts and system status.',
    imageFallback: '/ProjectImages/hids.png',
    tech: ['Python', 'YARA', 'Flask', 'WMI', 'Windows API', 'Watchdog'],
    github: 'https://github.com/DivyanshuTewari/Host-Intrusion-Detection-System.git',
    demo: null,
    behindBuild: [
      { phase: 'Problem', desc: 'Windows systems lack an accessible open-source tool to detect intrusions at the host level in real time.' },
      { phase: 'Research', desc: 'Studied YARA rules, WMI event subscriptions, and Windows file system watchers for anomaly detection.' },
      { phase: 'Planning', desc: 'Architected a modular detection engine with separate watchers for processes, files, and registry keys.' },
      { phase: 'Development', desc: 'Built Python-based monitors using watchdog, psutil, and win32api. Integrated YARA pattern scanning and exposed a Flask dashboard.' },
      { phase: 'Testing', desc: 'Simulated PowerShell injection attacks, file system tampering, and suspicious process launches to validate detection.' },
      { phase: 'Result', desc: 'A working HIDS that accurately flags malicious activities and displays live alerts in a browser dashboard.' }
    ]
  },
  {
    id: 'chatbot',
    title: 'AI Medical Chatbot',
    subtitle: 'RAG Pipeline with Llama-2',
    tagline: 'Context-aware answers from medical PDF knowledge bases.',
    description: 'An intelligent medical chatbot using LangChain and Chainlit powered by Llama-2-7B. Built a full RAG (Retrieval-Augmented Generation) pipeline using FAISS for vector search, enabling accurate answers from PDF medical knowledge sources.',
    imageFallback: '/ProjectImages/AI.png',
    tech: ['Python', 'LangChain', 'Llama-2-7B', 'FAISS', 'PyTorch', 'Chainlit'],
    github: 'https://github.com/DivyanshuTewari/AI-Medical-Chatbot-Using-LangChain-And-Chainlit.git',
    demo: null,
    behindBuild: [
      { phase: 'Problem', desc: 'Medical professionals and students need quick, reliable answers from dense PDF-based medical literature.' },
      { phase: 'Research', desc: 'Explored RAG architectures, vector databases (FAISS), and open-source LLMs (Llama-2) for offline inference.' },
      { phase: 'Planning', desc: 'Designed a pipeline: PDF ingestion → chunking → embedding → FAISS index → query → LLM response.' },
      { phase: 'Development', desc: 'Built the full RAG pipeline using LangChain, integrated Llama-2-7B via llama-cpp-python, and built the Chainlit chat UI.' },
      { phase: 'Testing', desc: 'Tested retrieval accuracy against sample medical questions and measured response relevance.' },
      { phase: 'Result', desc: 'A fully functional medical chatbot that gives context-aware answers from uploaded PDF documents in real time.' }
    ]
  },
  {
    id: 'jitc',
    title: 'Just-In-Time Compiler',
    subtitle: 'Python → x86_64 Assembly JIT',
    tagline: 'Translating high-level expressions to native machine code.',
    description: 'A JIT compiler built in Python using PLY (Lex/Yacc) for parsing. Translates arithmetic, boolean logic, string operations, and conditionals into x86_64 assembly, then dynamically executes the generated machine code via a Tkinter GUI.',
    imageFallback: '/ProjectImages/jitc.png',
    tech: ['Python', 'PLY (Lex/Yacc)', 'x86_64 Assembly', 'Tkinter', 'ctypes'],
    github: 'https://github.com/DivyanshuTewari/Just-In-Time-Compiler.git',
    demo: null,
    behindBuild: [
      { phase: 'Problem', desc: 'Understanding how compilers and JIT engines work at the instruction level — from source code to machine execution.' },
      { phase: 'Research', desc: 'Studied compiler theory: lexing, parsing, AST construction, code generation, and x86_64 calling conventions.' },
      { phase: 'Planning', desc: 'Designed a modular compiler pipeline: Lexer → Parser → AST → Code Generator → Memory Allocator → Executor.' },
      { phase: 'Development', desc: 'Built the lexer and parser using PLY, wrote the x86_64 code generator, used ctypes to allocate executable memory and run the output.' },
      { phase: 'Testing', desc: 'Tested expression evaluation correctness including edge cases in boolean logic and string operations.' },
      { phase: 'Result', desc: 'A working JIT compiler that parses high-level expressions and dynamically executes native x86_64 machine code.' }
    ]
  }
];
