import { Timer } from '~/components/Timer';

export default function Home() {
  return (
    <>
      <Timer
        parts={[
          { name: 'Part 1', subParts: [60, 60, 60] },
          { name: 'Part 2', subParts: [60, 60, 60] },
          { name: 'Part 3', subParts: [60, 60] },
          { name: 'Part 4', subParts: [60, 60, 60, 60] },
          { name: 'Part 5', subParts: [60, 60, 60] },
        ]}
      />
      <div style={{ display: 'flex', 'align-items': 'center' }}>
        <div style={{ flex: 1, display: 'flex', 'justify-content': 'center', 'font-size': '5rem' }}>A</div>
        <div style={{ flex: 1 }}>
          <Timer
            parts={[{ name: 'Part 1', subParts: [60, 60, 60, 60, 60] }]}
          />
        </div>
        <div style={{ flex: 1, display: 'flex', 'justify-content': 'center', 'font-size': '5rem' }}>B</div>
      </div>
    </>
  );
}
