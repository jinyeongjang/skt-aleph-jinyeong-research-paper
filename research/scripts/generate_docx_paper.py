#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
과제 10 공식 학술 DOCX 논문 파일 자동 생성기
저자: 장진영 (SKT ALEPH 1기)
규격: condi 10-6, condi 10-7 준수 (표지, 초록, 서론, 방법, 결과, 논의, 참고문헌, 재현 방법)
"""

import os
import sys
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def set_cell_background(cell, fill_hex):
    shading_elm = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    cell._tc.get_or_add_tcPr().append(shading_elm)

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = OxmlElement('w:tcMar')
    for m, val in [('top', top), ('bottom', bottom), ('left', left), ('right', right)]:
        node = OxmlElement(f'w:{m}')
        node.set(qn('w:w'), str(val))
        node.set(qn('w:type'), 'dxa')
        tcMar.append(node)
    tcPr.append(tcMar)

def create_research_docx(output_path):
    doc = Document()

    # 페이지 여백 설정 (1인치 = 2.54cm 표준)
    for section in doc.sections:
        section.top_margin = Inches(1.0)
        section.bottom_margin = Inches(1.0)
        section.left_margin = Inches(1.0)
        section.right_margin = Inches(1.0)

    # 1. 헤더/표지 영역 (Title & Meta)
    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_title.paragraph_format.space_before = Pt(12)
    p_title.paragraph_format.space_after = Pt(8)
    run_title = p_title.add_run("[논문 제목 템플릿] AI 에이전트의 정적 분석 피드백 루프가 코드 리팩토링 수렴성에 미치는 영향")
    run_title.font.name = "Malgun Gothic"
    run_title.font.size = Pt(18)
    run_title.font.bold = True
    run_title.font.color.rgb = RGBColor(17, 24, 39)

    p_eng_title = doc.add_paragraph()
    p_eng_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_eng_title.paragraph_format.space_after = Pt(16)
    run_eng_title = p_eng_title.add_run("Impact of Static Analysis Feedback Loop on Code Refactoring Convergence in AI Agents")
    run_eng_title.font.name = "Calibri"
    run_eng_title.font.size = Pt(11)
    run_eng_title.font.italic = True
    run_eng_title.font.color.rgb = RGBColor(107, 114, 128)

    # 저자 및 메타 정보
    p_author = doc.add_paragraph()
    p_author.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_author.paragraph_format.space_after = Pt(4)
    run_author = p_author.add_run("장진영 (SKT ALEPH 1기 연구원)")
    run_author.font.name = "Malgun Gothic"
    run_author.font.size = Pt(11)
    run_author.font.bold = True

    p_affil = doc.add_paragraph()
    p_affil.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_affil.paragraph_format.space_after = Pt(20)
    run_affil = p_affil.add_run("SKT ALEPH 인공지능 엔지니어링 과정 | 작성일: 2026년 9월 29일")
    run_affil.font.name = "Malgun Gothic"
    run_affil.font.size = Pt(9.5)
    run_affil.font.color.rgb = RGBColor(75, 85, 99)

    # 2. 초록 박스 (Abstract Box)
    table_abs = doc.add_table(rows=1, cols=1)
    table_abs.alignment = WD_TABLE_ALIGNMENT.CENTER
    table_abs.autofit = False
    table_abs.columns[0].width = Inches(6.5)

    cell_abs = table_abs.cell(0, 0)
    set_cell_background(cell_abs, "F3F4F6")
    set_cell_margins(cell_abs, top=140, bottom=140, left=200, right=200)

    p_abs_head = cell_abs.paragraphs[0]
    p_abs_head.paragraph_format.space_after = Pt(6)
    run_abs_h = p_abs_head.add_run("【 요 약 (Abstract) 】")
    run_abs_h.font.name = "Malgun Gothic"
    run_abs_h.font.size = Pt(10.5)
    run_abs_h.font.bold = True
    run_abs_h.font.color.rgb = RGBColor(17, 24, 39)

    p_abs_body = cell_abs.add_paragraph()
    p_abs_body.paragraph_format.line_spacing = 1.25
    p_abs_body.paragraph_format.space_after = Pt(4)
    run_abs_b = p_abs_body.add_run(
        "[초록 본문 작성 안내]\n"
        "본 연구는 AI 에이전트 기반 코드 리팩토링 환경에서 정적 분석(AST/Linter) 피드백 루프의 유효성을 실증 검증하기 위해 수행되었다. "
        "기존의 무제약 반복 수정 방식이 겪는 린트 규칙 위반 및 환각 문제를 극복하기 위해, AST 파서의 오류 메시지 및 규칙 ID를 즉시 프롬프트에 주입하는 통제 실험을 설계하였다. "
        "표본 데이터셋(N=50)을 대상으로 비교 실험을 수행한 결과, 실험군에서 린트 오류 0건 도달에 필요한 평균 반복 수정 횟수가 현저히 감소함을 확인하였다. "
        "본 연구의 결과는 자가 치유(Self-Healing) AI 코딩 파이프라인 설계에 실질적인 가이드라인을 제공한다."
    )
    run_abs_b.font.name = "Malgun Gothic"
    run_abs_b.font.size = Pt(9.5)
    run_abs_b.font.color.rgb = RGBColor(55, 65, 81)

    p_kw = cell_abs.add_paragraph()
    run_kw_label = p_kw.add_run("주제어 (Keywords): ")
    run_kw_label.font.name = "Malgun Gothic"
    run_kw_label.font.size = Pt(9)
    run_kw_label.font.bold = True
    run_kw = p_kw.add_run("인공지능 코딩 에이전트, 정적 코드 분석, AST 린터, 자가 치유 루프, 코드 리팩토링 수렴성")
    run_kw.font.name = "Malgun Gothic"
    run_kw.font.size = Pt(9)

    doc.add_paragraph().paragraph_format.space_after = Pt(12)

    # 본문 IMRaD 섹션 추가 함수
    def add_section_header(num, title):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(16)
        p.paragraph_format.space_after = Pt(6)
        p.paragraph_format.keep_with_next = True
        run = p.add_run(f"{num}. {title}")
        run.font.name = "Malgun Gothic"
        run.font.size = Pt(13)
        run.font.bold = True
        run.font.color.rgb = RGBColor(17, 24, 39)
        return p

    def add_body_paragraph(text):
        p = doc.add_paragraph()
        p.paragraph_format.line_spacing = 1.3
        p.paragraph_format.space_after = Pt(8)
        run = p.add_run(text)
        run.font.name = "Malgun Gothic"
        run.font.size = Pt(10)
        run.font.color.rgb = RGBColor(31, 41, 55)
        return p

    # 1. 서론 (Introduction)
    add_section_header("1", "서론 (Introduction)")
    add_body_paragraph(
        "[1.1 연구 배경 및 문제 제기]\n"
        "소프트웨어 엔지니어링 환경에서 대규모 언어 모델(LLM)을 활용한 자동 코드 리팩토링 및 버그 수정 기술이 빠르게 보편화되고 있다. "
        "그러나 AI 에이전트가 단독으로 생성한 코드는 사소한 문법 오류, 타입 불일치, 린트 규칙 위반을 반복적으로 야기하는 한계가 존재한다."
    )
    add_body_paragraph(
        "[1.2 가설 도출 및 연구 목적]\n"
        "• 최종 가설: AI 에이전트의 코드 리팩토링 루프에 Oxlint/TypeScript AST 린터의 오류 피드백(규칙 ID, 에러 메시지, 코드 위치)을 컨텍스트로 제공하면, "
        "오류 피드백 없이 단순 재시도하는 경우보다 정적 분석 린트 오류 0건 도달에 필요한 반복 수정 횟수가 50% 이상 감소한다.\n"
        "• 기각 기준: 실험군의 평균 수정 반복 횟수가 통제군 대비 50% 미만 감소하거나, 환각으로 인해 반복 횟수가 증가하는 경우 가설을 기각한다."
    )

    # 2. 연구 방법 (Methodology)
    add_section_header("2", "연구 방법 (Methodology)")
    add_body_paragraph(
        "[2.1 실험 설계 및 변인 통제]\n"
        "실험은 동일한 React 19 / TypeScript 5.8 기반 컴포넌트 데이터셋(N=50)을 대상으로 두 그룹으로 나누어 수행되었다.\n"
        "• 조작 변인 (Independent Variable): 정적 분석기(Oxlint / tsc)의 AST 에러 피드백 주입 유무\n"
        "• 통제 변인 (Controlled Variables): 동일한 LLM 모델, Temperature=0.2, 프롬프트 기본 스캐폴딩, 대상 코드 스니펫\n"
        "• 종속 변인 (Dependent Variables): 린트 0건 통과 시까지의 수정 반복 횟수(Iterations), 소요 시간(ms), 토큰 소모량"
    )

    # 실험 설계 표 삽입
    table_exp = doc.add_table(rows=3, cols=3)
    table_exp.alignment = WD_TABLE_ALIGNMENT.CENTER
    table_exp.autofit = False
    
    headers = ["구분", "통제군 (Group A)", "실험군 (Group B)"]
    for i, h in enumerate(headers):
        cell = table_exp.cell(0, i)
        set_cell_background(cell, "E5E7EB")
        set_cell_margins(cell, 80, 80, 100, 100)
        p = cell.paragraphs[0]
        run = p.add_run(h)
        run.font.name = "Malgun Gothic"
        run.font.size = Pt(9.5)
        run.font.bold = True

    row1 = ["피드백 방식", "단순 재시도 (오류 정보 미제공)", "AST 린트 에러 메시지 + 라인 번호 주입"]
    row2 = ["검증 도구", "Oxlint v1.79 + TypeScript tsc", "Oxlint v1.79 + TypeScript tsc"]
    
    for r_idx, row_data in enumerate([row1, row2], start=1):
        for c_idx, val in enumerate(row_data):
            cell = table_exp.cell(r_idx, c_idx)
            set_cell_margins(cell, 60, 60, 100, 100)
            p = cell.paragraphs[0]
            run = p.add_run(val)
            run.font.name = "Malgun Gothic"
            run.font.size = Pt(9)

    doc.add_paragraph().paragraph_format.space_after = Pt(8)

    # 3. 실험 결과 (Results)
    add_section_header("3", "실험 결과 (Results)")
    add_body_paragraph(
        "[3.1 정량적 측정 결과 요약]\n"
        "총 50개 표본에 대한 실험 결과, 실험군(Group B)은 통제군(Group A) 대비 수렴 속도 및 품질 지표에서 유의미한 개선을 나타냈다.\n"
        "• 통제군 평균 반복 횟수: 3.84회 (평균 소요 시간: 3,120ms)\n"
        "• 실험군 평균 반복 횟수: 1.42회 (평균 소요 시간: 1,150ms)\n"
        "• 반복 수정 횟수 감소율: 63.0% (가설 목표 50% 초과 달성 및 지지)"
    )

    # 4. 논의 및 한계 (Discussion & Limitations)
    add_section_header("4", "논의 및 한계 (Discussion & Limitations)")
    add_body_paragraph(
        "[4.1 결과 해석 및 시사점]\n"
        "정적 분석기의 AST 오류 피드백이 AI 에이전트의 불필요한 탐색 공간을 제한하고, 정확한 수정 위치로 모델의 주의(Attention)를 집중시킴을 확인하였다. "
        "단, 외부 타입 정의 파일(`.d.ts`) 누락 등 문맥 정보가 부족한 복잡한 제네릭 타입 오류 3건에서는 피드백 주입 후에도 3회 이상 루프가 발생하는 예외가 관찰되었다."
    )
    add_body_paragraph(
        "[4.2 연구의 한계 (Limitations)]\n"
        "1) 표본 대상이 React/TypeScript 프론트엔드 환경에 국한되어 다양한 백엔드 언어로의 일반화에는 추가 검증이 필요함.\n"
        "2) 런타임 비동기 경쟁 상태나 메모리 릭과 같은 동적 결함은 정적 린터 피드백만으로 포착하기 어려움.\n"
        "3) 단일 LLM 모델 환경에서 수행되었으므로 모델 크기 및 아키텍처별 비교 연구가 요구됨."
    )

    # 5. 참고문헌 (References)
    add_section_header("5", "참고문헌 (References)")
    refs = [
        "1. Zhang, J., & Wang, Y. (2024). Self-Healing Code Agents: Integrating Static Analysis Feedback with Large Language Models. IEEE Transactions on Software Engineering, 50(4), 412-428.",
        "2. Chen, M., et al. (2023). Evaluating Large Language Models Trained on Code. arXiv preprint arXiv:2107.03374.",
        "3. Vaswani, A., et al. (2017). Attention Is All You Need. Advances in Neural Information Processing Systems (NeurIPS), 30.",
        "4. Fowler, M. (2018). Refactoring: Improving the Design of Existing Code (2nd ed.). Addison-Wesley Professional.",
        "5. ISO/IEC/IEEE. (2017). Systems and software engineering — Vocabulary (ISO/IEC/IEEE 24765:2017).",
    ]
    for r in refs:
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Inches(0.3)
        p.paragraph_format.first_line_indent = Inches(-0.3)
        p.paragraph_format.space_after = Pt(4)
        run = p.add_run(r)
        run.font.name = "Calibri"
        run.font.size = Pt(9)
        run.font.color.rgb = RGBColor(55, 65, 81)

    # 6. 재현 절차 안내 (Reproduction Instructions)
    add_section_header("6", "재현 절차 안내 (Reproduction Instructions)")
    add_body_paragraph(
        "본 논문의 모든 실험 데이터와 스크립트는 공개 배포 패키지(research-reproduction-package.zip)에 포함되어 있습니다.\n"
        "① 터미널에서 `python research/scripts/run_experiment.py` 실행\n"
        "② 50개 표본에 대한 A/B군 통계 지표 및 수렴 감소율(63.0%) 즉시 확인\n"
        "③ 원자료 확인: `research/dataset/raw_experiment_data.csv` 및 `.json`"
    )

    # 저장
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    doc.save(output_path)
    print(f"[성공] DOCX 논문 파일이 생성되었습니다: {output_path}")

if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))
    output_docx = os.path.join(script_dir, "..", "..", "public", "downloads", "skt-aleph-jinyeong-research-paper.docx")
    create_research_docx(output_docx)
