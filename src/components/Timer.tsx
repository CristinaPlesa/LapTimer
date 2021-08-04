import { useEffect, useCallback, useMemo, useState } from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton } from '@ionic/react';
// import { msToClockUnits, msToClockString } from '../util/printTime'

// Cristina
const Timer: React.FC = () => {
  const [ms, setMs] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const tick = useCallback(async () => {
    setMs(ms + 10)
    console.log(ms)
  }, [ms])

  useEffect(() => {
    const timerId = isRunning ? setInterval(tick, 10) : undefined
    return () => timerId ? clearInterval(timerId) : undefined
  }, [isRunning, tick])

  return (
    <div>
      <h1>{ms}</h1>
      <IonButton onClick={() => setIsRunning(true)}>Start</IonButton>
      <IonButton onClick={() => setIsRunning(false)}>Pause</IonButton>
      <IonButton>Reset</IonButton>
      <IonButton>Lap</IonButton>
    </div>
  )
}

export default Timer