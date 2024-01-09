import T_input from "./tailwind_input";
var Testpage = () => {
    var x={
        first:'',
        last:'',
        emaiil:'',
    }
    var update=(e,title)=>{

    }
    return (
        <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div class="absolute inset-0  bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div class="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div class="mx-auto max-w-md">
                    <div class="divide-y divide-gray-300/50">

                        <form>
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
                                <T_input title='title' update={update}></T_input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testpage;