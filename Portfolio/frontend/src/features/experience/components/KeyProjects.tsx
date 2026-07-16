const KeyProjects = () => {
    return (
        <div className="mt-6 space-y-5">

            {/* Project 1 */}

            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-5">

                <h5 className="text-lg font-semibold text-blue-400">
                    CitiSmart
                </h5>

                <p className="mt-2 text-slate-300">
                    Enterprise algorithmic trading platform supporting
                    institutional equities trading.
                </p>

                <p className="mt-2 text-slate-300">
                    Designed automation frameworks, backend validation,
                    API testing and regression automation.
                </p>

                <p className="mt-2 text-slate-300">
                    Containerized execution environment using Docker and OpenShift,
                    reducing regression execution time from 2 weeks to 45 minutes.
                </p>

            </div>

            {/* Project 2 */}

            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-5">

                <h5 className="text-lg font-semibold text-blue-400">
                    XSOR (Smart Order Routing)
                </h5>

                <p className="mt-2 text-slate-300">
                    Automated validation of order routing logic on multiple venues,
                    FIX messaging and execution workflows.
                </p>

                <p className="mt-2 text-slate-300">
                    Developed dummy market data generators to simulate market
                    conditions and validate order routing logic.
                </p>

                <p className="mt-2 text-slate-300">
                    Developed backend automation utilities and integration
                    testing for distributed microservices.
                </p>

            </div>

        </div>
    );
};

export default KeyProjects;