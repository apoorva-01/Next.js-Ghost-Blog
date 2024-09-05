import { useRouter } from "next/router";
import siteConfig from "@/data/siteConfig";
import Link from "next/link";
import { cx } from "@/lib/utils";

export const Header: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <header className="py-8 flex justify-between items-center">
      <Link href="/" className="font-bold">
        {siteConfig.avatar ? (
          <span className="flex">
            <video src="/logo.mp4" autoPlay muted loop className="rounded-md" width={80} height={80}></video>
          </span>
        ) : (
          siteConfig.siteName
        )}
      </Link>

      <nav>
        <ul className="flex space-x-8">
          {siteConfig.nav.map((item, index) => {
            const isActive = item.href === pathname;
            return (
              <li key={index}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cx(
                    "text-gray-500 hover:text-gray-900",
                    "dark:text-gray-400 dark:hover:text-gray-300"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
