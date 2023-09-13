import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Search() {
  return (
    <div className="w-full md:flex hidden  max-w-sm items-center space-x-2">
      <Input type="text" placeholder="CRONODE"/>
      <Button type="submit">Buscar</Button>
    </div>
  )
}
