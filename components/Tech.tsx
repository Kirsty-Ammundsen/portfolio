import { JSX } from "preact";

interface Props {
  tech: string;
}

export default function Tech(props: Props) {
  const { tech } = props;

  return (
    <div className="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors">
      {tech}
    </div>
  );
}
