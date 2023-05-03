import styles from './Timer.module.css';
import { Component, For } from 'solid-js';
import { TimerLabels } from './TimerLabels';

type Part = {
  name: string;
  subParts: number[];
};

type TimerProps = {
  parts: Part[];
};

const Timer: Component<TimerProps> = (props) => {
  const parts = props.parts.map((part) => ({
    ...part,
    duration: part.subParts.reduce((sum, subpart) => sum + subpart, 0) / 60,
  }))

  return (
    <div class={styles.timer}>
      <TimerLabels parts={parts} />
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

export default Timer;
