import useSWRSubscription from "swr/subscription";
import { API_Event } from "../../API/types/events/events";

type liveEventsProps = {
    enabled: boolean,
    onConnectionClose: () => void
}

export default function useLiveEvents(props: liveEventsProps)
{
    return useSWRSubscription<API_Event>(props.enabled? "ws://localhost:8080/" : undefined, (key: string | undefined, {next}: {next: (error: any, data?: any) => any}) => {
        const socket = new WebSocket(key?? "");
        socket.addEventListener('message', (event) => {
            console.log(event.data);
            next(null, event.data);
        });

        socket.addEventListener("error", () => {
            console.log("errored");
            props.onConnectionClose()
            next("error")
        });

        socket.addEventListener("open", () => {
            console.log("opened connection");
        })

        return () => socket.close();
    });
}