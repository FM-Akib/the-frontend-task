import { useState } from "react";
import { BsStack } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { ImAttachment } from "react-icons/im";
import { PiChatsCircle } from "react-icons/pi";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAllTasks from "../Hooks/useAllTasks";

const TaskCard = ({ clientId,clientName, description, attachments }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [files, setFiles] = useState(attachments);

    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const axiosPublic = useAxiosPublic();
    const [refetch] = useAllTasks();
    // console.log(attachments);




    const handleFileUpload = async(clientId) => {
     //when submit the form -> upload the file
     //it should be done by different approach but as data Architecture is not clear so I am doing this way
      const uploadFile = [...attachments,...files.map(file => ({name: file.name}))];
      const uniqueUploadFile = Array.from(
        new Map(uploadFile.map(item => [item.name, item])).values()
    );

      const response = await axiosPublic.patch(`/api/taskCategory/attachments`, {
        clientId,attachments:uniqueUploadFile,
      });
      // console.log(response.data);
      if(response.data.modifiedCount){
        refetch;
      }
      toggleModal();
    };


     //After uploading the file, it will be shown in the card
     //Right now for database just i added file name-> later on able to add file upload to database
      const handleFileChange = (event) => {
        const newFiles = Array.from(event.target.files);
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      };


    
    return (
        <div className="bg-white p-4 rounded  mb-4 w-max">

       {/* profile */}
        <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-2">
            <img
                src="https://i.ibb.co.com/nzqB8RQ/yellow-background-3.webp"
                alt="Client Avatar"
                className="w-[40px] h-[40px] rounded-full object-cover"
            />
            <h2 className="text-neutral-950 font-title font-semibold">{clientName}</h2>
            </div>


            <div className="flex items-center gap-2">
            <img
                src="https://i.ibb.co.com/HxjPnHn/istockphoto-1386479313-612x612.jpg"
                alt="Sadik Avatar"
                className="w-[40px] h-[40px] rounded-full object-cover"
            />
            <span className="text-neutral-950 font-semibold">Sadik Istiak</span>
            </div>
        </div>

        {/* description */}
        <div className="flex items-center gap-3 text-neutral-500 my-2 justify-between">
            
            <p className="truncate text-neutral-950 flex items-center gap-1">
            <span className="text-gray-400"><BsStack /></span>
            {description}
            </p>

            <div className="flex items-center text-primary-500 gap-1 bg-slate-100 p-1 rounded">
            <span><FaClipboardList /></span>
            <span>1/2</span>
            </div>
         </div>

       {/* attachments */}
       <div className="flex items-center gap-5 text-neutral-500">
        <div className="flex items-center gap-2">
        <img
            src="https://i.ibb.co.com/pfZQh34/fc.jpg"
            alt="Avatar 1"
            className="w-[32px] h-[32px] rounded-full object-cover"
        />
        <img
            src="https://i.ibb.co.com/k1R8J6H/10.webp"
            alt="Avatar 2"
            className="w-[32px] h-[32px] rounded-full object-cover"
        />
        <span className="font-medium bg-slate-100 p-1 rounded-full">12+</span>
        </div>

        <div className="flex items-center gap-1">
        <span className=""><PiChatsCircle/></span>
        <span>15</span>
        </div>

       
        {/* button for attachment and it's modal attach bellow this button */}

        <button onClick={toggleModal} className="flex items-center gap-1">
        <span className=""><ImAttachment /> </span>
        <span>{attachments.length}</span>
        </button>
        {/* modal down here */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg">
              <h2 className="text-lg font-bold mb-2 border-b-[1px]">Attachments</h2>
              <input type="file" multiple onChange={handleFileChange} className="my-2" />
              <ul>
                {files.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
              <button onClick={toggleModal} className="mt-4 bg-red-600 text-white px-4 py-2 rounded">Close</button>
              <button onClick={() => handleFileUpload(clientId)} className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded ml-3">Submit</button>
            </div>
          </div>
        )}
       


        <div className="flex items-center gap-1">
        <span className=""><FaRegCalendarDays /></span>
        <span>30-12-2022</span>
        </div>

       </div>



      </div>
    );
};

export default TaskCard;
