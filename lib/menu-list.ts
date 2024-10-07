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
      href: "/vehicles",
      label: "Vehicles",
      active: pathname.includes("/vehicles"),
      icon: BusFront,
      submenus: []
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
      active:
        pathname.includes("/transportation-cost") ||
        pathname.includes("/insurance-cost") ||
        pathname.includes("/license-cost"),
      icon: Bus,
      submenus: [
        {
          href: "/transportation-cost/fuel-purchase",
          label: "Fuel Purchase",
          active: pathname.includes("/transportation-cost/fuel-purchase"),
          sub2menus: []
        },
        {
          href: "/transportation-cost/fuel-consumption",
          label: "Fuel Consumption",
          active: pathname.includes("/transportation-cost/fuel-consumption"),
          sub2menus: []
        },
        {
          href: "/transportation-cost/maintenance",
          label: "Maintenance",
          active: pathname.includes("/transportation-cost/maintenance"),
          sub2menus: []
        },
        {
          href: "/transportation-cost/depreciation",
          label: "Depreciation",
          active: pathname.includes("/transportation-cost/depreciation"),
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
              active: pathname.includes("/insurance-cost/insurance-record"),
              sub2menus: []
            },
            {
              href: "/insurance-cost/insurance-claim",
              label: "Insurance Claim",
              active: pathname.includes("/insurance-cost/insurance-claim"),
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
              label: "Vehicle License Record",
              active: pathname.includes("/license-cost/vehicle-license-record"),
              sub2menus: []
            },
            {
              href: "/license-cost/driver-license-record",
              label: "Driver License Record",
              active: pathname.includes("/license-cost/driver-license-record"),
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
          active: pathname.includes("/waste-records/waste-bins"),
          sub2menus: []
        },
        {
          href: "/waste-records/waste-dumping-fee",
          label: "Waste Dumping Fee",
          active: pathname.includes("/waste-records/waste-dumping-fee"),
          sub2menus: []
        },
        {
          href: "/waste-records/waste-revenue",
          label: "Waste Revenue",
          active: pathname.includes("/waste-records/waste-revenue"),
          sub2menus: []
        }
      ]
    },
    {
      href: "/route-information",
      label: "Route Information",
      active: pathname.includes("/route-information"),
      icon: List,
      submenus: []
    }
  ];
}
