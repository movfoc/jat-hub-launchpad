const unitsPerMetre = 390 / 13.4;
const tableHeight = 4 * 0.3048 * unitsPerMetre;
const tableRowPositions = [198, 318, 318 + tableHeight, 480, 480 + tableHeight, 642];

export const youthFloorPlan = {
  unitsPerMetre,
  courtDimensions: { lengthMetres: 13.4, widthMetres: 6.1, width: 390, height: 6.1 * unitsPerMetre },
  tableDimensions: { lengthFeet: 6, widthFeet: 4, width: 6 * 0.3048 * unitsPerMetre, height: 4 * 0.3048 * unitsPerMetre },
  chairCount: 150,
  screen: { x: 440, y: 39, width: 260, height: 10 },
  presentationTables: [{ x: 490, y: 76 }, { x: 605, y: 76 }],
  marketplace: { x: 595, y: 152, width: 472, height: 388 + 6.1 * unitsPerMetre },
  basketball: { x: 595, y: 734, width: 472, height: 6.1 * unitsPerMetre },
  entrance: { x: 974, y: 944, width: 100 },
  courts: [
    { id: "badminton", name: "Badminton", y: 152, detail: "Court 4 · Active badminton court." },
    { id: "pickleball", name: "Pickleball", y: 346, detail: "Court 3 · Pickleball activities." },
    { id: "yoga", name: "Yoga & interactive games", y: 540, detail: "Court 2 · Yoga and interactive games." },
    { id: "audience", name: "Audience seating", y: 734, detail: "Court 1 · 150 audience chairs facing the top-centre wall-mounted screen." },
  ],
  tables: Array.from({ length: 36 }, (_, index) => {
    const row = Math.floor(index / 6);
    const column = index % 6;
    return { id: index + 1, row: row + 1, x: 630 + column * 64, y: tableRowPositions[row] ?? 642, assignedTo: null };
  }),
};
