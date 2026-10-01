# 과제 10 연구 재현 패키지 (Reproduction Package)

## 📌 개요

- 연구자: 장진영 (SKT ALEPH 1기)
- 제목: 알고리즘 문제 해결 및 단위 테스트 검증에서 다중 에이전트 협업 토폴로지(순차형 vs 중앙 조율형 vs 토론형 vs 계층형)의 테스트 통과율 및 실행 지연시간 비교 실증
- 구성 파일:
  1. `PAPER.md` — 공식 논문 마크다운 원고
  2. `skt-aleph-jinyeong-research-paper.docx` — 실제 논문 서식 DOCX 파일
  3. `research/dataset/raw_experiment_data.csv` & `.json` — 50개 실제 문제 실측 원자료
  4. `research/scripts/run_experiment.py` — 100% 로컬 파이썬 단위 테스트 실측 스크립트 (API 무사용)
  5. `research/scripts/generate_docx_paper.py` — DOCX 논문 생성기

## 🚀 빠른 재현 4단계

1. 터미널을 열고 본 저장소 디렉터리로 이동합니다.
2. `python research/scripts/run_experiment.py` 명령을 실행합니다.
3. 콘솔에 50개 문제에 대한 단위 테스트 통과율(순차 30.0% vs 조율 100.0%)과 `[최종 가설 채택]` 판정이 출력되면 성공입니다.
4. 원자료와 DOCX 파일은 각각 `research/dataset/` 및 `public/downloads/` 경로에서 확인 가능합니다.
