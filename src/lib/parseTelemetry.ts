export function parseTelemetry(buffer: ArrayBuffer) {
  const view = new DataView(buffer);
  let offset = 0;

  const telemetryData = {
    isRaceOn: view.getInt32(offset, true),

    timeStampMS: view.getUint32(offset += 4, true),
    engineMaxRpm: view.getFloat32(offset += 4, true),
    engineIdleRpm: view.getFloat32(offset += 4, true),
    engineCurrentRpm: view.getFloat32(offset += 4, true),

    accelerationX: view.getFloat32(offset += 4, true),
    accelerationY: view.getFloat32(offset += 4, true),
    accelerationZ: view.getFloat32(offset += 4, true),

    velocityX: view.getFloat32(offset += 4, true),
    velocityY: view.getFloat32(offset += 4, true),
    velocityZ: view.getFloat32(offset += 4, true),

    angularVelocityX: view.getFloat32(offset += 4, true),
    angularVelocityY: view.getFloat32(offset += 4, true),
    angularVelocityZ: view.getFloat32(offset += 4, true),

    yaw: view.getFloat32(offset += 4, true),
    pitch: view.getFloat32(offset += 4, true),
    roll: view.getFloat32(offset += 4, true),

    normalizedSuspensionTravelFrontLeft: view.getFloat32(offset += 4, true),
    normalizedSuspensionTravelFrontRight: view.getFloat32(offset += 4, true),
    normalizedSuspensionTravelRearLeft: view.getFloat32(offset += 4, true),
    normalizedSuspensionTravelRearRight: view.getFloat32(offset += 4, true),

    tireSlipRatioFrontLeft: view.getFloat32(offset +=4, true),
    tireSlipRatioFrontRight: view.getFloat32(offset +=4, true),
    tireSlipRatioRearLeft: view.getFloat32(offset +=4, true),
    tireSlipRatioRearRight: view.getFloat32(offset +=4, true),

    wheelRotationSpeedFrontLeft: view.getFloat32(offset +=4, true),
    wheelRotationSpeedFrontRight: view.getFloat32(offset +=4, true),
    wheelRotationSpeedRearLeft: view.getFloat32(offset +=4, true),
    wheelRotationSpeedRearRight: view.getFloat32(offset +=4, true),

    wheelOnRumbleStripFrontLeft: view.getInt32(offset += 4, true),
    wheelOnRumbleStripFrontRight: view.getInt32(offset += 4, true),
    wheelOnRumbleStripRearLeft: view.getInt32(offset += 4, true),
    wheelOnRumbleStripRearRight: view.getInt32(offset += 4, true),

    wheelInPuddleDepthFrontLeft: view.getFloat32(offset += 4, true),
    wheelInPuddleDepthFrontRight: view.getFloat32(offset += 4, true),
    wheelInPuddleDepthRearLeft: view.getFloat32(offset += 4, true),
    wheelInPuddleDepthRearRight: view.getFloat32(offset += 4, true),

    surfaceRumbleFrontLeft: view.getFloat32(offset += 4, true),
    surfaceRumbleFrontRight: view.getFloat32(offset += 4, true),
    surfaceRumbleRearLeft: view.getFloat32(offset += 4, true),
    surfaceRumbleRearRight: view.getFloat32(offset += 4, true),

    tireSlipAngleFrontLeft: view.getFloat32(offset += 4, true),
    tireSlipAngleFrontRight: view.getFloat32(offset += 4, true),
    tireSlipAngleRearLeft: view.getFloat32(offset += 4, true),
    tireSlipAngleRearRight: view.getFloat32(offset += 4, true),

    tireCombinedSlipFrontLeft: view.getFloat32(offset += 4, true),
    tireCombinedSlipFrontRight: view.getFloat32(offset += 4, true),
    tireCombinedSlipRearLeft: view.getFloat32(offset += 4, true),
    tireCombinedSlipRearRight: view.getFloat32(offset += 4, true),

    suspensionTravelMetersFrontLeft: view.getFloat32(offset += 4, true),
    suspensionTravelMetersFrontRight: view.getFloat32(offset += 4, true),
    suspensionTravelMetersRearLeft: view.getFloat32(offset += 4, true),
    suspensionTravelMetersRearRight: view.getFloat32(offset += 4, true),

    carOrdinal: view.getInt32(offset += 4, true),

    carClass: view.getInt32(offset += 4, true),

    carPerformanceIndex: view.getInt32(offset += 4, true),

    drivetrainType: view.getInt32(offset += 4, true),

    numCylinders: view.getInt32(offset += 4, true),
    carCategory: view.getInt32(offset += 4, true),
    unknown1:view.getInt32(offset += 4, true),
    unknown2: view.getInt32(offset += 4, true),
    positionX: view.getFloat32(offset += 4, true),
    positionY: view.getFloat32(offset += 4, true),
    positionZ: view.getFloat32(offset += 4, true),
    speed: view.getFloat32(offset += 4, true),
    power: view.getFloat32(offset += 4, true),
    torque: view.getFloat32(offset += 4, true),
    tireTempFrontLeft: view.getFloat32(offset += 4, true),
    tireTempFrontRight: view.getFloat32(offset += 4, true),
    tireTempRearLeft: view.getFloat32(offset += 4, true),
    tireTempRearRight: view.getFloat32(offset += 4, true),
    boost: view.getFloat32(offset += 4, true),
    fuel: view.getFloat32(offset += 4, true),
    distanceTraveled: view.getFloat32(offset += 4, true),
    bestLap: view.getFloat32(offset += 4, true),
    lastLap: view.getFloat32(offset += 4, true),
    currentLap: view.getFloat32(offset += 4, true),
    currentRaceTime: view.getFloat32(offset += 4, true),
    lapNumber: view.getUint16(offset += 4, true),
    racePosition: view.getUint8(offset += 2),
    accel: view.getUint8(offset += 1),
    brake: view.getUint8(offset += 1),
    clutch: view.getUint8(offset += 1),
    handBrake: view.getUint8(offset += 1),
    gear: view.getUint8(offset += 1),
    steer: view.getInt8(offset += 1),
    normalizedDrivingLine: view.getInt8(offset += 1),
    normalizedAIBrakeDifference: view.getInt8(offset += 1),
  };

  return telemetryData;
}
