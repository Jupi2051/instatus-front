import { useEffect, useState } from "react";
import ActivityList from "../../components/views/activity/ActivityList";
import ActivitySearch from "../../components/views/activity/ActivitySearch";
import { useEvents } from "../../hooks/services/useEvents";
import useLiveEvents from "../../hooks/services/useLiveEvents";
import { API_Event, OBJECT_TYPES } from "../../API/types/events/events";

const freeobjc: API_Event =     {
    "id": "evt_2iVATZ4etCtpaY7rEt7QtjyFocz",
    "object": OBJECT_TYPES.event,
    "actor_id": "user_2iVATU2lVhe32WiithqfqE7NQ4D",
    "group": "Group 2",
    "target_id": "user_2iVATZ95CTBGVj08OzBNdf91Fjf",
    "location": "Location 4",
    "occurred_at": new Date("2024-06-28T09:02:58.184Z"),
    "metadata": null,
    "action_id": "evt_action_2iVATWdc8YkE3V5pqHE2BUkQixt",
    "action": {
        "id": "evt_action_2iVATWdc8YkE3V5pqHE2BUkQixt",
        "object": OBJECT_TYPES.event_action,
        "name": "Action Name 4874"
    },
    "Actor": {
        "id": "user_2iVATU2lVhe32WiithqfqE7NQ4D",
        "name": "name14",
        "email": "email14@gmail.com"
    },
    "target": {
        "id": "user_2iVATZ95CTBGVj08OzBNdf91Fjf",
        "name": "name14",
        "email": "email14@gmail.com"
    }
}

export function ActivityContent()
{
    const [isLiveEnabled, setLiveEnabled] = useState(false);
    const [searchValue, setSearchValue] = useState<string>("");
    const [newData, setNewData] = useState<API_Event[]>([freeobjc]);

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
            console.log("fat error");
            setLiveEnabled(false);
            return () => {}
        }

        setNewData((prev) => [data, ...prev])
        return () => {}
    }, [data, error]);

    return <div>
        <div className="bg-gray-100 p-5 pb-[42px] rounded-t-xl">
            <ActivitySearch events={events} setSearchValue={setSearchValue} onTriggerLive={onTriggerLiveEvents} isLiveOn={isLiveEnabled}/>
        </div>
        <div className="relative bottom-[50px] border border-t-transparent border-gray-100 rounded-b-xl">
            <ActivityList events={events} newData={newData} />
        </div>
    </div>
}