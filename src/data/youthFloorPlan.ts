export const youthFloorPlan = {
  tableLengthMetres: 2,
  chairCount: 150,
  screen: { x: 440, y: 39, width: 260, height: 10 },
  presentationTables: [{ x: 490, y: 76 }, { x: 605, y: 76 }],
  marketplace: { x: 595, y: 152, width: 472, height: 476 },
  audience: { x: 595, y: 644, width: 472, height: 148 },
  entrance: { x: 974, y: 840, width: 100 },
  courts: [
    { id: "basketball", name: "Basketball shooting", y: 152, detail: "Court 4 · Basketball shooting activities." },
    { id: "yoga", name: "Yoga & interactive games", y: 316, detail: "Court 3 · Yoga and interactive games." },
    { id: "pickleball", name: "Pickleball", y: 480, detail: "Court 2 · Pickleball activities." },
    { id: "badminton", name: "Badminton", y: 644, detail: "Court 1 · Active badminton court. Audience seating is separate, on the right near the entrance." },
  ],
  tables: Array.from({ length: 49 }, (_, index) => {
    const row = Math.floor(index / 7);
    const column = row % 2 === 0 ? index % 7 : 6 - index % 7;
    return { id: index + 1, x: 612 + column * 64, y: 198 + row * 58, assignedTo: null };
  }),
};