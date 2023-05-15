import styles from './Timer.module.css';

type TimerSubPartProps = {
  length: number;
  startsAt: number;
  duration: number;
}

export const TimerSubPart = (props: TimerSubPartProps) => {
  const width = () => {
    if (props.startsAt > props.duration) {
      return 1;
    }
    if (props.startsAt + props.length < props.duration) {
      return 0;
    }
    console.log(props.duration, props.startsAt)
    return 1 - (props.duration - props.startsAt) / props.length
  }

  return (
    <div class={styles.subpart} style={{ flex: props.length }}>
      <div
        class={styles['subpart-progress']}
        classList={{ [styles['subpart-progress-expiring']]: width() <= 0.5 }}
        style={{ width: width() * 100 + '%' }}
      ></div>
    </div>
  )
}
