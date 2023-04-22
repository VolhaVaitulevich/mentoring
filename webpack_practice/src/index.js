import Post from '@models/Post';
import json from './assets/json.json';
import WebpackLogo from './assets/webpack-logo.png';
import xml from './assets/data.xml'
import csv from './assets/data.csv'
import './babel.js';
import './styles/styles.css';
import './styles/test.less';
import './styles/testscss.scss';

const post = new Post ('Webpack Post title', WebpackLogo);

console.log(post.toString());

console.log('JSON:',json);

console.log('XML:', xml);

console.log('CSV', csv);