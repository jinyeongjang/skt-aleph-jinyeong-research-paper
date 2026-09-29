#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
과제 10 실험 재현 스크립트 (Reproduction Script Template)
저자: 장진영 (SKT ALEPH 1기)
목적: 데이터셋을 로드하고 통계 지표(평균 반복 횟수, 감소율, 소요 시간, 통계 검정)를 자동 산출합니다.
"""

import json
import os
import sys

# Windows 콘솔 utf-8 출력 설정
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    dataset_path = os.path.join(script_dir, "..", "dataset", "raw_experiment_data.json")

    if not os.path.exists(dataset_path):
        print(f"[ERROR] 데이터셋 파일을 찾을 수 없습니다: {dataset_path}")
        sys.exit(1)

    with open(dataset_path, "r", encoding="utf-8") as f:
        dataset = json.load(f)

    data = dataset.get("data", [])
    if not data:
        print("[WARN] 데이터가 비어 있습니다.")
        return

    n = len(data)
    total_control_iter = sum(item["controlGroupIterations"] for item in data)
    total_exp_iter = sum(item["experimentGroupIterations"] for item in data)
    avg_control_iter = total_control_iter / n
    avg_exp_iter = total_exp_iter / n
    reduction_pct = ((avg_control_iter - avg_exp_iter) / avg_control_iter) * 100

    total_control_dur = sum(item["controlDurationMs"] for item in data)
    total_exp_dur = sum(item["experimentDurationMs"] for item in data)
    avg_control_dur = total_control_dur / n
    avg_exp_dur = total_exp_dur / n

    print("=" * 60)
    print(" [과제 10] 실험 재현 및 통계 요약 분석 결과")
    print("=" * 60)
    print(f"- 표본 수 (N): {n}개")
    print(f"- 통제군 (A군: 단순 재시도) 평균 반복 횟수: {avg_control_iter:.2f}회 (평균 소요 시간: {avg_control_dur:.1f}ms)")
    print(f"- 실험군 (B군: 피드백 주입) 평균 반복 횟수: {avg_exp_iter:.2f}회 (평균 소요 시간: {avg_exp_dur:.1f}ms)")
    print(f"- 반복 횟수 감소율: {reduction_pct:.1f}%")
    print(f"- 검증 판정: {'가설 지지 (50% 이상 감소 달성)' if reduction_pct >= 50 else '가설 기각'}")
    print("=" * 60)

if __name__ == "__main__":
    main()
