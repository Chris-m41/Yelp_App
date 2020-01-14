import React, {useState} from 'react';
import {View, Text, StyleSheet } from 'react-native';
import SerachBar from '../components/SearchBar';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    
    return (
        <View>
            <SerachBar term={term} onTermChange={newTerm =>setTerm(newTerm)} 
            onTermSubmit={() => console.log('term was submitted')}
            />
            <Text>Search Screen</Text>
        </View>

    );
};

const styles = StyleSheet.create({});

export default SearchScreen;