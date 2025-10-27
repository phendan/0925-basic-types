const routes = {
    home: '/',
    users: '/users',
    admin: '/admin',
    auth: '/sign-in',
    contact: '/contact'
} as const;

type Routes = typeof routes;
type RouteKey = keyof Routes;
type Route = Routes[RouteKey];

const goToRoute = (route: Route) => {
    //
};

goToRoute('/contact');

// Enums
// enum NotificationLevel {
//     Notice,
//     Warning,
//     Error,
//     Success
// }

const notificationLevels = ['notice', 'warning', 'error', 'success'] as const;
type NotificationLevel = (typeof notificationLevels)[number];

const sendNotification = (message: string, level: NotificationLevel) => {};

sendNotification('You have been signed in!', 'success');
