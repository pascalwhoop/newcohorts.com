import { Navbar01, NewCohortsLogo } from "@/components/ui/shadcn-io/navbar-01";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

export function AboutNavigation() {
  const rightActions = (
    <Button
      variant="outline"
      size="sm"
      className="bg-white/20 border-white/40 text-white hover:bg-white/30 hover:border-white/60"
      asChild
    >
      <Link
        href={SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="w-4 h-4 mr-2" />
        Instagram
      </Link>
    </Button>
  );

  return (
    <Navbar01
      logo={<NewCohortsLogo />}
      logoHref="/"
      rightActions={rightActions}
      variant="transparent"
      className="absolute top-0 left-0 right-0 z-20"
    />
  );
}
