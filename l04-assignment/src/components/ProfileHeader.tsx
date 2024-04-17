import { IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonLabel, IonRow, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react";
import './ProfileHeader.css';

interface ContainerProps { }

const ProfileHeader: React.FC<ContainerProps> = () => {
  return (
    <IonHeader>
        <IonToolbar color="secondary">
           <IonTitle>User Profile</IonTitle>
        </IonToolbar>

        <IonGrid>
            <IonRow>
                <IonCol size="5">
                    <IonImg alt="" src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></IonImg>
                </IonCol>
                <IonCol size="7">
                    <h1> <strong> Janie Doe </strong> </h1>
                    <h4>Heart stealer</h4> 
                </IonCol>
            </IonRow>
        </IonGrid>

        <IonTabBar>
            <IonTabButton tab="bio" href="/profile/bio">
                <IonLabel>Bio</IonLabel>    
            </IonTabButton>
            <IonTabButton tab="posts" href="/profile/posts">
                <IonLabel>Posts</IonLabel>    
            </IonTabButton>
            <IonTabButton tab="friends" href="/profile/friends">
                <IonLabel>Friends</IonLabel>    
            </IonTabButton>
            <IonTabButton tab="photos" href="/profile/photos">
                <IonLabel>Photos</IonLabel>    
            </IonTabButton>
        </IonTabBar>
        
    </IonHeader> 
     
   
  );
};

export default ProfileHeader;