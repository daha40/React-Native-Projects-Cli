/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import Snackbar from 'react-native-snackbar';
import Icons from './components/Icons';

type SquareValue = 'empty' | 'cross' | 'circle';


function App(): JSX.Element {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<string>('');
  const [gameState, setGameState] = useState<SquareValue[]>(new Array(9).fill('empty', 0, 9));
  

  const GameReload = () => {
    setIsCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty', 0, 9));
  }

  const checkIsWinner = () => {
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the game! 🎉`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game! 🎉`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game! 🎉`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🎉`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game! 🎉`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🎉`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🎉`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🎉`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw game... ⌛️');
    }
  }


  const onGangeItem = (itemNumber: number) => {
    if (gameWinner) {
      return Snackbar.show({
        text: gameWinner,
        backgroundColor: '#343434',
        textColor: '#fff',
      });
    }
    if (gameState[itemNumber] === 'empty') {
      gameState[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'The Position Is Already Filled',
        backgroundColor: '#343434',
        textColor: '#fff',
      });
    }

    checkIsWinner();
  };

  return (
    <SafeAreaView>
      <StatusBar />
      {gameWinner ? (
        <View style={[styles.playerInfo, styles.winnerInfo]}>
          <Text style={styles.winnerTxt}>{gameWinner}</Text>
        </View>
      ) : (
        <View style={[styles.playerInfo, isCross ? styles.playerX : styles.playerO]}>
          <Text style={styles.gameTurnTxt}>
            Player {isCross ? 'X' : 'O'}'s Turn
          </Text>
        </View>
      )}
      {/*Game Grid*/}
      <FlatList
        numColumns={3}
        data={gameState}
        style={styles.grid}
        renderItem={({ item, index }) => (
          <Pressable
            key={index}
            style={styles.card}
            onPress={() => onGangeItem(index)}
          >
            <Icons name={item} />
          </Pressable>
        )}
      />
      {/* Game Action*/}
      <Pressable onPress={GameReload} style={styles.gameBtn}>
        <Text style={styles.gameBtnText}>
          {gameWinner ? 'Start A New Game' : 'Reload The Game'}
        </Text>
      </Pressable>
      <View>
        <Text style={styles.ByNameTxt}>By Abderahmane Kateb</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  playerInfo: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  playerX: {
    backgroundColor: '#0067FF',
  },
  playerO: {
    backgroundColor: '#FF7210',
  },
  grid: {
    margin: 12,
    borderRadius:12,
    borderWidth:2,
    
  },
  card: {
    height: 100,
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#292929',
    
  },
  winnerInfo:{
    borderRadius: 5,
    backgroundColor: '#38CC77',
    shadowOpacity: 0.1,
    elevation:3,
  },
  winnerTxt: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    marginHorizontal: 36,
    backgroundColor: '#525252',
    marginTop:5,
  },
  gameBtnText: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  ByNameTxt:{
    fontSize:13,
    color:'#000000',
    marginLeft:135,
    marginTop:5,
    fontWeight:'400'
  }
});

export default App;
