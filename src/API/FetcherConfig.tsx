import { ReactNode } from "@tanstack/react-router";
import { SWRConfig } from "swr";
import { fetcher } from "./client";

export default function FetcherConfig({children} : {children: ReactNode} )
{
    return <SWRConfig value={{fetcher: fetcher}}>{children}</SWRConfig>
}