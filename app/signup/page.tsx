import type { Metadata } from "next";
import Link from "next/link";
import AuthField from "@/components/AuthField";
import AuthLayout from "@/components/AuthLayout";

export const metadata: Metadata = {
  title: "Create an Account | ByteSpace",
};

export default function SignupPage() {
  return (
    <AuthLayout
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <div className="flex flex-col items-center gap-16 lg:gap-[122px]">
        <form className="flex w-full flex-col gap-10" action="#">
          <div>
            <p className="text-lg leading-[1.6] text-brand">Create an Account</p>
            <h2 className="font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-950 sm:text-[44px]">
              Welcome to ByteSpace
            </h2>
          </div>

          <div className="flex flex-col items-end gap-6">
            <AuthField label="Full Name" name="name" autoComplete="name" placeholder="Jamie Davis" required />
            <AuthField label="Email" name="email" type="email" autoComplete="email" placeholder="designer@example.com" required />
            <AuthField
              label="Password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="********"
              minLength={8}
              required
            />
            <button
              type="submit"
              className="rounded-3xl bg-lime px-6 py-3 text-lg leading-[1.2] font-medium text-shuttle-950 transition hover:brightness-95 active:scale-[0.98]"
            >
              Continue
            </button>
          </div>
        </form>

        <p className="text-base leading-[1.6] text-shuttle-700">
          Already have an account?{" "}
          <Link href="/login" className="text-brand hover:underline">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
