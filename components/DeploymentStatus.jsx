export default function DeploymentStatus() {
  const deployment = {
    version: '1.0.0',
    region: process.env.NEXT_PUBLIC_REGION || 'local-machine',
    health: 'healthy',
    uptimeTarget: '99.9%'
  };

  return (
    <aside className="card">
      <h2>Deployment Status</h2>
      <div className="status-row"><span>Version</span><strong>{deployment.version}</strong></div>
      <div className="status-row"><span>Region</span><strong>{deployment.region}</strong></div>
      <div className="status-row"><span>Health</span><strong>{deployment.health}</strong></div>
      <div className="status-row"><span>Target</span><strong>{deployment.uptimeTarget}</strong></div>
    </aside>
  );
}
