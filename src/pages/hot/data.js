import NBA from './nba';
import Recommend from './recommend';
import SmallVideo from './smallVideo';

const lists = [
    {path: `/hot/recommend`, title: '推荐', component: Recommend},
    {path: `/hot/NBA`, title: 'NBA', component: NBA},
    {path: `/hot/smallVideo`, title: '小视频', component: SmallVideo},
];

export default lists;