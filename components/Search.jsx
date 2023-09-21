import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CommandMenu } from '@/components/CommandPage';

export function Search() {
  return (
    <div className="w-full md:flex hidden  max-w-sm items-center space-x-2">
      <CommandMenu/>
    </div>
  )
}
