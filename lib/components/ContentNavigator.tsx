import Link from "next/link";

const highlight = (currentPage, href: string) =>
  currentPage == href ? "bg-blue-500 text-white rounded" : "";

export const ContentNavigator = ({ currentPage, className = "", entries }) => {
  const { undefined: noSection, ...others } = entries;
  return (
    <nav className={"flex flex-col p-5 w-3/12 " + className}>
      <h5
        className={
          "uppercase py-1 pl-2 mb-4 " +
          highlight(currentPage, noSection[0].href)
        }
      >
        <Link href={noSection[0].href}>
          <a>Home</a>
        </Link>
      </h5>
      {Object.entries(others).map(([section, pages]) => (
        <>
          <h5 className="uppercase py-1 pl-2 mb-0">
            <Link href={pages[0].href}>
              <a>{section}</a>
            </Link>
          </h5>
          <ul className="ml-0">
            {(pages as any).map(({ title, href }) => (
              <li
                className={"pl-2 py-1 mb-2 " + highlight(currentPage, href)}
                key={title}
              >
                <Link href={href}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ))}
    </nav>
  );
};
