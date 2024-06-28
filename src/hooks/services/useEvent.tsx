import useSWR from "swr";

type useEventsProps = {
    event_id: string;
}

export function useEvent(props: useEventsProps)
{
    return useSWR(`/events/${props.event_id}`);
}