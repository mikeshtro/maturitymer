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
  return (
    <div class={styles.timer}>
      <For each={props.parts}>
        {(part, index) => (
          <div class={styles.part}>
            <div>{index()}</div>
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
  );
};

export default Timer;
