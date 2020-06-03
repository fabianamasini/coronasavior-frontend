import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { styles } from '../utils/style.js';
import { getRanking } from '../services/ranking.js';

const Ranking = () => {

    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        const readRanking = async() => {
            const rankingJson = await getRanking();
            setRanking(rankingJson.data.results);
        }
        readRanking();
        
    }, [])

    return(
        <View>
            <FlatList
                data = {ranking}
                keyExtractor = {(item) => item.user}
                renderItem={({item}) => {
                    return(
                        <View style={styles.rankingDataContainer}>
                            <View style={styles.rankingContainer}>
                                <Text style={styles.rankingLabel}>Username: </Text>
                                <Text style={styles.rankingData}>{item.user}</Text>
                            </View>
                            <View style={styles.rankingContainer}>
                                <Text style={styles.rankingLabel}>Points: </Text>
                                <Text style={styles.rankingData}>{item.points}</Text>
                            </View>
                        </View>
                      )
                } 
            }
            />
        </View>
    )
}

export default Ranking;