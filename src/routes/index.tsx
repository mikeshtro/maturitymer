import { createSignal, onCleanup, onMount } from 'solid-js';
import { ActualTime } from '~/components/ActualTime';
import { RemainingTime } from '~/components/RemainingTime';
import { Timer } from '~/components/Timer';

export default function Home() {
  const [examDuration, setExamDuration] = createSignal(0);
  const [examPart, setExamPart] = createSignal<'exam' | 'pause'>('exam');
  const examPartDuration = () => examPart() === 'exam' ? examDuration() : 0;
  const pausePartDuration = () => examPart() === 'pause' ? examDuration() : 0;

  const examParts = [
    { name: 'Part 1', subParts: [60, 60, 60] },
    { name: 'Part 2', subParts: [60, 60, 60] },
    { name: 'Part 3', subParts: [60, 60] },
    { name: 'Part 4', subParts: [60, 60, 60, 60] },
    { name: 'Part 5', subParts: [60, 60, 60] },
  ];
  const pauseParts = [{ name: 'Part 1', subParts: [60, 60, 60, 60, 60] }];

  const actualParts = () => examPart() === 'exam' ? examParts : pauseParts;

  let interval: ReturnType<typeof setInterval> | undefined;

  function processKeyDown(event: KeyboardEvent): void {
    if (event.code === 'Enter' || event.code === 'Space') {
      if (interval == null) {
        interval = setInterval(() => setExamDuration(value => value + 1), 1000);
      } else {
        setExamDuration(0);
        setExamPart('exam');
        clearInterval(interval);
        interval = undefined;
      }
    }
  }

  function switchExamPart(): void {
    setExamPart(part => part === 'exam' ? 'pause' : 'exam');
    setExamDuration(0);
  }

  onMount(() => {
    document.addEventListener('keydown', processKeyDown);
  });

  onCleanup(() => {
    document.removeEventListener('keydown', processKeyDown);
  });

  return (
    <>
      <Timer parts={examParts} currentDuration={examPartDuration()} />
      <div style={{ display: 'flex', 'align-items': 'center' }}>
        <RemainingTime parts={actualParts()} currentDuration={examDuration()} switchExamPart={switchExamPart} />
        <div style={{ flex: 1 }}>
          <Timer parts={pauseParts} currentDuration={pausePartDuration()} />
        </div>
        <ActualTime />
      </div>
    </>
  );
}
