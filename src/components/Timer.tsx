import styles from './Timer.module.css';
import { Component, For } from 'solid-js';
import { TimerLabels } from './TimerLabels';
import { sum } from '~/utils/sum';
import { TimerSubPart } from './TimerSubPart';

type Part = {
  name: string;
  subParts: number[];
};

type TimerProps = {
  parts: Part[];
  currentDuration: number;
};

export const Timer: Component<TimerProps> = (props) => {
  const parts = () => props.parts.map((part) => ({ ...part, duration: sum(part.subParts) / 60 }));
  const totalTime = () => sum(parts(), (part) => part.duration);

  function getSubPartStart(partIndex: number, subPartIndex: number): number {
    let start = 0;

    for (let i = 0; i < partIndex; i++) {
      start += sum(props.parts[i].subParts);
    }

    for (let i = 0; i < subPartIndex; i++) {
      start += props.parts[partIndex].subParts[i];
    }

    return start;
  }

  return (
    <div class={styles.timer}>
      <TimerLabels parts={parts()} total={totalTime()} />
      <div class={styles.parts}>
        <For each={parts()}>
          {(part, partIndex) => (
            <div class={styles.part} style={{ flex: part.duration }}>
              <For each={part.subParts}>
                {(subpart, subPartIndex) => <TimerSubPart length={subpart} startsAt={getSubPartStart(partIndex(), subPartIndex())} duration={props.currentDuration} />}
              </For>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};
