import useSWRInfinite from "swr/infinite";
import { API_Event } from "../../API/types/events/events";
import { fetcher } from "../../API/client";

type useEventsProps = {
    limit: number;
    searchValue: string
}

export function useEvents(props: useEventsProps)
{
    const getKey = (_: any, previousPage: API_Event[] | null) => {
        if (previousPage !== null)
            if (previousPage.length === 0) return null;

        let URL = `/events?limit=${props.limit}` + (props.searchValue !== ""? `&search=${props.searchValue}`: "");

        URL = `${URL}${previousPage !== null? `&cursor=${previousPage[previousPage.length - 1].id}` : ""}`;

        return URL;
    };

    return useSWRInfinite<API_Event[]>(getKey, fetcher);
}