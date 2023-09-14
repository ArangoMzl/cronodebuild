import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


function ajustes() {
    return (
        <>
            <h1>Ajustes</h1>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>Hover</TooltipTrigger>
                    <TooltipContent>
                        <p>Add to library</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

        </>
    );
}

export default ajustes;