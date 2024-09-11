"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { getMenuList } from "@/lib/menu-list";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CollapseMenuButton } from "@/components/admin-panel/collapse-menu-button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

interface MenuProps {
  isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
  const pathname = usePathname();
  const menuList = getMenuList(pathname); // Fetches the menu list

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <ScrollArea className="overflow-y-auto flex-1">
        <nav className="mt-8">
          <ul className="flex flex-col space-y-1 px-2">
            {menuList.map(({ href, label, icon: Icon, active, submenus }, index) => (
              <li className="w-full" key={index}>
                {submenus.length === 0 ? (
                  <div className="w-full" key={index}>
                    <TooltipProvider disableHoverableContent>
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                          <Button
                            variant={active ? "secondary" : "ghost"}
                            className={`w-full justify-start h-11 mb-1  ${active
                              ? "bg-green-100 text-green-700"
                              : "text-dark-400 hover:bg-gray-100"
                              }`}
                            asChild
                          >
                            <Link href={href}>
                              <span className={cn(isOpen === false ? "" : "mr-4")}>
                                <Icon size={18} />
                              </span>
                              <p
                                className={cn(
                                  "max-w-[200px] truncate",
                                  isOpen === false
                                    ? "-translate-x-96 opacity-0"
                                    : "translate-x-0 opacity-100"
                                )}
                              >
                                {label}
                              </p>
                            </Link>
                          </Button>
                        </TooltipTrigger>
                        {isOpen === false && (
                          <TooltipContent side="right">{label}</TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                ) : (
                  <div className="w-full" key={index}>
                    <CollapseMenuButton
                      icon={Icon}
                      label={label}
                      active={active}
                      submenus={submenus}
                      isOpen={isOpen}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </ScrollArea>
    </div>
  );
}
