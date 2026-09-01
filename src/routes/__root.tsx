import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

import { reportError } from "../lib/error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/WhatsAppButton";
import { MobileActionBar } from "@/components/site/MobileActionBar";
import { Button } from "@/components/ui/button";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gradient-warm px-4 py-20">
      <div className="max-w-md text-center">
        <p className="eyebrow">Page not found</p>
        <h1 className="mt-3 text-5xl text-forest">404</h1>
        <p className="mt-3 text-muted-foreground">
          This page isn't part of the NAVVAM catalogue. Our spice powders and masala blends are all
          listed in one place.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/products">Browse all products</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/">Go home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportError(error, { boundary: "root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gradient-warm px-4 py-20">
      <div className="max-w-md text-center">
        <h1 className="text-2xl text-forest">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Button
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </Button>
          <Button asChild variant="outline">
            <a href="/">Go home</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:text-cream"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileActionBar />
    </QueryClientProvider>
  );
}
