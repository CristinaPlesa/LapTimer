import { useEffect, useCallback, useMemo, useState } from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton } from '@ionic/react';
// import { msToClockUnits, msToClockString } from '../util/printTime'

// Cristina
const Timer: React.FC = () => {
  const [ms, setMs] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const tick = useCallback(async () => setMs(ms+1), [ms])

  // isRunning &&
  useEffect(() => {
    const timerId = setInterval(
      isRunning
        ? tick
        : () => undefined,
      10
    )
    return () => clearInterval(timerId)
  }, [isRunning, tick])

  return (
    <div>
      <h1>00:00:00</h1>
      <IonButton>Start</IonButton>
      <IonButton>Pause</IonButton>
      <IonButton>Reset</IonButton>
      <IonButton>Lap</IonButton>
    </div>
  )
}

export default Timer