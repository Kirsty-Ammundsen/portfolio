import { JSX } from "preact";

interface Props {
  children: string;
}

export default function Tech(props: Props) {
const {children} = props

  return (
    <div className="px-2 py-1 border-gray-500 border-2 rounded-full bg-[#b9bab9] text-center text-black font-bold text-base">
      {children}
    </div>
  );
}
