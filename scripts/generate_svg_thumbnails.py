import os

thumbnails = {
    "demo-ecommerce.svg": {
        "title": "E-Commerce Platform",
        "subtitle": "Next.js • Tailwind • Cart State",
        "badge": "CONCEPT DEMO",
        "color1": "#0284C7",
        "color2": "#06B6D4",
        "icon": "shopping-cart",
        "content_type": "store"
    },
    "demo-chatbot.svg": {
        "title": "AI Support Assistant",
        "subtitle": "Conversational UI • Natural Language",
        "badge": "CONCEPT DEMO",
        "color1": "#10B981",
        "color2": "#14B8A6",
        "icon": "bot",
        "content_type": "chat"
    },
    "demo-portfolio.svg": {
        "title": "Developer Portfolio",
        "subtitle": "Modern Typography • Glassmorphism",
        "badge": "CONCEPT DEMO",
        "color1": "#8B5CF6",
        "color2": "#6366F1",
        "icon": "sparkles",
        "content_type": "layout"
    },
    "demo-taskmanager.svg": {
        "title": "Taskflow Kanban Board",
        "subtitle": "Workflow Management • Interactive Columns",
        "badge": "CONCEPT DEMO",
        "color1": "#F59E0B",
        "color2": "#D97706",
        "icon": "kanban",
        "content_type": "kanban"
    },
    "demo-mobile.svg": {
        "title": "Mobile App UI",
        "subtitle": "React Native • Cross-Platform",
        "badge": "CONCEPT DEMO",
        "color1": "#EC4899",
        "color2": "#F43F5E",
        "icon": "mobile",
        "content_type": "mobile"
    },
    "demo-python.svg": {
        "title": "Python Automation Hub",
        "subtitle": "Data Pipeline • File Processing",
        "badge": "CONCEPT DEMO",
        "color1": "#3B82F6",
        "color2": "#1D4ED8",
        "icon": "terminal",
        "content_type": "code"
    },
    "real-ledger.svg": {
        "title": "Ledger Management System",
        "subtitle": "Double-entry Tracking • Balance Audit",
        "badge": "REAL PROJECT",
        "color1": "#059669",
        "color2": "#10B981",
        "icon": "book",
        "content_type": "finance"
    },
    "real-hr.svg": {
        "title": "HR Management Portal",
        "subtitle": "Employee Records • Department Workflows",
        "badge": "REAL PROJECT",
        "color1": "#6366F1",
        "color2": "#8B5CF6",
        "icon": "users",
        "content_type": "dashboard"
    },
    "real-school.svg": {
        "title": "School Management System",
        "subtitle": "Academics • Student Lifecycle",
        "badge": "REAL PROJECT",
        "color1": "#0EA5E9",
        "color2": "#38BDF8",
        "icon": "graduation",
        "content_type": "education"
    },
    "real-ecommerce.svg": {
        "title": "Commercial Web Store",
        "subtitle": "Full-Stack Retail • Order Processing",
        "badge": "REAL PROJECT",
        "color1": "#F97316",
        "color2": "#FB923C",
        "icon": "bag",
        "content_type": "storefront"
    },
    "real-chatbot.svg": {
        "title": "Conversational AI Chatbot",
        "subtitle": "Customer Support Automation • Python",
        "badge": "REAL PROJECT",
        "color1": "#10B981",
        "color2": "#059669",
        "icon": "bot",
        "content_type": "chat"
    }
}

os.makedirs(os.path.join("public", "images", "projects"), exist_ok=True)

def generate_svg(filename, data):
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-{filename}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="50%" stop-color="#1E293B" />
      <stop offset="100%" stop-color="#090D16" />
    </linearGradient>
    <linearGradient id="accent-{filename}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{data['color1']}" />
      <stop offset="100%" stop-color="{data['color2']}" />
    </linearGradient>
    <linearGradient id="glass-{filename}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.02" />
    </linearGradient>
    <filter id="glow-{filename}" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect width="800" height="480" fill="url(#bg-{filename})" />

  <!-- Ambient Light Orbs -->
  <circle cx="700" cy="80" r="140" fill="{data['color1']}" opacity="0.18" filter="url(#glow-{filename})" />
  <circle cx="100" cy="400" r="160" fill="{data['color2']}" opacity="0.12" filter="url(#glow-{filename})" />

  <!-- Grid overlay -->
  <g opacity="0.07" stroke="#94A3B8" stroke-width="1">
    <path d="M 0,80 L 800,80 M 0,160 L 800,160 M 0,240 L 800,240 M 0,320 L 800,320 M 0,400 L 800,400" />
    <path d="M 160,0 L 160,480 M 320,0 L 320,480 M 480,0 L 480,480 M 640,0 L 640,480" />
  </g>

  <!-- Main Showcase Container Window -->
  <rect x="50" y="45" width="700" height="390" rx="16" fill="url(#glass-{filename})" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />
  
  <!-- Window Header Bar -->
  <rect x="50" y="45" width="700" height="46" rx="16" fill="rgba(15, 23, 42, 0.7)" />
  <circle cx="78" cy="68" r="6" fill="#EF4444" opacity="0.8" />
  <circle cx="98" cy="68" r="6" fill="#F59E0B" opacity="0.8" />
  <circle cx="118" cy="68" r="6" fill="#10B981" opacity="0.8" />
  
  <!-- Status Badge -->
  <rect x="570" y="56" width="160" height="24" rx="12" fill="{data['color1']}" fill-opacity="0.2" stroke="{data['color1']}" stroke-width="1" />
  <text x="650" y="72" fill="#F8FAFC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" letter-spacing="1">{data['badge']}</text>

  <!-- Left Side: Title & Info -->
  <text x="90" y="160" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800">{data['title']}</text>
  <text x="90" y="195" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="500">{data['subtitle']}</text>

  <!-- Technology Badges -->
  <g transform="translate(90, 230)">
    <rect x="0" y="0" width="85" height="28" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
    <text x="42.5" y="18" fill="#CBD5E1" font-family="sans-serif" font-size="11" font-weight="600" text-anchor="middle">Full Stack</text>

    <rect x="95" y="0" width="85" height="28" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
    <text x="137.5" y="18" fill="#CBD5E1" font-family="sans-serif" font-size="11" font-weight="600" text-anchor="middle">Responsive</text>

    <rect x="190" y="0" width="75" height="28" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
    <text x="227.5" y="18" fill="#CBD5E1" font-family="sans-serif" font-size="11" font-weight="600" text-anchor="middle">Modern</text>
  </g>

  <!-- Visual Mockup Panel (Right Side) -->
  <g transform="translate(420, 120)">
    <rect width="290" height="270" rx="12" fill="rgba(15, 23, 42, 0.85)" stroke="{data['color1']}" stroke-width="1.2" stroke-opacity="0.4" />
    <rect x="16" y="16" width="258" height="18" rx="4" fill="rgba(255,255,255,0.05)" />
    
    <!-- Inner mockup cards / visual structure -->
    <rect x="16" y="46" width="120" height="85" rx="8" fill="url(#accent-{filename})" opacity="0.15" stroke="{data['color1']}" stroke-width="1" stroke-opacity="0.5" />
    <rect x="148" y="46" width="126" height="85" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
    
    <rect x="16" y="145" width="258" height="42" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
    <circle cx="38" cy="166" r="10" fill="{data['color1']}" opacity="0.7" />
    <rect x="60" y="160" width="120" height="6" rx="3" fill="#94A3B8" opacity="0.7" />
    <rect x="60" y="171" width="80" height="5" rx="2" fill="#64748B" opacity="0.5" />

    <rect x="16" y="200" width="258" height="50" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
    <circle cx="38" cy="225" r="10" fill="{data['color2']}" opacity="0.7" />
    <rect x="60" y="219" width="140" height="6" rx="3" fill="#94A3B8" opacity="0.7" />
    <rect x="60" y="230" width="90" height="5" rx="2" fill="#64748B" opacity="0.5" />
  </g>

  <!-- Accent glow bottom line -->
  <line x1="50" y1="435" x2="750" y2="435" stroke="url(#accent-{filename})" stroke-width="2" opacity="0.7" />
</svg>"""

    path = os.path.join("public", "images", "projects", filename)
    with open(path, "w", encoding="utf-8") as f:
        f.write(svg)
    print(f"Generated {path}")

for filename, data in thumbnails.items():
    generate_svg(filename, data)
