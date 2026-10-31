"""
Generate a professional, ATS-friendly, 2-page PDF resume for Ayesha Tahir.
Uses ReportLab with high-fidelity typography, clean sections, and exact real details.
"""

import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    HRFlowable,
    KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_resume(output_path: str):
    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    
    # 0.5 inch margins for optimal ATS layout and space utilization
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    # Color Palette: Midnight Navy + Lavender Theme (#101426, #6D28D9, #A78BFA, #777E91)
    PRIMARY = colors.HexColor("#101426")     # Midnight Navy
    SECONDARY = colors.HexColor("#6D28D9")   # Lavender / Violet Accent
    TEXT_DARK = colors.HexColor("#1A1E33")   # Dark Navy Text
    TEXT_MUTED = colors.HexColor("#555A6E")  # Slate Muted Text
    LINE_COLOR = colors.HexColor("#D8D4EE")  # Soft Lavender Line
    BG_LIGHT = colors.HexColor("#F6F5FD")    # Subtle Lavender Tint

    styles = getSampleStyleSheet()

    # Custom Typography Styles
    title_style = ParagraphStyle(
        'HeaderTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=PRIMARY,
        alignment=TA_CENTER
    )

    subtitle_style = ParagraphStyle(
        'HeaderSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=SECONDARY,
        alignment=TA_CENTER
    )

    contact_style = ParagraphStyle(
        'HeaderContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=TEXT_MUTED,
        alignment=TA_CENTER
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=PRIMARY,
        spaceBefore=8,
        spaceAfter=3,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=TEXT_DARK
    )

    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=TEXT_DARK,
        leftIndent=14,
        firstLineIndent=-10
    )

    bold_item = ParagraphStyle(
        'BoldItem',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        textColor=TEXT_DARK
    )

    meta_style = ParagraphStyle(
        'MetaStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9,
        leading=13,
        textColor=TEXT_MUTED,
        alignment=TA_RIGHT
    )

    story = []

    # ------------------ HEADER ------------------
    story.append(Paragraph("AYESHA TAHIR", title_style))
    story.append(Spacer(1, 3))
    story.append(Paragraph("Full Stack Developer | AI Chatbot Developer", subtitle_style))
    story.append(Spacer(1, 4))
    
    contact_text = (
        "Email: ayeshatahirshehbaz@gmail.com  |  "
        "Phone: 03286140499  |  "
        "Location: Pakistan  |  "
        "LinkedIn: linkedin.com/in/ayesha-tahir-918448383"
    )
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=1.5, color=PRIMARY, spaceBefore=2, spaceAfter=8))

    # ------------------ PROFESSIONAL SUMMARY ------------------
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=LINE_COLOR, spaceBefore=1, spaceAfter=5))
    summary_p = (
        "Full Stack Web Developer with knowledge of AI technologies and modern development frameworks. "
        "Experienced in building responsive websites, full-stack web applications, and AI-powered chatbot solutions. "
        "Passionate about technology, creative problem-solving, clean code architecture, and delivering high-utility digital experiences."
    )
    story.append(Paragraph(summary_p, body_style))
    story.append(Spacer(1, 8))

    # ------------------ TECHNICAL SKILLS ------------------
    story.append(Paragraph("TECHNICAL SKILLS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=LINE_COLOR, spaceBefore=1, spaceAfter=5))

    skills_data = [
        [
            Paragraph("<b>Web & Frontend:</b>", bold_item),
            Paragraph("HTML, CSS, JavaScript, React.js, Next.js, React Native", body_style)
        ],
        [
            Paragraph("<b>Backend & Programming:</b>", bold_item),
            Paragraph("Python, Full-Stack Architecture, Database Integration", body_style)
        ],
        [
            Paragraph("<b>AI & Specialization:</b>", bold_item),
            Paragraph("AI Chatbot Development, Conversational AI integration", body_style)
        ],
        [
            Paragraph("<b>Design & Workflow:</b>", bold_item),
            Paragraph("UI/UX Designing, Technical Documentation, Clean Code Architecture", body_style)
        ]
    ]

    t_skills = Table(skills_data, colWidths=[150, 390])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_skills)
    story.append(Spacer(1, 8))

    # ------------------ PROFESSIONAL EXPERIENCE ------------------
    story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=LINE_COLOR, spaceBefore=1, spaceAfter=5))

    exp_header = [
        [
            Paragraph("<b>Full Stack Developer</b> — Codqor Technologies", bold_item),
            Paragraph("2025 – 2026 | 1 Year", meta_style)
        ]
    ]
    t_exp = Table(exp_header, colWidths=[380, 160])
    t_exp.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(t_exp)

    story.append(Paragraph("&bull; Frontend development for dynamic and responsive web applications.", bullet_style))
    story.append(Paragraph("&bull; Backend development delivering reliable server-side services and APIs.", bullet_style))
    story.append(Paragraph("&bull; Database development, data modeling, and schema management.", bullet_style))
    story.append(Paragraph("&bull; Full-stack application development ensuring seamless end-to-end functionality.", bullet_style))
    story.append(Spacer(1, 8))

    # ------------------ REAL PROJECTS ------------------
    story.append(Paragraph("REAL PROJECTS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=LINE_COLOR, spaceBefore=1, spaceAfter=5))

    projects = [
        ("Ledger Management System", "Full-stack application engineered for financial record keeping, account balancing, and transaction management."),
        ("HR Management System", "Comprehensive human resource portal supporting employee records, status tracking, and organizational workflows."),
        ("School Management System", "Educational management platform providing academic administration, student records, and operational tracking."),
        ("E-commerce Website", "Modern web application featuring dynamic catalog navigation, responsive product listings, and order checkout flows."),
        ("AI Chatbot", "Intelligent conversational chatbot application built to automate customer assistance and natural query responses.")
    ]

    for p_title, p_desc in projects:
        story.append(Paragraph(f"<b>&bull; {p_title}:</b> {p_desc}", bullet_style))
        story.append(Spacer(1, 2))

    story.append(Spacer(1, 8))

    # ------------------ EDUCATION ------------------
    story.append(Paragraph("EDUCATION", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=LINE_COLOR, spaceBefore=1, spaceAfter=5))

    edu_items = [
        ("BS Software Engineering", "Gift University, Gujranwala", "Graduation: 2026"),
        ("Intermediate / Higher Secondary", "Post Graduate College, Satellite Town, Gujranwala", "Completed"),
        ("Secondary School Certificate (Matriculation)", "Govt Girls High School, Gujranwala", "Completed")
    ]

    for degree, institution, yr in edu_items:
        row = [
            [
                Paragraph(f"<b>{degree}</b> — {institution}", bold_item),
                Paragraph(yr, meta_style)
            ]
        ]
        t_edu = Table(row, colWidths=[400, 140])
        t_edu.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ]))
        story.append(t_edu)

    story.append(Spacer(1, 8))

    # ------------------ ACHIEVEMENTS & CERTIFICATIONS ------------------
    story.append(Paragraph("ACHIEVEMENTS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=LINE_COLOR, spaceBefore=1, spaceAfter=5))

    ach_row = [
        [
            Paragraph("<b>National Skill Competency Test (NSCT)</b> — Higher Education Commission (HEC)", bold_item),
            Paragraph("Score: 90% | 2026", meta_style)
        ]
    ]
    t_ach = Table(ach_row, colWidths=[400, 140])
    t_ach.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(t_ach)
    story.append(Spacer(1, 8))

    # ------------------ SERVICES & LANGUAGES ------------------
    story.append(Paragraph("SERVICES & LANGUAGES", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=LINE_COLOR, spaceBefore=1, spaceAfter=5))

    extra_data = [
        [
            Paragraph("<b>Core Services:</b>", bold_item),
            Paragraph("Website Development, Full Stack Development, AI Chatbot Development, React Native App Development, UI/UX Designing, Python Development, Documentation", body_style)
        ],
        [
            Paragraph("<b>Languages:</b>", bold_item),
            Paragraph("Urdu (Native / Bilingual), English (Professional Working Proficiency)", body_style)
        ]
    ]
    t_extra = Table(extra_data, colWidths=[150, 390])
    t_extra.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_extra)

    doc.build(story)
    print(f"Resume generated successfully at: {output_path}")

if __name__ == "__main__":
    target1 = os.path.join("public", "Ayesha-Tahir-CV.pdf")
    target2 = os.path.join("public", "resume", "Ayesha-Tahir-CV.pdf")
    create_resume(target1)
    create_resume(target2)
