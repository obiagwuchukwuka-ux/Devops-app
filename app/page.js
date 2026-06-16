import DeploymentStatus from '../components/DeploymentStatus';

const features = [
  {
    title: 'CI/CD Ready',
    text: 'Use GitHub Actions to install dependencies, run lint checks, build the app, and publish a Docker image.'
  },
  {
    title: 'Container Friendly',
    text: 'The project includes a production Dockerfile, Docker Compose file, and an Nginx reverse proxy with HTTPS practice.'
  },
  {
    title: 'Cloud Deployable',
    text: 'Deploy this app to an EC2 instance, ECS, Kubernetes, or any VPS while practicing real DevOps responsibilities.'
  }
];

export default function Home() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'DevOps LaunchPad';
  const environment = process.env.NEXT_PUBLIC_ENVIRONMENT || 'local';

  return (
    <main>
      <div className="container">
        <nav className="nav">
          <div className="logo">{siteName}</div>
          <span className="badge">Environment: {environment}</span>
        </nav>

        <section className="hero">
          <div>
            <span className="badge">Next.js project for DevOps practice</span>
            <h1>Build, ship, monitor, and improve.</h1>
            <p>
              This is a clean production-style website created so you can focus on the real DevOps work:
              Git, Docker, CI/CD, Nginx, HTTPS, deployment, logs, monitoring, rollback, and cloud hosting.
            </p>
            <div className="actions">
              <a className="button" href="/api/health">Check Health Endpoint</a>
              <a className="button secondary" href="https://nextjs.org/docs" target="_blank">Read Next.js Docs</a>
            </div>
          </div>

          <DeploymentStatus />
        </section>

        <section className="grid">
          {features.map((feature) => (
            <article className="card feature" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </section>
      </div>

      <footer className="footer">
        <div className="container">DevOps LaunchPad, built for hands-on engineering practice.</div>
      </footer>
    </main>
  );
}
