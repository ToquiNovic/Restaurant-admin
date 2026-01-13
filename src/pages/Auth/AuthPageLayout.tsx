import React from "react";
import { Link } from "react-router-dom";
import { GridShape, ThemeTogglerTwo } from "@/components/common";

export const AuthLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="relative h-screen w-full bg-background">
      <div className="flex h-full w-full flex-col lg:flex-row">
        {/* Left column – Form */}
        <div className="flex w-full items-center justify-center px-6 lg:w-1/2">
          {children}
        </div>

        {/* Right column – Branding (ESTÁTICO) */}
        <div className="relative hidden w-1/2 items-center justify-center bg-brand-950 lg:flex">
          {/* Fondo decorativo */}
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <GridShape />
          </div>

          {/* Contenido */}
          <div className="relative z-10 flex max-w-xs flex-col items-center">
            <Link to="/" className="mb-4 block">
              <img
                width={231}
                height={48}
                src="/images/logo/auth-logo.svg"
                alt="Logo"
              />
            </Link>
          </div>
        </div>

        {/* Theme toggle */}
        <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
          <ThemeTogglerTwo />
        </div>
      </div>
    </div>
  );
};
