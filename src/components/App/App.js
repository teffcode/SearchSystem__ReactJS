import React, { Component } from 'react';
import axios from 'axios';

import CoursesCard from '../CoursesCards/CoursesCards';
import SearchForm from '../CoursesForm/CoursesForm';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      query: '',
      courses: [],
      loading: false,
      error: ''
    };
  }

  getCoursesDataFromAPI = () => {
    axios.get(`https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27&courseName=${this.state.query}`)
      .then(result => {
        this.setState({
          courses: result.data.items,
          loading: false,
          error: ''
        });
      })
      .catch(err => {
        this.setState({
          courses: [],
          loading: false,
          error: err.message
        });
      });
  }

  handleSearchFormSubmit = (searchFormValue) => {
      this.setState({
          query: searchFormValue,
          loading: true,
          courses: [],
          error: ''
      }, this.getCoursesDataFromAPI);
  }

  renderCourses() {
      console.log(this.state.courses.items)
      return this.state.courses.map((serie) => {

          return (
              <div>
                  <CoursesCard
                      title={serie.course.name}
                      provider={serie.course.provider.name}
                      description={serie.course.deliveryMethod.description}
                  />
              </div>
          );
      });
  }

    render() {
      return (
        <div className="section">
          <div className="column is-6">              
            <SearchForm
                onSubmit={this.handleSearchFormSubmit}
                loading={this.state.loading}
            />
            {
                !!this.state.query &&
                <div>
                    You searched for: {this.state.query}
                </div>
            }
          </div>
          <div className="container">
            <div className="columns is-multiline">
                {this.renderCourses()}
            </div>
          </div>
        </div>
    );
  }
}

export default App;
