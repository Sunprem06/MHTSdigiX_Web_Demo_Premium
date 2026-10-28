import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-content flex-col items-center justify-center px-6 text-center">
      <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-mint-600">404</p>
      <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">We couldn't find that page.</h1>
      <p className="mt-4 max-w-md text-ink-soft">
        The page you're looking for doesn't exist on this concept demo. Try one of the links below.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Back to Home</Button>
        <Button href="/contact" variant="secondary">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
