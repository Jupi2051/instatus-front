import ActivityTable from "./table/ActivityTable"
import Loading from "../../custom/Loading";
import { SWRInfiniteResponse } from "swr/infinite";
import { API_Event } from "../../../API/types/events/events";

type ActivityListProps = {
    events: SWRInfiniteResponse<API_Event[], any>
    newData: API_Event[]
};

export default function ActivityList(props: ActivityListProps)
{
    
    const events = props.events;
    const flattenedData = events.data?.flat(1)?? [];
    
    const newAndOldData = [...props.newData, ...flattenedData];

    return <div className="text-black">
        <div>
            <ActivityTable data={newAndOldData} isLoading={events.isValidating && events.isLoading}/>
        </div>
        <button 
            onClick={() => events.setSize(events.size + 1)}
            className="w-full text-[#616161] bg-neutral-100 uppercase py-3.5 font-semibold disabled:bg-neutral-200 disabled:text-gray-50 flex items-center gap-2 justify-center rounded-b-xl"
            disabled={events.isValidating || events.isLoading}
            >
                {
                    events.isValidating?
                     <>
                        <Loading /> Loading ...
                     </> : "Load More"
                }
        </button>
    </div>
}