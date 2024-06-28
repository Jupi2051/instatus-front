import { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export default function Skeleton(props: HTMLAttributes<HTMLDivElement>) {
    return <div {...props} className={cn(props.className, "animate-pulse bg-[#F8F8F8]")}></div>
}