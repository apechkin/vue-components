interface Subject {
  registerObserver(o: Observer)
  removeObserver(o: Observer)
  notifyObserver()
}

interface Observer {
  notify(option: number)
}

class DayWeeks implements Subject {
  private userOption: number
  private observers: Observer[] = []

  setUserOption(option: number) {
    this.userOption = option
  }

  public registerObserver(o: Observer) {
    this.observers.push(o)
  }

  public removeObserver(o: Observer) {
    const index = this.observers.indexOf(o)
    this.observers.splice(index, 1)
  }

  public notifyObserver() {
    for (const observer of this.observers) {
      observer.notify(this.userOption)
    }
  }
}

class DisplayItemValue implements Observer {
  public notify(option: number) {

  }

}
