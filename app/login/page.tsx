import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AuthField from "@/components/AuthField";
import AuthLayout from "@/components/AuthLayout";

export const metadata: Metadata = {
  title: "Sign In | ByteSpace",
};

const providers = [
  { name: "Facebook", icon: "/icons/facebook.svg" },
  { name: "Google", icon: "/icons/google.svg" },
];

export default function LoginPage() {
  return (
    <AuthLayout
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="flex flex-col items-center gap-12 lg:min-h-[662px] lg:justify-between lg:gap-0">
        <form className="flex w-full flex-col gap-10" action="#">
          <div>
            <p className="text-lg leading-[1.6] text-brand">Sign In</p>
            <h2 className="font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-950 sm:text-[44px]">
              Welcome Back
            </h2>
          </div>

          <div className="flex flex-col items-end gap-6">
            <AuthField label="Email" name="email" type="email" autoComplete="email" placeholder="designer@example.com" required />
            <AuthField
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="********"
              required
            />
            <button
              type="submit"
              className="rounded-3xl bg-lime px-6 py-3 text-lg leading-[1.2] font-medium text-shuttle-950 transition hover:brightness-95 active:scale-[0.98]"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="flex w-full flex-col items-center gap-10">
          <div className="flex w-full items-center gap-[11px]">
            <span className="h-px flex-1 bg-black-200" />
            <span className="text-lg leading-[1.6] text-black-400">or</span>
            <span className="h-px flex-1 bg-black-200" />
          </div>
          <div className="flex gap-4">
            {providers.map((p) => (
              <button
                key={p.name}
                type="button"
                aria-label={`Continue with ${p.name}`}
                className="grid size-[72px] place-items-center rounded-3xl border border-black-200 transition hover:border-brand hover:bg-shuttle-50"
              >
                <Image src={p.icon} alt="" width={40} height={40} />
              </button>
            ))}
          </div>
        </div>

        <p className="text-base leading-[1.6] text-black-400">
          New user?{" "}
          <Link href="/signup" className="text-brand hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
