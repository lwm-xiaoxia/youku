import DramaSeries from './dramaSeries';
import Film from './film';
import Hot from './hot';
import Choice from './choice';
import Entertainment from './entertainment';
import Funny from './funny';
import Game from './game';
import LiveBroadcast from './liveBroadcast';
import Music from './music';
import PPFootball from './PPFootball';
import Comic from './comic';

const homeLists = [
    {id: 0, path: `/home/choice`, title: '精选', component: Choice},
    {id: 10, path: `/home/game`, title: '游戏', component: Game},
    {id: 8, path: `/home/music`, title: '音乐', component: Music},
    {id: 3, path: `/home/hot`, title: '热点', component: Hot},
    {id: 4, path: `/home/dramaSeries`, title: '剧集', component: DramaSeries},
    {id: 5, path: `/home/film`, title: '电影', component: Film},
    {id: 6, path: `/home/liveBroadcast`, title: '直播', component: LiveBroadcast},
    {id: 7, path: `/home/entertainment`, title: '娱乐', component: Entertainment},
    {id: 9, path: `/home/funny`, title: '搞笑', component: Funny},
    {id: 2, path: `/home/comic`, title: '动漫', component: Comic},
    {id: 1, path: `/home/PPFootball`, title: 'PP足球', component: PPFootball}, 
];

export default homeLists;