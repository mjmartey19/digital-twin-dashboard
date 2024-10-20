import { Route } from "@/lib/validation";

export const mockRouteData: Route[] = [
  {
    routeId: "R001",
    vin: "1HGBH41JXMN109186",
    startLocation: "Location A",
    endLocation: "Location B",
    distance: 12.5,
    startTime: new Date("2024-10-01T08:00:00Z"),
    endTime: new Date("2024-10-01T09:00:00Z"),
    stopsMade: 1,
    routeStatus: "Completed",
    driverId: "D001",
    fuelConsumption: 3.5,
    notes: "No significant issues during the route.",
  },
  {
    routeId: "R002",
    vin: "1HGBH41JXMN109187",
    startLocation: "Location C",
    endLocation: "Location D",
    distance: 20.0,
    startTime: new Date("2024-10-01T09:30:00Z"),
    endTime: new Date("2024-10-01T10:30:00Z"),
    stopsMade: 2,
    routeStatus: "In Progress",
    driverId: "D002",
    fuelConsumption: 4.0,
    notes: "Traffic delays encountered.",
  },
  {
    routeId: "R003",
    vin: "1HGBH41JXMN109188",
    startLocation: "Location E",
    endLocation: "Location F",
    distance: 8.0,
    startTime: new Date("2024-10-01T11:00:00Z"),
    endTime: new Date("2024-10-01T11:30:00Z"),
    stopsMade: 0,
    routeStatus: "Completed",
    driverId: "D003",
    fuelConsumption: 2.0,
    notes: "Smooth ride with no issues.",
  },
  {
    routeId: "R004",
    vin: "1HGBH41JXMN109189",
    startLocation: "Location G",
    endLocation: "Location H",
    distance: 15.2,
    startTime: new Date("2024-10-01T12:00:00Z"),
    endTime: new Date("2024-10-01T12:45:00Z"),
    stopsMade: 3,
    routeStatus: "Pending",
    driverId: "D001",
    fuelConsumption: 3.8,
    notes: "Planned route with multiple stops.",
  },
  {
    routeId: "R005",
    vin: "1HGBH41JXMN109190",
    startLocation: "Location I",
    endLocation: "Location J",
    distance: 25.0,
    startTime: new Date("2024-10-01T13:00:00Z"),
    endTime: new Date("2024-10-01T14:15:00Z"),
    stopsMade: 4,
    routeStatus: "Completed",
    driverId: "D004",
    fuelConsumption: 5.5,
    notes: "Extended route with fuel stop.",
  },
  {
    routeId: "R006",
    vin: "1HGBH41JXMN109191",
    startLocation: "Location K",
    endLocation: "Location L",
    distance: 30.0,
    startTime: new Date("2024-10-01T14:30:00Z"),
    endTime: new Date("2024-10-01T16:00:00Z"),
    stopsMade: 2,
    routeStatus: "In Progress",
    driverId: "D005",
    fuelConsumption: 6.0,
    notes: "Heavy traffic, but on schedule.",
  },
  {
    routeId: "R007",
    vin: "1HGBH41JXMN109192",
    startLocation: "Location M",
    endLocation: "Location N",
    distance: 18.3,
    startTime: new Date("2024-10-01T16:15:00Z"),
    endTime: new Date("2024-10-01T17:00:00Z"),
    stopsMade: 1,
    routeStatus: "Completed",
    driverId: "D006",
    fuelConsumption: 4.2,
    notes: "Route completed without incidents.",
  },
  {
    routeId: "R008",
    vin: "1HGBH41JXMN109193",
    startLocation: "Location O",
    endLocation: "Location P",
    distance: 22.7,
    startTime: new Date("2024-10-01T17:30:00Z"),
    endTime: new Date("2024-10-01T18:30:00Z"),
    stopsMade: 3,
    routeStatus: "Completed",
    driverId: "D007",
    fuelConsumption: 4.9,
    notes: "Encountered road construction.",
  },
  {
    routeId: "R009",
    vin: "1HGBH41JXMN109194",
    startLocation: "Location Q",
    endLocation: "Location R",
    distance: 9.5,
    startTime: new Date("2024-10-01T19:00:00Z"),
    endTime: new Date("2024-10-01T19:30:00Z"),
    stopsMade: 0,
    routeStatus: "Completed",
    driverId: "D008",
    fuelConsumption: 2.3,
    notes: "Quick delivery with no issues.",
  },
  {
    routeId: "R010",
    vin: "1HGBH41JXMN109195",
    startLocation: "Location S",
    endLocation: "Location T",
    distance: 14.0,
    startTime: new Date("2024-10-01T20:00:00Z"),
    endTime: new Date("2024-10-01T20:45:00Z"),
    stopsMade: 1,
    routeStatus: "Pending",
    driverId: "D009",
    fuelConsumption: 3.0,
    notes: "Scheduled for tomorrow morning.",
  },
];
