Ractive({
  target: '#app',
  template: `
    <header>
      <div>
        <button on-click="@this.set('showNew', true)">New</button>
      </div>

      {{#if showNew}}
        <form class="form-new" on-submit="counterCreate">
          <input name="name" type="text" value="{{nameNew}}" />
          <button type="submit" disabled="{{!nameNewStripped}}">✔</button>
          <button type="button" on-click="@this.set('showNew', false)">✘</button>
        </form>
      {{/if}}
    </header>

    <ul class="counters">
      {{#each counters: i}}
        <li class="counter">
          <div class="counter-body">
            <div class="counter-heading">
              <span class="counter-count">{{count}}</span>
              <span class="counter-name">{{name}}&nbsp;</span>
            </div>
            <div class="counter-meta">
              <span>
                <a
                  class="action-del"
                  title="Delete"
                  on-click="@this.deleteCounter(i)"
                >
                  ✘ Delete
                </a>
              </span>
            </div>
          </div>
          <div class="counter-actions">
            <a class="action-inc" on-click="@this.updateCount(i, 1)">+</a>
            <a class="action-dec" on-click="@this.updateCount(i, -1)">-</a>
          </div>
        </li>
      {{/each}}
    </ul>
  `,
  data: {
    showNew: false,
    nameNew: '',
    counters: []
  },
  computed: {
    nameNewStripped () {
      return this.get('nameNew').replace(/(^\s+|\s+$)/, '')
    }
  },
  updateCount (i, step) {
    const counters = this.get('counters')
    const counter = counters[i]
    counter.count += step
    this.set('counters', counters)
    localStorage[`counter.${counter.id}`] = JSON.stringify(counter)
  },
  deleteCounter (i) {
    const counters = this.get('counters')
    const counter = counters[i]
    localStorage.removeItem(`counter.${counter.id}`)
    this.splice('counters', i)
  },
  on: {
    init () {
      const counters = []
      for (const key in localStorage) {
        if (key.startsWith('counter.')) {
          const counter = JSON.parse(localStorage[key])
          counters.push(counter)
        }
      }
      this.set('counters', counters)
    },
    counterCreate ({ event }) {
      const id = Date.now()
      const counter = { id, name: this.get('nameNew'), count: 0 }
      localStorage[`counter.${id}`] = JSON.stringify(counter)
      counters.push(counter)
      this.set('nameNew', '')
      event.preventDefault()
    }
  }
})
