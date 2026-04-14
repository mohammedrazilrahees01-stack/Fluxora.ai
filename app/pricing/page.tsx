export default function PricingPage() {
    const plans = [
        {
            name: 'Starter',
            price: '$0',
            desc: 'For trying Fluxora',
            features: ['Limited chats', 'Basic projects', 'Community support'],
        },
        {
            name: 'Pro',
            price: '$19',
            desc: 'For creators and developers',
            features: ['Unlimited chats', 'Advanced AI', 'Priority speed', 'More storage'],
            featured: true,
        },
        {
            name: 'Team',
            price: '$49',
            desc: 'For growing businesses',
            features: ['Team seats', 'Shared workspaces', 'Analytics', 'Priority support'],
        },
    ];

    return (
        <main className="min-h-screen p-6 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="glass rounded-3xl p-6 text-center">
                    <h1 className="text-4xl font-bold">Simple Pricing</h1>
                    <p className="mt-2 text-zinc-400">
                        Choose the plan that fits your workflow.
                    </p>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`rounded-3xl p-6 ${plan.featured
                                    ? 'glass border border-blue-400/40 shadow-2xl'
                                    : 'glass'
                                }`}
                        >
                            <h2 className="text-2xl font-bold">{plan.name}</h2>
                            <p className="mt-2 text-zinc-400">{plan.desc}</p>

                            <div className="mt-6 text-5xl font-bold">{plan.price}</div>
                            <p className="text-sm text-zinc-500">/month</p>

                            <ul className="mt-6 space-y-3 text-zinc-300">
                                {plan.features.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>

                            <button className="mt-8 w-full rounded-2xl bg-blue-500 px-5 py-3 font-semibold transition hover:scale-105">
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}