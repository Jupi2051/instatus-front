import { useEffect, useState } from "react";
import ActivityList from "../../components/views/activity/ActivityList";
import ActivitySearch from "../../components/views/activity/ActivitySearch";
import { useEvents } from "../../hooks/services/useEvents";
import useLiveEvents from "../../hooks/services/useLiveEvents";
import { API_Event } from "../../API/types/events/events";

export function ActivityContent()
{
    const [isLiveEnabled, setLiveEnabled] = useState(false);
    const [searchValue, setSearchValue] = useState<string>("");
    const [newData, setNewData] = useState<API_Event[]>([]);

    const events = useEvents({limit: 10, searchValue: searchValue});
    const {data, error} = useLiveEvents({enabled: isLiveEnabled, onConnectionClose: onConnectionClose});

    function onConnectionClose()
    {
        setLiveEnabled(false);
    }
    
    function onTriggerLiveEvents()
    {
        setLiveEnabled((prev) => !prev);
    }

    useEffect(() => {
        if (data === undefined) return () => {};
        
        if (error !== undefined) {
            setLiveEnabled(false);
            return () => {}
        }
        const dataObject = JSON.parse(data) as API_Event;
        
        setNewData((prev) => [dataObject, ...prev])
        return () => {}
    }, [data, error]);

    return <div>
        <div className="bg-gray-100 p-5 pb-[42px] rounded-t-xl">
            <ActivitySearch events={events} setSearchValue={setSearchValue} onTriggerLive={onTriggerLiveEvents} isLiveOn={isLiveEnabled}/>
        </div>
        <div className="relative bottom-[50px] border border-t-transparent border-gray-100 rounded-b-xl">
            <ActivityList events={events} newData={searchValue === ""? newData : []} />
        </div>
    </div>
}