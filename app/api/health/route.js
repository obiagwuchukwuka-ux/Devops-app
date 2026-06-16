export async function GET() {
  return Response.json({
    status: 'ok',
    service: 'devops-next-starter',
    timestamp: new Date().toISOString()
  });
}
