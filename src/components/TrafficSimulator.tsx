import React, { useState } from 'react';
import {
  Network,
  GitMerge,
  Share2,
  Layers,
  Play,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Zap,
  RefreshCw,
  Clock,
} from 'lucide-react';

interface SimulationTrace {
  step: number;
  sender: string;
  receiver: string;
  message: string;
  bytes: number;
}

export const TrafficSimulator: React.FC = () => {
  const [selectedTopology, setSelectedTopology] = useState<'linear' | 'star' | 'mesh' | 'tree'>('star');
  const [complexity, setComplexity] = useState<1 | 2 | 3>(2);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simResult, setSimResult] = useState<{
    success: boolean;
    topologyName: string;
    bytes: number;
    latencyMs: number;
    errorCaught: boolean;
    traces: SimulationTrace[];
    explanation: string;
  }>({
    success: true,
    topologyName: '중앙 조율형 (Star / Hub-and-Spoke)',
    bytes: 228,
    latencyMs: 0.006,
    errorCaught: true,
    traces: [
      {
        step: 1,
        sender: 'Hub (오케스트레이터)',
        receiver: '전문가 1 & 2',
        message: '과제 분할 및 엣지 테스트 슈트 동시 배분',
        bytes: 65,
      },
      {
        step: 2,
        sender: '전문가 1 (구현자)',
        receiver: 'Hub (오케스트레이터)',
        message: '1차 알고리즘 초안 제출 (엣지 케이스 결함 포함)',
        bytes: 42,
      },
      {
        step: 3,
        sender: '전문가 2 (검증자)',
        receiver: 'Hub (오케스트레이터)',
        message: '단위 테스트 실패 리포트 반환 (불일치 케이스 적발)',
        bytes: 51,
      },
      {
        step: 4,
        sender: 'Hub (오케스트레이터)',
        receiver: '전문가 1 (구현자)',
        message: '실패 리포트 피드백 주입 및 최적 패치 재작성 완료 (단위 테스트 100% 통과)',
        bytes: 70,
      },
    ],
    explanation:
      '중앙 허브가 전담 엣지 검증자의 실패 리포트를 받아 즉시 1회의 자가 교정 피드백 루프를 가동함으로써, 엣지 케이스 단위 테스트(assert)를 100% 전수 통과하였습니다.',
  });

  const runTopologySimulation = (top = selectedTopology, comp = complexity) => {
    setIsSimulating(true);

    setTimeout(() => {
      let success = true;
      let errorCaught = false;
      let bytes = 0;
      let latencyMs = 0;
      let topologyName = '';
      let traces: SimulationTrace[] = [];
      let explanation = '';

      if (top === 'linear') {
        topologyName = '순차형 파이프라인 (Linear)';
        bytes = 86;
        latencyMs = 0.005;
        const hasInitialError = comp >= 2;
        if (hasInitialError) {
          success = false;
          errorCaught = false;
          explanation =
            '기획 에이전트의 엣지 케이스 결함이 리뷰어의 얕은 스모크 테스트를 그대로 통과(Cascading Error)하여, 실제 단위 테스트(assert)에서 실패하였습니다.';
        } else {
          success = true;
          errorCaught = false;
          explanation = '단순 난이도 1 과제로서 1차 구현만으로 모든 단위 테스트를 통과하였습니다.';
        }
        traces = [
          {
            step: 1,
            sender: 'Agent A (기획자)',
            receiver: 'Agent B (구현자)',
            message: `[난이도 ${comp}] 알고리즘 요구명세 전달`,
            bytes: 28,
          },
          {
            step: 2,
            sender: 'Agent B (구현자)',
            receiver: 'Agent C (리뷰어)',
            message: '1차 코드 작성 완료 (엣지 결함 내포)',
            bytes: 32,
          },
          {
            step: 3,
            sender: 'Agent C (리뷰어)',
            receiver: '최종 채점기',
            message: success
              ? '단위 테스트 통과: 배포 승인'
              : '얕은 스모크 테스트만 검사하여 엣지 결함 미탐지 (연쇄 오류 누적)',
            bytes: 26,
          },
        ];
      } else if (top === 'star') {
        topologyName = '중앙 조율형 (Star / Hub-and-Spoke)';
        bytes = 228;
        latencyMs = 0.006;
        success = true;
        errorCaught = comp >= 2;
        explanation =
          '중앙 허브가 전담 엣지 검증자의 실패 리포트를 받아 즉시 1회의 자가 교정 피드백 루프를 가동함으로써, 엣지 케이스 단위 테스트(assert)를 100% 전수 통과하였습니다.';
        traces = [
          {
            step: 1,
            sender: 'Hub (오케스트레이터)',
            receiver: '전문가 1 & 2',
            message: `[난이도 ${comp}] 과제 구현 및 엣지 테스트 준비 명령`,
            bytes: 65,
          },
          {
            step: 2,
            sender: '전문가 1 (구현자)',
            receiver: 'Hub (오케스트레이터)',
            message: '1차 코드 제출',
            bytes: 42,
          },
          {
            step: 3,
            sender: '전문가 2 (검증자)',
            receiver: 'Hub (오케스트레이터)',
            message: errorCaught ? '단위 테스트 실패 리포트 전송' : '기본 테스트 통과',
            bytes: 51,
          },
          {
            step: 4,
            sender: 'Hub (오케스트레이터)',
            receiver: '전문가 1 (구현자)',
            message: '자가 교정 피드백 주입 후 최적 패치 완성 (100% 통과)',
            bytes: 70,
          },
        ];
      } else if (top === 'mesh') {
        topologyName = '완전 연결 토론형 (Full Mesh Debate)';
        bytes = 878;
        latencyMs = 0.02;
        success = true;
        errorCaught = true;
        explanation =
          '3명의 에이전트가 9회에 걸쳐 상호 교차 단위 테스트를 수행하여 100% 통과율을 달성하였으나, 연산 지연시간이 3.3배 증가하고 통신 바이트가 3.8배 폭증하였습니다.';
        traces = [
          {
            step: 1,
            sender: 'Agent 1, 2, 3',
            receiver: '전원 브로드캐스트',
            message: '3개 후보 알고리즘 동시 제안',
            bytes: 280,
          },
          {
            step: 2,
            sender: 'Agent 2 ↔ Agent 1',
            receiver: '라운드 1 교차 테스트',
            message: '상호 코드 단위 테스트 assert 실행 및 결과 피드백',
            bytes: 310,
          },
          {
            step: 3,
            sender: 'Agent 3 ↔ Agent 1, 2',
            receiver: '라운드 2 다수결 투표',
            message: '단위 테스트 최다 통과 구현체 만장일치 채택',
            bytes: 288,
          },
        ];
      } else {
        topologyName = '계층형 트리 (Hierarchical Tree)';
        bytes = 126;
        latencyMs = 0.003;
        success = true;
        errorCaught = comp >= 2;
        explanation =
          '상위 매니저가 중간 서브리드에 모듈을 위임하고, 하위 단위 검증 실패 시 상향 에스컬레이션 폴백을 적용하여 통과하였습니다.';
        traces = [
          {
            step: 1,
            sender: 'Lead Manager',
            receiver: 'Sub-Lead 1, 2',
            message: '알고리즘 단위 모듈 분할 지시',
            bytes: 38,
          },
          {
            step: 2,
            sender: 'Sub-Lead 1',
            receiver: 'Worker Agent',
            message: '단위 함수 구현 및 테스트',
            bytes: 44,
          },
          {
            step: 3,
            sender: 'Sub-Leads',
            receiver: 'Lead Manager',
            message: '단위 검증 후 상향 보고 및 최종 승인',
            bytes: 44,
          },
        ];
      }

      setSimResult({
        success,
        topologyName,
        bytes,
        latencyMs,
        errorCaught,
        traces,
        explanation,
      });
      setIsSimulating(false);
    }, 250);
  };

  return (
    <div className="rounded-2xl border border-neutral-300/80 bg-neutral-50/80 p-5 shadow-xs backdrop-blur-md dark:border-neutral-700/80 dark:bg-neutral-900/60">
      {/* 상단 헤더 */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-4 dark:border-neutral-800">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Network className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
              다중 에이전트 협업 토폴로지 알고리즘 단위 테스트 실측 시뮬레이터
            </h4>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            4가지 에이전트 연결 토폴로지와 난이도를 선택하여 단위 테스트 통과 여부, 통신 흐름, 실행 지연시간(ms)을
            실시간 비교할 수 있습니다.
          </p>
        </div>

        {/* 시뮬레이션 실행 버튼 */}
        <button
          type="button"
          onClick={() => runTopologySimulation()}
          disabled={isSimulating}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-blue-500 disabled:opacity-50"
        >
          {isSimulating ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Play className="h-3.5 w-3.5" />}
          <span>{isSimulating ? '단위 테스트 실행 중...' : '토폴로지 단위 테스트 실행'}</span>
        </button>
      </div>

      {/* 조작 패널: 토폴로지 선택 & 난이도 */}
      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* 토폴로지 선택 */}
        <div className="space-y-2 rounded-xl border border-neutral-200/80 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-800/80">
          <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">1. 비교 토폴로지 선택</span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setSelectedTopology('linear');
                runTopologySimulation('linear', complexity);
              }}
              className={`flex items-center gap-2 rounded-lg border p-2.5 text-left text-xs transition-all ${
                selectedTopology === 'linear'
                  ? 'border-blue-500 bg-blue-50/80 font-bold text-blue-900 dark:border-blue-400 dark:bg-blue-950/40 dark:text-blue-200'
                  : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300'
              }`}
            >
              <ArrowRight className="h-4 w-4 shrink-0 text-neutral-500" />
              <div>
                <div>순차형 (Linear)</div>
                <div className="text-[10px] font-normal text-neutral-500">얕은 검토 / 연쇄 오류</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedTopology('star');
                runTopologySimulation('star', complexity);
              }}
              className={`flex items-center gap-2 rounded-lg border p-2.5 text-left text-xs transition-all ${
                selectedTopology === 'star'
                  ? 'border-blue-500 bg-blue-50/80 font-bold text-blue-900 dark:border-blue-400 dark:bg-blue-950/40 dark:text-blue-200'
                  : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300'
              }`}
            >
              <Share2 className="h-4 w-4 shrink-0 text-blue-500" />
              <div>
                <div>중앙 조율형 (Star/Hub) ⭐</div>
                <div className="text-[10px] font-normal text-neutral-500">엣지 피드백 / 100% 통과</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedTopology('mesh');
                runTopologySimulation('mesh', complexity);
              }}
              className={`flex items-center gap-2 rounded-lg border p-2.5 text-left text-xs transition-all ${
                selectedTopology === 'mesh'
                  ? 'border-blue-500 bg-blue-50/80 font-bold text-blue-900 dark:border-blue-400 dark:bg-blue-950/40 dark:text-blue-200'
                  : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300'
              }`}
            >
              <GitMerge className="h-4 w-4 shrink-0 text-amber-500" />
              <div>
                <div>토론형 (Full Mesh)</div>
                <div className="text-[10px] font-normal text-neutral-500">9회 상호 교차 테스트</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedTopology('tree');
                runTopologySimulation('tree', complexity);
              }}
              className={`flex items-center gap-2 rounded-lg border p-2.5 text-left text-xs transition-all ${
                selectedTopology === 'tree'
                  ? 'border-blue-500 bg-blue-50/80 font-bold text-blue-900 dark:border-blue-400 dark:bg-blue-950/40 dark:text-blue-200'
                  : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300'
              }`}
            >
              <Layers className="h-4 w-4 shrink-0 text-purple-500" />
              <div>
                <div>계층형 (Tree)</div>
                <div className="text-[10px] font-normal text-neutral-500">매니저 → 팀장 → 워커</div>
              </div>
            </button>
          </div>
        </div>

        {/* 난이도 선택 */}
        <div className="space-y-2 rounded-xl border border-neutral-200/80 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-800/80">
          <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
            2. 과제 복잡도 (Task Complexity)
          </span>
          <div className="flex gap-2">
            {[
              { level: 1, label: '난이도 1 (기본 알고리즘)' },
              { level: 2, label: '난이도 2 (엣지 케이스 결함)' },
              { level: 3, label: '난이도 3 (경계조건 / 복합 DP)' },
            ].map((c) => (
              <button
                key={c.level}
                type="button"
                onClick={() => {
                  setComplexity(c.level as 1 | 2 | 3);
                  runTopologySimulation(selectedTopology, c.level as 1 | 2 | 3);
                }}
                className={`flex-1 rounded-lg border px-3 py-2 text-center text-xs transition-all ${
                  complexity === c.level
                    ? 'border-blue-500 bg-blue-50/80 font-bold text-blue-800 dark:border-blue-400 dark:bg-blue-950/40 dark:text-blue-200'
                    : 'border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="mt-2 text-[11px] text-neutral-500 dark:text-neutral-400">
            * 난이도 2, 3에서는 엣지 케이스(음수, 빈 입력, 오버플로)가 포함되어, 전담 단위 테스트 피드백이 없으면 순차형
            구조에서 프로덕션 결함이 발생합니다.
          </div>
        </div>
      </div>

      {/* 시뮬레이션 결과 요약 카드 */}
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-4">
        <div className="dark:bg-neutral-850 rounded-xl border border-neutral-200/80 bg-white p-3.5 text-center dark:border-neutral-800">
          <div className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">단위 테스트 결과</div>
          <div className="mt-1 flex items-center justify-center gap-1.5">
            {simResult.success ? (
              <>
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">통과 (100% PASS)</span>
              </>
            ) : (
              <>
                <XCircle className="h-4 w-4 text-red-500" />
                <span className="text-sm font-bold text-red-600 dark:text-red-400">실패 (연쇄 오류)</span>
              </>
            )}
          </div>
        </div>

        <div className="dark:bg-neutral-850 rounded-xl border border-neutral-200/80 bg-white p-3.5 text-center dark:border-neutral-800">
          <div className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">전송 페이로드</div>
          <div className="mt-1 flex items-center justify-center gap-1">
            <Zap className="h-4 w-4 text-amber-500" />
            <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100">{simResult.bytes} Bytes</span>
          </div>
        </div>

        <div className="dark:bg-neutral-850 rounded-xl border border-neutral-200/80 bg-white p-3.5 text-center dark:border-neutral-800">
          <div className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">실제 실행 지연시간</div>
          <div className="mt-1 flex items-center justify-center gap-1">
            <Clock className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100">{simResult.latencyMs} ms</span>
          </div>
        </div>

        <div className="dark:bg-neutral-850 rounded-xl border border-neutral-200/80 bg-white p-3.5 text-center dark:border-neutral-800">
          <div className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">자가 교정 피드백</div>
          <div className="mt-1 text-sm font-bold text-blue-600 dark:text-blue-400">
            {simResult.errorCaught ? ' 단위 테스트 교정 성공' : '❌ 얕은 검토로 누락'}
          </div>
        </div>
      </div>

      {/* 분석 결과 설명 및 통신 트레이스 로그 */}
      <div className="dark:bg-neutral-850 mt-4 rounded-xl border border-neutral-200/80 bg-white p-4 dark:border-neutral-800">
        <div className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
          【 단위 테스트 실측 리포트 】
        </div>
        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">{simResult.explanation}</p>

        {/* 단계별 메시지 트레이스 */}
        <div className="mt-3 space-y-1.5 border-t border-neutral-100 pt-3 dark:border-neutral-800">
          <div className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">
            실시간 에이전트 간 통신 및 테스트 트레이스:
          </div>
          {simResult.traces.map((tr) => (
            <div
              key={tr.step}
              className="flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-1.5 text-xs dark:bg-neutral-900/60"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold text-neutral-400">단계 {tr.step}</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">{tr.sender}</span>
                <ArrowRight className="h-3 w-3 text-neutral-400" />
                <span className="text-neutral-700 dark:text-neutral-300">{tr.receiver}</span>
                <span className="text-neutral-500 dark:text-neutral-400">: {tr.message}</span>
              </div>
              <span className="font-mono text-[11px] text-neutral-400">{tr.bytes} B</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
