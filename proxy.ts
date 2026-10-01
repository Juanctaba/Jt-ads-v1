import { NextResponse, type NextRequest } from "next/server";

// Posts legados de /blog/recursos?post=<slug> (WordPress anterior). Solo se
// redirigen los que tienen un equivalente real ya publicado (doc 04 de SEO,
// acciones 9 y 13). Los demas siguen respondiendo 200 con canonical a
// /blog/recursos: no se mandan en bloque a una pagina generica.
// Se hace aqui y no en next.config porque alli Next arrastra ?post= al destino
// y emite 308; aqui el destino queda limpio y el codigo es 301.
const LEGACY_POSTS: Record<string, string> = {
  "cuanto-invertir-en-paid-media-b2b": "/blog/cuanto-cobra-agencia-google-ads-latam",
  "como-integrar-crm-con-anuncios": "/sistema",
};

export function proxy(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("post");
  const destination = slug ? LEGACY_POSTS[slug] : undefined;
  if (!destination) return NextResponse.next();
  return NextResponse.redirect(new URL(destination, "https://jtads.com"), 301);
}

export const config = {
  matcher: ["/blog/recursos"],
};
