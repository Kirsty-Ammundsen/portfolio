import { JSX } from "preact";

export function Tech(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors">
      {props.tech}
    </div>
  );
}
