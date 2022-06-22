import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Content from './components/Content';

export default function App() {

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar style={styles.statbar} barStyle='dark-content'/>
        <Navbar />
        <Content />
        <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app:{
    backgroundColor: 'grey',
    marginTop: 20,
  },
});
