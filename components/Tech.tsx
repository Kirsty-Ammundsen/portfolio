import { JSX } from "preact";

interface Props {
  children: string;
}

export default function Tech(props: Props) {
const {children} = props

  return (
    <div className="px-3 py-2 border-gray-500 border-2 rounded-full bg-[#b9bab9] text-center text-black font-bold text-lg">
      {children}
    </div>
  );
}
