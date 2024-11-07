//Coloumn for the task cards
import TaskCard from "./TaskCard";

const TaskColoumn = ({title, cards}) => {

    return (
        <div className="w-max bg-gray-100 p-4 overflow-y-scroll h-full">

        <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <span className={`${title === "To Do" && "bg-blue-500"} ${title === "Incomplete" && "bg-red-700"} ${title === "Doing" && "bg-yellow-400"} w-[16px] h-[16px] rounded-s-lg`}></span>
                <span className="text-neutral-700 font-bold text-lg">{title}</span>
            </div>
                <span className="bg-neutral-200 text-neutral-700 text-sm rounded-md py-1 px-2 font-bold">
                    {cards?.length}
                </span>
            </div>
            {
                cards?.map((card, index) =>(
                    <TaskCard key={index} {...card} />
                ))
            }
        </div>
    );
};

export default TaskColoumn;

