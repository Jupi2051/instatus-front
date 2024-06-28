import { HTMLAttributes, useEffect, useState } from "react";
import { SWRInfiniteResponse } from "swr/infinite";
import { API_Event } from "../../../API/types/events/events";
import { download, generateCsv, mkConfig } from "export-to-csv";

type ActivityListProps = {
    events: SWRInfiniteResponse<API_Event[], any>;
    setSearchValue: (v: string) => void
};

export default function ActivitySearch(props: ActivityListProps)
{
    const [searchInput, setSearchInput] = useState<string>("");

    useEffect(() => {
        const id = setInterval(() => {
            props.setSearchValue(searchInput);
        }, 500);
        return () => clearInterval(id);
    }, [searchInput])

    function onSaveAsCSV()
    {
        if (props.events.data) {
            const data = props.events.data;
            const flattenedData = data.flat(1)?? [];

            const formattedData = flattenedData.map((ev) => {
                return {
                    Actor: ev.Actor.name,
                    Actor_Email: ev.Actor.email,
                    Target: ev.target.name?? "N/A",
                    Target_Email: ev.target.email?? "N/A",
                    Date: ev.occurred_at
                }
            })
            const csv = generateCsv(mkConfig({ useKeysAsHeaders: true, filename: `Events ${new Date().toLocaleString()}` }))(formattedData as any);
            download({ useKeysAsHeaders: true, filename: `Events ${new Date().toLocaleString()}` })(csv);
        }
    }

    return <div>
        <div>
            <div className="flex items-center justify-between bg-transparent border-gray-300 rounded-lg border h-12">
                <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}  className="w-full bg-transparent h-full px-3 pb-1 focus:outline-none placeholder-gray-400 text-gray-700" placeholder="Search name, email or action..."/>
                <div className="uppercase flex gap-3 h-full items-center justify-center">
                    <SearchBarSeparator />
                    <button className="uppercase flex items-center gap-1 text-[#575757] h-full">
                        <FilterIcon className="w-4 h-4"/>
                        Filter
                    </button>
                    <SearchBarSeparator />
                    <button className="uppercase flex items-center gap-1 text-[#575757] h-full" onClick={onSaveAsCSV}>
                        <DownloadIcon className="w-5 h-5 relative bottom-0.5" />
                        Export
                    </button>
                    <SearchBarSeparator />
                    <div>
                        <div className="flex gap-1 items-center text-[#575757]">
                            <span className="w-3.5 h-3.5 rounded-full animate-pulse bg-red-900"></span>
                            Live
                        </div>
                    </div>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
}

function SearchBarSeparator()
{
    return <span className="border-l-2 h-full bg-green-500"/>;
}

function FilterIcon(props: HTMLAttributes<HTMLOrSVGElement>)
{
    return <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M14.25 2.25H0.75C0.551088 2.25 0.360322 2.17098 0.21967 2.03033C0.0790177 1.88968 0 1.69891 0 1.5C0 1.30109 0.0790177 1.11032 0.21967 0.96967C0.360322 0.829018 0.551088 0.75 0.75 0.75H14.25C14.4489 0.75 14.6397 0.829018 14.7803 0.96967C14.921 1.11032 15 1.30109 15 1.5C15 1.69891 14.921 1.88968 14.7803 2.03033C14.6397 2.17098 14.4489 2.25 14.25 2.25ZM11.75 5.75H3.25C3.05109 5.75 2.86032 5.67098 2.71967 5.53033C2.57902 5.38968 2.5 5.19891 2.5 5C2.5 4.80109 2.57902 4.61032 2.71967 4.46967C2.86032 4.32902 3.05109 4.25 3.25 4.25H11.75C11.9489 4.25 12.1397 4.32902 12.2803 4.46967C12.421 4.61032 12.5 4.80109 12.5 5C12.5 5.19891 12.421 5.38968 12.2803 5.53033C12.1397 5.67098 11.9489 5.75 11.75 5.75ZM8.75 9.25H6.25C6.05109 9.25 5.86032 9.17098 5.71967 9.03033C5.57902 8.88968 5.5 8.69891 5.5 8.5C5.5 8.30109 5.57902 8.11032 5.71967 7.96967C5.86032 7.82902 6.05109 7.75 6.25 7.75H8.75C8.94891 7.75 9.13968 7.82902 9.28033 7.96967C9.42098 8.11032 9.5 8.30109 9.5 8.5C9.5 8.69891 9.42098 8.88968 9.28033 9.03033C9.13968 9.17098 8.94891 9.25 8.75 9.25Z" fill="#575757"/>
    </svg>;
}

function DownloadIcon(props: HTMLAttributes<HTMLOrSVGElement>)
{
    return <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M9.01562 4.6875H5.96875V9.18076L7.5124 7.6374C7.60103 7.55321 7.71903 7.50696 7.84127 7.50852C7.9635 7.51009 8.08028 7.55934 8.16672 7.64578C8.25316 7.73222 8.30241 7.849 8.30398 7.97123C8.30554 8.09347 8.25929 8.21147 8.1751 8.3001L5.83135 10.6438C5.74345 10.7317 5.62427 10.781 5.5 10.781C5.37573 10.781 5.25655 10.7317 5.16865 10.6438L2.8249 8.3001C2.74071 8.21147 2.69446 8.09347 2.69602 7.97123C2.69759 7.849 2.74684 7.73222 2.83328 7.64578C2.91972 7.55934 3.0365 7.51009 3.15874 7.50852C3.28097 7.50696 3.39897 7.55321 3.4876 7.6374L5.03125 9.18076V4.6875H1.98438C1.5494 4.68797 1.13237 4.86097 0.824792 5.16854C0.517216 5.47612 0.344215 5.89315 0.34375 6.32812V12.4219C0.344215 12.8569 0.517216 13.2739 0.824792 13.5815C1.13237 13.889 1.5494 14.062 1.98438 14.0625H9.01562C9.4506 14.062 9.86763 13.889 10.1752 13.5815C10.4828 13.2739 10.6558 12.8569 10.6562 12.4219V6.32812C10.6558 5.89315 10.4828 5.47612 10.1752 5.16854C9.86763 4.86097 9.4506 4.68797 9.01562 4.6875ZM5.96875 1.40625C5.96875 1.28193 5.91936 1.1627 5.83146 1.07479C5.74355 0.986886 5.62432 0.9375 5.5 0.9375C5.37568 0.9375 5.25645 0.986886 5.16854 1.07479C5.08064 1.1627 5.03125 1.28193 5.03125 1.40625V4.6875H5.96875V1.40625Z" fill="#575757"/>
    </svg>;

}