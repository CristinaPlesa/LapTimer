import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton } from '@ionic/react';
import './Home.css';
import Timer from '../components/Timer'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lap Timer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Timer/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
