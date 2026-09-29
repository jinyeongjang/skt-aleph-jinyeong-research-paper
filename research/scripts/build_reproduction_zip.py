#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
과제 10 재현 패키지 ZIP 빌더 (Reproduction ZIP Package Builder)
저자: 장진영 (SKT ALEPH 1기)
규격: condi 10-6, condi 10-7 준수 (논문 원고, DOCX, 원자료, 재현 스크립트, README 통합)
"""

import os
import sys
import zipfile

def build_zip():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    root_dir = os.path.abspath(os.path.join(script_dir, "..", ".."))
    public_downloads = os.path.join(root_dir, "public", "downloads")
    os.makedirs(public_downloads, exist_ok=True)

    zip_path = os.path.join(public_downloads, "research-reproduction-package.zip")

    # 포함할 파일 및 폴더 목록
    files_to_pack = [
        ("PAPER.md", os.path.join(root_dir, "PAPER.md")),
        ("public/downloads/skt-aleph-jinyeong-research-paper.docx", os.path.join(public_downloads, "skt-aleph-jinyeong-research-paper.docx")),
        ("research/dataset/raw_experiment_data.csv", os.path.join(root_dir, "research", "dataset", "raw_experiment_data.csv")),
        ("research/dataset/raw_experiment_data.json", os.path.join(root_dir, "research", "dataset", "raw_experiment_data.json")),
        ("research/scripts/run_experiment.py", os.path.join(root_dir, "research", "scripts", "run_experiment.py")),
        ("research/scripts/generate_docx_paper.py", os.path.join(root_dir, "research", "scripts", "generate_docx_paper.py")),
    ]

    # 재현용 README.md 생성
    readme_content = """# 과제 10 연구 재현 패키지 (Reproduction Package)

## 📌 개요
- 연구자: 장진영 (SKT ALEPH 1기)
- 제목: AI 에이전트의 정적 분석 피드백 루프가 코드 리팩토링 수렴성에 미치는 영향
- 구성 파일:
  1. `PAPER.md` — 공식 논문 마크다운 원고
  2. `skt-aleph-jinyeong-research-paper.docx` — 실제 논문 서식 DOCX 파일
  3. `research/dataset/raw_experiment_data.csv` & `.json` — 표본 원자료
  4. `research/scripts/run_experiment.py` — 통계 재현 스크립트
  5. `research/scripts/generate_docx_paper.py` — DOCX 논문 생성기

## 🚀 빠른 재현 4단계
1. 터미널을 열고 본 패키지 폴더로 이동합니다.
2. `python research/scripts/run_experiment.py` 명령을 실행합니다.
3. 콘솔에 표본 N=50에 대한 A/B군 통계와 반복 횟수 63.0% 감소 결과가 출력되면 성공입니다.
4. 원자료와 DOCX 파일은 각각 `research/dataset/` 및 루트 경로에서 확인 가능합니다.
"""
    readme_path = os.path.join(root_dir, "research", "README.md")
    with open(readme_path, "w", encoding="utf-8") as f:
        f.write(readme_content)
    files_to_pack.append(("research/README.md", readme_path))

    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
        for arcname, filepath in files_to_pack:
            if os.path.exists(filepath):
                zipf.write(filepath, arcname)
                print(f"  + 포함: {arcname}")
            else:
                print(f"  ! 누락(건너뜀): {filepath}")

    print(f"\n[성공] 재현 패키지 ZIP 파일이 생성되었습니다: {zip_path}")

if __name__ == "__main__":
    build_zip()
