import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/auth/auth-form";
import { AuthField, AuthShell, AuthSubmit } from "@/components/auth/auth-shell";

export const metadata: Metadata = {
  title: "Create an Account — ByteSpace",
};

export default function SignupPage() {
  return (
    <AuthShell
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <p className="text-lg text-brand-blue">Create an Account</p>
      <h1 className="font-heading text-[34px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[44px] sm:leading-[1.23]">
        Welcome to <br className="hidden sm:inline" />
        ByteSpace
      </h1>

      <AuthForm className="mt-[34px] flex flex-col gap-5">
        <AuthField
          label="Full Name"
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Jamie Davis"
        />
        <AuthField
          label="Email"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="designer@example.com"
        />
        <AuthField
          label="Password"
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="********"
        />
        <AuthSubmit>Continue</AuthSubmit>
      </AuthForm>

      <p className="mt-auto pt-10 text-center lg:mb-[11px] text-base text-muted">
        Already have an account?{" "}
        <Link href="/login" className="text-brand-blue hover:underline">
          Login
        </Link>
      </p>
    </AuthShell>
  );
}
