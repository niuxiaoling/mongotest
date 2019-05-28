var db = connect('log')

var webwork2 = {
  name: 'chenming',
  age: 18,
  sex: 0,
  skill: {
    skillOne: 'html',
    skillTwo: 'javascript',
    skillThree: 'node'
  }
}

db.workspace.update({
  name: 'xiaoling'
}, webwork2)

print('[update] the data was updated successfully')