import Rx from 'rxjs'
import _ from 'lodash'

export default (store) => {
  let ob = Rx.Observable.interval(1000).timeInterval()

  ob
  .subscribe({
    next: (x)=> {
      store.dispatch({type:'timer',x})
      console.log(x);
    }
  })
}
