import React from 'react';

class CoursesForm extends React.Component {
    constructor() {
        super();

        this.state = {
            searchQuery: ''
        };
    }

    handleOnChange = (event) => {
        this.setState({
            searchQuery: event.target.value
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        // Call function props.onSubmit with the search input value
        this.props.onSubmit(this.state.searchQuery);

        // Reset state.searchQuery to ''
        this.setState({
            searchQuery: ''
        });
    }

    render() {

        return (
            <form onSubmit={this.handleOnSubmit}>
                <div>
                    <input
                        type="search"
                        placeholder="Search courses and providers..."
                        value={this.state.searchQuery}
                        onChange={this.handleOnChange}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                    >
                        +
                    </button>
                </div>
            </form>
        )
    }
}

CoursesForm.defaulProps = {
    loading: false
};

export default CoursesForm;