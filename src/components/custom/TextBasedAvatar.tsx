export function TextBasedAvatar(props: {text: string})
{

    if (props.text === "") {
        return <img className="w-6 h-6" src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg" />
    }

    return <div>
        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-green-400 flex items-center justify-center rounded-full select-none">
            <h1 className="text-xs font-bold uppercase text-white">{props.text.slice(0, 1)}</h1>
        </div>
    </div>
}