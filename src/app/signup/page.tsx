"use client";
import { Background } from "../../styles/pages/Login";
import { SignUp } from "@clerk/nextjs";

export default function Login() {
  return (
    <Background bg="/login-bg.png">
      <SignUp
        appearance={{
          elements: {
            headerTitle: "text-3xl font-bold text-blue-600 text-center",
            formButtonPrimary:
              "bg-gradient-to-r from-fuchsia-500 via-purple-600 to-purple-800 text-white rounded hover:opacity-90 transition",
          },
          variables: {
            colorPrimary: "#9e00ba",
          },
        }}
        signInUrl="/login"
        forceRedirectUrl="/signup/onboarding"
      />
    </Background>
  );
}
