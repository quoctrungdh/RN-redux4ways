import React, { PropTypes } from 'react';
import {
  TouchableHighlight, View, Text, StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import fetchData from './actions';

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  text: {
    textAlign: 'center',
  },
  button: {
    height: 60,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#0b7eff',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
  loadingText: {
    color: 'red',
    textAlign: 'center',
  },
  contentView: {
    marginTop: 15,
    alignItems: 'center',
  },
});

const App = (props) => {
  const {
    container,
    text,
    button,
    buttonText,
    loadingText,
    contentView,
  } = styles;

  const { appData } = props;

  return (
    <View style={container}>
      <Text style={text}>Redux4ways example</Text>
      <TouchableHighlight style={button} onPress={() => props.fetchData()}>
        <Text style={buttonText}>Load data</Text>
      </TouchableHighlight>
      <View>
        {
          appData.isFetching && <Text style={loadingText}>LOADING...</Text>
        }
        {
          appData.data &&
          appData.data.map((item, index) => (
            <View key={item.name} style={contentView}>
              <Text>Name: {item.name}</Text>
              <Text>Age: {item.age}</Text>
              {
                index !== appData.data.length - 1 &&
                <Text>- - - - - - - -</Text>
              }
            </View>
          ))
        }
      </View>
    </View>
  );
};

App.propTypes = {
  appData: PropTypes.shape({
    isFetching: PropTypes.bool,
    data: PropTypes.array,
  }).isRequired,
  fetchData: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    appData: state.appData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
