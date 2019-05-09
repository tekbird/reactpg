import React from 'react';
import styles from './index.css';
import spinner from './loader.svg';

class loader extends React.Component {
    render() {
        return <div style={styles.loading}>
            <img src={spinner} alt="Loading..."></img>
        </div>
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                setTimeout(() => this.props.history.push('/home'), 2000);
            });
    }
}

export default loader;