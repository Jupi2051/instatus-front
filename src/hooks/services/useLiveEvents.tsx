import useSWRSubscription from "swr/subscription";

type liveEventsProps = {
    enabled: boolean,
    onConnectionClose: () => void
}

const websocketURL = import.meta.env.VITE_WS_URL;

export default function useLiveEvents(props: liveEventsProps)
{
    return useSWRSubscription<string>(props.enabled? websocketURL : undefined, (key: string | undefined, {next}: {next: (error: any, data?: any) => any}) => {
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
    }, {
        
    });
}