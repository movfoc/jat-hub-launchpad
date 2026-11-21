const unitsPerMetre = 390 / 13.4;
const tableHeight = 4 * 0.3048 * unitsPerMetre;
const tableWidth = 6 * 0.3048 * unitsPerMetre;
const centralRowPositions = [310, 310 + tableHeight, 475, 475 + tableHeight, 640, 640 + tableHeight];
const tablePositions = [
  ...Array.from({ length: 6 }, (_, column) => ({ zone: "top", row: 0, x: 630 + column * 64, y: 198, rotated: false })),
  ...Array.from({ length: 7 }, (_, row) => ({ zone: "left", row: row + 1, x: 610, y: 270 + row * 64, rotated: true })),
  ...Array.from({ length: 24 }, (_, index) => ({ zone: "centre", row: Math.floor(index / 4) + 1, x: 707 + (index % 4) * 64, y: centralRowPositions[Math.floor(index / 4)] ?? 640, rotated: false })),
  ...Array.from({ length: 7 }, (_, row) => ({ zone: "right", row: row + 1, x: 1017, y: 270 + row * 64, rotated: true })),
];

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
  tables: tablePositions.map((position, index) => ({
    ...position, id: index + 1,
    width: position.rotated ? tableHeight : tableWidth,
    height: position.rotated ? tableWidth : tableHeight,
    assignedTo: null,
  })),
};
