import profile from "../../assets/images/profile.jpg";

const Hero = () => {
    return (
        <section className="flex min-h-[calc(100vh-80px)] items-center">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8">

                {/* Left Side */}
                <div className="max-w-2xl">

                    <p className="mb-3 text-lg text-blue-400">
                        Hello, I'm
                    </p>

                    <h1 className="text-7xl font-extrabold leading-tight text-white">
                        Moshin
                        <br />
                        Kondkari
                    </h1>

                    <h2 className="mt-6 text-3xl font-semibold text-slate-300">
                        Senior Automation Engineer
                    </h2>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                        Building scalable automation solutions for mission-critical
                        Capital Market and Trading platforms using Java,
                        Microservices and Cloud technologies.
                    </p>

                    <div className="mt-10 flex gap-5">

                        <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-500">
                            Download Resume
                        </button>

                        <button className="rounded-lg border border-slate-600 px-8 py-3 font-semibold hover:border-blue-500 hover:text-blue-400">
                            Contact Me
                        </button>

                    </div>

                </div>

                {/* Right Side */}

                <div className="flex justify-center">

                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20"></div>

                        <img
                            src={profile}
                            alt="Moshin Kondkari"
                            className="relative h-96 w-96 rounded-full border-4 border-blue-500 object-cover shadow-2xl"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;