import Image from "next/image";
import { NewsletterForm } from "./newsletter-form";

// Only links with an on-page target are anchors; the rest stay plain text
// until those pages exist.
type FooterLink = { label: string; href?: string };

const linkColumns: FooterLink[][] = [
  [
    { label: "Featured Courses", href: "#courses" },
    { label: "Featured Categories", href: "#courses" },
    { label: "Business" },
    { label: "IT" },
    { label: "Design" },
  ],
  [
    { label: "Development" },
    { label: "Marketing" },
    { label: "Photography" },
    { label: "Finance" },
    { label: "Sport" },
  ],
  [
    { label: "Become a Creator", href: "#creators" },
    { label: "Affiliate Program" },
    { label: "Contact" },
    { label: "Help" },
    { label: "About" },
  ],
];

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export function Footer() {
  return (
    <footer className="border-t border-border px-5 pt-[70px] pb-12 md:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-12 lg:min-h-[365px] lg:flex-row lg:justify-between lg:gap-0">
          <div className="max-w-[504px]">
            <Image
              src="/assets/bytespace-wordmark-dark.svg"
              alt="ByteSpace"
              width={171}
              height={34}
            />
            <p className="mt-[18px] text-sm leading-6 text-ink">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <div className="mt-[44px]">
              <NewsletterForm />
            </div>
            <p className="mt-[23px] max-w-[480px] text-xs leading-[22px] text-ink">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:mt-[47px] lg:w-[580px] lg:grid-cols-[207px_207px_1fr] lg:self-start"
          >
            {linkColumns.map((column) => (
              <ul key={column[0].label} className="flex flex-col gap-3.5">
                {column.map(({ label, href }) => (
                  <li key={label} className="text-sm leading-6 text-body">
                    {href ? (
                      <a className="hover:text-brand-blue" href={href}>
                        {label}
                      </a>
                    ) : (
                      label
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-[21px] text-xs leading-[1.6] text-ink sm:flex-row sm:justify-between lg:mt-0">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
