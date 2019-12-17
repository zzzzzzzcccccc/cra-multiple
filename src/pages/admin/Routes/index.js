import React from 'react'
import { Switch, withRouter, Route } from 'react-router-dom'
import routers from "./routers";
import {CSSTransition, TransitionGroup} from "react-transition-group";

let oldLocation = null;
const DEFAULT_SCENE_CONFIG = {
  enter: 'from-right',
  exit: 'to-exit'
};
const getSceneConfig = location => {
  const matchedRoute = routers.find(config => new RegExp(`^${config.path}$`).test(location.pathname));
  return (matchedRoute && matchedRoute.sceneConfig) || DEFAULT_SCENE_CONFIG;
};
const Routes = withRouter(({ location, history }) => {
  // 转场动画应该都是采用当前页面的sceneConfig，所以：
  // push操作时，用新location匹配的路由sceneConfig
  // pop操作时，用旧location匹配的路由sceneConfig
  let classNames = '';
  if(history.action === 'PUSH') {
    classNames = 'forward-' + getSceneConfig(location).enter;
  } else if(history.action === 'POP' && oldLocation) {
    classNames = 'back-' + getSceneConfig(oldLocation).exit;
  }
  // 更新旧location
  oldLocation = location;

  return(
    <TransitionGroup className="router-wrapper"
                     childFactory={child => React.cloneElement(child, { classNames })}>
      <CSSTransition timeout={500}
                     unmountOnExit={true}
                     key={location.pathname}>
        <Switch location={location}>
          {routers.map(item => {
            return <Route { ...item } key={item.path} />
          })}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
});

export default Routes
