import React, { Component } from 'react'

import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import data from '../data/data'

const event = typeof window !== 'undefined' && window

export default class LaunchChecklist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checklist: data,
    }
  }

  componentDidMount() {
    if (localStorage.getItem('checklist')) {
      this.setState({
        checklist: JSON.parse(localStorage.getItem('checklist')),
      })
    }
  }

  componentDidUpdate(nextProps, nextState) {
    localStorage.setItem('checklist', JSON.stringify(this.state.checklist))
  }

  handleChange = id => event => {
    this.setState(prevState => ({
      content: prevState.checklist.map(obj =>
        obj.content.map(
          content =>
            content.id === id
              ? Object.assign(content, { checked: !content.checked })
              : content
        )
      ),
    }))
  }

  renderList() {
    return (
      <div className="checklist">
        {this.state.checklist.map(checklist => (
          <div className="container" key={checklist.id}>
            <div className="banner">
              <i className={checklist.icon} />
              <h2 className="title">{checklist.category}</h2>
            </div>
            <FormControl component="fieldset">
              <FormGroup>
                {checklist.content.map(content => {
                  return (
                    <FormControlLabel
                      key={content.label}
                      control={
                        <Checkbox
                          checked={content.checked}
                          onChange={this.handleChange(content.id, event)}
                          check={content.label}
                        />
                      }
                      label={content.label}
                    />
                  )
                })}
              </FormGroup>
            </FormControl>
          </div>
        ))}
      </div>
    )
  }

  render() {
    console.log(this.state.checklist)
    return <div>{this.renderList()}</div>
  }
}
