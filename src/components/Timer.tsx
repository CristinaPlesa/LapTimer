import { useEffect, useCallback, useMemo, useState } from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonLabel, IonList } from '@ionic/react';
import {  msToClockString } from '../utilities/printTime'
// import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

// think of ? as "if true, then this"
const Timer: React.FC = () => {
  const [ms, setMs] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [lapTimes, setLapTimes] = useState([0])

  const tick = useCallback(() => {
    setMs(ms + 10)
    console.log(msToClockString(ms))
  }, [ms])

  useEffect(() => {
    const timerId = isRunning ? setInterval(tick, 10) : undefined
    return () => timerId ? clearInterval(timerId) : undefined
  }, [isRunning, tick])

  // reduce() syntax from MDN example: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  const lapRecord = () => (
    isRunning
    ? (
      lapTimes.push(ms - lapTimes.reduce((accumulator, currentValue) => accumulator + currentValue, 0)),
      setLapTimes(lapTimes), console.log(lapTimes)
    )
    : (
      setMs(0),
      setLapTimes([0])
    )
  )

  return (
    <div>
      <IonCard>
        <h1>{msToClockString(ms)}</h1>
        <IonButton onClick={() => setIsRunning(true)}>Start</IonButton>
        <IonButton onClick={() => setIsRunning(false)}>Pause</IonButton>
        <IonButton onClick={() => setMs(0)}>Reset</IonButton>
        <IonButton onClick={() => lapRecord()}>Lap</IonButton>
        <IonList>
          {lapTimes.map((lapTime, index) => {
            return (index !== 0) ? <IonItem key={index}><IonLabel>{lapTime}</IonLabel></IonItem> : undefined
          })}
        </IonList>
      </IonCard>
    </div>
  )
}

export default Timer