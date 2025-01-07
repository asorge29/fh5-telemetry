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

    

  };

  return telemetryData;
}
