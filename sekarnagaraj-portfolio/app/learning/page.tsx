const items=['Agentic AI','Microsoft Fabric','AI Testing','Azure Observability','LLM Evaluation','Data Quality Engineering']
export default function Learning(){return <main className="mx-auto max-w-4xl px-5 py-16"><h1 className="text-4xl font-bold">Currently Learning</h1><ul className="mt-8 grid md:grid-cols-2 gap-4">{items.map(i=><li className="card p-5" key={i}>✓ {i}</li>)}</ul></main>}
