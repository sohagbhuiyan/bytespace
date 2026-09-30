type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

export default function AuthField({ label, name, ...input }: Props) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={name} className="text-sm leading-[1.2] font-medium text-shuttle-950">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="h-[52px] w-full rounded-xl border border-shuttle-100 bg-white px-6 py-3 text-lg leading-[1.6] text-shuttle-950 outline-none transition placeholder:text-shuttle-400 focus:border-brand focus:ring-2 focus:ring-brand/20"
        {...input}
      />
    </div>
  );
}
