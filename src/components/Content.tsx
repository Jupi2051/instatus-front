import { Outlet } from "@tanstack/react-router";

export default function Content()
{
    return <div>
        <div className="relative flex flex-col w-full px-4 mx-auto -mt-px bg-white shadow rounded-b-xl lg:mb-24 max-w-dashboard lg:border-t-0 lg:px-12 layout-content lg:min-h-[535px] dark:bg-gray-980 dark:border dark:antialiased">
            <Outlet />
        </div>
    </div>
}