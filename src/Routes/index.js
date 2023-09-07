import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { Headeronly } from '~/layouts';
import config from '~/config';

const publicRouter = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.search,
        component: Search,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: Headeronly,
    },
];
const privateRouter = [];

export { publicRouter, privateRouter };
