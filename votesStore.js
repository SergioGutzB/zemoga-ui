import { action, observable } from 'mobx'

let store = null

class Store {
  @observable votes = [];

  constructor (isServer, votes) {
    this.votes = votes;
  }

  @action update = (votes) => {
    this.votes = votes;
  }

  @action like = (index, likes) => {
    this.votes[index]['likes'] =  likes;
    localStorage.setItem('votes', JSON.stringify(this.votes));
  }

  @action noLike = (index, noLikes) => {
    this.votes[index]['no_likes'] =  noLikes;
    localStorage.setItem('votes', JSON.stringify(this.votes));
  }


}

export function initializeStore (isServer, votes = []) {
  if (isServer) {
    return new Store(isServer, votes)
  } else {
    if (store === null) {
      store = new Store(isServer, votes)
    }
    return store
  }
}
