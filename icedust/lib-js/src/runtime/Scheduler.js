var runtime = require('./runtime');


class AbstractScheduler {
  schedule(dirtySubscriber){}
  flush(){}
}

class EagerScheduler extends AbstractScheduler {
  schedule(dirtySubscriber){
    dirtySubscriber();
  }
  flush(){}
}

class FlushingScheduler extends AbstractScheduler{
  constructor(){
    super();
    this.scheduledUpdates = new Set();
  }

  schedule(dirtySubscriber){
    this.scheduledUpdates.add(dirtySubscriber);
  }

  flush(){
    this.scheduledUpdates.forEach(runtime.callDirtySubscriber);
    this.scheduledUpdates.clear();
  }
}

class TimedScheduler extends AbstractScheduler {
  constructor(interval){
    super();
    this.interval = interval;
    this.subscription = null;
    this.scheduledUpdates = new Set();
    this.flush = this.flush.bind(this);
  }

  schedule(dirtySubscriber) {
    this.scheduledUpdates.add(dirtySubscriber);
    if(this.subscription === null){
      this.subscription = window.setTimeout(this.flush, this.interval);
    }
  }

  flush(){
    if(this.subscription !== null){
      window.clearInterval(this.subscription);
      this.subscription = null;
    }
    this.scheduledUpdates.forEach(runtime.callDirtySubscriber);
    this.scheduledUpdates.clear();
  }
}

class AnimationFrameScheduler extends AbstractScheduler{
  constructor(){
    super();
    this.scheduledUpdates = new Set();
    this.subscription = null;
    this.flush = this.flush.bind(this);
  }

  schedule(dirtySubscriber) {
    console.log('scheduled')
    this.scheduledUpdates.add(dirtySubscriber);
    if(this.subscription === null){
      this.subscription = requestAnimationFrame(this.flush);
    }
  }

  flush() {
    console.log('flushed')
    this.scheduledUpdates.forEach(runtime.callDirtySubscriber);
    this.scheduledUpdates.clear();
    if(this.subscription !== null){
      cancelAnimationFrame(this.subscription);
      this.subscription = null;
    }
  }
}

module.exports = {
  AbstractScheduler: AbstractScheduler,
  EagerScheduler: EagerScheduler,
  TimedScheduler: TimedScheduler,
  AnimationFrameScheduler: AnimationFrameScheduler
};