import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';


@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./app.component.scss')],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/',
        name: 'Home',
        component: HomeComponent
    },
    {
        path: '/about',
        name: 'About',
        component: AboutComponent
    }
])
export class AppComponent {
}