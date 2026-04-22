from pathlib import Path
import re
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    HRFlowable,
)

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
SOURCE = ROOT / "cv-source"

PAIRS = [
    ("CV-Angel-Lillo-ATS-ES.md", "CV-Angel-Lillo-ATS-ES.pdf"),
    ("CV-Angel-Lillo-ATS-EN.md", "CV-Angel-Lillo-ATS-EN.pdf"),
    ("CV-Angel-Lillo-HUMAN-ES.md", "CV-Angel-Lillo-HUMAN-ES.pdf"),
    ("CV-Angel-Lillo-HUMAN-EN.md", "CV-Angel-Lillo-HUMAN-EN.pdf"),
]


def clean_inline(md: str) -> str:
    md = md.strip()
    md = re.sub(r"\*\*(.*?)\*\*", r"<b>\1</b>", md)
    md = md.replace("—", "&mdash;")
    return md


def parse_md(md_text: str):
    lines = [ln.rstrip() for ln in md_text.splitlines()]
    name = ""
    subtitle = ""
    blocks = []
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        if not line or line == "---":
            i += 1
            continue

        if line.startswith("# ") and not name:
            name = line[2:].strip()
            i += 1
            continue

        if line.startswith("**") and line.endswith("**") and not subtitle:
            subtitle = line.strip("*").strip()
            i += 1
            continue

        if line.startswith("## "):
            blocks.append(("section", line[3:].strip()))
            i += 1
            continue

        if line.startswith("### "):
            blocks.append(("subsection", line[4:].strip()))
            i += 1
            continue

        if line.startswith("#### "):
            blocks.append(("subsection", line[5:].strip()))
            i += 1
            continue

        if line.startswith("- "):
            bullets = []
            while i < len(lines) and lines[i].strip().startswith("- "):
                bullets.append(lines[i].strip()[2:].strip())
                i += 1
            blocks.append(("bullets", bullets))
            continue

        blocks.append(("text", line))
        i += 1

    return name, subtitle, blocks


def make_styles():
    s = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "name", parent=s["Heading1"], fontName="Helvetica-Bold", fontSize=24,
            leading=28, textColor=colors.white, spaceAfter=2, alignment=TA_LEFT,
        ),
        "subtitle": ParagraphStyle(
            "subtitle", parent=s["Normal"], fontName="Helvetica", fontSize=10.5,
            leading=13, textColor=colors.HexColor("#DDE7FF"), spaceAfter=6,
        ),
        "section": ParagraphStyle(
            "section", parent=s["Heading2"], fontName="Helvetica-Bold", fontSize=13,
            leading=16, textColor=colors.HexColor("#1F4A94"), spaceBefore=10, spaceAfter=4,
        ),
        "subsection": ParagraphStyle(
            "subsection", parent=s["Heading3"], fontName="Helvetica-Bold", fontSize=11.5,
            leading=14, textColor=colors.HexColor("#1E355F"), spaceBefore=5, spaceAfter=2,
        ),
        "text": ParagraphStyle(
            "text", parent=s["Normal"], fontName="Helvetica", fontSize=10.7,
            leading=14.2, textColor=colors.HexColor("#1A2233"), spaceAfter=3,
        ),
        "bullet_item": ParagraphStyle(
            "bullet_item", parent=s["Normal"], fontName="Helvetica", fontSize=10.6,
            leading=14, textColor=colors.HexColor("#1A2233"), leftIndent=8, spaceAfter=1,
        ),
    }


def header_canvas(canvas, doc, name, subtitle):
    w, h = A4
    band_h = 34 * mm
    canvas.saveState()
    canvas.setFillColor(colors.HexColor("#173160"))
    canvas.rect(0, h - band_h, w, band_h, stroke=0, fill=1)

    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica-Bold", 22)
    canvas.drawString(doc.leftMargin, h - 18 * mm, name)

    if subtitle:
        canvas.setFillColor(colors.HexColor("#DDE7FF"))
        canvas.setFont("Helvetica", 10.5)
        canvas.drawString(doc.leftMargin, h - 25 * mm, subtitle)

    canvas.restoreState()


def build_pdf(md_path: Path, pdf_path: Path):
    name, subtitle, blocks = parse_md(md_path.read_text(encoding="utf-8"))
    styles = make_styles()

    doc = SimpleDocTemplate(
        str(pdf_path), pagesize=A4,
        leftMargin=18 * mm, rightMargin=18 * mm,
        topMargin=42 * mm, bottomMargin=16 * mm,
        title=name,
        author="Ángel Lillo",
    )

    story = []

    for kind, value in blocks:
        if kind == "section":
            story.append(Spacer(1, 1.5 * mm))
            story.append(Paragraph(clean_inline(value).upper(), styles["section"]))
            story.append(HRFlowable(color=colors.HexColor("#C7D7F5"), thickness=1, width="100%", spaceBefore=0, spaceAfter=4))
        elif kind == "subsection":
            story.append(Paragraph(clean_inline(value), styles["subsection"]))
        elif kind == "text":
            story.append(Paragraph(clean_inline(value), styles["text"]))
        elif kind == "bullets":
            for b in value:
                story.append(Paragraph(f"- {clean_inline(b)}", styles["bullet_item"]))
            story.append(Spacer(1, 1.2 * mm))

    def on_page(c, d):
        header_canvas(c, d, name, subtitle)

    doc.build(story, onFirstPage=on_page, onLaterPages=on_page)


def main():
    for md_name, pdf_name in PAIRS:
        md = SOURCE / md_name
        pdf = PUBLIC / pdf_name
        build_pdf(md, pdf)
        print(f"Generated: {pdf}")


if __name__ == "__main__":
    main()
