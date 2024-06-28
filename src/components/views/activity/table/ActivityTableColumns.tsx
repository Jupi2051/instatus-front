import { ColumnDef } from "@tanstack/react-table";
import { API_Event } from "../../../../API/types/events/events";
import { ReactNode, useState } from "react";
import { ActivityDialog } from "./ActivityDialog";
import { TextBasedAvatar } from "../../../custom/TextBasedAvatar";
import { AnimatePresence, motion } from "framer-motion";

const dateOptions: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
};
  
const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
};

export function formatTime(time: Date)
{
    return `${time.toLocaleDateString('en-US', dateOptions)}, ${time.toLocaleTimeString('en-US', timeOptions)}`
}
  
export const ActivityTableColumns: (ColumnDef<API_Event> & {LoadingNode?: ReactNode})[] = [
    {
        accessorKey: "Actor",
        header: () => <div><h1>Actor</h1></div>,
        cell: ({row}) => {
            const item = row.original;
            return <div className="flex items-center gap-2"> <TextBasedAvatar text={item.Actor.name}/> {item.Actor.email}</div>;
        }
    },
    {
        accessorKey: "Action",
        header: () => <div><h1>Action</h1></div>,
        accessorFn: (item) => item.action.name
    },
    {
        accessorKey: "Date",
        header: () => <div><h1>Date</h1></div>,
        accessorFn: (item) => formatTime(new Date(item.occurred_at)),
    },
    {
        id: "actions",
        cell: ({row}) => {
            const [isExpanded, setIsExpanded] = useState<boolean>(false);
            const event = row.original;

            return <div className="w-full flex justify-end">
                <div>
                    <motion.div initial={{height: 0}} animate={{height: isExpanded? "300px" : "0px"}}></motion.div>
                    <div className="bg-black">
                        <div className="absolute w-[105%] h-fit left-1/2 -translate-x-1/2 top-0 max-w-dvw z-20 shadow-[0px_2px_5px_0px_#0000000A] rounded-none lg:rounded-xl">
                            <AnimatePresence>
                                {
                                isExpanded?
                                <ActivityDialog event_id={event.id} setIsOpen={setIsExpanded}/>
                                :
                                null
                                }
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
                <button className="h-full w-6 flex items-center justify-end" onClick={() => setIsExpanded((prev) => !prev)}>
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.317323 0.284414C0.74042 -0.0948047 1.4264 -0.0948047 1.84949 0.284414L8.34995 6.11072C8.77304 6.48993 8.77304 7.10477 8.34995 7.48399L1.84949 13.3103C1.4264 13.6895 0.74042 13.6895 0.317323 13.3103C-0.105774 12.9311 -0.105774 12.3162 0.317323 11.937L6.05169 6.79735L0.317323 1.65769C-0.105774 1.27847 -0.105774 0.663633 0.317323 0.284414Z" fill="#EEEEEE"/>
                    </svg>
                </button>
            </div>
        }
    },
]