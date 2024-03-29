export default function T_input(props) {
    return (
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
                <label htmlFor={props.title} className="block text-sm font-medium leading-6 text-gray-900">
                    {props.title}
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name={props.title}
                        id={props.title}
                        autoComplete={props.title}
                        onChange={(e)=>props.update(e,props.title)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
        </div>
    )
}