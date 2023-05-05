import { Component, For } from "solid-js";

type Part = {
  name: string;
  duration: number;
}

type TimerLabelsProps = {
  parts: Part[];
  total: number;
}

export const TimerLabels: Component<TimerLabelsProps> = (props) => {
  const labels = [{ label: 0, length: 0, translate: -50 }];
  for (let index = 0; index < props.parts.length; index++) {
    const label = props.parts[index].duration + labels[index].label;
    labels.push({
      label,
      length: props.parts[index].duration,
      translate: (label / props.total - 0.5) * 100
    });
  }

  return (
    <div style={{ display: 'flex' }}>
      <For each={labels}>
        {(label) => <div style={{ flex: label.length, display: 'flex', 'justify-content': 'flex-end' }}>
          <span style={{ transform: `translateX(${label.translate}%)` }}>{label.label}</span>
        </div>}
      </For>
    </div>
  );
}