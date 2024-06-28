export type API_Event = {
    id: string,
    object: OBJECT_TYPES,
    actor_id: string,
    group: string,
    target_id: string | null,
    location: string,
    occurred_at: Date,
    metadata: null,
    action_id: string,
    action: {
        id: string,
        object: OBJECT_TYPES,
        name: string
    },
    Actor: {
        id: string,
        name: string,
        email: string
    },
    target: {
        id: string,
        name: string,
        email: string
    } | null
}

export interface API_EventResponse {
    data: API_Event[];
    cursor: string | null
}

export enum OBJECT_TYPES {
    event = "event",
    event_action = "event_action"
}