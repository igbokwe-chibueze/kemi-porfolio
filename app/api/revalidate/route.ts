import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { secret, slug } = body;

  if (secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    if (!slug) {
      revalidatePath("/");
      revalidatePath("/about");
      revalidatePath("/work");
    } else {
      revalidatePath(`/caseStudy/${slug}`);
    }

    return NextResponse.json({ revalidated: true, now: new Date().toISOString() });
  } catch (err) {
    return NextResponse.json({ message: "Error revalidating", error: err }, { status: 500 });
  }
}
