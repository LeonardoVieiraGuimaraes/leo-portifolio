"""
Gerador de Currículo PDF - Leonardo Vieira Guimarães
Cabeçalho com 2 linhas de contato completas (Tel, Email, Portfólio, GitHub, LinkedIn, Lattes, ORCID).
Rodapé limpo e sem repetições redundantes.
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
    os.path.join(os.path.dirname(__file__), "..", "public", "curriculo-leonardo-fullstack.pdf")
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
                      "Desenvolvedor Full Stack  ·  Product Owner  ·  Professor de TI & Pesquisador")

    # ── Localização ───────────────────────────────────────────────────────────
    canvas.setFillColor(colors.HexColor("#cbd5e1"))
    canvas.setFont("Helvetica", 8.5)
    canvas.drawString(MARGIN_H, y_topo - 2.25 * cm,
                      "Belo Horizonte, MG - Brasil   |   Remoto disponível")

    # ── Linha divisória interna ───────────────────────────────────────────────
    canvas.setStrokeColor(colors.HexColor("#2d4a6b"))
    canvas.setLineWidth(0.5)
    canvas.line(MARGIN_H, y_topo - 2.55 * cm, PAGE_W - MARGIN_H, y_topo - 2.55 * cm)

    # ── Contatos (Linha 1: Telefone, Email, Portfólio, Lattes) ─────────────────
    canvas.setFillColor(colors.HexColor("#94a3b8"))
    canvas.setFont("Helvetica", 7.8)
    contato_l1 = (
        "(38) 99239-1698"
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
                           f"Pág. {doc.page}")

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
story += secao("Resumo Profissional")
story.append(Paragraph(
    "Desenvolvedor Full Stack, Product Owner (PO), Professor de TI e Pesquisador com sólida experiência em "
    "engenharia de software, desenvolvimento web, arquitetura de APIs RESTful, microsserviços e bancos de dados. "
    "Atua no Instituto Mineiro de Agropecuária (IMA) desenvolvendo microsserviços e soluções corporativas "
    "(como a Plataforma DAE/PIX e o autenticador corporativo IMA Auth) e exercendo o papel de Product Owner (PO) do sistema "
    "Sidagro (GLS/TI). Em paralelo, atua na docência universitária em TI (Newton Paiva e UNIASSELVI) e na "
    "pesquisa científica como Doutorando em Modelagem Matemática e Computacional (CEFET/MG) e Mestre (UNIMONTES), "
    "agregando forte capacidade analítica, visão de produto e rigor técnico.",
    st_resumo
))

# ── HABILIDADES ────────────────────────────────────────────────────────────────
story += secao("Habilidades Técnicas")
hab = [
    ("Frontend",  "React, TypeScript, Next.js, Tailwind CSS, HTML5, CSS3"),
    ("Backend",   "Python, Django, FastAPI, Node.js, Java, Spring Boot"),
    ("Mobile",    "React Native, Expo (Android)"),
    ("Dados",     "SQL, PostgreSQL, MySQL, MongoDB, Pandas, Power BI, Jupyter"),
    ("DevOps",    "Docker, Linux, Nginx, Git, GitHub Actions, CI/CD, Grafana"),
    ("Gestão",    "PMI/PMBOK, Scrum, Kanban, BPMN, Product Owner (PO)"),
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
    "<b>Habilidades comportamentais:</b>  Liderança e Mentoria  ·  Adaptabilidade  ·  "
    "Comunicação clara e didática  ·  Resolução de Problemas  ·  Colaboração multidisciplinar",
    st_corpo
))

# ── EXPERIÊNCIA ────────────────────────────────────────────────────────────────
story += secao("Experiência Profissional")

experiencias = [
    {
        "cargo":   "Desenvolvedor Backend & Product Owner (PO) - GLS/TI",
        "empresa": "Instituto Mineiro de Agropecuária (IMA)",
        "periodo": "jul 2026 - atual",
        "itens": [
            "Gestão do suporte técnico e atuação como PO do sistema Sidagro (homologado para Firefox).",
            "Desenvolvimento de APIs RESTful, automações internas e evolução contínua do backend.",
            "Modelagem e administração de bancos de dados relacionais para relatórios gerenciais.",
            "Padronização de ambientes com Docker (desenvolvimento, homologação e produção).",
        ]
    },
    {
        "cargo":   "Assistente de Gestão & Product Owner (PO) - NIM",
        "empresa": "Instituto Mineiro de Agropecuária (IMA)",
        "periodo": "set 2024 - jul 2026",
        "itens": [
            "Liderança no Núcleo de Inovação e Modernização (NIM) e gestão de projetos de TI.",
            "Análise e documentação de regras de negócio complexas como PO do sistema Sidagro.",
            "Desenvolvimento da plataforma DAE/PIX e microsserviços de autenticação corporativa.",
            "Modelagem de fluxos BPMN para integração e modernização de processos institucionais.",
        ]
    },
    {
        "cargo":   "Professor de Ensino Superior - Banco de Dados & Arquitetura Web",
        "empresa": "Centro Universitário Newton Paiva",
        "periodo": "2024 - atual",
        "itens": [
            "Docência prática em Banco de Dados e Arquitetura Web com foco em mercado.",
            "Orientação de projetos integradores de desenvolvimento de software e APIs RESTful.",
        ]
    },
    {
        "cargo":   "Professor, Tutor e Autor de Tecnologia",
        "empresa": "UNIASSELVI / Vitru Brasil Empreendimentos",
        "periodo": "2022 - atual",
        "itens": [
            "Tutoria acadêmica nos cursos de ADS e Sistemas para Internet.",
            "Autoria da disciplina 'Backend II com Banco de Dados' (conteúdo didático próprio).",
        ]
    },
    {
        "cargo":   "Assistente de Gestão - Defesa Agropecuária",
        "empresa": "IMA - Escritório Seccional de São Francisco",
        "periodo": "nov 2005 - set 2024",
        "itens": [
            "Gestão regional do norte de MG, controle operacional e emissão de documentos oficiais.",
            "Automação de relatórios e planilhas gerenciais para otimização do fluxo diário.",
        ]
    },
    {
        "cargo":   "Professor de Ensino Superior - Matemática e Gestão",
        "empresa": "FADENORTE - Faculdade de Desenvolvimento do Norte",
        "periodo": "2019 - 2020",
        "itens": [
            "Docência em Estatística, Matemática Financeira, Gestão Financeira e Inovação Tecnológica.",
            "Orientação de Projetos Integradores (II, IV e V).",
        ]
    },
    {
        "cargo":   "Professor Mediador - IFNMG",
        "empresa": "Instituto Federal do Norte de Minas Gerais",
        "periodo": "2017 - 2020",
        "itens": [
            "Mediador EAD (2020): Programador de Dispositivos Móveis (FIC).",
            "Tutor presencial (2017-2019): Técnico em Informática para Internet.",
        ]
    },
    {
        "cargo":   "Desenvolvedor Full Stack",
        "empresa": "Projetos próprios e consultoria",
        "periodo": "2014 - atual",
        "itens": [
            "Sistemas web e APIs com Python, Django, Java, Spring Boot, React, TypeScript e Docker.",
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
story += secao("Formação Acadêmica")

formacoes = [
    ("Doutorando",              "Modelagem Matemática e Computacional",           "CEFET/MG",                               "2025 - atual"),
    ("Aluno Especial (Dout.)",  "Ciência da Computação – UFMG",                  "Disciplinas: Visão Computacional, Visualização de Dados, Mineração de Dados e Finanças Quantitativas (créditos aproveitados no Doutorado CEFET-MG).", "2021 - 2022"),
    ("Mestre",                  "Modelagem Computacional e Sistemas",            "UNIMONTES",                              "2016 - 2019"),
    ("Bacharel",                "Engenharia de Computação",                      "FEMC",                                   "2010 - 2014"),
    ("Especialização",          "Matemática e Estatística",                      "UFLA - Universidade Federal de Lavras",  "2008 - 2009"),
    ("Especialização",          "Educação Matemática",                           "FINOM - Faculdade do Norte de Minas",    "2008 - 2009"),
    ("Licenciatura",            "Matemática",                                    "UNIMONTES",                              "2004 - 2007"),
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
story.append(KeepTogether([tab_form]))

# ── IDIOMAS ────────────────────────────────────────────────────────────────────
story += secao("Idiomas")
idiomas = [
    ("Português", "Nativo",                   ""),
    ("Inglês",    "Proficiência em Leitura",  "Exame UFSC 2025 - Nota 8,50 / 10   (Chave: 5113208805889763695)"),
    ("Espanhol",  "Básico",                   ""),
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
story += secao("Projetos em Destaque")
projetos = [
    ("Portfólio Profissional V3",
     "Website pessoal responsivo - React, TypeScript, TailwindCSS, tema dark/light.",
     "leoproti.com.br"),
    ("A&G Enfermagem",
     "App de enfermagem prisional em React Native/Expo - publicado na Google Play Store.",
     "aeg.leoproti.com.br"),
    ("Plataforma DAE/PIX v2",
     "Sistema corporativo de arrecadação (React, Node.js, PostgreSQL, Docker) em produção no IMA.",
     "daev2.leoproti.com.br"),
    ("IMA Auth",
     "Microsserviço corporativo de autenticação única SSO/JWT para o ecossistema Sidagro do IMA.",
     "ima-auth.leoproti.com.br"),
    ("Sistema Sidagro (IMA)",
     "Portal de defesa agropecuária de MG – atuação como Product Owner (PO) e desenvolvedor backend.",
     "sidagro.ima.mg.gov.br"),
    ("Hub de Projetos do Doutorado",
     "Plataforma full stack para análises científicas e modelagem matemática - Next.js e FastAPI.",
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
