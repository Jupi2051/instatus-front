import { useState } from "react";
import ActivityList from "../../components/views/activity/ActivityList";
import ActivitySearch from "../../components/views/activity/ActivitySearch";
import { useEvents } from "../../hooks/services/useEvents";

export function ActivityContent()
{
    const [searchValue, setSearchValue] = useState<string>("");
    const events = useEvents({limit: 10, searchValue: searchValue});

    return <div>
        <div className="bg-gray-100 p-5 pb-[42px] rounded-t-xl">
            <ActivitySearch events={events} setSearchValue={setSearchValue}/>
        </div>
        <div className="relative bottom-[50px] border border-t-transparent border-gray-100 rounded-b-xl">
            <ActivityList events={events} />
        </div>
    </div>
}