const { connectDB } = require('../../../backend/db');
const { Project } = require('../../../backend/models/project');
const { NextResponse } = require('next/server');


export async function GET() {
  await connectDB();
  const projects = await Project.find();
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();
  const project = await Project.create(data);
  return NextResponse.json(project);
}
