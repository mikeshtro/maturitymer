import { sum } from "~/utils/sum";

type Part = {
  subParts: number[];
}

type RemainingTimeProps = {
  currentDuration: number;
  parts: Part[];
}

export const RemainingTime = (props: RemainingTimeProps) => {
  const partTimes = () => props.parts.map((part) => sum(part.subParts));
  const totalTime = () => sum(partTimes());
  const remainingTime = () => (totalTime() - props.currentDuration) / 60;
  const remainingMinutes = () => Math.floor(remainingTime());
  const remainingSeconds = () => Math.round((remainingTime() - remainingMinutes()) * 60);

  return (
    <div
      style={{ flex: 1, display: 'flex', 'justify-content': 'center', 'font-size': '5rem', 'padding-top': '1rem' }}
    >
      {remainingMinutes().toString().padStart(2, '0')}:{remainingSeconds().toString().padStart(2, '0')}
    </div>
  );
}