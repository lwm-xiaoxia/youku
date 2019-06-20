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

const lists = [
    {path: `/home/choice`, title: '精选', component: Choice},
    {path: `/home/game`, title: '游戏', component: Game},
    {path: `/home/music`, title: '音乐', component: Music},
    {path: `/home/hot`, title: '热点', component: Hot},
    {path: `/home/dramaSeries`, title: '剧集', component: DramaSeries},
    {path: `/home/film`, title: '电影', component: Film},
    {path: `/home/liveBroadcast`, title: '直播', component: LiveBroadcast},
    {path: `/home/entertainment`, title: '娱乐', component: Entertainment},
    {path: `/home/funny`, title: '搞笑', component: Funny},
    {path: `/home/comic`, title: '动漫', component: Comic},
    {path: `/home/PPFootball`, title: 'PP足球', component: PPFootball}, 
];

export default lists;