import styles from './Timer.module.css';
import { Component, For } from 'solid-js';

type Part = {
  name: string;
  subParts: number[];
};

type TimerProps = {
  parts: Part[];
};

const Timer: Component<TimerProps> = (props) => {
  const labels = [0];
  for (let index = 0; index < props.parts.length; index++) {
    const duration = props.parts[index].subParts.reduce((sum, subpart) => sum + subpart, 0);
    labels.push((labels[index] + duration));
  }

  return (
    <div class={styles.timer}>
      <div class={styles.labels}>
        <For each={labels}>
          {(label) => <div class={styles.label}>{label / 60}</div>}
        </For>
      </div>
      <div class={styles.parts}>
        <For each={props.parts}>
          {(part) => (
            <div class={styles.part}>
              <div class={styles.subparts}>
                <For each={part.subParts}>
                  {(subpart) => (
                    <div class={styles.subpart} style={{ flex: subpart }}></div>
                  )}
                </For>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default Timer;
