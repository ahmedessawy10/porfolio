export interface FeatureModule {
  name: string;
  features: string[];
}

export interface TechGroup {
  category: string;
  items: string[];
}

export interface Challenge {
  title: string;
  solution: string;
}

export interface GalleryImage {
  src: string;   // e.g. "/projects/mytip/1.png"
  caption: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  company: string;
  year: string;
  role: string;
  category: "full-stack" | "backend";
  status: "Production" | "In Progress" | "Completed";
  summary: string;
  about: string;
  // Card thumbnail — place at public/projects/{slug}/logo.png
  image?: string;
  // Gallery images — place at public/projects/{slug}/1.png, 2.png, ...
  gallery?: GalleryImage[];
  techGroups: TechGroup[];
  modules: FeatureModule[];
  highlights: { title: string; description: string }[];
  challenges: Challenge[];
  codePrivacy: string;
}

export const projects: ProjectDetail[] = [
  {
    slug: "ajjile",
    title: "Ajjile",
    company: "Apps Square",
    year: "2025 – Present",
    role: "Backend Developer",
    category: "backend",
    status: "Production",
    image: "/projects/ajjile/logo.png",
    gallery: [
      { src: "/projects/ajjile/1.png", caption: "Home" },
      { src: "/projects/ajjile/2.png", caption: "products list" },
      { src: "/projects/ajjile/3.png", caption: "product view" },
      { src: "/projects/ajjile/4.png", caption: "cart" },
      { src: "/projects/ajjile/5.png", caption: "orders" },
    ],
    summary:
      "HR and payroll management platform serving companies across Egypt — handling employee records, attendance, leave, and full payroll cycles.",
    about:
      "Ajjile is a comprehensive HR platform that automates the full employee lifecycle. I was responsible for the entire backend architecture using Laravel 12.x — designing the database schema, building the REST API, and integrating third-party services. The system supports multi-role access (Admin, HR Manager, Employee), attendance machine integration, automated payroll calculations, and real-time notifications. I also contributed to the React frontend for key admin dashboard views.",
    techGroups: [
      {
        category: "Backend",
        items: ["Laravel 12.x", "PHP 8.2", "REST API", "MySQL", "Eloquent ORM"],
      },
      {
        category: "Authentication & Authorization",
        items: ["Laravel Sanctum", "Spatie Permissions", "Role-Based Access Control"],
      },
      {
        category: "Integrations",
        items: ["HyperPay (Payments)", "Unifonic (SMS)", "Attendance Machine Integration"],
      },
      {
        category: "Architecture",
        items: ["Facade-Service Pattern", "Fractal Transformers", "Spatie Query Builder", "Events & Listeners"],
      },
      {
        category: "Frontend",
        items: ["React.js", "TypeScript", "Tailwind CSS"],
      },
    ],
    modules: [
      { name: "Authentication & Roles", features: ["Multi-role login (Admin, HR, Employee)", "Permission management", "Token-based sessions"] },
      { name: "Employee Management", features: ["Employee profiles", "Document uploads", "Contract management", "Status tracking"] },
      { name: "Attendance System", features: ["Attendance machine sync", "Manual attendance entry", "Monthly reports", "Absence tracking"] },
      { name: "Leave Management", features: ["Leave request flow", "Approval/rejection", "Leave balance tracking", "Leave types"] },
      { name: "Payroll Engine", features: ["Automated payroll calculation", "Deductions & bonuses", "Payslip generation", "Payroll history"] },
      { name: "Payments", features: ["HyperPay integration", "Payment records", "Invoice generation"] },
      { name: "Notifications", features: ["SMS via Unifonic", "In-app notifications", "Event-driven triggers"] },
      { name: "Admin Dashboard", features: ["Company overview", "Reports", "User management", "Audit logs"] },
    ],
    highlights: [
      { title: "Facade-Service Architecture", description: "Clean separation of concerns using Laravel Facades as static proxies over Service classes — keeping controllers thin and business logic isolated." },
      { title: "Multi-Role Access Control", description: "Granular permission system using Spatie Permissions with role-based middleware guards across all API endpoints." },
      { title: "Automated Payroll Engine", description: "Built a calculation engine handling salary components, deductions, bonuses, and payslip generation with configurable rules per company." },
      { title: "Attendance Machine Integration", description: "Synced physical attendance machines with the backend in real-time, normalizing raw punch data into attendance records." },
      { title: "Third-Party Integrations", description: "Integrated HyperPay for payment processing and Unifonic for SMS notifications with event-driven dispatch." },
      { title: "API-First Design", description: "All features exposed as versioned REST endpoints with consistent response structure using Fractal Transformers." },
    ],
    challenges: [
      {
        title: "Payroll Calculation Accuracy",
        solution: "Built a modular calculation pipeline where each salary component (base, overtime, deductions, tax) is processed as a separate step, making rules easy to configure per company without touching core logic.",
      },
      {
        title: "Attendance Machine Data Normalization",
        solution: "Different machine vendors output timestamps in inconsistent formats. Wrote a normalization layer that parses and validates raw punch data before inserting into the attendance table.",
      },
      {
        title: "Role Permission Conflicts",
        solution: "Used Spatie Permissions with a fallback hierarchy — permissions are checked at the route middleware level with a clear precedence chain (Super Admin > Admin > HR Manager > Employee).",
      },
      {
        title: "Concurrent Leave Request Conflicts",
        solution: "Implemented database-level locking on the leave balance row during approval to prevent race conditions when multiple requests are approved simultaneously.",
      },
    ],
    codePrivacy:
      "Source code is proprietary due to company policy, but architecture and implementation details are available for discussion.",
  },
  {
    slug: "mytip",
    title: "Mytip",
    company: "Apps Square",
    year: "2025",
    role: "Backend Developer",
    category: "backend",
    status: "Production",
    image: "/projects/mytip/logo.png",
    gallery: [
      { src: "/projects/mytip/1.png", caption: "MyTip Landing" },
      { src: "/projects/mytip/2.png", caption: "Role Selection" },
      { src: "/projects/mytip/3.png", caption: "Registration" },
      { src: "/projects/mytip/4.png", caption: "OTP Verification" },
      { src: "/projects/mytip/5.png", caption: "Home Dashboard" },
      { src: "/projects/mytip/6.png", caption: "QR Code Generation" },
      { src: "/projects/mytip/7.png", caption: "QR Scanner" },
      { src: "/projects/mytip/8.png", caption: "Tip Amount" },
      { src: "/projects/mytip/9.png", caption: "Transaction Review" },
      { src: "/projects/mytip/10.png", caption: "Wallet Management" },
      { src: "/projects/mytip/11.png", caption: "Transaction History" },
      { src: "/projects/mytip/12.png", caption: "Social Links" },
      { src: "/projects/mytip/13.png", caption: "Profile Settings" },
      { src: "/projects/mytip/14.png", caption: "Notifications" },
    ],
    summary:
      "Digital tipping platform supporting QR code scanning, live streaming, and multi-currency wallet management.",
    about:
      "Mytip is a fintech platform that lets users tip service workers digitally via QR codes or during live streams. I built the entire backend from scratch: authentication, tip transaction flows, wallet management with real-time balance updates, multi-currency support, and payment gateway webhooks. The system handles high-concurrency tip events during live sessions and ensures transactional integrity across wallet operations.",
    techGroups: [
      {
        category: "Backend",
        items: ["Laravel 12.x", "PHP 8.2", "REST API", "MySQL"],
      },
      {
        category: "Authentication",
        items: ["Laravel Sanctum", "OTP Verification", "Social Login"],
      },
      {
        category: "Payments",
        items: ["Payment Webhooks", "Multi-Currency Support", "Escrow Wallet Logic"],
      },
      {
        category: "Real-time",
        items: ["Live Stream Tip Events", "Real-time Balance Updates", "Event Broadcasting"],
      },
      {
        category: "Architecture",
        items: ["Facade-Service Pattern", "Fractal Transformers", "Events & Listeners", "Queue Jobs"],
      },
    ],
    modules: [
      { name: "Authentication", features: ["OTP-based registration", "Social login", "Token management", "Session control"] },
      { name: "Tip Transactions", features: ["QR code tip flow", "Live stream tipping", "Tip history", "Tip receipts"] },
      { name: "Wallet System", features: ["Wallet balance", "Top-up via payment gateway", "Withdrawal requests", "Transaction history"] },
      { name: "Payment Integration", features: ["Payment gateway webhooks", "Refund handling", "Multi-currency conversion", "Payout processing"] },
      { name: "QR Code System", features: ["QR generation per user", "QR scanning tip flow", "Deep link handling"] },
      { name: "Live Streaming", features: ["Real-time tip events during streams", "Leaderboard", "Session tip totals"] },
    ],
    highlights: [
      { title: "Transactional Wallet Safety", description: "All wallet operations run inside database transactions with pessimistic locking to prevent double-spend and race conditions during concurrent tip events." },
      { title: "Webhook-Driven Payment Flow", description: "Payment confirmations handled entirely via webhooks — idempotent processing with duplicate-event protection using stored webhook event IDs." },
      { title: "Real-time Tip Events", description: "Live stream tipping uses event broadcasting to push tip notifications to the stream host in real time without polling." },
      { title: "Multi-Currency Support", description: "Built a configurable currency conversion layer that normalizes all wallet amounts to a base currency while preserving original transaction currency for display." },
      { title: "Queue-Based Processing", description: "Heavy operations (payout processing, notification dispatch) offloaded to queued jobs to keep API response times fast." },
    ],
    challenges: [
      {
        title: "Race Conditions on Wallet Balance",
        solution: "Applied pessimistic locking (SELECT FOR UPDATE) on the wallet row for every debit operation, wrapped in a database transaction — guaranteeing balance consistency under concurrent tip events.",
      },
      {
        title: "Duplicate Webhook Events",
        solution: "Stored each processed webhook event ID in a deduplicated events table. Before processing, check for the ID — if already present, skip and return 200 immediately.",
      },
      {
        title: "Live Stream Tip Latency",
        solution: "Decoupled tip persistence from notification dispatch using queued events — the tip is saved synchronously then the broadcast job fires asynchronously via queue worker.",
      },
    ],
    codePrivacy:
      "Source code is proprietary due to company policy, but architecture and implementation details are available for discussion.",
  },
  {
    slug: "lifecare25",
    title: "Lifecare25",
    company: "Apps Square",
    year: "2025",
    role: "Backend Developer",
    category: "backend",
    status: "Production",
    image: "/projects/lifecare25/logo.png",
    gallery: [
      { src: "/projects/lifecare25/1.png", caption: "Service Image" },
      { src: "/projects/lifecare25/2.png", caption: "Service Listing" },
      { src: "/projects/lifecare25/3.png", caption: "Healthcare Service" },
      { src: "/projects/lifecare25/4.png", caption: "Doctor Profile" },
      { src: "/projects/lifecare25/5.png", caption: "Service Booking" },
      { src: "/projects/lifecare25/6.png", caption: "payment" },
      { src: "/projects/lifecare25/7.png", caption: "call " },
      { src: "/projects/lifecare25/8.png", caption: "Service Card" },
    ],
    summary:
      "Healthcare appointment and service booking platform connecting patients with medical providers.",
    about:
      "Lifecare25 is a healthcare platform where patients book appointments with doctors and service providers. I designed and built the entire backend API: patient and provider onboarding, appointment scheduling with conflict detection, availability calendars, media management for medical documents, a notification system, and admin reporting. The API is consumed by both a mobile app and a web dashboard.",
    techGroups: [
      {
        category: "Backend",
        items: ["Laravel", "PHP 8.2", "REST API", "MySQL"],
      },
      {
        category: "Authentication",
        items: ["Laravel Sanctum", "Role-Based Access (Patient, Provider, Admin)"],
      },
      {
        category: "Media & Storage",
        items: ["Spatie Media Library", "File Uploads", "Document Management"],
      },
      {
        category: "Architecture",
        items: ["Facade-Service Pattern", "Fractal Transformers", "Spatie Query Builder", "Events & Listeners"],
      },
    ],
    modules: [
      { name: "Authentication", features: ["Patient registration", "Provider registration", "Admin login", "Role guards"] },
      { name: "Appointment Scheduling", features: ["Provider availability calendar", "Conflict detection", "Booking flow", "Cancellation & rescheduling"] },
      { name: "Provider Management", features: ["Profile management", "Specialization", "Media uploads", "Availability settings"] },
      { name: "Patient Management", features: ["Patient profiles", "Medical history", "Appointment history", "Document uploads"] },
      { name: "Notifications", features: ["Appointment reminders", "Status change alerts", "In-app notifications"] },
      { name: "Admin Reporting", features: ["Appointment statistics", "Provider performance", "Revenue reports", "User analytics"] },
    ],
    highlights: [
      { title: "Conflict-Free Scheduling", description: "Appointment creation runs a slot-overlap check against the provider's calendar before confirming, preventing double-bookings at the database query level." },
      { title: "Media Management", description: "Used Spatie Media Library for structured file storage — patients and providers can upload documents, images, and reports with automatic collection organization." },
      { title: "Multi-Role API", description: "Single API serving Patient, Provider, and Admin roles — each with separate endpoint groups, middleware guards, and scoped data access." },
      { title: "Fractal Transformers", description: "Consistent API response shape across all endpoints using Fractal Transformers — summary vs. detail views controlled via transformer type parameter." },
    ],
    challenges: [
      {
        title: "Appointment Overlap Detection",
        solution: "Wrote a reusable availability query that checks for any overlapping bookings in the provider's schedule using a time-range overlap condition, called atomically with the insert.",
      },
      {
        title: "Multi-Role Data Isolation",
        solution: "Applied scoped query macros per role — patients only see their own data, providers see their assigned appointments, admins see everything. Enforced at the Service layer, not the controller.",
      },
    ],
    codePrivacy:
      "Source code is proprietary due to company policy, but architecture and implementation details are available for discussion.",
  },
  {
    slug: "eksel",
    title: "Eksel",
    company: "Apps Square",
    year: "2025",
    role: "Backend Developer",
    category: "backend",
    status: "Production",
    image: "/projects/eksel/logo.png",
    gallery: [
      { src: "/projects/eksel/1.png", caption: "Service Listings" },
      { src: "/projects/eksel/2.png", caption: "Bidding System" },
      { src: "/projects/eksel/3.png", caption: "Order Lifecycle" },
      { src: "/projects/eksel/4.png", caption: "Payment Flow" },
      { src: "/projects/eksel/5.png", caption: "Reviews & Ratings" },
    ],
    summary:
      "Freelance marketplace connecting clients with skilled workers — with bidding, order lifecycle, and escrow payment flow.",
    about:
      "Eksel is a freelance platform where clients post service requests and workers submit bids. I engineered the full backend: service listings, the bidding system, complete order lifecycle (pending → active → review → complete), an escrow-style payment hold-and-release flow, a review and rating system, and event-driven notifications throughout the workflow.",
    techGroups: [
      {
        category: "Backend",
        items: ["Laravel", "PHP 8.2", "REST API", "MySQL"],
      },
      {
        category: "Authentication",
        items: ["Laravel Sanctum", "Client / Worker Roles"],
      },
      {
        category: "Data Layer",
        items: ["Spatie Query Builder", "Eloquent ORM", "Database Transactions"],
      },
      {
        category: "Architecture",
        items: ["Facade-Service Pattern", "Events & Listeners", "Queue Jobs", "Fractal Transformers"],
      },
    ],
    modules: [
      { name: "Authentication", features: ["Client registration", "Worker registration", "Role separation", "Profile setup"] },
      { name: "Service Listings", features: ["Service creation", "Category filtering", "Search & sort", "Service media"] },
      { name: "Bidding System", features: ["Bid submission", "Bid negotiation", "Bid acceptance", "Counter-offers"] },
      { name: "Order Lifecycle", features: ["Order creation on bid accept", "Status transitions", "Delivery submission", "Revision requests"] },
      { name: "Payment Flow", features: ["Escrow hold on order creation", "Release on completion", "Dispute handling", "Refund flow"] },
      { name: "Reviews & Ratings", features: ["Post-completion reviews", "Star ratings", "Worker rating aggregation"] },
      { name: "Notifications", features: ["Bid alerts", "Order status updates", "Payment notifications", "Review requests"] },
    ],
    highlights: [
      { title: "Escrow Payment Safety", description: "Payment is held in escrow when an order is created and only released to the worker after the client marks delivery as accepted — protecting both parties." },
      { title: "Order State Machine", description: "Order lifecycle modeled as explicit state transitions (pending → active → delivered → revision → completed/disputed) with guards preventing invalid transitions." },
      { title: "Event-Driven Notifications", description: "Every status change fires a domain event; listeners dispatch the appropriate notification (SMS, push, in-app) without coupling the core logic to notification concerns." },
      { title: "Filterable Listings", description: "Service listings support multi-dimensional filtering (category, price range, rating, delivery time) using Spatie Query Builder with allowed filter whitelisting." },
    ],
    challenges: [
      {
        title: "Concurrent Bid Acceptance",
        solution: "Wrapped bid acceptance in a transaction with a lock on the service request row — only one bid can be accepted, and the row is locked until the order is created.",
      },
      {
        title: "Escrow Release Integrity",
        solution: "Release is a two-step transaction: mark order complete, then credit worker wallet. If the wallet credit fails, the transaction rolls back and the order stays in 'delivered' state for retry.",
      },
      {
        title: "Invalid State Transition Prevention",
        solution: "Built an allowed-transitions map per order status. The Service layer checks the current status against allowed next states before applying any update — returning a 422 for invalid transitions.",
      },
    ],
    codePrivacy:
      "Source code is proprietary due to company policy, but architecture and implementation details are available for discussion.",
  },
  {
    slug: "crepe",
    title: "Crepe & Waffle",
    company: "Apps Square",
    year: "2025 – 2026",
    role: "Backend Developer",
    category: "backend",
    status: "Production",
    image: "/projects/crepe/1.svg",
    gallery: [
      { src: "/projects/crepe/2.svg", caption: "Home & Discovery" },
      { src: "/projects/crepe/3.svg", caption: "Product Menu" },
      { src: "/projects/crepe/4.svg", caption: "Shopping Cart" },
      { src: "/projects/crepe/5.svg", caption: "Checkout Flow" },
      { src: "/projects/crepe/6.svg", caption: "Order Tracking" },
      { src: "/projects/crepe/7.svg", caption: "Loyalty Points" },
      { src: "/projects/crepe/8.svg", caption: "Branch Locator" },
      { src: "/projects/crepe/9.svg", caption: "User Profile" },
      { src: "/projects/crepe/10.svg", caption: "Review System" },
      { src: "/projects/crepe/11.svg", caption: "Promo Codes" },
      { src: "/projects/crepe/12.svg", caption: "Notifications" },
      { src: "/projects/crepe/13.svg", caption: "Settings" },
    ],
    summary:
      "High-traffic food ordering platform for a restaurant chain — with real-time driver tracking, ERP integration, and loyalty system.",
    about:
      "Crepe & Waffle is a production food ordering platform for a restaurant chain operating across multiple cities in Egypt. I led backend development using Laravel 12.x: order and delivery management with real-time driver location sync, ERP system integration for inventory and menu management, multi-branch support, loyalty points program, and multi-payment gateway integration. The backend serves a mobile app and a web ordering interface.",
    techGroups: [
      {
        category: "Backend",
        items: ["Laravel 12.x", "PHP 8.2", "REST API", "MySQL"],
      },
      {
        category: "Authentication",
        items: ["Laravel Sanctum", "OTP Login", "Social Auth"],
      },
      {
        category: "Integrations",
        items: ["ERP System Integration", "Real-time Tracking", "Payment Gateways", "Push Notifications"],
      },
      {
        category: "Architecture",
        items: ["Facade-Service Pattern", "Fractal Transformers", "Events & Listeners", "Queue Jobs"],
      },
    ],
    modules: [
      { name: "Authentication", features: ["OTP-based login", "Social auth", "Guest checkout", "Session management"] },
      { name: "Menu & Catalog", features: ["Dynamic menu from ERP", "Category management", "Product customization", "Availability control"] },
      { name: "Order Management", features: ["Cart & checkout", "Order placement", "Status tracking", "Order history"] },
      { name: "Real-Time Delivery", features: ["Driver assignment", "Live location tracking", "ETA calculation", "Delivery status sync"] },
      { name: "Multi-Branch", features: ["Branch selection", "Branch-level inventory", "Delivery zone mapping", "Operating hours"] },
      { name: "Loyalty System", features: ["Points accumulation", "Points redemption", "Tier levels", "Rewards catalog"] },
      { name: "Payments", features: ["Multi-gateway support", "Payment status webhooks", "Refund handling", "Wallet top-up"] },
      { name: "ERP Integration", features: ["Menu sync from ERP", "Inventory updates", "Order push to ERP", "Real-time data sync"] },
    ],
    highlights: [
      { title: "ERP Real-Time Sync", description: "Menu items, pricing, and inventory are synced from the ERP system in real time — changes in ERP propagate to the app without manual intervention." },
      { title: "Live Driver Tracking", description: "Driver location updates pushed to the backend via a lightweight polling mechanism, stored and served to customers through the order tracking endpoint." },
      { title: "Multi-Branch Architecture", description: "Each branch has its own inventory, operating hours, and delivery zones — order routing logic determines the correct branch based on customer location." },
      { title: "Loyalty Engine", description: "Points are awarded and redeemed via configurable rules — earn rate per order value, redemption thresholds, and tier upgrades handled by a dedicated service." },
      { title: "Queue-Based Order Processing", description: "Order creation triggers a queue job chain — ERP notification, driver assignment, push notification — keeping the checkout API response fast." },
    ],
    challenges: [
      {
        title: "ERP Sync Consistency",
        solution: "Used a scheduled job to pull ERP data diffs every few minutes, with a hash comparison to detect changes — only updating records that actually changed to minimize database writes.",
      },
      {
        title: "Branch Selection Accuracy",
        solution: "Delivery zone boundaries stored as polygon coordinates. Customer address is checked against each active branch's polygon using a geo-query to find the correct serving branch.",
      },
      {
        title: "Driver Tracking Overhead",
        solution: "Driver location updates batched every 5 seconds client-side and stored in a separate high-write table — reads served from a cached snapshot refreshed on each batch write.",
      },
    ],
    codePrivacy:
      "Source code is proprietary due to company policy, but architecture and implementation details are available for discussion.",
  },
  {
    slug: "aeon",
    title: "Aeon — HIC System",
    company: "Istrotech Tech",
    year: "2024 – 2025",
    role: "Full-Stack Developer",
    category: "full-stack",
    status: "Completed",
    image: "/projects/aeon/logo.png",
    gallery: [
      { src: "/projects/aeon/1.png", caption: "Dashboard" },
      { src: "/projects/aeon/2.png", caption: "Assets" },
      { src: "/projects/aeon/3.png", caption: "Work Orders" },
    ],
    summary:
      "Enterprise Healthcare Infrastructure & Compliance (HIC) system — full facility, asset, and maintenance management platform for hospitals and large institutions.",
    about:
      "Aeon is an enterprise-grade facility and asset management system (CAFM/CMMS) built for healthcare institutions and large facilities. I worked as a Full-Stack Developer on this project at Istrotech Tech, contributing to both the Laravel backend and the frontend. The system manages the complete lifecycle of assets, maintenance tickets, work orders, contracts, inventory, and labor — with a modular architecture spanning 20+ domain modules. The backend uses a module-based Laravel architecture with Fractal serialization, DataTables integration, activity logging, QR code generation, Excel import/export, and a dynamic role-permission system.",
    techGroups: [
      {
        category: "Backend",
        items: ["Laravel 12.x", "PHP 8.2", "REST API", "MySQL", "Module-Based Architecture"],
      },
      {
        category: "Authentication & Authorization",
        items: ["Laravel Sanctum", "Role-Based Permissions Middleware", "Dynamic Route Authorization via DB"],
      },
      {
        category: "Data & Reporting",
        items: ["Spatie Laravel Fractal", "Yajra DataTables", "Maatwebsite Excel", "Spatie Activity Log"],
      },
      {
        category: "Integrations & Utilities",
        items: ["QR Code Generation", "Formio Dynamic Forms", "Spatie Sluggable", "Guzzle HTTP Client"],
      },
      {
        category: "Architecture",
        items: ["CommonController CRUD Trait", "Module-Based Structure", "Response Handlers", "Cron Jobs", "Fractal Serializers"],
      },
    ],
    modules: [
      { name: "Asset Management", features: ["Asset item catalog with ECRI data", "Risk classification", "Medical equipment tracking", "Calibration & PM frequency", "QR code per asset", "GS1 coding support"] },
      { name: "Ticket Management", features: ["Maintenance ticket creation", "Priority & status tracking", "Attachment support", "Convert ticket to work order", "Preventive maintenance links", "Notification on status change"] },
      { name: "Work Order Management", features: ["Full workflow: Created → Active → Finished → Signed Off → Closed", "Technician assignment", "Cost tracking", "Approval workflows", "Re-open capability", "Cron-based pending/skipped handling"] },
      { name: "Facility & Room Management", features: ["Hierarchy: Facility → Building → Floor → Room → Item", "Asset assignment to room items", "Department mapping", "Warehouse and location tracking", "QR code generation for rooms"] },
      { name: "Contract Management", features: ["Service & supply contracts", "SLA tracking (response/repair/uptime)", "Coverage types", "Penalty & grace period", "Contract value and date ranges"] },
      { name: "Inventory Management", features: ["Warehouse inventory tracking", "Physical inventory audit (InventoryTaking)", "Spare parts management", "Category-warehouse mapping"] },
      { name: "Customer & Supplier", features: ["Primary and sub-customer hierarchy", "Industry classification", "Supplier/manufacturer management", "Vendor ranking", "Contact info and logo storage"] },
      { name: "Labor & Projects", features: ["Labor resource allocation", "Project planning & phases", "Stage and status tracking", "Facility-based project mapping"] },
      { name: "System & Settings", features: ["Dynamic pages/menu from DB", "Role-based permission middleware", "Multi-language (EN/AR)", "Formio dynamic form templates", "Activity logging on all models"] },
    ],
    highlights: [
      { title: "20+ Domain Modules", description: "System organized into 20+ feature modules (Asset, Ticket, WorkOrder, Contract, Facility, Inventory, etc.) — each with its own Controller, Model, ResponseHandler, and DataTables columns config." },
      { title: "CommonController CRUD Trait", description: "A shared base controller with a Crud trait handles standard list/show/store/update/delete for all modules — eliminating boilerplate while keeping each module customizable." },
      { title: "Activity Logging on All Models", description: "Every model change is automatically logged via Spatie Activity Log for full audit trails — critical for healthcare compliance requirements." },
      { title: "Work Order State Machine", description: "Work orders follow a strict status workflow (Created → Active → Finished → Signed Off → Closed) with cron jobs automating transitions for pending and skipped states." },
      { title: "Dynamic Role Authorization", description: "Routes and permissions are stored in the Page model — the Permissions middleware resolves access dynamically from the database, enabling no-code role configuration." },
      { title: "DataTables + Fractal Integration", description: "All listing endpoints support server-side DataTables with Fractal serialization — column-level search, sorting, date-range filtering, and pagination handled uniformly." },
      { title: "QR Code Tracking", description: "QR codes generated per asset and room, enabling scan-to-view in the field — QR images served as files from storage with dedicated endpoints." },
      { title: "Excel Import/Export", description: "Bulk data operations supported via Maatwebsite Excel — used for asset imports, inventory taking, and report exports across multiple modules." },
    ],
    challenges: [
      {
        title: "Managing 20+ Modules Without Code Duplication",
        solution: "Built a CommonController with a Crud trait that all modules extend. Each module only overrides what's unique (validation rules, relationships, column config) — the base handles 80% of CRUD logic.",
      },
      {
        title: "Dynamic Route Permissions Without Hardcoding",
        solution: "Stored all route-permission mappings in the Page database table. The Permissions middleware looks up the current route at runtime and checks the authenticated user's roles — no permission constants scattered in code.",
      },
      {
        title: "Work Order Cron Reliability",
        solution: "Pending and skipped work order transitions run via dedicated Artisan commands scheduled in the kernel. Each cron is idempotent — safe to re-run if a previous execution failed.",
      },
      {
        title: "Multi-Language Consistency Across Modules",
        solution: "A Language middleware reads the request's Accept-Language header and sets the app locale globally — all model labels, enum values, and response messages resolve through Laravel's translation system.",
      },
      {
        title: "Handling Base64 File Uploads at Scale",
        solution: "All file uploads use Base64-encoded payloads validated via the crazybooot/base64-validation package. Files are decoded server-side, stored in an organized folder structure, and referenced by path.",
      },
    ],
    codePrivacy:
      "Source code is proprietary to Istrotech Tech, but system architecture, module design, and implementation details are available for discussion.",
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((p) => p.slug === slug);
}
