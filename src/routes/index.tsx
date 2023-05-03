import Timer from '~/components/Timer';

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
    </>
  );
}
