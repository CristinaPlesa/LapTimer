import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lap Timer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <h1>00:00:00</h1>
        </IonItem>
          <IonButton>Start</IonButton>
          <IonButton>Reset</IonButton>
          <br></br>
          <IonButton>Lap</IonButton>
          <IonButton>Pause</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
