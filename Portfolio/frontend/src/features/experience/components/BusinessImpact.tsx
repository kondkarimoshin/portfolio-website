const BusinessImpact = () => {
    return (
        <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-5">

                <h5 className="font-semibold text-white">
                    Regression Optimization
                </h5>

                <p className="mt-2 text-slate-400">
                    Reduced regression execution time from nearly
                    <span className="font-semibold text-blue-400">
                        {" "}2 weeks to just 45 minutes{" "}
                    </span>
                    by containerizing the execution environment using Docker and
                    OpenShift.
                </p>

            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-5">

                <h5 className="font-semibold text-white">
                    Enterprise Framework
                </h5>

                <p className="mt-2 text-slate-400">
                    Designed reusable automation frameworks for backend,
                    UI and integration testing across multiple applications.
                </p>

            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-5">

                <h5 className="font-semibold text-white">
                    FIX Automation
                </h5>

                <p className="mt-2 text-slate-400">
                    Built automation utilities for FIX Protocol,
                    Smart Order Routing and Order Management workflows.
                </p>

            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-5">

                <h5 className="font-semibold text-white">
                    Leadership
                </h5>

                <p className="mt-2 text-slate-400">
                    Led automation initiatives, mentored engineers,
                    reviewed code and collaborated with global teams across
                    APAC and EMEA.
                </p>

            </div>

        </div>
    );
};

export default BusinessImpact;