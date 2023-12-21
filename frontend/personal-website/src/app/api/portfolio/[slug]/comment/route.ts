
import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import Project, { IComment } from "@/database/portfolioSchema"

type IParams = {
		params: {
			slug: string
		}
}

export async function POST(req: NextRequest, { params }: IParams) {
	await connectDB()
	const { slug } = params

	try {
		//get project with specified id
		const project = await Project.findOne({ slug }).orFail();

		//parse request body into new comment
		const { user, comment, time }: IComment = await req.json();
    
		//add new comment to project
		try {
			await Project.updateOne(
        { slug },
        { $push: {comments: { user, comment, time }}});
		} catch (err) {
			console.log(err);
      return NextResponse.json("Could not push newComment", { status: 400 });
		}
		
		await project.save();

		return NextResponse.json("Comment added successfully", { status: 200 });
} catch (err) {
	return NextResponse.json("Comment not added.", { status: 400 });
}
}
