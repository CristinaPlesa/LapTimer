import { useEffect, useCallback, useMemo, useState } from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonLabel } from '@ionic/react';
import {  msToClockString } from '../utilities/printTime'
// import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

// Cristina
// think of ? as "if true, then this"
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

  // const lapRecord = (click: number) => {
  //   // work in progress
  // }

  return (
    <div>
      <h1>{msToClockString(ms)}</h1>
      <IonButton onClick={() => setIsRunning(true)}>Start</IonButton>
      <IonButton onClick={() => setIsRunning(false)}>Pause</IonButton>
      <IonButton onClick={() => setMs(0)}>Reset</IonButton>
      <IonButton>Lap</IonButton>
      <h1 className="lap"></h1>
    </div>
  )
}

export default Timer