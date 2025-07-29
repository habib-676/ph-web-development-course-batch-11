import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const dummyData = {
    role: "admin",
    email: "test@admin.com",
  };
  
  let isService = request.nextUrl.pathName.startsWith("/services");
  let isAdmin = dummyData?.role === "admin";


  if (isService && !isAdmin)
    return NextResponse.redirect(new URL("/login", request.url));
  return NextResponse.next();
}
