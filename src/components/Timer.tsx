import styles from './Timer.module.css';
import { Component, For } from 'solid-js';
import { TimerLabels } from './TimerLabels';
import { sum } from '~/utils/sum';

type Part = {
  name: string;
  subParts: number[];
};

type TimerProps = {
  parts: Part[];
};

export const Timer: Component<TimerProps> = (props) => {
  const parts = props.parts.map((part) => ({ ...part, duration: sum(part.subParts) / 60 }));
  const totalTime = sum(parts, (part) => part.duration);

  return (
    <div class={styles.timer}>
      <TimerLabels parts={parts} total={totalTime} />
      <div class={styles.parts}>
        <For each={parts}>
          {(part) => (
            <div class={styles.part} style={{ flex: part.duration }}>
              <For each={part.subParts}>
                {(subpart) => (
                  <div class={styles.subpart} style={{ flex: subpart }}></div>
                )}
              </For>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};
