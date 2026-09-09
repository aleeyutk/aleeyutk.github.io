document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // -------------------------------------------------------------------------
    // 2. VERIFIED FLAGSHIP PROJECTS DATA (Strictly verified from repositories)
    // -------------------------------------------------------------------------
    const FLAGSHIP_PROJECTS = [
        {
            slug: 'hexa-operations',
            title: 'Hexa Operations',
            subtitle: 'Restaurant Operations & Management Platform',
            badge: 'Full-Stack Platform',
            category: 'Hospitality Operations & Real-Time Systems',
            summary: 'A comprehensive multi-role operations platform for restaurants, synchronizing front-of-house table service, kitchen preparation displays, cashier reconciliation, and automated WhatsApp ordering.',
            technologies: ['Node.js 20', 'Fastify', 'PostgreSQL 16', 'Redis 7', 'Prisma ORM', 'Socket.io', 'React 18', 'TypeScript', 'Google Gemini AI'],
            highlightTitle: 'Key Engineering Highlight',
            highlight: 'Real-time WebSocket Kitchen Display System (KDS), 5-role operational access control, and conversational WhatsApp AI order parser with deterministic schema validation.',
            repo: 'https://github.com/aleeyutk/Hexa-Oprations',
            caseStudy: {
                overview: 'Hexa Operations is an end-to-end restaurant management and dispatch platform designed around real-world hospitality workflows. It eliminates paper tickets and coordination friction between dining rooms, kitchens, and cashier desks.',
                problem: 'Restaurants experience frequent order miscommunications between waitstaff and the kitchen, peak-hour bottlenecks during bill settlement, and revenue leakage from untracked table orders. Additionally, manual telephone and text-based ordering ties up staff time and introduces human error.',
                solution: 'Architected and developed a unified operational hub featuring 5 tailored role dashboards (Admin, Manager, Cashier, Waiter, Kitchen). The platform synchronizes order lifecycles via WebSockets, calculates exact subtotals, VAT, and service charges with payment matching, and exposes an autonomous WhatsApp ordering bot.',
                architecture: 'Fastify server backend with Socket.io for millisecond-latency order broadcasting; Redis pub/sub handles terminal synchronization across network partitions; PostgreSQL relational schema managed through Prisma ORM; React 18 / TypeScript frontend with role-specific views.',
                architectureFlow: {
                    caption: 'Real-Time Order Lifecycle & Telemetry Pipeline',
                    steps: [
                        { num: '01. Ingestion', title: 'Client Personas', sub: 'Waiters, Cashiers & WhatsApp orders' },
                        { num: '02. API Gateway', title: 'Fastify Server', sub: 'JWT stateless auth, 5-role RBAC, validation' },
                        { num: '03. Event Bus', title: 'Redis Pub/Sub', sub: 'Low-latency order queue across processes' },
                        { num: '04. WebSocket Stream', title: 'Socket.io Engine', sub: 'Instant broadcast to KDS & terminals' },
                        { num: '05. Persistence', title: 'PostgreSQL 16', sub: 'Prisma ORM schema & immutable audit' }
                    ],
                    crosscutting: 'Conversational WhatsApp AI bot powered by Google Gemini with deterministic JSON schema extraction'
                },
                keyFeatures: [
                    'Real-Time Kitchen Display System (KDS) with instant ticket status transitions (Pending → Cooking → Ready → Served)',
                    'Multi-Persona Access Control tailored for Admins, Shift Managers, Cashiers, Waitstaff, and Kitchen Crews',
                    'Financial POS Engine computing item subtotals, configurable VAT, service charges, and Moniepoint transaction references',
                    'Conversational WhatsApp AI Bot utilizing Google Gemini with structured JSON extraction for direct customer ordering'
                ],
                engineeringDecisions: 'Selected Fastify over Express to achieve high JSON serialization throughput. Utilized Socket.io with Redis pub/sub to guarantee zero-loss ticket broadcasts even under heavy mealtime concurrency.',
                challenges: 'Free-form customer messages via WhatsApp were prone to conversational ambiguity. Implemented a deterministic prompt pipeline with Google Gemini 3.5 Flash that strictly extracts validated menu item IDs and quantities, falling back to clarification prompts when items are ambiguous.',
                status: 'Verified Architecture & Working Codebase in Repository'
            }
        },
        {
            slug: 'mining-management',
            title: 'Enterprise Mining Management System',
            subtitle: 'Mineral Operations, Assays & Inventory Platform (Nano Mines CMS)',
            badge: 'Enterprise Backend',
            category: 'Enterprise Resource Management & Auditing',
            summary: 'An auditable enterprise resource platform for mineral trading and excavation workflows, enforcing strict assay moisture calculations, multi-step invoice approvals, and non-blocking audit trails.',
            technologies: ['Java 17', 'Spring Boot 3.2', 'Spring Security', 'PostgreSQL 15', 'Liquibase', 'Docker Compose', 'React 19', 'TypeScript 5', 'Chart.js'],
            highlightTitle: 'Key Engineering Highlight',
            highlight: 'Deterministic 4-stage lifecycle state machine (DRAFT → PENDING → APPROVED → PAID), automated assay valuation for 10 mineral profiles, and non-blocking audit logging.',
            repo: null,
            repoNote: 'Enterprise proprietary repository. Architecture and implementation verified directly from source code.',
            caseStudy: {
                overview: 'Nano Mines CMS is an enterprise resource management platform designed for mineral excavation, laboratory assay tracking, and compliant commercial invoicing.',
                problem: 'Commercial mineral trading involves variable purity percentages (assays) and moisture content across distinct ore types (Tantalite, Lithium, Lead, Columbite, etc.). Manual calculations cause severe financial discrepancies, and lack of auditable approval chains creates regulatory exposure.',
                solution: 'Engineered an auditable enterprise system with strict Role-Based Access Control for Lab Technicians, Finance Officers, and General Managers. Automated dry-weight deduction and assay valuation algorithms, enforced an immutable 4-step invoice approval state machine, and integrated non-blocking event-driven audit logging.',
                architecture: 'Multi-tier Spring Boot 3 architecture utilizing stateless JWT filters and method-level @PreAuthorize security. Database migrations are strictly managed via Liquibase across PostgreSQL 15. The containerized environment is packaged with Docker Compose.',
                architectureFlow: {
                    caption: 'Strict 4-Stage State Machine & Auditing Pipeline',
                    steps: [
                        { num: '01. Lab Intake', title: 'Assay Valuation', sub: 'Dry-weight & purity computation across 10 minerals' },
                        { num: '02. Stage 1', title: 'DRAFT State', sub: 'Lab technician entries & valuation calculations' },
                        { num: '03. Stage 2', title: 'PENDING State', sub: 'Finance officer verification & invoice drafting' },
                        { num: '04. Stage 3', title: 'APPROVED State', sub: 'General manager authorization & lock' },
                        { num: '05. Stage 4', title: 'PAID State', sub: 'Settlement & automated warehouse deduction' }
                    ],
                    crosscutting: 'Asynchronous Spring ApplicationEventPublisher writes immutable audit logs without locking transaction commits'
                },
                keyFeatures: [
                    'Automated Mineral Valuation Engine computing dry weight and net value based on assay purity across 10 mineral profiles',
                    'Strict 4-Stage State Machine preventing unauthorized invoice modifications once approved or paid',
                    'Asynchronous Audit Logging recording all state transitions, user access, and invoice edits without throughput degradation',
                    'Sales Receipt Generation with automated, transactional warehouse inventory deduction'
                ],
                engineeringDecisions: 'Enforced database schema evolution exclusively through Liquibase change sets rather than JPA auto-generation to maintain reversible, zero-downtime production migrations.',
                challenges: 'Synchronous audit logging during high-concurrency invoicing threatened to bottleneck transaction commits. Designed an asynchronous event listener using Spring ApplicationEventPublisher to write audit entries to background threads without locking invoice commits.',
                status: 'Verified Enterprise Codebase (Java 17 / Spring Boot 3 / React 19)'
            }
        },
        {
            slug: 'travel-planner-agent',
            title: 'AI Travel Planning Agent',
            subtitle: 'Autonomous Multi-API Travel & Budget Engine',
            badge: 'AI Workflows',
            category: 'Intelligent Workflows & Agent Services',
            summary: 'An autonomous Java agent service that extracts travel intents from natural language messages, queries live country and foreign exchange APIs, and produces tailored local currency budget itineraries.',
            technologies: ['Java 17', 'Spring Boot 3.2', 'RestTemplate', 'Maven', 'Docker', 'Fly.io', 'REST Countries API', 'ExchangeRate.host', 'Telex.im'],
            highlightTitle: 'Key Engineering Highlight',
            highlight: 'Natural language destination & duration parsing, multi-API foreign exchange pipeline, and structured Telex.im Agent-to-Agent (A2A) webhook compliance.',
            repo: null,
            repoNote: 'Agent service implementation verified from source repository and Dockerized service specifications.',
            caseStudy: {
                overview: 'The AI Travel Planning Agent is a microservice designed to transform conversational travel requests into complete, currency-converted travel itineraries with actionable budget estimates.',
                problem: 'Travelers spend significant time manually gathering visa policies, country profiles, and current foreign exchange rates across disparate tools to produce a realistic travel budget.',
                solution: 'Constructed an automated Spring Boot agent service that ingests conversational travel prompts, extracts target country and duration, queries geographic metadata from REST Countries API, and fetches live FX rates from ExchangeRate.host to calculate realistic budget breakdowns.',
                architecture: 'Lightweight containerized microservice deployed via Docker. Features resilient REST clients with timeout handling, modular budget computation heuristics, and compliance with the Telex.im Agent-to-Agent (A2A) JSON webhook specification.',
                architectureFlow: {
                    caption: 'Multi-API Agent Ingestion & Dispatch Pipeline',
                    steps: [
                        { num: '01. Ingestion', title: 'Conversational Input', sub: 'Natural language travel destination & duration' },
                        { num: '02. Extraction', title: 'Intent Parser', sub: 'Extracts target country, dates, and budget profile' },
                        { num: '03. Enrichment', title: 'External APIs', sub: 'REST Countries (visas) & ExchangeRate.host (FX)' },
                        { num: '04. Calculation', title: 'Budget Engine', sub: 'Local currency categorization & cost heuristics' },
                        { num: '05. Delivery', title: 'Telex.im Webhook', sub: 'Structured A2A Markdown payload dispatch' }
                    ],
                    crosscutting: 'Resilient HTTP client with defensive timeout handling and ISO currency code reconciliation'
                },
                keyFeatures: [
                    'Conversational Intent Parsing extracting destination countries and trip durations from user prompts',
                    'Multi-API Pipeline chaining country metadata with live foreign exchange rates',
                    'Realistic Budget Categorization (lodging, dining, local transit) denominated in the destination country currency',
                    'Telex.im A2A Webhook Dispatcher returning structured Markdown responses'
                ],
                engineeringDecisions: 'Implemented defensive currency code resolution layers to reconcile mismatched ISO currency codes between geographic datasets and FX providers.',
                challenges: 'Intermittent latency or downtime from third-party exchange rate endpoints could cause webhook timeouts. Implemented strict HTTP client socket timeouts and fallback currency valuation heuristics.',
                status: 'Verified Implementation & Docker Service'
            }
        },
        {
            slug: 'country-currency-api',
            title: 'Country & Currency API',
            subtitle: 'High-Throughput REST Service & Dynamic Image Generator',
            badge: 'Backend & APIs',
            category: 'High-Throughput REST Platform',
            summary: 'A containerized Spring Boot REST API providing automated country and exchange rate data synchronization, multi-parameter querying, and real-time server-rendered statistical summary images.',
            technologies: ['Java 17', 'Spring Boot 3.1', 'H2 Database', 'Maven', 'Docker', 'Fly.io', 'Oracle Cloud', 'Java 2D Graphics'],
            highlightTitle: 'Key Engineering Highlight',
            highlight: 'Asynchronous background refresh (/api/countries/refresh), multi-criteria filtering, and on-the-fly server-side PNG rendering via Java 2D Graphics.',
            repo: 'https://github.com/aleeyutk/Stage2_country-api',
            caseStudy: {
                overview: 'A robust Spring Boot backend service that aggregates, indexes, and serves comprehensive country geographic and economic metrics with dynamic visual rendering.',
                problem: 'Applications displaying international demographic data often encounter rate limits from upstream providers and lack server-side dynamic graphic generation for sharing cards or embeds.',
                solution: 'Engineered a containerized REST service with scheduled background data refreshing, multi-parameter query filtering (country code, currency, population, estimated GDP), and dynamic server-side summary PNG generation via Java 2D Graphics.',
                architecture: 'Layered REST architecture with Spring Data JPA over a file-persisted H2 engine, OpenAPI 3 contract documentation, Docker container packaging, and automated Oracle Cloud Infrastructure deployment automation.',
                architectureFlow: {
                    caption: 'Data Sync, Query & Dynamic Rendering Pipeline',
                    steps: [
                        { num: '01. Sync', title: 'Scheduled Ingestion', sub: '/api/countries/refresh pulls upstream sources' },
                        { num: '02. Storage', title: 'Spring Data JPA', sub: 'Persistent H2 relational storage with indexes' },
                        { num: '03. REST Layer', title: 'Query Endpoints', sub: 'Multi-parameter filtering by GDP, population, code' },
                        { num: '04. Graphics', title: 'Java 2D Engine', sub: 'Server-side rasterization & dynamic layout' },
                        { num: '05. Egress', title: 'Binary PNG Stream', sub: '/api/countries/image direct card embeds' }
                    ],
                    crosscutting: 'Transactional boundaries ensure queries remain non-blocking during background dataset updates'
                },
                keyFeatures: [
                    'Scheduled and on-demand synchronization endpoint (/api/countries/refresh) aggregating global data',
                    'Multi-parameter filtering and sorting by ISO country codes, currency types, population ranges, and GDP',
                    'Dynamic Server-Side PNG Rendering Engine (/api/countries/image) built with Java 2D Graphics',
                    'Comprehensive health check and metric monitoring endpoint (/api/status)'
                ],
                engineeringDecisions: 'Generated binary PNG streams directly on the server with Java 2D Graphics, allowing clients and external platforms to embed dynamic statistical cards without requiring a headless browser or frontend rendering.',
                challenges: 'Coordinating background refresh operations without locking read queries during high API traffic. Implemented transactional JPA boundaries ensuring read queries remain non-blocking during background updates.',
                status: 'Verified Public GitHub Repository & Deployment Automation'
            }
        }
    ];

    // -------------------------------------------------------------------------
    // 3. ACADEMIC & RESEARCH ARCHIVE
    // -------------------------------------------------------------------------
    const ARCHIVE_PROJECTS = [
        {
            slug: 'hybrid-data-security',
            title: 'Hybrid Data Security Models',
            subtitle: 'Comparative Cryptography & LSB Steganography Study',
            badge: 'Academic Capstone',
            description: 'A desktop application and research paper evaluating two-tier data confidentiality by combining AES/DES cryptographic algorithms with Least Significant Bit (LSB) image steganography.',
            technologies: ['Java', 'Java Swing', 'AES Cryptography', 'DES Cryptography', 'LSB Steganography'],
            paperUrl: 'projects/MYProject.pdf',
            repoUrl: 'https://github.com/aleeyutk/final-year-project'
        }
    ];

    // -------------------------------------------------------------------------
    // 4. RENDER FLAGSHIP PROJECTS
    // -------------------------------------------------------------------------
    const flagshipGrid = document.getElementById('flagship-projects-grid');
    if (flagshipGrid) {
        flagshipGrid.innerHTML = '';
        FLAGSHIP_PROJECTS.forEach(project => {
            const card = document.createElement('article');
            card.className = 'project-card flagship-card';
            card.setAttribute('data-slug', project.slug);

            const techBadges = project.technologies
                .slice(0, 5)
                .map(t => `<span class="badge font-mono">${t}</span>`)
                .join('');
            
            const extraCount = project.technologies.length > 5 ? `<span class="badge font-mono">+${project.technologies.length - 5}</span>` : '';

            let actionsHTML = `
                <button type="button" class="btn btn-sm btn-primary view-case-btn" data-slug="${project.slug}">
                    <i class="fas fa-file-lines"></i> View Case Study
                </button>
            `;

            if (project.repo) {
                actionsHTML += `
                    <a href="${project.repo}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary" aria-label="GitHub Repository for ${project.title}">
                        <i class="fab fa-github"></i> Repository
                    </a>
                `;
            }

            card.innerHTML = `
                <div class="flagship-header">
                    <div class="flagship-topline">
                        <span class="badge badge-accent">${project.badge}</span>
                        <span class="flagship-category font-mono">${project.category}</span>
                    </div>
                    <h3 class="flagship-title">${project.title}</h3>
                    <div class="flagship-subtitle font-mono">${project.subtitle}</div>
                </div>

                <p class="flagship-summary">${project.summary}</p>

                <div class="flagship-highlight-box">
                    <div class="highlight-title font-mono"><i class="fas fa-microchip"></i> ${project.highlightTitle}</div>
                    <div class="highlight-text">${project.highlight}</div>
                </div>

                <div class="flagship-tech-stack">
                    <span class="tech-stack-label font-mono">STACK:</span>
                    <div class="tech-stack-tags">
                        ${techBadges}
                        ${extraCount}
                    </div>
                </div>

                <div class="flagship-actions">
                    ${actionsHTML}
                </div>
            `;

            flagshipGrid.appendChild(card);
        });

        // Attach click listener for "View Case Study" buttons
        flagshipGrid.querySelectorAll('.view-case-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const slug = this.getAttribute('data-slug');
                openCaseStudy(slug);
            });
        });
    }

    // -------------------------------------------------------------------------
    // 5. RENDER ARCHIVE PROJECTS
    // -------------------------------------------------------------------------
    const archiveGrid = document.getElementById('archive-projects-grid');
    if (archiveGrid) {
        archiveGrid.innerHTML = '';
        ARCHIVE_PROJECTS.forEach(proj => {
            const card = document.createElement('article');
            card.className = 'archive-card';
            
            const badges = proj.technologies
                .map(t => `<span class="badge font-mono">${t}</span>`)
                .join('');

            card.innerHTML = `
                <div class="archive-card-header">
                    <span class="badge">${proj.badge}</span>
                    <h4 class="archive-card-title">${proj.title}</h4>
                    <div class="archive-card-subtitle font-mono">${proj.subtitle}</div>
                </div>
                <p class="archive-card-desc">${proj.description}</p>
                <div class="archive-card-tags">${badges}</div>
                <div class="archive-card-links">
                    <a href="${proj.paperUrl}" target="_blank" rel="noopener noreferrer" class="link-subtle font-mono">
                        <i class="fas fa-file-pdf"></i> Read Research Paper
                    </a>
                    <a href="${proj.repoUrl}" target="_blank" rel="noopener noreferrer" class="link-subtle font-mono">
                        <i class="fab fa-github"></i> Repository
                    </a>
                </div>
            `;
            archiveGrid.appendChild(card);
        });
    }

    // Archive accordion toggle
    const toggleArchiveBtn = document.getElementById('toggle-archive-btn');
    const archiveContainer = document.getElementById('archive-projects-container');
    const archiveToggleText = document.getElementById('archive-toggle-text');

    if (toggleArchiveBtn && archiveContainer) {
        toggleArchiveBtn.addEventListener('click', function() {
            const isHidden = archiveContainer.style.display === 'none';
            archiveContainer.style.display = isHidden ? 'block' : 'none';
            this.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
            if (archiveToggleText) {
                archiveToggleText.textContent = isHidden ? 'Hide Research Paper' : 'View Research Paper';
            }
            const icon = this.querySelector('i');
            if (icon) {
                icon.className = isHidden ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
            }
        });
    }

    // -------------------------------------------------------------------------
    // 6. ACCESSIBLE CASE STUDY MODAL & ROUTING
    // -------------------------------------------------------------------------
    const modal = document.getElementById('case-study-modal');
    const modalBody = document.getElementById('modal-case-body');
    const modalEyebrow = document.getElementById('modal-case-eyebrow');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    let previousActiveElement = null;

    function openCaseStudy(slug) {
        const project = FLAGSHIP_PROJECTS.find(p => p.slug === slug);
        if (!project || !modal || !modalBody) return;

        previousActiveElement = document.activeElement;

        const cs = project.caseStudy;
        if (modalEyebrow) {
            modalEyebrow.textContent = `CASE STUDY • ${project.category.toUpperCase()}`;
        }

        const featureItems = cs.keyFeatures
            .map(f => `<li><i class="fas fa-check" style="color: var(--accent-primary); margin-top: 3px;"></i> <span>${f}</span></li>`)
            .join('');

        const allTechBadges = project.technologies
            .map(t => `<span class="badge font-mono">${t}</span>`)
            .join(' ');

        let linksHTML = '';
        if (project.repo) {
            linksHTML += `
                <a href="${project.repo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    <i class="fab fa-github"></i> Inspect Repository Code
                </a>
            `;
        } else if (project.repoNote) {
            linksHTML += `
                <div class="repo-note-badge font-mono">
                    <i class="fas fa-shield-halved"></i> ${project.repoNote}
                </div>
            `;
        }

        let architectureDiagramHTML = '';
        if (cs.architectureFlow) {
            const stepsHTML = cs.architectureFlow.steps.map((step, idx) => {
                const isLast = idx === cs.architectureFlow.steps.length - 1;
                const arrow = isLast ? '' : '<div class="arch-arrow"><i class="fas fa-arrow-right"></i></div>';
                return `
                    <div class="arch-step-node">
                        <span class="arch-step-num">${step.num}</span>
                        <div class="arch-step-title">${step.title}</div>
                        <div class="arch-step-sub">${step.sub}</div>
                    </div>
                    ${arrow}
                `;
            }).join('');

            const crosscuttingHTML = cs.architectureFlow.crosscutting ? `
                <div class="arch-crosscutting font-mono">
                    <i class="fas fa-network-wired"></i>
                    <span>${cs.architectureFlow.crosscutting}</span>
                </div>
            ` : '';

            architectureDiagramHTML = `
                <div class="case-arch-box">
                    <div class="case-arch-caption">
                        <i class="fas fa-diagram-project"></i> ${cs.architectureFlow.caption}
                    </div>
                    <div class="arch-flow">
                        ${stepsHTML}
                    </div>
                    ${crosscuttingHTML}
                </div>
            `;
        }

        modalBody.innerHTML = `
            <div class="case-study-hero">
                <span class="badge badge-accent">${project.badge}</span>
                <h2 id="modal-case-title" class="case-study-title">${project.title}</h2>
                <div class="case-study-subtitle font-mono">${project.subtitle}</div>
                <div class="case-study-tech-row">${allTechBadges}</div>
            </div>

            <div class="case-study-grid">
                <div class="case-study-section">
                    <h3 class="case-section-heading font-mono"><i class="fas fa-circle-info"></i> 1. OVERVIEW</h3>
                    <p class="case-section-body">${cs.overview}</p>
                </div>

                <div class="case-study-section">
                    <h3 class="case-section-heading font-mono"><i class="fas fa-triangle-exclamation"></i> 2. THE PROBLEM</h3>
                    <p class="case-section-body">${cs.problem}</p>
                </div>

                <div class="case-study-section">
                    <h3 class="case-section-heading font-mono"><i class="fas fa-lightbulb"></i> 3. THE SOLUTION</h3>
                    <p class="case-section-body">${cs.solution}</p>
                </div>

                <div class="case-study-section">
                    <h3 class="case-section-heading font-mono"><i class="fas fa-sitemap"></i> 4. SYSTEM ARCHITECTURE</h3>
                    <p class="case-section-body">${cs.architecture}</p>
                    ${architectureDiagramHTML}
                </div>

                <div class="case-study-section">
                    <h3 class="case-section-heading font-mono"><i class="fas fa-list-check"></i> 5. KEY IMPLEMENTED FEATURES</h3>
                    <ul class="case-feature-list">${featureItems}</ul>
                </div>

                <div class="case-study-section">
                    <h3 class="case-section-heading font-mono"><i class="fas fa-compass-drafting"></i> 6. ENGINEERING DECISIONS</h3>
                    <p class="case-section-body">${cs.engineeringDecisions}</p>
                </div>

                <div class="case-study-section">
                    <h3 class="case-section-heading font-mono"><i class="fas fa-bolt"></i> 7. CHALLENGES & RESOLUTIONS</h3>
                    <p class="case-section-body">${cs.challenges}</p>
                </div>

                <div class="case-study-section">
                    <h3 class="case-section-heading font-mono"><i class="fas fa-certificate"></i> 8. VERIFICATION STATUS</h3>
                    <div class="case-status-box">
                        <span class="badge badge-status font-mono">
                            <span class="badge-dot"></span> ${cs.status}
                        </span>
                        <div class="case-status-actions" style="margin-top: var(--space-4);">
                            ${linksHTML}
                        </div>
                    </div>
                </div>
            </div>
        `;

        modal.setAttribute('aria-hidden', 'false');
        modal.classList.add('is-active');
        document.body.style.overflow = 'hidden';

        if (history.pushState) {
            history.pushState(null, '', `#work/${slug}`);
        } else {
            window.location.hash = `work/${slug}`;
        }

        if (modalCloseBtn) {
            modalCloseBtn.focus();
        }
    }

    function closeCaseStudy() {
        if (!modal || modal.getAttribute('aria-hidden') === 'true') return;

        modal.setAttribute('aria-hidden', 'true');
        modal.classList.remove('is-active');
        document.body.style.overflow = '';

        if (history.pushState) {
            history.pushState(null, '', '#projects');
        } else {
            window.location.hash = 'projects';
        }

        if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
            previousActiveElement.focus();
        }
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeCaseStudy);
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeCaseStudy();
            }
        });
    }

    // Modal Keyboard Navigation (Escape & Focus Trap)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('is-active')) {
            closeCaseStudy();
            return;
        }

        if (e.key === 'Tab' && modal && modal.classList.contains('is-active')) {
            const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusable.length === 0) return;

            const firstFocusable = focusable[0];
            const lastFocusable = focusable[focusable.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
    });

    // Hash Route Handler (Deep linking e.g. #work/hexa-operations)
    function handleHashRoute() {
        const hash = window.location.hash;
        if (hash.startsWith('#work/')) {
            const slug = hash.replace('#work/', '').trim();
            openCaseStudy(slug);
        } else if (modal && modal.classList.contains('is-active')) {
            closeCaseStudy();
        }
    }

    window.addEventListener('hashchange', handleHashRoute);
    if (window.location.hash.startsWith('#work/')) {
        handleHashRoute();
    }

    // -------------------------------------------------------------------------
    // 7. CONTACT FORM (GitHub Pages Compatible — Direct Dispatch & Copy)
    // -------------------------------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const copyEmailBtn = document.getElementById('copy-email-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const subjectEl = document.getElementById('contact-subject');
            const subject = subjectEl ? subjectEl.value.trim() : 'Project Inquiry';
            const message = document.getElementById('contact-message').value.trim();

            if (!name || !email || !message) {
                if (formStatus) {
                    formStatus.innerHTML = `
                        <div class="form-status-alert error">
                            <i class="fas fa-exclamation-circle"></i> Please provide your name, email, and message.
                        </div>
                    `;
                }
                return;
            }

            const emailSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);
            const emailBody = encodeURIComponent(
                `Hello Aliyu,\n\n${message}\n\n---\nSender: ${name}\nReply-To: ${email}\nSent via portfolio (aleeyutk.github.io)`
            );
            const mailtoUrl = `mailto:aliyuatk@gmail.com?subject=${emailSubject}&body=${emailBody}`;

            // Trigger client email application
            window.location.href = mailtoUrl;

            // Display clear accessible status feedback
            if (formStatus) {
                formStatus.innerHTML = `
                    <div class="form-status-alert success">
                        <i class="fas fa-circle-check"></i>
                        <span>
                            Opening your default email client to send to <strong>aliyuatk@gmail.com</strong>.
                            If your client does not open automatically, you can email me directly at 
                            <a href="mailto:aliyuatk@gmail.com" class="link-subtle" style="text-decoration: underline;">aliyuatk@gmail.com</a>.
                        </span>
                    </div>
                `;
            }

            contactForm.reset();

            setTimeout(() => {
                if (formStatus) {
                    formStatus.innerHTML = '';
                }
            }, 10000);
        });
    }

    // Direct Email Copy Button
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', async function() {
            const email = 'aliyuatk@gmail.com';
            try {
                await navigator.clipboard.writeText(email);
                const originalHTML = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Copied to Clipboard!';
                this.classList.add('btn-copied');
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.classList.remove('btn-copied');
                }, 2500);
            } catch (err) {
                window.prompt('Copy email address:', email);
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Toggle resume preview
    const togglePreviewBtn = document.getElementById('toggle-preview');
    const resumePreview = document.querySelector('.resume-preview');
    if (togglePreviewBtn && resumePreview) {
        togglePreviewBtn.addEventListener('click', function() {
            resumePreview.classList.toggle('active');
            this.innerHTML = resumePreview.classList.contains('active') ? 
                '<i class="fas fa-eye-slash"></i> Hide Preview' : 
                '<i class="fas fa-eye"></i> Show Preview';
        });
    }

    // Mobile navigation drawer toggle
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function() {
            const isOpen = navLinks.classList.toggle('is-open');
            this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            this.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Close on navigation link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (navLinks.classList.contains('is-open')) {
                    navLinks.classList.remove('is-open');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });

        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
                navLinks.classList.remove('is-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                mobileToggle.focus();
            }
        });

        // Close when clicking outside of nav
        document.addEventListener('click', function(e) {
            if (navLinks.classList.contains('is-open') && !navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
                navLinks.classList.remove('is-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    if (themeToggle) {
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Check localStorage or preferred scheme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme === 'dark');
} else {
    setTheme(prefersDark.matches);
}

// Toggle theme on button click
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') !== 'dark';
        setTheme(isDark);
    });
}

// Watch for system theme changes
if (prefersDark.addEventListener) {
    prefersDark.addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches);
        }
    });
} else if (prefersDark.addListener) {
    prefersDark.addListener(e => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches);
        }
    });
}
