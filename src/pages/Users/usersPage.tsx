import {
  BasicTableOne,
  ComponentCard,
  PageBreadcrumb,
  PageMeta,
} from "@/components";

export const UsersPage = () => {
  return (
    <>
      <PageMeta
        title="Usuarios - Restaurant Admin"
        description="Lista de usuarios del sistema de restaurante"
      />
      <PageBreadcrumb pageTitle="Basic Tables" />
      <div className="space-y-6">
        <ComponentCard title="Basic Table 1">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </>
  );
};
