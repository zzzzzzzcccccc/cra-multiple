import A from '../views/A'
import B from '../views/B'
import C from '../views/C'
import D from '../views/D'

export default [
  {
    path: '/a',
    component: A,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right'
    }
  },
  {
    path: '/b',
    component: B,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right'
    }
  },
  {
    path: '/c',
    component: C,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right'
    }
  },
  {
    path: '/d',
    component: D,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right'
    }
  }
]
