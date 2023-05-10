import { createSignal, onCleanup, onMount } from 'solid-js';
import { ActualTime } from '~/components/ActualTime';
import { RemainingTime } from '~/components/RemainingTime';
import { Timer } from '~/components/Timer';

export default function Home() {
  const [examDuration, setExamDuration] = createSignal(0);
  const examParts = [
    { name: 'Part 1', subParts: [60, 60, 60] },
    { name: 'Part 2', subParts: [60, 60, 60] },
    { name: 'Part 3', subParts: [60, 60] },
    { name: 'Part 4', subParts: [60, 60, 60, 60] },
    { name: 'Part 5', subParts: [60, 60, 60] },
  ];
  const pauseParts = [{ name: 'Part 1', subParts: [60, 60, 60, 60, 60] }];
  let interval: ReturnType<typeof setInterval> | undefined;

  function processKeyDown(event: KeyboardEvent): void {
    if (event.code === 'Enter' || event.code === 'Space') {
      if (interval == null) {
        interval = setInterval(() => setExamDuration(value => value + 1), 1000);
      } else {
        setExamDuration(0);
        clearInterval(interval);
        interval = undefined;
      }
    }
  }

  onMount(() => {
    document.addEventListener('keydown', processKeyDown);
  });

  onCleanup(() => {
    document.removeEventListener('keydown', processKeyDown);
  });

  return (
    <>
      <Timer parts={examParts} />
      <div style={{ display: 'flex', 'align-items': 'center' }}>
        <RemainingTime parts={examParts} currentDuration={examDuration()} />
        <div style={{ flex: 1 }}>
          <Timer parts={pauseParts} />
        </div>
        <ActualTime />
      </div>
    </>
  );
}
