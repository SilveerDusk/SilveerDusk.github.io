import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import Project from '@/database/portfolioSchema';

type IParams = {
  params: {
    slug: string
  }
}

export async function GET(req: NextRequest, { params} : IParams) {
  await connectDB(); // function from db.ts before
  const { slug } = params; // another destructure

  try {
    // query for all projects and sort by date
    const project = await Project.findOne({slug}).orFail();
    // send a response as the projects as the message
    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json('Project not found', { status: 404 });
  }
}
