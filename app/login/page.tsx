import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/auth/auth-form";
import { AuthField, AuthShell } from "@/components/auth/auth-shell";

export const metadata: Metadata = {
  title: "Sign In — ByteSpace",
};

export default function LoginPage() {
  return (
    <AuthShell
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <p className="text-lg text-brand-blue">Sign In</p>
      <h1 className="font-heading text-[34px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[44px]">
        Welcome Back
      </h1>

      <AuthForm className="mt-[36px] flex flex-col gap-5">
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
          autoComplete="current-password"
          placeholder="********"
        />
        <button
          type="submit"
          className="mt-1 h-[46px] self-end rounded-full bg-brand-lime px-[25px] text-lg transition-transform hover:scale-105"
        >
          Sign In
        </button>
      </AuthForm>

      <div className="mt-[73px] flex items-center gap-3 text-lg lg:pr-[13px] text-muted">
        <span className="h-px flex-1 bg-[#d1d1d1]" />
        or
        <span className="h-px flex-1 bg-[#d1d1d1]" />
      </div>

      <div className="mt-[41px] flex justify-center gap-4">
        <button
          type="button"
          aria-label="Continue with Facebook"
          className="grid size-[72px] place-items-center rounded-[24px] border border-[#d1d1d1]"
        >
          <svg viewBox="969.833 712.333 33.334 33.334" className="size-[33px]">
            <title>Facebook</title>
            <path d="M1003.17 729C1003.17 719.795 995.705 712.333 986.5 712.333C977.295 712.333 969.833 719.795 969.833 729C969.833 737.319 975.928 744.214 983.896 745.464V733.818H979.664V729H983.896V725.328C983.896 721.151 986.384 718.844 990.191 718.844C992.015 718.844 993.922 719.169 993.922 719.169V723.271H991.82C989.75 723.271 989.104 724.555 989.104 725.874V729H993.727L992.988 733.818H989.104V745.464C997.072 744.214 1003.17 737.319 1003.17 729Z" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Continue with Google"
          className="grid size-[72px] place-items-center rounded-[24px] border border-[#d1d1d1]"
        >
          <svg
            viewBox="1057.83 712.333 32.63 33.334"
            className="h-[33px] w-[32px]"
          >
            <title>Google</title>
            <path d="M1090.46 729.375C1090.46 728.278 1090.36 727.236 1090.19 726.222H1074.5V732.486H1083.49C1083.08 734.542 1081.9 736.278 1080.15 737.458V741.625H1085.51C1088.65 738.722 1090.46 734.444 1090.46 729.375Z" />
            <path d="M1074.5 718.93C1076.96 718.93 1079.15 719.778 1080.89 721.43L1085.64 716.68C1082.76 713.986 1079 712.333 1074.5 712.333C1067.99 712.333 1062.36 716.083 1059.63 721.528L1065.15 725.819C1066.47 721.861 1070.15 718.93 1074.5 718.93Z" />
            <path
              fillRule="evenodd"
              d="M1074.5 745.667C1067.99 745.667 1062.36 741.917 1059.63 736.472L1065.15 732.18C1066.47 736.139 1070.15 739.069 1074.5 739.069C1076.75 739.069 1078.65 738.458 1080.15 737.458L1085.51 741.625C1082.76 744.167 1079 745.667 1074.5 745.667ZM1065.15 725.819V721.528H1059.63L1065.15 725.819Z"
            />
            <path d="M1059.63 732.18H1065.15C1064.81 731.18 1064.63 730.111 1064.63 729C1064.63 727.889 1064.82 726.819 1065.15 725.819L1059.63 721.528C1058.49 723.778 1057.83 726.305 1057.83 729C1057.83 731.694 1058.49 734.222 1059.63 736.472V732.18Z" />
            <path d="M1065.15 732.18H1059.63V736.472L1065.15 732.18Z" />
          </svg>
        </button>
      </div>

      <p className="mt-auto pt-10 text-center text-base text-muted">
        New user?{" "}
        <Link href="/signup" className="text-brand-blue hover:underline">
          Create an account
        </Link>
      </p>
    </AuthShell>
  );
}
