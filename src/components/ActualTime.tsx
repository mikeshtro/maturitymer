import { createSignal, onCleanup, onMount } from "solid-js";

export const ActualTime = () => {
  const [time, setTime] = createSignal(new Date());

  let interval: ReturnType<typeof setInterval>;

  onMount(() => {
    interval = setInterval(() => setTime(new Date()), 1000);
  });

  onCleanup(() => {
    clearInterval(interval);
  })

  return (
    <div
      style={{ flex: 1, display: 'flex', 'justify-content': 'center', 'font-size': '5rem' }}
    >
      {time().getHours().toString().padStart(2, '0')}:{time().getMinutes().toString().padStart(2, '0')}
    </div>
  );
}