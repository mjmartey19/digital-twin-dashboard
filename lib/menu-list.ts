import {
  Tag,
  ListCollapse,
  List,
  BookUser,
  LayoutGrid,
  LucideIcon,
  BusFront,
  Bus
} from "lucide-react";

// Updated Submenu type to allow sub2menus
type Submenu = {
  href: string;
  label: string;
  active: boolean;
  sub2menus: Submenu[]; // Define sub2menus as an array of Submenu
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

export function getMenuList(pathname: string): Menu[] {
  return [
    {
      href: "/dashboard",
      label: "Dashboard",
      active: pathname.includes("/dashboard"),
      icon: LayoutGrid,
      submenus: []
    },
    {
      href: "",
      label: "Vehicles",
      active: pathname.includes("/vehicles"),
      icon: BusFront,
      submenus: [
        {
          href: "/vehicles/fleet",
          label: "Fleet",
          active: pathname === "/fleet",
          sub2menus: []
        },
        {
          href: "/vehicles/vehicle-assignment",
          label: "Assign Vehicle",
          active: pathname === "/vehicle-assignment",
          sub2menus: []
        }
      ]
    },
    {
      href: "/labour",
      label: "Labour",
      active: pathname.includes("/labour"),
      icon: BookUser,
      submenus: []
    },
    {
      href: "",
      label: "Transportation Cost",
      active: pathname.includes("/transportation-cost"),
      icon: Bus,
      submenus: [
        {
          href: "/transportation-cost/fuel-purchase",
          label: "Fuel Purchase",
          active: pathname === "/fuel-purchase",
          sub2menus: []
        },
        {
          href: "/transportation-cost/fuel-consumption",
          label: "Fuel Consumption",
          active: pathname === "/fuel-consumption",
          sub2menus: []
        },
        {
          href: "/transportation-cost/maintenance",
          label: "Maintenance",
          active: pathname === "/maintenance",
          sub2menus: []
        },
        {
          href: "/transportation-cost/depreciation",
          label: "Depreciation",
          active: pathname === "/depreciation",
          sub2menus: []
        },
        {
          href: "",
          label: "Insurance Cost",
          active: pathname.includes("/insurance-cost"),
          sub2menus: [
            {
              href: "/insurance-cost/insurance-record",
              label: "Insurance Record",
              active: pathname === "/insurance-record",
              sub2menus: []
            },
            {
              href: "/insurance-cost/insurance-claim",
              label: "Insurance Claim",
              active: pathname === "/insurance-claim",
              sub2menus: []
            }
          ]
        },
        {
          href: "",
          label: "License Cost",
          active: pathname.includes("/license-cost"),
          sub2menus: [
            {
              href: "/license-cost/vehicle-license-record",
              label: "license-cost/Vehicle License Record",
              active: pathname === "/vehicle-license-record",
              sub2menus: []
            },
            {
              href: "/license-cost/driver-license-record",
              label: "license-cost/Driver License Record",
              active: pathname === "/driver-license-record",
              sub2menus: []
            }
          ]
        }
      ]
    },
    {
      href: "",
      label: "Waste Records",
      active: pathname.includes("/waste-records"),
      icon: ListCollapse,
      submenus: [
        {
          href: "/waste-records/waste-bins",
          label: "Waste Bins",
          active: pathname === "/waste-bins",
          sub2menus: []
        },
        {
          href: "/waste-records/waste-dumping-fee",
          label: "Waste Dumping Fee",
          active: pathname === "/waste-dumping-fee",
          sub2menus: []
        },
        {
          href: "/waste-records/waste-revenue",
          label: "Waste Revenue",
          active: pathname === "/waste-revenue",
          sub2menus: []
        }
      ]
    },
    {
      href: "/route-information",
      label: "Route Information",
      active: pathname === "/route-information",
      icon: List,
      submenus: []
    }
  ];
}
