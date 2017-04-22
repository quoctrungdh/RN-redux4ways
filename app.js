import React from 'react';
import {
  TouchableHighlight, View, Text, StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import { fetchData } from './actions';

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
});

const App = () => {
  const {
    container,
    text,
    button,
    buttonText,
  } = styles;

  return (
    <View style={container}>
      <Text style={text}>Redux4ways example</Text>
      <TouchableHighlight style={button}>
        <Text style={buttonText}>Load data</Text>
      </TouchableHighlight>
    </View>
  );
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

