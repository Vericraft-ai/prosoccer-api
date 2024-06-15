import * as matchEngine from 'footballsimulationengine';
import fs from 'fs';
import * as team1 from './data/team1.json';
import * as team2 from './data/team2.json';
import * as pitch from './data/pitch.json';

async function initGame(t1: any, t2: any, p: any) {
  try {
    let matchSetup = matchEngine.initiateGame(t1, t2, p);
    return matchSetup;
  } catch (error: any) {
    throw new Error(error);
  }
}

async function playIteration(inputIteration: any) {
  try {
    let outputIteration = await matchEngine.playIteration(inputIteration);
    return outputIteration;
  } catch (error: any) {
    throw new Error(error);
  }
}

let nextIteration;
async function gameOfTenIterations() {
  try {
    let t1location = team1;
    let t2location = team2;
    let plocation = pitch;
    let initJSON = await initGame(t1location, t2location, plocation);
    nextIteration = await playIteration(initJSON);
    nextIteration = await playIteration(nextIteration);
    console.log(nextIteration);
    nextIteration = await playIteration(nextIteration);
    nextIteration = await playIteration(nextIteration);
    nextIteration = await playIteration(nextIteration);
    nextIteration = await playIteration(nextIteration);
    console.log(nextIteration);
    nextIteration = await playIteration(nextIteration);
    nextIteration = await playIteration(nextIteration);
    nextIteration = await playIteration(nextIteration);
    nextIteration = await playIteration(nextIteration);

    return nextIteration;
  } catch (error: any) {
    throw new Error(error);
  }
}

gameOfTenIterations()
  .then(function (res) {
    console.log('Game Over', res);
  })
  .catch(function (error) {
    throw new Error(error);
  });
