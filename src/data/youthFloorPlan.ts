export const youthFloorPlan = {
  tableLengthMetres: 2,
  chairCount: 150,
  courts: [
    { id: "basketball", name: "Basketball shooting", y: 88, detail: "Court 4 · Basketball shooting activities." },
    { id: "yoga", name: "Yoga & interactive games", y: 252, detail: "Court 3 · Yoga and interactive games." },
    { id: "pickleball", name: "Pickleball", y: 416, detail: "Court 2 · Pickleball activities." },
    { id: "seating", name: "Badminton court · audience", y: 580, detail: "Court 1 · The lowest badminton court is reserved for 150 audience chairs, facing the wall-mounted screen." },
  ],
  tables: Array.from({ length: 40 }, (_, index) => {
    const row = Math.floor(index / 8);
    const column = row % 2 === 0 ? index % 8 : 7 - index % 8;
    return { id: index + 1, x: 612 + column * 56, y: 154 + row * 112, assignedTo: null };
  }),
};