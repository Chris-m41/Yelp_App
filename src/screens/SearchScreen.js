import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native';
import SerachBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsLists from '../components/resultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
   const [searchApi, results,errorMessage] =useResults();

    const filterResultsByPrice = (price) => {
        // price === $ || $ ||$$$
        return results.filter(results => {
            return results.price === price;
        });
    }

    return (
        <>
            <SerachBar 
            term={term} 
            onTermChange={setTerm} 
            onTermSubmit={() =>searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
            <ResultsLists results= {filterResultsByPrice('$')} title="Cost Effective" />
            <ResultsLists results= {filterResultsByPrice('$$')} title="Bit Pricer" />
            <ResultsLists results= {filterResultsByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </>

    );
};

const styles = StyleSheet.create({});

export default SearchScreen;