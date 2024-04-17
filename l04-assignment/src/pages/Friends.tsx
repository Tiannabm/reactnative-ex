import { IonAvatar, IonContent, IonItem, IonLabel, IonList, IonPage } from "@ionic/react";
import ProfileHeader from "../components/ProfileHeader";


const Friends: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <ProfileHeader />

                <h4> <strong> My Friends </strong> </h4>

                <IonList>
                    <IonItem>
                        <IonAvatar>
                            <img alt="cat in shades" src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                        </IonAvatar>
                        <IonLabel>Meow Gibbons</IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonAvatar>
                            <img alt="Toucan bird" src="https://images.unsplash.com/photo-1551085254-e96b210db58a?q=80&w=2780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                        </IonAvatar>
                        <IonLabel>Toucan Tucker</IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonAvatar>
                            <img alt="bunny/ hare" src="https://plus.unsplash.com/premium_photo-1668606752372-b19e4255be99?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                        </IonAvatar>
                        <IonLabel>Harry Hare</IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonAvatar>
                            <img alt="koi fish" src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=2812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                        </IonAvatar>
                        <IonLabel>Karri Koi</IonLabel>
                    </IonItem>

                    <IonItem>
                        <IonAvatar>
                            <img alt="lizard" src="https://images.unsplash.com/photo-1601062087032-5f07e3304320?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                        </IonAvatar>
                        <IonLabel>Eliza Lizards</IonLabel>
                    </IonItem>
                </IonList>

            </IonContent>
        </IonPage>
    )
};

export default Friends;