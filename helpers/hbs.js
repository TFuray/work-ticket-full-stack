const moment = require('moment')

module.exports = {
  formatDate: function (date, format) {
    return moment(date).format(format)
  },

  ifCond: function (v1, operator, v2, options) {
    switch (operator) {
      case '==':
        return v1 == v2 ? options.fn(this) : options.inverse(this)
      case '===':
        return v1 === v2 ? options.fn(this) : options.inverse(this)
      case '!=':
        return v1 != v2 ? options.fn(this) : options.inverse(this)
      case '!==':
        return v1 !== v2 ? options.fn(this) : options.inverse(this)
      case '<':
        return v1 < v2 ? options.fn(this) : options.inverse(this)
      case '<=':
        return v1 <= v2 ? options.fn(this) : options.inverse(this)
      case '>':
        return v1 > v2 ? options.fn(this) : options.inverse(this)
      case '>=':
        return v1 >= v2 ? options.fn(this) : options.inverse(this)
      case '&&':
        return v1 && v2 ? options.fn(this) : options.inverse(this)
      case '||':
        return v1 || v2 ? options.fn(this) : options.inverse(this)
      default:
        return options.inverse(this)
    }
  },
  editIcon: function (storyUser, loggedUser, storyId, floating = true) {
    if (storyUser._id.toString() == loggedUser._id.toString()) {
      if (floating) {
        return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`
      } else {
        return `<a href="/stories/edit/${storyId}"><i class="fas fa-edit"></i></a>`
      }
    } else {
      return ''
    }
  },
  stripTags: function (input) {
    return input.replace(/<(?:.|\n)*?>/gm, '')
  },
  truncate: function (str, len) {
    if (str.length > len && str.length > 0) {
      let new_str = str + ' '
      new_str = str.substr(0, len)
      new_str = str.substr(0, new_str.lastIndexOf(' '))
      new_str = new_str.length > 0 ? new_str : str.substr(0, len)
      return new_str + '...'
    }
    return str
  },
  select: function (selected, options) {
    return options
      .fn(this)
      .replace(
        new RegExp(' value="' + selected + '"'),
        '$& selected="selected"'
      )
      .replace(
        new RegExp('>' + selected + '</option>'),
        ' selected="selected"$&'
      )
  }
}
