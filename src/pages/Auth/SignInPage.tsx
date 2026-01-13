import { PageMeta } from "@/components/common";
import { AuthLayout } from "./AuthPageLayout";
import { SignInForm } from "./components";

export const SignInPage = () => {
  return (
    <>
      <PageMeta
        title="Inicio de Sesión - Restaurant Admin"
        description="Inicia sesión en tu cuenta de Restaurant Admin para gestionar tu restaurante de manera eficiente."
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
};
