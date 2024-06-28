import { forwardRef } from "react"
import useSWR from "swr"
import Skeleton from "../../../custom/Skeleton";
import { API_Event } from "../../../../API/types/events/events";
import { formatTime } from "./ActivityTableColumns";
import { motion } from "framer-motion";

interface ActivityDialogProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    event_id: string;
    setIsOpen:  (v: boolean) => void;
}

export const ActivityDialog = forwardRef<HTMLDivElement, ActivityDialogProps>(
    function ({className, ...props}, ref) {
        
        const event = useSWR<API_Event>(`/events/${props.event_id}`);
        
        const isLoading = event.isLoading;

        return <motion.div className="w-full relative overflow-hidden" ref={ref} initial={{height: "0px"}} animate={{height: "300px"}} exit={{height: "0px"}}>
            <div className="border border-[#DFDFDF] bg-white pl-10 pr-12 py-8 rounded-none lg:rounded-xl min-h-[300px]">
            <button className="absolute right-7 top-1 p-3 text-[#929292]" onClick={() => props.setIsOpen(false)}>X</button>
                <div className="w-full flex">
                    <div className="flex flex-col w-full">
                        <div>
                            <h1 className="uppercase text-sm font-semibold text-[#929292] mb-4">Actor</h1>
                            <div className="max-w-40 space-y-1.5">
                                <div className="grid grid-cols-[50px_1fr] gap-x-4">
                                    {
                                        isLoading?
                                        <Skeleton className="h-3.5 w-[140px]" />
                                        :
                                        <>
                                        <span className="text-[#929292]">Name</span> <span className="text-[#1C1C1C]">{event.data?.Actor.name}</span>
                                        </>
                                    }
                                </div>
                                <div className="grid grid-cols-[50px_1fr] gap-x-4">
                                    {
                                        isLoading?
                                        <Skeleton className="h-3.5 w-[140px]" />
                                        :
                                        <>
                                        <span className="text-[#929292]">Email</span> <span className="text-[#1C1C1C]">{event.data?.Actor.email}</span>
                                        </>
                                    }
                                </div>
                                <div className="grid grid-cols-[50px_1fr] gap-x-4">
                                    {
                                        isLoading?
                                        <Skeleton className="h-3.5 w-[140px]" />
                                        :
                                        <>
                                        <span className="text-[#929292]">ID</span> <span className="text-[#1C1C1C]">{event.data?.Actor.id.slice(0, 20)}</span>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="uppercase text-sm font-semibold text-[#929292] my-4">Metadata</h1>
                            {
                                isLoading?
                                <Skeleton className="h-3.5 max-w-48 w-full"/>
                                :
                                event.data?.metadata?
                                <div className="max-w-40 space-y-1.5">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#929292]">Name</span> <span className="text-[#1C1C1C]">Occured At</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#929292]">Email</span> <span className="text-[#1C1C1C]">Occured At</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#929292]">ID</span> <span className="text-[#1C1C1C]">Occured At</span>
                                    </div>
                                </div>
                                :
                                <h1>N/A</h1>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div>
                            <h1 className="uppercase text-sm font-semibold text-[#929292] mb-4">Action</h1>
                            <div className="space-y-1.5">
                                <div className="grid grid-cols-[50px_1fr] gap-x-4">
                                    {
                                        isLoading?
                                        <Skeleton className="h-3.5 w-[140px]" />
                                        :
                                        <>
                                        <span className="text-[#929292]">Name</span> <span className="text-[#1C1C1C]">{event.data?.action.name}</span>
                                        </>
                                    }
                                </div>
                                <div className="grid grid-cols-[50px_1fr] gap-x-4">
                                    {
                                        isLoading?
                                        <Skeleton className="h-3.5 w-[140px]" />
                                        :
                                        <>
                                        <span className="text-[#929292]">Object</span> <span className="text-[#1C1C1C]">{event.data?.object}</span>
                                        </>
                                    }
                                </div>
                                <div className="grid grid-cols-[50px_1fr] gap-x-4">
                                    {
                                        isLoading?
                                        <Skeleton className="h-3.5 w-[140px]" />
                                        :
                                        <>
                                        <span className="text-[#929292]">ID</span> <span className="text-[#1C1C1C]">{event.data?.action_id.slice(0, 25)}</span>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="uppercase text-sm font-semibold text-[#929292] my-4">Target</h1>
                            {
                                isLoading?
                                <Skeleton className="h-3.5 max-w-48 w-full" />
                                :
                                event.data?.target?
                                <div className="max-w-40 space-y-1.5">
                                    <div className="grid grid-cols-[50px_1fr] gap-x-4">
                                        <span className="text-[#929292]">Name</span> <span className="text-[#1C1C1C]">{event.data.target.name}</span>
                                    </div>
                                    <div className="grid grid-cols-[50px_1fr] gap-x-4">
                                        <span className="text-[#929292]">Email</span> <span className="text-[#1C1C1C]">{event.data.target.email}</span>
                                    </div>
                                    <div className="grid grid-cols-[50px_1fr] gap-x-4">
                                        <span className="text-[#929292]">ID</span> <span className="text-[#1C1C1C]">{event.data.target_id?.slice(0, 25)?? "N/A"}</span>
                                    </div>
                                </div>
                                :
                                <h1>N/A</h1>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col">  
                            <h1 className="uppercase text-sm font-semibold text-[#929292] mb-4">Date</h1>
                            <div className="">
                                <div className="grid grid-cols-[50px_1fr] gap-x-7">
                                {
                                    isLoading?
                                    <Skeleton className="h-3.5 w-[140px]" />
                                    :
                                    <>
                                    <span className="text-[#929292]">Readable</span> <span className="text-[#1C1C1C]">{formatTime(new Date(event.data?.occurred_at?? ""))}</span>
                                    </>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    }
)