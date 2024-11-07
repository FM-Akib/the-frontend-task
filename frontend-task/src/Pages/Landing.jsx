import TaskColoumn from "../Components/TaskColoumn";
import useAllTasks from "../Hooks/useAllTasks";

const Landing = () => {
    //custom hook for load all data, sample data is given below
    const [ taskCategory] = useAllTasks();

    // const taskCategory = [
    //     { title: 'Incomplete',    cards: [{ clientId:"A", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib.png'},{name:'akib6.png'}] }  , { clientId:"A", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib.png'},{name:'akib6.png'}] } ,{ clientId:"A", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib.png'},{name:'akib6.png'}] },{ clientId:"A", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib.png'},{name:'akib6.png'}] },{ clientId:"A", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib.png'},{name:'akib6.png'}] },{ clientId:"A", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib.png'},{name:'akib6.png'}] }] ,},
    //     { title: 'To Do',         cards: [{ clientId:"B", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib2.png'},{name:'Bangladesh.pdf'}] } ,{ clientId:"B", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib2.png'},{name:'Bangladesh.pdf'}] },{ clientId:"B", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib2.png'},{name:'Bangladesh.pdf'}] },{ clientId:"B", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib2.png'},{name:'Bangladesh.pdf'}] },{ clientId:"B", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib2.png'},{name:'Bangladesh.pdf'}] },{ clientId:"B", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib2.png'},{name:'Bangladesh.pdf'}] }] },
    //     { title: 'Doing',         cards: [{ clientId:"C", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib3.png'}] }, { clientId:"C", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib3.png'}] },{ clientId:"C", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib3.png'}] },{ clientId:"C", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib3.png'}] },{ clientId:"C", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib3.png'}] },{ clientId:"C", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib3.png'}] },{ clientId:"C", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib3.png'}] }] },
    //     { title: 'Under Review',  cards: [{ clientId:"D", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib4.png'}] },{ clientId:"D", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib4.png'}] },{ clientId:"D", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib4.png'}] },{ clientId:"D", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib4.png'}] },{ clientId:"D", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib4.png'}] },{ clientId:"D", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib4.png'}] } ] },
    //     { title: 'Completed',     cards: [{ clientId:"E", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib5.png'}] } ,{ clientId:"E", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib5.png'}] } ,{ clientId:"E", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib5.png'}] } ,{ clientId:"E", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib5.png'}] },{ clientId:"E", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib5.png'}] },{ clientId:"E", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib5.png'}] },{ clientId:"E", clientName: 'Client B', description: 'Lorem ipsum dolor sit amet curn...', attachments:[{name:'akib5.png'}] }] },
    //   ];


    return (
        <div className="flex overflow-x-auto h-screen">
        <div className="flex space-x-4 w-max">
          {taskCategory?.map((column, index) => (
            <TaskColoumn key={index} {...column} />
          ))}
        </div>
      </div>
    );
};

export default Landing;