import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonPage } from "@ionic/react";
import ProfileHeader from "../components/ProfileHeader";


const Posts: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <ProfileHeader />
                <h4> <strong> My Posts </strong> </h4>

                <IonCard>
                <IonCardHeader>
                    <IonCardTitle>First Day at Doggie Day Care!</IonCardTitle>
                    <IonCardSubtitle>August 14 2023</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>First day full of gitters, ticks, and fleas! Wish me luck.</IonCardContent>
                </IonCard>

                <IonCard>
                <IonCardHeader>
                    <IonCardTitle>New year, new belly scratches!</IonCardTitle>
                    <IonCardSubtitle>January 1 2024</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>Help! All of the fireworks are so scary and LOUD!</IonCardContent>
                </IonCard>

                <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Did you see that solar eclipse??</IonCardTitle>
                    <IonCardSubtitle>April 8 2024</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>Today was weird. I was happy for the extra walks and time outsid.. but why is everyone looking up today?</IonCardContent>
                </IonCard>

                
            </IonContent>
        </IonPage>
    )
    
};

export default Posts;