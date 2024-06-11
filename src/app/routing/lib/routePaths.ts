/* eslint-disable no-unused-vars */

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '/*',
  [AppRoutes.MAIN]: '/',
};
