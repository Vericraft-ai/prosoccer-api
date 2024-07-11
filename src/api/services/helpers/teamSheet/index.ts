import { PlayerPosition } from '@api/interfaces/player';
import { ITeamSheet } from '@api/interfaces/teamSheet';

type PlayerPositioning = {
  assignedPosition: PlayerPosition;
  preferredPosition: PlayerPosition;
};
type PositionFitFactors = {
  [key in PlayerPosition]: { [key in PlayerPosition]: number };
};

const positionFitMatrix: PositionFitFactors = {
  GK: {
    GK: 1.0,
    CB: 0.5,
    LB: 0.4,
    RB: 0.3,
    CDM: 0.2,
    CM: 0.1,
    LM: 0.1,
    RM: 0.1,
    CAM: 0.1,
    LWF: 0.1,
    RWF: 0.1,
    ST: 0.1,
  },
  CB: {
    GK: 0.4,
    CB: 1,
    LB: 0.6,
    RB: 0.6,
    CDM: 0.4,
    CM: 0.4,
    LM: 0.3,
    RM: 0.3,
    CAM: 0.2,
    LWF: 0.1,
    RWF: 0.1,
    ST: 0.1,
  },
  LB: {
    GK: 0.3,
    CB: 0.7,
    LB: 1,
    RB: 0.5,
    CDM: 0.5,
    CM: 0.4,
    CAM: 0.3,
    LM: 0.5,
    RM: 0.3,
    LWF: 0.4,
    RWF: 0.3,
    ST: 0.2,
  },
  RB: {
    GK: 0.3,
    CB: 0.5,
    LB: 0.4,
    RB: 1,
    CDM: 0.5,
    CM: 0.4,
    CAM: 0.3,
    LM: 0.3,
    RM: 0.5,
    LWF: 0.2,
    RWF: 0.4,
    ST: 0.1,
  },
  CDM: {
    GK: 0.1,
    CB: 0.5,
    LB: 0.4,
    RB: 0.4,
    CDM: 1,
    CM: 0.6,
    CAM: 0.5,
    LM: 0.4,
    RM: 0.4,
    LWF: 0.4,
    RWF: 0.4,
    ST: 0.3,
  },
  CM: {
    GK: 0.1,
    CB: 0.2,
    LB: 0.2,
    RB: 0.2,
    CDM: 0.6,
    LM: 0.8,
    RM: 0.8,
    CM: 1,
    CAM: 0.7,
    LWF: 0.6,
    RWF: 0.6,
    ST: 0.4,
  },
  CAM: {
    GK: 0.1,
    CB: 0.2,
    LB: 0.2,
    RB: 0.2,
    CDM: 0.4,
    CM: 0.6,
    LM: 0.8,
    RM: 0.8,
    CAM: 1,
    LWF: 0.6,
    RWF: 0.6,
    ST: 0.7,
  },
  LM: {
    GK: 0.1,
    CB: 0.2,
    LB: 0.3,
    RB: 0.3,
    CDM: 0.4,
    CM: 0.8,
    CAM: 0.8,
    LM: 1,
    RM: 0.8,
    LWF: 0.9,
    RWF: 0.6,
    ST: 0.7,
  },
  RM: {
    GK: 0.1,
    CB: 0.2,
    LB: 0.3,
    RB: 0.3,
    CDM: 0.4,
    CM: 0.8,
    CAM: 0.8,
    LM: 0.8,
    RM: 1,
    LWF: 0.6,
    RWF: 0.9,
    ST: 0.7,
  },
  LWF: {
    GK: 0.1,
    CB: 0.1,
    LB: 0.4,
    RB: 0.1,
    CDM: 0.4,
    CM: 0.6,
    CAM: 0.6,
    LM: 0.9,
    RM: 0.6,
    LWF: 1,
    RWF: 0.8,
    ST: 0.9,
  },
  RWF: {
    GK: 0.1,
    CB: 0.1,
    LB: 0.1,
    RB: 0.4,
    CDM: 0.4,
    CM: 0.6,
    CAM: 0.6,
    LM: 0.6,
    RM: 0.9,
    LWF: 0.8,
    RWF: 1,
    ST: 0.9,
  },
  ST: {
    GK: 0.1,
    CB: 0.1,
    LB: 0.2,
    RB: 0.1,
    CDM: 0.3,
    CM: 0.4,
    CAM: 0.7,
    LM: 0.7,
    RM: 0.7,
    LWF: 0.9,
    RWF: 0.9,
    ST: 1,
  },
};

export const handlePlayerPositioning = ({
  assignedPosition,
  preferredPosition,
}: PlayerPositioning) => {
  return positionFitMatrix[preferredPosition][assignedPosition] || 0;
};

export const calculateTeamPerformance = (
  teamSheet: ITeamSheet['playerPositions']
): { overall: number; playerPerformance: number } => {
  let totalPerformance = 0;
  let playerCount = 0;
  let playerPerformance = 0;

  teamSheet?.forEach((player) => {
    const basePerformance = player.potential;
    const fitFactor = handlePlayerPositioning({
      assignedPosition: player.playerPositioning.assignedPosition,
      preferredPosition: player.playerPositioning.preferredPosition,
    });
    playerPerformance = basePerformance * fitFactor;
    totalPerformance += playerPerformance;
    playerCount++;
  });

  const overall = playerCount > 0 ? totalPerformance / playerCount : 0;
  return {
    overall,
    playerPerformance,
  };
};
