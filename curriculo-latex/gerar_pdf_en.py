"""
Gerador de Currículo PDF (Inglês) - Leonardo Vieira Guimarães
Mesmo layout de gerar_pdf.py, com o conteúdo traduzido para o inglês.
Saída: public/curriculo-leonardo-fullstack-en.pdf
"""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.lib import colors
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate,
    Paragraph, Spacer, HRFlowable,
    Table, TableStyle, KeepTogether,
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY

# ─── Paleta ────────────────────────────────────────────────────────────────────
AZUL_HEADER  = colors.HexColor("#1a2e4a")
AZUL_ACENTO  = colors.HexColor("#2563eb")
TEXTO_HEADER = colors.white
TEXTO_ESCURO = colors.HexColor("#111827")
TEXTO_CINZA  = colors.HexColor("#4b5563")
TEXTO_LEVE   = colors.HexColor("#9ca3af")

PAGE_W, PAGE_H = A4
MARGIN_H   = 1.8 * cm    # margem esquerda/direita
MARGIN_BOT = 1.2 * cm    # margem inferior
HEADER_H   = 4.3 * cm    # altura do banner com 2 linhas de contatos completos
GAP        = 0.4 * cm    # espaço entre o banner e o início do conteúdo

# ─── Arquivo de saída ──────────────────────────────────────────────────────────
output_path = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "..", "public", "curriculo-leonardo-fullstack-en.pdf")
)

# ─── Função: desenha o banner no canvas (chamada em CADA página) ───────────────
def desenhar_cabecalho(canvas, doc):
    """Banner azul colado ao topo — repetido em todas as páginas com contatos em 2 linhas."""
    canvas.saveState()

    y_topo   = PAGE_H              # topo absoluto da página
    y_base   = PAGE_H - HEADER_H  # base do banner

    # Fundo azul escuro (largura total da página)
    canvas.setFillColor(AZUL_HEADER)
    canvas.rect(0, y_base, PAGE_W, HEADER_H, fill=1, stroke=0)

    # Faixa de acento azul vivo na base do banner
    canvas.setFillColor(AZUL_ACENTO)
    canvas.rect(0, y_base, PAGE_W, 3.5, fill=1, stroke=0)

    # ── Nome ──────────────────────────────────────────────────────────────────
    canvas.setFillColor(TEXTO_HEADER)
    canvas.setFont("Helvetica-Bold", 23)
    canvas.drawString(MARGIN_H, y_topo - 0.95 * cm, "Leonardo Vieira Guimarães")

    # ── Cargo / títulos ───────────────────────────────────────────────────────
    canvas.setFillColor(colors.HexColor("#93c5fd"))
    canvas.setFont("Helvetica", 10)
    canvas.drawString(MARGIN_H, y_topo - 1.65 * cm,
                      "Full Stack Developer  ·  Product Owner  ·  IT Professor & Researcher")

    # ── Localização ───────────────────────────────────────────────────────────
    canvas.setFillColor(colors.HexColor("#cbd5e1"))
    canvas.setFont("Helvetica", 8.5)
    canvas.drawString(MARGIN_H, y_topo - 2.25 * cm,
                      "Belo Horizonte, MG - Brazil   |   Available for remote work")

    # ── Linha divisória interna ───────────────────────────────────────────────
    canvas.setStrokeColor(colors.HexColor("#2d4a6b"))
    canvas.setLineWidth(0.5)
    canvas.line(MARGIN_H, y_topo - 2.55 * cm, PAGE_W - MARGIN_H, y_topo - 2.55 * cm)

    # ── Contatos (Linha 1: Telefone, Email, Portfólio, Lattes) ─────────────────
    canvas.setFillColor(colors.HexColor("#94a3b8"))
    canvas.setFont("Helvetica", 7.8)
    contato_l1 = (
        "+55 (38) 99239-1698"
        "   ·   leonardovieiraxy@hotmail.com"
        "   ·   leoproti.com.br"
        "   ·   Lattes: lattes.cnpq.br/3600922455238720"
    )
    canvas.drawString(MARGIN_H, y_topo - 3.10 * cm, contato_l1)

    # ── Contatos (Linha 2: GitHub, LinkedIn, ORCID) ────────────────────────────
    canvas.setFillColor(colors.HexColor("#94a3b8"))
    canvas.setFont("Helvetica", 7.8)
    contato_l2 = (
        "GitHub: github.com/LeonardoVieiraGuimaraes"
        "   ·   LinkedIn: linkedin.com/in/leonardo-vieira-guimaraes"
        "   ·   ORCID: 0009-0000-3118-4664"
    )
    canvas.drawString(MARGIN_H, y_topo - 3.70 * cm, contato_l2)

    # Número de página (discreto, canto inferior direito)
    canvas.setFillColor(TEXTO_LEVE)
    canvas.setFont("Helvetica", 7.5)
    canvas.drawRightString(PAGE_W - MARGIN_H, 0.6 * cm,
                           f"Page {doc.page}")

    canvas.restoreState()


# ─── Frame de conteúdo (igual para todas as páginas) ──────────────────────────
frame_conteudo = Frame(
    x1=MARGIN_H,
    y1=MARGIN_BOT,
    width=PAGE_W - 2 * MARGIN_H,
    height=PAGE_H - HEADER_H - GAP - MARGIN_BOT,  # começa abaixo do banner
    leftPadding=0,
    rightPadding=0,
    topPadding=0,
    bottomPadding=0,
    id="conteudo",
)

# ─── Documento ─────────────────────────────────────────────────────────────────
doc = BaseDocTemplate(
    output_path,
    pagesize=A4,
    leftMargin=MARGIN_H,
    rightMargin=MARGIN_H,
    topMargin=HEADER_H + GAP,   # reserva espaço para o banner em todas as páginas
    bottomMargin=MARGIN_BOT,
    title="Resume - Leonardo Vieira Guimarães",
    author="Leonardo Vieira Guimarães",
)
doc.addPageTemplates([
    PageTemplate(
        id="padrao",
        frames=[frame_conteudo],
        onPage=desenhar_cabecalho,   # ← desenha em TODA página
    )
])

# ─── Estilos ───────────────────────────────────────────────────────────────────
S = getSampleStyleSheet()

def est(nome, **kw):
    base = kw.pop("parent", "Normal")
    return ParagraphStyle(nome, parent=S[base], **kw)

st_secao = est("secao",
    fontSize=9.5, fontName="Helvetica-Bold",
    textColor=AZUL_ACENTO, spaceBefore=12, spaceAfter=3)

st_resumo = est("resumo",
    fontSize=9.2, fontName="Helvetica",
    textColor=TEXTO_CINZA, leading=15,
    alignment=TA_JUSTIFY, spaceAfter=0)

st_corpo = est("corpo",
    fontSize=9, fontName="Helvetica",
    textColor=TEXTO_ESCURO, leading=14,
    alignment=TA_JUSTIFY, spaceAfter=2)

st_bullet = est("bullet",
    fontSize=8.8, fontName="Helvetica",
    textColor=TEXTO_CINZA, leading=13.5,
    leftIndent=12, alignment=TA_JUSTIFY, spaceAfter=2)

st_exp_cargo = est("exp_cargo",
    fontSize=9.5, fontName="Helvetica-Bold",
    textColor=TEXTO_ESCURO, leading=14, spaceAfter=1)

st_exp_empresa = est("exp_empresa",
    fontSize=9, fontName="Helvetica",
    textColor=AZUL_ACENTO, leading=13, spaceAfter=1)

st_exp_periodo = est("exp_periodo",
    fontSize=8, fontName="Helvetica",
    textColor=TEXTO_LEVE, leading=12, spaceAfter=4)

st_projeto_desc = est("projeto_desc",
    fontSize=8.5, fontName="Helvetica",
    textColor=TEXTO_CINZA, leading=13,
    alignment=TA_JUSTIFY, spaceAfter=0)


# ─── Helpers ───────────────────────────────────────────────────────────────────
def linha_secao():
    return HRFlowable(width="100%", thickness=1, color=AZUL_ACENTO,
                      spaceBefore=1, spaceAfter=6)

def linha_div():
    return HRFlowable(width="100%", thickness=0.3,
                      color=colors.HexColor("#e5e7eb"),
                      spaceBefore=4, spaceAfter=4)

def secao(txt):
    return [Paragraph(txt.upper(), st_secao), linha_secao()]

def tc(txt, bold=False, size=9, cor=None):
    fn  = "Helvetica-Bold" if bold else "Helvetica"
    cor = cor or TEXTO_ESCURO
    st  = ParagraphStyle("_tc", parent=S["Normal"], leading=13, textColor=cor)
    return Paragraph(f"<font name='{fn}' size='{size}'>{txt}</font>", st)


# ─── Conteúdo ──────────────────────────────────────────────────────────────────
story = []

# ── RESUMO ─────────────────────────────────────────────────────────────────────
story += secao("Professional Summary")
story.append(Paragraph(
    "Full Stack Developer, Product Owner (PO) and IT Professor with solid experience in "
    "software engineering, web development, RESTful API architecture, microservices and databases. "
    "Works at the Instituto Mineiro de Agropecuária (IMA), the agricultural defense agency of the State of "
    "Minas Gerais, developing enterprise systems, managing technical support and serving as Product Owner (PO) "
    "of the Sidagro system. Background as a university professor and IT tutor, and active in scientific research "
    "as a Ph.D. candidate in Mathematical and Computational Modeling (CEFET/MG) with an M.Sc. from UNIMONTES, "
    "bringing strong analytical skills, product vision and technical rigor.",
    st_resumo
))

# ── HABILIDADES ────────────────────────────────────────────────────────────────
story += secao("Technical Skills")
hab = [
    ("Frontend",   "React, TypeScript, Next.js, Tailwind CSS, HTML5, CSS3"),
    ("Backend",    "Python, Django, FastAPI, Node.js, Java, Spring Boot"),
    ("Mobile",     "React Native, Expo (Android)"),
    ("Data",       "SQL, PostgreSQL, MySQL, MongoDB, Pandas, Jupyter, Applied Statistics"),
    ("DevOps",     "Docker, Linux, Nginx, Git, GitHub Actions, CI/CD, Grafana"),
    ("Management", "PMI/PMBOK, Scrum, Kanban, BPMN, Product Owner (PO)"),
]
tab_hab = Table(
    [[tc(k, bold=True), tc(v)] for k, v in hab],
    colWidths=[2.8 * cm, None]
)
tab_hab.setStyle(TableStyle([
    ("VALIGN",        (0,0),(-1,-1), "TOP"),
    ("LEFTPADDING",   (0,0),(-1,-1), 0),
    ("RIGHTPADDING",  (0,0),(-1,-1), 6),
    ("TOPPADDING",    (0,0),(-1,-1), 2),
    ("BOTTOMPADDING", (0,0),(-1,-1), 2),
    ("ROWBACKGROUNDS",(0,0),(-1,-1), [colors.white, colors.HexColor("#f8fafc")]),
]))
story.append(tab_hab)
story.append(Spacer(1, 4))
story.append(Paragraph(
    "<b>Soft skills:</b>  Leadership and Mentoring  ·  Adaptability  ·  "
    "Clear and didactic communication  ·  Problem Solving  ·  Cross-functional collaboration",
    st_corpo
))

# ── EXPERIÊNCIA ────────────────────────────────────────────────────────────────
story += secao("Professional Experience")

experiencias = [
    {
        "cargo":   "Backend Developer & Product Owner (PO) - GLS/IT",
        "empresa": "Instituto Mineiro de Agropecuária (IMA)",
        "periodo": "Jul 2026 - present",
        "itens": [
            "Technical support management and Product Owner of the Sidagro system (validated for Firefox).",
            "Development of RESTful APIs, internal automations and continuous evolution of the backend.",
            "Modeling and administration of relational databases for management reporting.",
            "Standardization of environments with Docker (development, staging and production).",
        ]
    },
    {
        "cargo":   "Management Assistant & Product Owner (PO) - NIM",
        "empresa": "Instituto Mineiro de Agropecuária (IMA)",
        "periodo": "Sep 2024 - Jul 2026",
        "itens": [
            "Leadership at the Innovation and Modernization Unit (NIM) and management of IT projects.",
            "Analysis and documentation of complex business rules as PO of the Sidagro system.",
            "Development of the DAE/PIX payment platform and corporate authentication microservices.",
            "BPMN process modeling for the integration and modernization of institutional processes.",
        ]
    },
    {
        "cargo":   "University Professor - Databases & Web Architecture",
        "empresa": "Centro Universitário Newton Paiva",
        "periodo": "Aug 2024 - Dec 2025",
        "itens": [
            "Hands-on teaching of Databases and Web Architecture with an industry focus.",
            "Supervision of capstone projects in software development and RESTful APIs.",
        ]
    },
    {
        "cargo":   "Technology Professor, Tutor and Author",
        "empresa": "UNIASSELVI / Vitru Brasil Empreendimentos",
        "periodo": "Feb 2022 - Feb 2025",
        "itens": [
            "Academic tutoring in the Systems Analysis and Development and Internet Systems programs.",
            "Author of the course 'Backend II with Databases' (original teaching material).",
        ]
    },
    {
        "cargo":   "Management Assistant - Agricultural Defense",
        "empresa": "IMA - São Francisco Regional Office",
        "periodo": "Nov 2005 - Sep 2024",
        "itens": [
            "Regional management in northern Minas Gerais, operational control and issuance of official documents.",
            "Automation of reports and management spreadsheets to streamline daily operations.",
        ]
    },
    {
        "cargo":   "University Professor - Mathematics and Management",
        "empresa": "FADENORTE - Faculdade de Desenvolvimento do Norte",
        "periodo": "2019 - 2020",
        "itens": [
            "Taught Statistics, Financial Mathematics, Financial Management and Technological Innovation.",
            "Supervision of Capstone Projects (II, IV and V).",
        ]
    },
    {
        "cargo":   "Course Mediator - IFNMG",
        "empresa": "Federal Institute of Northern Minas Gerais",
        "periodo": "2017 - 2020",
        "itens": [
            "Distance learning mediator (2020): Mobile Device Programmer (continuing education course).",
            "On-site tutor (2017-2019): Internet Computing Technician program.",
        ]
    },
    {
        "cargo":   "Full Stack Developer",
        "empresa": "Personal projects and consulting",
        "periodo": "2014 - present",
        "itens": [
            "Web systems and APIs with Python, Django, Java, Spring Boot, React, TypeScript and Docker.",
        ]
    },
]

for i, exp in enumerate(experiencias):
    bloco = [
        Paragraph(exp["cargo"], st_exp_cargo),
        Paragraph(exp["empresa"], st_exp_empresa),
        Paragraph(exp["periodo"], st_exp_periodo),
    ]
    for item in exp["itens"]:
        bloco.append(Paragraph(f"&#9658;  {item}", st_bullet))
    if i < len(experiencias) - 1:
        bloco.append(linha_div())
    story.append(KeepTogether(bloco))

# ── FORMAÇÃO ───────────────────────────────────────────────────────────────────

formacoes = [
    ("Ph.D. Candidate",          "Mathematical and Computational Modeling",       "CEFET/MG",                                 "2025 - present"),
    ("Non-degree Student (Ph.D.)", "Computer Science – UFMG",                     "Courses: Computer Vision, Data Visualization, Data Mining and Quantitative Finance (credits transferred to the CEFET-MG Ph.D.).", "2021 - 2022"),
    ("M.Sc.",                    "Computational Modeling and Systems",            "UNIMONTES",                                "2016 - 2019"),
    ("Bachelor's Degree",        "Computer Engineering",                          "FEMC",                                     "2010 - 2014"),
    ("Specialization",           "Mathematics and Statistics (Postgraduate)",     "UFLA - Federal University of Lavras",      "2008 - 2009"),
    ("Specialization",           "Mathematics Education (Postgraduate)",          "FINOM - Faculdade do Norte de Minas",      "2008 - 2009"),
    ("Teaching Degree",          "Mathematics",                                   "UNIMONTES",                                "2004 - 2007"),
]

form_rows = []
for grau, curso, inst, periodo in formacoes:
    form_rows.append([
        Paragraph(
            f"<font name='Helvetica-Bold' size='9'>{grau}</font><br/>"
            f"<font name='Helvetica' size='7.5' color='#9ca3af'>{periodo}</font>",
            ParagraphStyle("_fc", parent=S["Normal"], leading=13)
        ),
        Paragraph(
            f"<font name='Helvetica-Bold' size='9'>{curso}</font><br/>"
            f"<font name='Helvetica' size='8' color='#6b7280'>{inst}</font>",
            ParagraphStyle("_fi", parent=S["Normal"], leading=13)
        ),
    ])

tab_form = Table(form_rows, colWidths=[3.6 * cm, None])
tab_form.setStyle(TableStyle([
    ("VALIGN",        (0,0),(-1,-1), "TOP"),
    ("LEFTPADDING",   (0,0),(-1,-1), 0),
    ("RIGHTPADDING",  (0,0),(-1,-1), 6),
    ("TOPPADDING",    (0,0),(-1,-1), 3),
    ("BOTTOMPADDING", (0,0),(-1,-1), 3),
    ("ROWBACKGROUNDS",(0,0),(-1,-1), [colors.white, colors.HexColor("#f8fafc")]),
    ("LINEBELOW",     (0,0),(-1,-2), 0.3, colors.HexColor("#e5e7eb")),
]))
story.append(KeepTogether(secao("Education") + [tab_form]))   # título junto da tabela

# ── IDIOMAS ────────────────────────────────────────────────────────────────────
story += secao("Languages")
idiomas = [
    ("Portuguese", "Native",               ""),
    ("English",    "Reading Proficiency",  "UFSC Exam 2025 - Score 8.50 / 10   (Verification key: 5113208805889763695)"),
    ("Spanish",    "Basic",                ""),
]
tab_id = Table(
    [[tc(l, bold=True), tc(n), tc(d, size=8, cor=TEXTO_CINZA)] for l, n, d in idiomas],
    colWidths=[2.8 * cm, 4.0 * cm, None]
)
tab_id.setStyle(TableStyle([
    ("VALIGN",        (0,0),(-1,-1), "TOP"),
    ("LEFTPADDING",   (0,0),(-1,-1), 0),
    ("TOPPADDING",    (0,0),(-1,-1), 2),
    ("BOTTOMPADDING", (0,0),(-1,-1), 2),
    ("ROWBACKGROUNDS",(0,0),(-1,-1), [colors.white, colors.HexColor("#f8fafc")]),
]))
story.append(KeepTogether([tab_id]))

# ── PROJETOS ───────────────────────────────────────────────────────────────────
story += secao("Featured Projects")
projetos = [
    ("Professional Portfolio V3",
     "Responsive personal website - React, TypeScript, TailwindCSS, dark/light theme.",
     "leoproti.com.br"),
    ("A&amp;G Enfermagem",
     "Prison nursing app built with React Native/Expo - published on the Google Play Store.",
     "aeg.leoproti.com.br"),
    ("DAE/PIX Platform v2",
     "Corporate fee-collection system (React, Node.js, PostgreSQL, Docker) in production at IMA.",
     "daev2.leoproti.com.br"),
    ("IMA Auth",
     "Corporate single sign-on (SSO/JWT) authentication microservice for IMA's Sidagro ecosystem.",
     "ima-auth.leoproti.com.br"),
    ("Sidagro System (IMA)",
     "Minas Gerais agricultural defense portal – Product Owner (PO) and backend developer.",
     "sidagro.ima.mg.gov.br"),
    ("Ph.D. Projects Hub",
     "Full stack platform for scientific analysis and mathematical modeling - Next.js and FastAPI.",
     "projetos-doutorado.leoproti.com.br"),
]

proj_rows = []
for nome, desc, url in projetos:
    proj_rows.append([
        tc(nome, bold=True),
        Paragraph(desc, st_projeto_desc),
        tc(url, size=8, cor=AZUL_ACENTO),
    ])

tab_proj = Table(proj_rows, colWidths=[4.6 * cm, None, 5.0 * cm])
tab_proj.setStyle(TableStyle([
    ("VALIGN",        (0,0),(-1,-1), "TOP"),
    ("LEFTPADDING",   (0,0),(-1,-1), 0),
    ("RIGHTPADDING",  (0,0),(-1,-1), 6),
    ("TOPPADDING",    (0,0),(-1,-1), 3),
    ("BOTTOMPADDING", (0,0),(-1,-1), 3),
    ("ROWBACKGROUNDS",(0,0),(-1,-1), [colors.white, colors.HexColor("#f8fafc")]),
    ("LINEBELOW",     (0,0),(-1,-2), 0.3, colors.HexColor("#e5e7eb")),
]))
story.append(tab_proj)

# ── Gerar ──────────────────────────────────────────────────────────────────────
doc.build(story)
print(f"PDF gerado com sucesso em: {output_path}")
