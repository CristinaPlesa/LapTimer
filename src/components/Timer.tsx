import { useEffect, useCallback, useMemo, useState } from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonLabel } from '@ionic/react';
import {  msToClockString } from '../utilities/printTime'
// import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

// Cristina
const Timer: React.FC = () => {
  const [ms, setMs] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const tick = useCallback(async () => {
    setMs(ms + 10)
    console.log(msToClockString(ms))
  }, [ms])

  useEffect(() => {
    const timerId = isRunning ? setInterval(tick, 10) : undefined
    return () => timerId ? clearInterval(timerId) : undefined
  }, [isRunning, tick])

  return (
    <div>
      <h1>{msToClockString(ms)}</h1>
      <IonButton onClick={() => setIsRunning(true)}>Start</IonButton>
      <IonButton onClick={() => setIsRunning(false)}>Pause</IonButton>
      <IonButton>Reset</IonButton>
      <IonButton>Lap</IonButton>
    </div>
  )
}

export default Timer