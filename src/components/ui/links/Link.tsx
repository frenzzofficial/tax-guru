import NavLink from "next/link";

interface LinkProps {
  href: string;
  label?: string;
  className?: string;
  children?: React.ReactNode;
}

const Link = ({ href, label, className, children }: LinkProps) => {
  return (
    <NavLink href={href} className={`link ${className ?? ""}`}>
      {label ?? children}
    </NavLink>
  );
};

export default Link;
