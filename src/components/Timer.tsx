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
  const indexes = Array.from({ length: props.parts.length + 1}, (_, index) => index + 1);
  return (
    <div class={styles.timer}>
      <div class={styles.labels}>
        <For each={indexes}>
          {(index) => <div class={styles.label}>{index}</div>}
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
