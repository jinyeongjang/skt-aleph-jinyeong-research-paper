# 과제 10 연구 재현 패키지 (Reproduction Package)

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
