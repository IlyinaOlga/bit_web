import type { FC } from "react";
import { Routes, Route } from "react-router";
import { AboutPage, ArticlePage, ConferencePage, HomePage } from "../../pages";

export const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/conference/:id" element={<ConferencePage />} />
      {/* <Route
        path={`${APP_ROUTES.DASHBOASD}`}
        element={
          <FullLayout>
            <Dashboard />
          </FullLayout>
        }
      />
      <Route
        path={`${APP_ROUTES.DOCUMENTATION}`}
        element={
          <FullLayout>
            <ServicePage />
          </FullLayout>
        }
      />
      <Route
        path={`${APP_ROUTES.LOGIN}`}
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path={`${APP_ROUTES.REGISTRATION}`}
        element={
          <Layout>
            <Registration />
          </Layout>
        }
      />
      <Route
        path={`${APP_ROUTES.SETTINGS}`}
        element={
          <Layout>
            <SettingsComponent />{' '}
          </Layout>
        }
      />
      <Route
        path={`${APP_ROUTES.RECOVERY_PASSWORD}`}
        element={
          <Layout>
            <RecoveryPassword />
          </Layout>
        }
      />
      <Route
        path={`${APP_ROUTES.WORKSPACE}`}
        element={
          <Layout>
            <RouteManagementPage />
          </Layout>
        }
      />
      <Route
        path={`${APP_ROUTES.WORKSPACE}/create`}
        element={
          <Layout>
            <RouteManagementPage />
          </Layout>
        }
      />
      <Route
        path={`${APP_ROUTES.WORKSPACE}/update/:workspaceId`}
        element={
          <Layout>
            <RouteManagementPage />
          </Layout>
        }
      />
      <Route
        path={`${APP_ROUTES.WORKSPACE}/:workspaceId${APP_ROUTES.ROUTES}/create`}
        element={
          <Layout>
            <RouteManagementPage />
          </Layout>
        }
      />
      <Route
        path={`${APP_ROUTES.WORKSPACE}/:workspaceId`}
        element={
          <Layout>
            <RouteManagementPage />
          </Layout>
        }
      />
      <Route
        path={`${APP_ROUTES.WORKSPACE}/:workspaceId${APP_ROUTES.ROUTES}/update/:routeId`}
        element={
          <Layout>
            <RouteManagementPage />
          </Layout>
        }
      />
      <Route
        path={`${APP_ROUTES.WORKSPACE}/:workspaceId${APP_ROUTES.ROUTES}`}
        element={
          <Layout>
            <RouteManagementPage />
          </Layout>
        }
      />
      <Route
        path={`${APP_ROUTES.LOG}/:logId`}
        element={
          <Layout>
            <LogPage />
          </Layout>
        }
      />
      <Route
        path={APP_ROUTES.OFFER}
        element={
          <FullLayout>
            <OffersForm />
          </FullLayout>
        }
      />
      <Route
        path={APP_ROUTES.HELP}
        element={
          <FullLayout>
            <HelpForm />
          </FullLayout>
        }
      />
      <Route
        path="*"
        element={
          <ErrorLayout>
            <PageNotFound />
          </ErrorLayout>
        }
      /> */}
    </Routes>
  );
};
