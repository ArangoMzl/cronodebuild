function LegendIndicator() {
    return (
        <div className="flex px-4 gap-4">
            <div className="inline-flex items-center">
                <span className="w-4 h-4 inline-block bg-greencard rounded-md mr-1.5"></span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Tecnologo</span>
            </div>
            <div className="inline-flex items-center">
                <span className="w-4 h-4 inline-block bg-bluecard rounded-md mr-1.5"></span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Tecnico</span>
            </div>
            <div className="inline-flex items-center">
                <span className="w-4 h-4 inline-block bg-graycard rounded-md mr-1.5"></span>
                <span className="text-slate-600 dark:text-gray-400 text-sm">Evento</span>
            </div>
            <div className="inline-flex items-center">
                <span className="w-4 h-4 inline-block bg-yellowcard rounded-md mr-1.5"></span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Operario</span>
            </div>
            <div className="inline-flex items-center">
                <span className="w-4 h-4 inline-block bg-pinkcard rounded-md mr-1.5"></span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Curso</span>
            </div>
        </div>

    );
}

export default LegendIndicator;