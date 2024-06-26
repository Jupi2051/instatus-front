import ActivityList from "../../components/views/activity/ActivityList";
import ActivitySearch from "../../components/views/activity/ActivitySearch";

export function ActivityContent()
{
    return <div>
        <ActivitySearch />
        <ActivityList />
    </div>
}