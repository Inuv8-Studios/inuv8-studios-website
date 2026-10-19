import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/doc", "/doc/:path*"],
};

function secureResponse(response: NextResponse): NextResponse {
  response.headers.set("Cache-Control", "private, no-store, max-age=0");
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  response.headers.set("Vary", "Authorization");
  return response;
}

function constantTimeEqual(a: string, b: string): boolean {
  const maxLength = Math.max(a.length, b.length);
  let mismatch = a.length ^ b.length;
  for (let i = 0; i < maxLength; i++) {
    mismatch |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  }
  return mismatch === 0;
}

export function middleware(request: NextRequest) {
  const username = process.env.DOCS_USER;
  const password = process.env.DOCS_PASSWORD;

  if (!username || !password) {
    return secureResponse(new NextResponse("Internal documentation is not configured.", { status: 503 }));
  }

  const authorization = request.headers.get("authorization") || "";
  let suppliedUsername = "";
  let suppliedPassword = "";

  if (authorization.startsWith("Basic ")) {
    try {
      const decoded = atob(authorization.slice(6).trim());
      const colon = decoded.indexOf(":");
      if (colon > 0) {
        suppliedUsername = decoded.slice(0, colon);
        suppliedPassword = decoded.slice(colon + 1);
      }
    } catch {
      // Malformed Authorization values are treated as unauthenticated.
    }
  }

  const usernameMatches = constantTimeEqual(suppliedUsername, username);
  const passwordMatches = constantTimeEqual(suppliedPassword, password);
  if (!usernameMatches || !passwordMatches) {
    const response = new NextResponse("Team access required.", { status: 401 });
    response.headers.set("WWW-Authenticate", 'Basic realm="Inuv8 Team Documentation", charset="UTF-8"');
    return secureResponse(response);
  }

  return secureResponse(NextResponse.next());
}
