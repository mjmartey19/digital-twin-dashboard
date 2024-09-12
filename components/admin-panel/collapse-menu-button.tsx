"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Dot, LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
  sub2menus?: Submenu[]; // Sub2menus defined as an optional array
};

interface CollapseMenuButtonProps {
  icon: LucideIcon;
  label: string;
  active: boolean;
  submenus: Submenu[];
  isOpen: boolean | undefined;
}

export function CollapseMenuButton({
  icon: Icon,
  label,
  active,
  submenus,
  isOpen,
}: CollapseMenuButtonProps) {
  const isSubmenuActive = submenus.some((submenu) => submenu.active);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isSubmenuActive);

  return isOpen ? (
    <Collapsible
      open={isCollapsed}
      onOpenChange={setIsCollapsed}
      className="w-full"
    >
      <CollapsibleTrigger
        className="[&[data-state=open]>div>div>svg]:rotate-180 mb-1"
        asChild
      >
        <Button
          variant={active ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start h-10 hover:bg-gray-100 active:bg-gray-200",
            active ? "bg-green-100 text-green-700" : "text-gray-500"
          )}
        >
          <div className="w-full items-center flex justify-between">
            <div className="flex items-center">
              <span className="mr-4">
                <Icon size={18} />
              </span>
              <p
                className={cn(
                  "max-w-[150px] truncate",
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0"
                )}
              >
                {label}
              </p>
            </div>
            <div>
              <ChevronDown
                size={18}
                className="transition-transform duration-200"
              />
            </div>
          </div>
        </Button>
      </CollapsibleTrigger>

      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        {submenus.map(({ href, label, active, sub2menus }, index) => (
          <div key={index} className="mb-1">
            {!sub2menus || sub2menus.length === 0 ? (
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start h-10 hover:bg-gray-100 active:bg-gray-200",
                  active ? "text-green-700" : "text-gray-700"
                )}
                asChild
              >
                <Link href={href}>
                  <span className="mr-4 ml-2">
                    <Dot size={active ? 32 : 24} />
                  </span>
                  <p
                    className={cn(
                      "max-w-[170px] truncate",
                      isOpen ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0"
                    )}
                  >
                    {label}
                  </p>
                </Link>
              </Button>
            ) : (
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-start h-10 hover:bg-gray-100 text-dark-500"
                  >
                    <div className="w-full items-center flex justify-between">
                      <div className="flex items-center">
                        <span className="mr-4 ml-2">
                          <Dot size={active ? 32 : 24} />
                        </span>
                        <p
                          className={cn(
                            "max-w-[150px] truncate",
                            isOpen ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0"
                          )}
                        >
                          {label}
                        </p>
                      </div>
                      <div>
                        <ChevronDown
                          size={18}
                          className="transition-transform duration-200"
                        />
                      </div>
                    </div>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden pl-6">
                  {sub2menus.map(({ href, label, active }, subIndex) => (
                    <Button
                      key={subIndex}
                      variant="ghost"
                      className={cn(
                        "w-full justify-start h-10 mb-1 hover:bg-gray-100",
                        active ? "text-green-700" : "text-gray-700"
                      )}
                      asChild
                    >
                      <Link href={href}>
                        <span className="mr-4 ml-2">
                          <Dot size={active ? 28 : 20} />
                        </span>
                        <p className="max-w-[150px] truncate">{label}</p>
                      </Link>
                    </Button>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            )}
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  ) : (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant={active ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start h-10 mb-1 hover:bg-gray-100 active:bg-gray-200",
                  active ? "bg-green-100 text-green-700" : "text-gray-700"
                )}
              >
                <div className="w-full items-center flex justify-between">
                  <div className="flex items-center">
                    <span className={cn(isOpen === false ? "" : "mr-4")}>
                      <Icon size={18} />
                    </span>
                    <p
                      className={cn(
                        "max-w-[200px] truncate",
                        isOpen === false ? "opacity-0" : "opacity-100"
                      )}
                    >
                      {label}
                    </p>
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="right" align="start" alignOffset={2}>
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent side="right" sideOffset={25} align="start">
        <DropdownMenuLabel className="max-w-[190px] truncate">
          {label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {submenus.map(({ href, label }, index) => (
          <DropdownMenuItem key={index} asChild>
            <Link className="cursor-pointer" href={href}>
              <p className="max-w-[180px] truncate">{label}</p>
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuArrow className="fill-border" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
