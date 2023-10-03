"use client"

import * as React from "react"
import { BiSearchAlt2 } from "react-icons/bi"
import {
  Calculator,
  Calendar,
  CreditCard,
  DownloadCloud,
  GraduationCap,
  Mouse,
  Presentation,
  Settings,
  Smile,
  User,
} from "lucide-react"

import { ScrollArea } from "@/components/ui/scroll-area"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import Filter from "./Filter"

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const toggleDialog = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prevOpen) => !prevOpen);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button onClick={toggleDialog} className="lg:inline-flex justify-between gap-32 border border-greendinput/25 p-2 rounded-2xl items-center shadow-md hover:border-greendinput hidden">
        <BiSearchAlt2 size={20} />
        <span className="font-semibold opacity-80 text-gray-500">Buscar...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <BiSearchAlt2 size={18} onClick={toggleDialog} className="lg:hidden flex relative left-[55%]"/>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Escribe un comando o busca..." />

        <Filter/>

        <CommandList>
        <ScrollArea className="h-[300px]">
          <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendario</span>
              </CommandItem>
              <CommandItem>
                <GraduationCap className="mr-2 h-4 w-4" />
                <span>Profesores</span>
              </CommandItem>
              <CommandItem>
                <Presentation className="mr-2 h-4 w-4" />
                <span>Ambientes</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <DownloadCloud className="mr-2 h-4 w-4" />
                <span>Descargar</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Mouse className="mr-2 h-4 w-4" />
                <span>Scroll</span>
                <CommandShortcut>⌘♥</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </ScrollArea>
        </CommandList>
      </CommandDialog>
    </>

  )
}
